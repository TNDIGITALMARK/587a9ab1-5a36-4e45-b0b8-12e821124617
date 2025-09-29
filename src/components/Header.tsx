'use client';

import Link from 'next/link';
import { Search, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-primary">Cloud Nitters</div>
            <div className="text-sm text-muted-foreground">Cuddly Friends</div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition-colors">
              Shop Animals
            </Link>
            <Link href="/new-arrivals" className="text-foreground hover:text-primary transition-colors">
              New Arrivals
            </Link>
            <Link href="/toys" className="text-foreground hover:text-primary transition-colors">
              Toys
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden sm:flex items-center relative">
              <Input
                type="search"
                placeholder="Search cuddly friends..."
                className="w-64 pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="hover:bg-secondary">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-secondary relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden mt-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search cuddly friends..."
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}