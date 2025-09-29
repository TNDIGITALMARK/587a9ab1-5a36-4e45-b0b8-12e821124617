'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviewCount: number;
    ageRange: string;
    isNew?: boolean;
    isOnSale?: boolean;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    ageRange,
    isNew,
    isOnSale,
  } = product;

  return (
    <Card className="group overflow-hidden bg-white border border-border hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/20 to-muted/20">
          <Link href={`/product/${id}`}>
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </Link>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {isNew && (
              <span className="bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
                NEW
              </span>
            )}
            {isOnSale && (
              <span className="bg-destructive text-destructive-foreground text-xs font-semibold px-2 py-1 rounded">
                SALE
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Heart className="h-4 w-4" />
          </Button>

          {/* Quick Add to Cart (appears on hover) */}
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <Button
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Product Name */}
          <Link href={`/product/${id}`}>
            <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 mb-2">
              {name}
            </h3>
          </Link>

          {/* Age Range */}
          <p className="text-sm text-muted-foreground mb-2">Ages {ageRange}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}