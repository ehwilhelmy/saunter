'use client';

import { useState } from 'react';
import { ChefHat, Users, ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type UserType = 'chef' | 'client' | null;

interface WaitlistModalProps {
  children: React.ReactNode;
}

export default function WaitlistModal({ children }: WaitlistModalProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<'select' | 'form'>('select');
  const [userType, setUserType] = useState<UserType>(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    // Chef-specific
    experience: '',
    specialty: '',
    location: '',
    // Client-specific
    frequency: '',
    occasion: '',
    dietaryNeeds: '',
  });

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send to your backend/email service
    console.log('Waitlist submission:', { userType, ...formData });

    // Reset and close
    setFormData({
      email: '',
      name: '',
      experience: '',
      specialty: '',
      location: '',
      frequency: '',
      occasion: '',
      dietaryNeeds: '',
    });
    setStep('select');
    setUserType(null);
    setOpen(false);

    alert(`Thanks for joining! We'll be in touch soon.`);
  };

  const handleBack = () => {
    setStep('select');
    setUserType(null);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // Reset state when closing
      setStep('select');
      setUserType(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {step === 'select' ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">Join the Saunter Waitlist</DialogTitle>
              <DialogDescription>
                Are you a chef looking to connect with clients, or a client seeking a private chef?
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {/* Chef Card */}
              <button
                onClick={() => handleUserTypeSelect('chef')}
                className="border-2 border-border hover:border-accent transition-all rounded-lg p-6 text-left group hover:bg-accent/5"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <ChefHat className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">
                      I'm a Chef
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Share your culinary expertise and connect with clients seeking exceptional private dining experiences
                    </p>
                  </div>
                </div>
              </button>

              {/* Client Card */}
              <button
                onClick={() => handleUserTypeSelect('client')}
                className="border-2 border-border hover:border-accent transition-all rounded-lg p-6 text-left group hover:bg-accent/5"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent rounded-lg p-3 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">
                      I'm a Client
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Discover talented chefs and bring restaurant-quality dining into your home
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">
                {userType === 'chef' ? 'Chef Waitlist' : 'Client Waitlist'}
              </DialogTitle>
              <DialogDescription>
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-accent hover:text-accent-dark text-sm underline"
                >
                  ← Back to selection
                </button>
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              {/* Common Fields */}
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              {/* Chef-Specific Questions */}
              {userType === 'chef' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Professional Experience</Label>
                    <Input
                      id="experience"
                      placeholder="e.g., 5 years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialty">Culinary Specialty</Label>
                    <Input
                      id="specialty"
                      placeholder="e.g., Italian, Farm-to-Table, Vegan"
                      value={formData.specialty}
                      onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Your Location</Label>
                    <Input
                      id="location"
                      placeholder="City, State"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </>
              )}

              {/* Client-Specific Questions */}
              {userType === 'client' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="frequency">How often would you book a chef?</Label>
                    <Select
                      value={formData.frequency}
                      onValueChange={(value) => setFormData({ ...formData, frequency: value })}
                      required
                    >
                      <SelectTrigger id="frequency">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="special-occasions">Special Occasions Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">What type of dining experience?</Label>
                    <Select
                      value={formData.occasion}
                      onValueChange={(value) => setFormData({ ...formData, occasion: value })}
                      required
                    >
                      <SelectTrigger id="occasion">
                        <SelectValue placeholder="Select experience type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="intimate-dinner">Intimate Dinner (2-4 people)</SelectItem>
                        <SelectItem value="family-gathering">Family Gathering (5-10 people)</SelectItem>
                        <SelectItem value="dinner-party">Dinner Party (10+ people)</SelectItem>
                        <SelectItem value="meal-prep">Weekly Meal Prep</SelectItem>
                        <SelectItem value="varies">Varies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary">Dietary Preferences or Restrictions (Optional)</Label>
                    <Input
                      id="dietary"
                      placeholder="e.g., Vegetarian, Gluten-free, No shellfish"
                      value={formData.dietaryNeeds}
                      onChange={(e) => setFormData({ ...formData, dietaryNeeds: e.target.value })}
                    />
                  </div>
                </>
              )}

              <div className="flex flex-col gap-2 pt-4">
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-foreground font-semibold h-12"
                >
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-muted-foreground text-xs text-center">
                  We respect your privacy. Your information will only be used to contact you about Saunter.
                </p>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
