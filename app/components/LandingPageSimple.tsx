import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WaitlistModal from "./WaitlistModal";
import { Button } from "@/components/ui/button";

export default function LandingPageSimple() {
  return (
    <div className="bg-neutral-50 w-full min-h-screen p-4">
      {/* Single Hero - Rounded Container */}
      <div className="relative w-full h-[calc(100vh-32px)] max-w-[2000px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Chef preparing a meal"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 2000px) 100vw, 2000px"
          />
          {/* Gradient Overlay - stronger at bottom */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(47,79,62,0) 0%, rgba(47,79,62,0.8) 100%)'
            }}
          />
        </div>

        {/* Geometric Line Overlays */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Top Left Corner Lines */}
          <svg className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80" viewBox="0 0 200 200">
            <line x1="0" y1="60" x2="140" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="60" y1="0" x2="60" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>

          {/* Bottom Right Corner Lines */}
          <svg className="absolute bottom-0 right-0 w-64 h-64 md:w-80 md:h-80" viewBox="0 0 200 200">
            <line x1="200" y1="140" x2="60" y2="140" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
            <line x1="140" y1="200" x2="140" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          </svg>

          {/* Center Diagonal Line */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </svg>

          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 lg:p-14">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.svg"
              alt="Saunter"
              width={160}
              height={32}
              priority
              className="opacity-95"
            />
          </div>

          {/* Hero Content */}
          <div className="max-w-[800px] space-y-8">
            {/* Headline */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight">
              Being present<br />starts here
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl font-light text-white/95 leading-relaxed max-w-[700px]">
              Saunter is a curated, on-demand way to bring skilled private chefs into your home.
              We make everyday meals effortless, warm, and beautifully crafted, so your time at
              home becomes something you can fully enjoy.
            </p>

            {/* CTA Button */}
            <WaitlistModal>
              <Button className="bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 flex items-center gap-3 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl h-[58px] text-foreground font-serif text-xl font-medium">
                Join our waitlist
                <ArrowRight className="w-6 h-6" />
              </Button>
            </WaitlistModal>
          </div>

          {/* Copyright - Bottom Left */}
          <div className="absolute bottom-6 left-6">
            <p className="text-xs text-white/50 font-light tracking-wider">
              © 2025 Saunter
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
