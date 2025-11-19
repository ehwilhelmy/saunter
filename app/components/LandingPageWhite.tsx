import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WaitlistModal from "./WaitlistModal";
import { Button } from "@/components/ui/button";

export default function LandingPageWhite() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] mx-4 md:mx-8 lg:mx-12 my-6 md:my-8 lg:my-12 rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Chef preparing a meal"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(47,79,62,0) 0%, rgba(47,79,62,0.7) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 flex flex-col justify-between">
          {/* Logo */}
          <div className="flex items-start">
            <Image
              src="/images/logo.svg"
              alt="Saunter"
              width={160}
              height={32}
              priority
              className="opacity-95"
            />
          </div>

          {/* Hero Text & CTA */}
          <div className="max-w-[900px] space-y-8 md:space-y-10 pb-8 md:pb-16">
            <div className="space-y-4 md:space-y-6">
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] tracking-tight">
                Where presence tastes better.
              </h1>
              <p className="font-sans text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-relaxed tracking-wide">
                Crafted for the moments you want to savor.
              </p>
            </div>

            <WaitlistModal>
              <Button className="bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 flex items-center gap-3 px-8 md:px-10 py-4 rounded-full shadow-lg hover:shadow-xl h-[60px] md:h-[68px] text-foreground font-serif text-xl md:text-2xl font-medium">
                Find your Chef
                <ArrowRight className="w-6 h-6 md:w-7 md:h-7" />
              </Button>
            </WaitlistModal>
          </div>
        </div>
      </section>

      {/* Why Saunter Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Content */}
          <div className="max-w-[700px] space-y-8 md:space-y-10">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight tracking-tight">
              Why Saunter?
            </h2>

            <p className="text-xl md:text-2xl text-primary font-light leading-relaxed tracking-wide">
              We've reimagined private chef services for the modern luxury lifestyle
            </p>

            <p className="text-lg md:text-xl text-foreground/80 font-light leading-loose tracking-wide max-w-[600px]">
              Saunter is a curated, on-demand way to bring skilled private chefs into your home.
              We make everyday meals effortless, warm, and beautifully crafted, so your time at
              home becomes something you can fully enjoy.
            </p>
          </div>

          {/* Right Decorative Image */}
          <div className="hidden lg:flex relative w-[450px] h-[450px] flex-shrink-0 items-center justify-center opacity-90">
            <Image
              src="/images/image.png"
              alt="Decorative geometric shapes"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 mb-12 md:mb-20">
        <div className="bg-primary text-white rounded-3xl p-12 md:p-16 lg:p-20 text-center shadow-2xl">
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Be the first to experience Saunter
          </h3>
          <p className="text-lg md:text-xl font-light mb-10 md:mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Whether you're a chef looking to share your talents or a client seeking exceptional dining experiences, join our waitlist today.
          </p>
          <WaitlistModal>
            <Button className="bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 text-foreground font-medium text-xl px-10 py-6 rounded-full shadow-lg hover:shadow-xl h-auto">
              Join the Waitlist
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </WaitlistModal>
        </div>
      </section>
    </div>
  );
}
