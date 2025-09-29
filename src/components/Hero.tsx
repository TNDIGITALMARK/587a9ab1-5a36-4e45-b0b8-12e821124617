'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-secondary/30 via-background to-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Welcome to{' '}
              <span className="text-primary">Cloud Nitters!</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-semibold mb-6">
              Cuddly Friends Await!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Discover the softest, safest, and most adorable toy animals perfect for children,
              collectors, and gift-giving. Every plush friend is crafted with love and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90"
              >
                <Link href="/shop">Shop Now</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link href="/new-arrivals">New Arrivals</Link>
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="relative">
              {/* Main featured animals */}
              <div className="flex items-center justify-center space-x-4">
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/generated/teddy-bear.png"
                    alt="Cuddly Teddy Bear"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="relative transform hover:scale-105 transition-transform duration-300 -mt-8">
                  <Image
                    src="/generated/elephant.png"
                    alt="Adorable Elephant"
                    width={180}
                    height={180}
                    className="rounded-lg shadow-xl"
                  />
                </div>
                <div className="relative transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/generated/unicorn.png"
                    alt="Magical Unicorn"
                    width={150}
                    height={150}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-secondary rounded-full p-3 shadow-lg animate-bounce">
                <span className="text-2xl">✨</span>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-secondary rounded-full p-3 shadow-lg animate-bounce delay-300">
                <span className="text-2xl">🎈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}