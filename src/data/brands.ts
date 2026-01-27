export interface Brand {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  accentColor: string;
  shopifyFilter: string; // Used to filter products by vendor, product_type, or tag
}

export const brands: Brand[] = [
  {
    id: 'jordan',
    name: 'Air Jordan',
    tagline: 'The Flight Never Ends',
    heroImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 100%, 45%)',
    shopifyFilter: 'Jordan'
  },
  {
    id: 'nike-af1',
    name: 'Nike Air Force',
    tagline: "The Streets' Favorite Since '82",
    heroImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=600&fit=crop',
    accentColor: 'hsl(45, 100%, 50%)',
    shopifyFilter: 'Air Force'
  },
  {
    id: 'vans',
    name: 'Vans',
    tagline: 'Off The Wall — Everyday Culture',
    heroImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&h=600&fit=crop',
    accentColor: 'hsl(180, 100%, 35%)',
    shopifyFilter: 'Vans'
  },
  {
    id: 'canvas',
    name: 'Canvas',
    tagline: 'Blank Canvas. Bold Moves.',
    heroImage: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=1200&h=600&fit=crop',
    accentColor: 'hsl(30, 50%, 50%)',
    shopifyFilter: 'Canvas'
  },
  {
    id: 'nike-airmax',
    name: 'Nike Air Max',
    tagline: 'Air You Can See. Comfort You Can Feel.',
    heroImage: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200&h=600&fit=crop',
    accentColor: 'hsl(210, 100%, 50%)',
    shopifyFilter: 'Air Max'
  },
  {
    id: 'adidas',
    name: 'Adidas',
    tagline: 'Sport Roots, Street Future',
    heroImage: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 0%, 0%)',
    shopifyFilter: 'Adidas'
  },
  {
    id: 'new-balance',
    name: 'New Balance',
    tagline: 'Quiet Luxury, Loud Comfort',
    heroImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 70%, 50%)',
    shopifyFilter: 'New Balance'
  },
  {
    id: 'puma',
    name: 'Puma',
    tagline: 'Forever Faster. Forever Forward.',
    heroImage: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=1200&h=600&fit=crop',
    accentColor: 'hsl(140, 60%, 40%)',
    shopifyFilter: 'Puma'
  }
];
