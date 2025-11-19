import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WaitlistModal from "./WaitlistModal";
import { Button } from "@/components/ui/button";

export default function LandingPageDark() {
  return (
    <div className="bg-primary min-h-screen">
      {/* Navigation */}
      <nav className="px-6 md:px-12 lg:px-16 py-6 shadow-sm">
        <div className="max-w-[1400px] mx-auto">
          <Image
            src="/images/logo.svg"
            alt="Saunter"
            width={180}
            height={36}
            priority
            className="opacity-95"
          />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-16 py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
            {/* Hero Text */}
            <div className="max-w-[700px]">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Where presence tastes better.
              </h1>
            </div>

            {/* CTA Box */}
            <div className="flex flex-col items-center gap-4 bg-primary-dark/30 p-8 rounded-2xl backdrop-blur-sm">
              <p className="font-sans text-xl md:text-2xl font-light text-white/90 text-center max-w-[300px]">
                Crafted for the moments you want to savor.
              </p>
              <WaitlistModal>
                <Button className="bg-accent hover:bg-accent-dark transition-all duration-300 hover:scale-105 flex items-center gap-3 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl h-[58px] text-foreground font-serif text-xl font-medium w-full">
                  Join the waitlist
                  <ArrowRight className="w-6 h-6" />
                </Button>
              </WaitlistModal>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/hero-bg.jpg"
              alt="Chef preparing a meal"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
          </div>
        </div>
      </section>

      {/* Why Saunter Section */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Content */}
            <div className="max-w-[650px] space-y-8">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Why Saunter?
              </h2>

              <p className="text-lg md:text-xl text-white/90 font-light leading-loose tracking-wide">
                Saunter is a curated, on-demand way to bring skilled private chefs into your home.
                We make everyday meals effortless, warm, and beautifully crafted, so your time at
                home becomes something you can fully enjoy.
              </p>
            </div>

            {/* Right Decorative Image */}
            <div className="hidden lg:flex relative w-[450px] h-[450px] flex-shrink-0 items-center justify-center opacity-80">
              <Image
                src="/images/image.png"
                alt="Decorative geometric shapes"
                width={450}
                height={450}
                className="object-contain brightness-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-20"></div>
    </div>
  );
}
