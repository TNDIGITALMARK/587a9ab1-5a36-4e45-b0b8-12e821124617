export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  ageRange: string;
  description: string;
  category: 'teddy-bear' | 'farm-animal' | 'wild-animal' | 'fantasy' | 'sea-life';
  material: string;
  brand: string;
  dimensions: string;
  weight: string;
  careInstructions: string;
  isNew?: boolean;
  isOnSale?: boolean;
  isEcoFriendly?: boolean;
  colors?: string[];
  features?: string[];
}

export const products: Product[] = [
  {
    id: 'teddy-bear-classic',
    name: 'Classic Cuddle Bear',
    price: 24.99,
    originalPrice: 29.99,
    image: '/generated/teddy-bear.png',
    rating: 5,
    reviewCount: 142,
    ageRange: '0+',
    description: 'Our most beloved teddy bear with the softest brown fur and sweetest smile. Perfect for bedtime cuddles and adventures.',
    category: 'teddy-bear',
    material: 'Premium Plush Polyester',
    brand: 'Cloud Nitters',
    dimensions: '12" x 8" x 6"',
    weight: '0.8 lbs',
    careInstructions: 'Machine washable on gentle cycle',
    isOnSale: true,
    colors: ['Brown'],
    features: ['Hypoallergenic', 'Machine Washable', 'Safety Tested']
  },
  {
    id: 'elephant-gentle',
    name: 'Gentle Gray Elephant',
    price: 32.99,
    image: '/generated/elephant.png',
    rating: 5,
    reviewCount: 89,
    ageRange: '6 months+',
    description: 'A majestic elephant with floppy ears and a gentle spirit. This cuddly companion loves giving trunk hugs!',
    category: 'wild-animal',
    material: 'Organic Cotton Blend',
    brand: 'Cloud Nitters',
    dimensions: '14" x 10" x 8"',
    weight: '1.2 lbs',
    careInstructions: 'Spot clean or gentle machine wash',
    isEcoFriendly: true,
    colors: ['Gray'],
    features: ['Organic Materials', 'Eco-Friendly', 'Safety Tested']
  },
  {
    id: 'panda-playful',
    name: 'Playful Panda Pal',
    price: 28.99,
    image: '/generated/panda.png',
    rating: 5,
    reviewCount: 156,
    ageRange: '3+',
    description: 'An adorable black and white panda with the cutest button nose. Perfect for panda lovers of all ages!',
    category: 'wild-animal',
    material: 'Ultra-Soft Plush',
    brand: 'Cloud Nitters',
    dimensions: '13" x 9" x 7"',
    weight: '0.9 lbs',
    careInstructions: 'Machine washable on delicate cycle',
    colors: ['Black', 'White'],
    features: ['Ultra-Soft', 'Durable Construction', 'Child-Safe']
  },
  {
    id: 'koala-sleepy',
    name: 'Sleepy Koala Cuddles',
    price: 26.99,
    originalPrice: 31.99,
    image: '/generated/koala.png',
    rating: 4,
    reviewCount: 73,
    ageRange: '1+',
    description: 'A drowsy koala with the fluffiest ears, perfect for naptime snuggles and bedtime stories.',
    category: 'wild-animal',
    material: 'Premium Minky Fabric',
    brand: 'Cloud Nitters',
    dimensions: '11" x 8" x 7"',
    weight: '0.7 lbs',
    careInstructions: 'Hand wash recommended',
    isOnSale: true,
    colors: ['Gray'],
    features: ['Extra Soft', 'Perfect for Naps', 'Huggable Size']
  },
  {
    id: 'pig-precious',
    name: 'Precious Pink Piglet',
    price: 22.99,
    image: '/generated/pig.png',
    rating: 5,
    reviewCount: 94,
    ageRange: '2+',
    description: 'The sweetest little pig with a curly tail and rosy cheeks. This farm friend loves belly rubs and snuggles!',
    category: 'farm-animal',
    material: 'Velboa Plush',
    brand: 'Cloud Nitters',
    dimensions: '10" x 8" x 6"',
    weight: '0.6 lbs',
    careInstructions: 'Machine washable on gentle cycle',
    colors: ['Pink'],
    features: ['Farm Fresh Fun', 'Squeezable', 'Adorable Details']
  },
  {
    id: 'unicorn-magical',
    name: 'Magical Rainbow Unicorn',
    price: 35.99,
    image: '/generated/unicorn.png',
    rating: 5,
    reviewCount: 201,
    ageRange: '3+',
    description: 'A mystical unicorn with a rainbow mane and spiral horn. Brings magic and wonder to every day!',
    category: 'fantasy',
    material: 'Sparkle Plush with Satin Mane',
    brand: 'Cloud Nitters',
    dimensions: '15" x 12" x 8"',
    weight: '1.1 lbs',
    careInstructions: 'Spot clean mane, machine wash body',
    isNew: true,
    colors: ['White', 'Rainbow'],
    features: ['Sparkly Horn', 'Rainbow Mane', 'Magical Appeal']
  },
  {
    id: 'fox-friendly',
    name: 'Friendly Forest Fox',
    price: 29.99,
    image: '/generated/fox.png',
    rating: 4,
    reviewCount: 67,
    ageRange: '18 months+',
    description: 'A clever fox with a bushy tail and bright orange coat. This woodland friend loves adventures and stories.',
    category: 'wild-animal',
    material: 'Faux Fur Plush',
    brand: 'Cloud Nitters',
    dimensions: '12" x 9" x 8"',
    weight: '0.8 lbs',
    careInstructions: 'Gentle machine wash only',
    colors: ['Orange', 'White'],
    features: ['Realistic Details', 'Fluffy Tail', 'Forest Theme']
  },
  {
    id: 'lion-brave',
    name: 'Brave Little Lion',
    price: 33.99,
    originalPrice: 39.99,
    image: '/generated/lion.png',
    rating: 5,
    reviewCount: 118,
    ageRange: '2+',
    description: 'A courageous lion cub with a magnificent mane. Perfect for little ones who need a brave companion!',
    category: 'wild-animal',
    material: 'Luxury Plush with Faux Fur Mane',
    brand: 'Cloud Nitters',
    dimensions: '14" x 11" x 9"',
    weight: '1.3 lbs',
    careInstructions: 'Professional cleaning recommended for mane',
    isOnSale: true,
    colors: ['Golden', 'Brown'],
    features: ['Majestic Mane', 'Regal Appearance', 'Confidence Building']
  }
];

export const featuredProducts = products.slice(0, 8);

export const categories = [
  { id: 'teddy-bear', name: 'Teddy Bears', count: products.filter(p => p.category === 'teddy-bear').length },
  { id: 'farm-animal', name: 'Farm Animals', count: products.filter(p => p.category === 'farm-animal').length },
  { id: 'wild-animal', name: 'Wild Animals', count: products.filter(p => p.category === 'wild-animal').length },
  { id: 'fantasy', name: 'Fantasy Creatures', count: products.filter(p => p.category === 'fantasy').length },
  { id: 'sea-life', name: 'Sea Life', count: products.filter(p => p.category === 'sea-life').length }
];

export const ageRanges = [
  { id: '0+', name: 'Newborn (0+ months)', count: products.filter(p => p.ageRange === '0+').length },
  { id: '6 months+', name: '6+ months', count: products.filter(p => p.ageRange === '6 months+').length },
  { id: '1+', name: '1+ years', count: products.filter(p => p.ageRange === '1+').length },
  { id: '18 months+', name: '18+ months', count: products.filter(p => p.ageRange === '18 months+').length },
  { id: '2+', name: '2+ years', count: products.filter(p => p.ageRange === '2+').length },
  { id: '3+', name: '3+ years', count: products.filter(p => p.ageRange === '3+').length }
];

export const priceRanges = [
  { id: '0-25', name: 'Under $25', min: 0, max: 25 },
  { id: '25-35', name: '$25 - $35', min: 25, max: 35 },
  { id: '35-50', name: '$35 - $50', min: 35, max: 50 },
  { id: '50+', name: 'Over $50', min: 50, max: 999 }
];

export const materials = [
  { id: 'premium-plush', name: 'Premium Plush' },
  { id: 'organic-cotton', name: 'Organic Cotton' },
  { id: 'ultra-soft', name: 'Ultra-Soft Plush' },
  { id: 'minky-fabric', name: 'Minky Fabric' },
  { id: 'faux-fur', name: 'Faux Fur' }
];

export const brands = [
  { id: 'cloud-nitters', name: 'Cloud Nitters' }
];