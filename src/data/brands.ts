export interface BrandModel {
  model: string;
  variant: string;
  descriptor: string;
  audience: string;
  priceBand: 'Entry' | 'Mid' | 'Premium';
}

export interface Brand {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  accentColor: string;
  featuredModels: BrandModel[];
  allModels: BrandModel[];
}

export const brands: Brand[] = [
  {
    id: 'jordan',
    name: 'Air Jordan',
    tagline: 'The Flight Never Ends',
    heroImage: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 100%, 45%)',
    featuredModels: [
      {
        model: 'Air Jordan 1',
        variant: 'High / Mid / Low / Retro OG',
        descriptor: 'Iconic silhouette that launched the culture',
        audience: 'Collectors & streetwear',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 3',
        variant: 'OG / Retro (Cement, Fire Red)',
        descriptor: 'Tumbled leather + elephant print, MJ era classic',
        audience: 'Collectors',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 4',
        variant: 'OG / Retro (White, Bred)',
        descriptor: 'Mesh + visible air, street staple',
        audience: 'Sneakerheads',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 11',
        variant: 'Concord / Bred / Cool Grey',
        descriptor: 'Patent leather, luxury performance crossover',
        audience: 'Hype collectors',
        priceBand: 'Premium'
      }
    ],
    allModels: [
      {
        model: 'Air Jordan 1',
        variant: 'High / Mid / Low / Retro OG',
        descriptor: 'Iconic silhouette that launched the culture',
        audience: 'Collectors & streetwear',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 2',
        variant: 'OG / Retro',
        descriptor: 'Sleek luxury basketball silhouette',
        audience: 'Vintage lovers',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 3',
        variant: 'OG / Retro (Cement, Fire Red)',
        descriptor: 'Tumbled leather + elephant print, MJ era classic',
        audience: 'Collectors',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 4',
        variant: 'OG / Retro (White, Bred)',
        descriptor: 'Mesh + visible air, street staple',
        audience: 'Sneakerheads',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 5',
        variant: 'OG / Retro',
        descriptor: 'Reflective tongue + shark-tooth midsole',
        audience: 'Retro fans',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 6',
        variant: 'OG / Retro',
        descriptor: 'Visible heel tab, infra-red hits',
        audience: 'MJ fans & retro collectors',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 11',
        variant: 'Concord / Bred / Cool Grey',
        descriptor: 'Patent leather, luxury performance crossover',
        audience: 'Hype collectors',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 12',
        variant: 'Retro',
        descriptor: 'Premium leather, bold stitching',
        audience: 'Dress-up sneaker fans',
        priceBand: 'Premium'
      },
      {
        model: 'Air Jordan 13',
        variant: 'Retro',
        descriptor: 'Panther-inspired silhouette, techy sole',
        audience: 'Classic collectors',
        priceBand: 'Premium'
      },
      {
        model: 'Jordan Legacy / Luka',
        variant: 'Low/Mid/High',
        descriptor: 'Modern player models influenced by AJ legacy',
        audience: 'Younger players & streetwear',
        priceBand: 'Mid'
      }
    ]
  },
  {
    id: 'nike-af1',
    name: 'Nike Air Force',
    tagline: "The Streets' Favorite Since '82",
    heroImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1200&h=600&fit=crop',
    accentColor: 'hsl(45, 100%, 50%)',
    featuredModels: [
      {
        model: 'Air Force 1 Low',
        variant: 'White / All-Black / Custom',
        descriptor: 'Minimal, timeless everyday sneaker',
        audience: 'All audiences',
        priceBand: 'Mid'
      },
      {
        model: 'Air Force 1 Shadow',
        variant: '—',
        descriptor: 'Layered panels, chunky aesthetic',
        audience: 'Trend-focused Gen Z',
        priceBand: 'Mid'
      },
      {
        model: 'Air Force 1 High',
        variant: '—',
        descriptor: 'Classic high-top AF1 look',
        audience: 'Retro lovers',
        priceBand: 'Mid'
      }
    ],
    allModels: [
      {
        model: 'Air Force 1 Low',
        variant: 'White / All-Black / Custom',
        descriptor: 'Minimal, timeless everyday sneaker',
        audience: 'All audiences',
        priceBand: 'Mid'
      },
      {
        model: 'Air Force 1 Mid',
        variant: '—',
        descriptor: 'Slightly elevated ankle coverage',
        audience: 'Street stylers',
        priceBand: 'Mid'
      },
      {
        model: 'Air Force 1 High',
        variant: '—',
        descriptor: 'Classic high-top AF1 look',
        audience: 'Retro lovers',
        priceBand: 'Mid'
      },
      {
        model: 'Air Force 1 Shadow',
        variant: '—',
        descriptor: 'Layered panels, chunky aesthetic',
        audience: 'Trend-focused Gen Z',
        priceBand: 'Mid'
      },
      {
        model: 'Air Force 1 Pixel',
        variant: '—',
        descriptor: 'Modernized AF1 silhouette',
        audience: 'Casual wearers',
        priceBand: 'Mid'
      }
    ]
  },
  {
    id: 'vans',
    name: 'Vans',
    tagline: 'Off The Wall — Everyday Culture',
    heroImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&h=600&fit=crop',
    accentColor: 'hsl(180, 70%, 50%)',
    featuredModels: [
      {
        model: 'Old Skool',
        variant: 'Low',
        descriptor: 'Suede + canvas side stripe, skate staple',
        audience: 'Skaters & creatives',
        priceBand: 'Mid'
      },
      {
        model: 'Sk8-Hi',
        variant: 'High',
        descriptor: 'Padded collar, ankle support',
        audience: 'Streetstyle & skateboarders',
        priceBand: 'Mid'
      },
      {
        model: 'Slip-On Checkerboard',
        variant: 'Low',
        descriptor: 'Iconic easy-wear model',
        audience: 'Festival & casual crowd',
        priceBand: 'Entry'
      }
    ],
    allModels: [
      {
        model: 'Old Skool',
        variant: 'Low',
        descriptor: 'Suede + canvas side stripe, skate staple',
        audience: 'Skaters & creatives',
        priceBand: 'Mid'
      },
      {
        model: 'Sk8-Hi',
        variant: 'High',
        descriptor: 'Padded collar, ankle support',
        audience: 'Streetstyle & skateboarders',
        priceBand: 'Mid'
      },
      {
        model: 'Authentic',
        variant: 'Low',
        descriptor: 'Original canvas low-top',
        audience: 'Casual & classic looks',
        priceBand: 'Entry'
      },
      {
        model: 'Era',
        variant: 'Low',
        descriptor: 'Updated fit with padded collar',
        audience: 'Skate casuals',
        priceBand: 'Entry'
      },
      {
        model: 'Slip-On Checkerboard',
        variant: 'Low',
        descriptor: 'Iconic easy-wear model',
        audience: 'Festival & casual crowd',
        priceBand: 'Entry'
      }
    ]
  },
  {
    id: 'adidas',
    name: 'Adidas',
    tagline: 'Sport Roots, Street Future',
    heroImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop',
    accentColor: 'hsl(45, 100%, 50%)',
    featuredModels: [
      {
        model: 'Superstar',
        variant: 'Low',
        descriptor: 'Shell-toe classic',
        audience: 'Timeless streetwear',
        priceBand: 'Mid'
      },
      {
        model: 'Stan Smith',
        variant: 'Low',
        descriptor: 'Clean tennis silhouette',
        audience: 'Minimalist fashion',
        priceBand: 'Mid'
      },
      {
        model: 'Samba',
        variant: 'Low',
        descriptor: 'Indoor soccer heritage',
        audience: 'Retro & street stylers',
        priceBand: 'Mid'
      },
      {
        model: 'Yeezy 350 / 700',
        variant: 'Low/Chunky',
        descriptor: 'High-demand collaborative silhouette',
        audience: 'Hype market',
        priceBand: 'Premium'
      }
    ],
    allModels: [
      {
        model: 'Superstar',
        variant: 'Low',
        descriptor: 'Shell-toe classic',
        audience: 'Timeless streetwear',
        priceBand: 'Mid'
      },
      {
        model: 'Stan Smith',
        variant: 'Low',
        descriptor: 'Clean tennis silhouette',
        audience: 'Minimalist fashion',
        priceBand: 'Mid'
      },
      {
        model: 'Samba',
        variant: 'Low',
        descriptor: 'Indoor soccer heritage',
        audience: 'Retro & street stylers',
        priceBand: 'Mid'
      },
      {
        model: 'NMD',
        variant: 'Low',
        descriptor: 'Boost midsole, modern lifestyle',
        audience: 'Urban commuters',
        priceBand: 'Mid'
      },
      {
        model: 'Ultraboost',
        variant: 'Low',
        descriptor: 'Performance running fused with lifestyle',
        audience: 'Comfort-first buyers',
        priceBand: 'Premium'
      },
      {
        model: 'Yeezy 350 / 700',
        variant: 'Low/Chunky',
        descriptor: 'High-demand collaborative silhouette',
        audience: 'Hype market',
        priceBand: 'Premium'
      }
    ]
  },
  {
    id: 'new-balance',
    name: 'New Balance',
    tagline: 'Quiet Luxury, Loud Comfort',
    heroImage: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 0%, 50%)',
    featuredModels: [
      {
        model: 'New Balance 574',
        variant: 'Low',
        descriptor: 'Classic heritage runner',
        audience: 'Everyday wearers',
        priceBand: 'Mid'
      },
      {
        model: 'New Balance 550',
        variant: 'Low',
        descriptor: 'Retro basketball-silhouette revival',
        audience: 'Fashion crowd',
        priceBand: 'Mid'
      },
      {
        model: 'New Balance 990 Series',
        variant: 'Low',
        descriptor: 'Premium cushioning, dad shoe aesthetic',
        audience: 'Premium casuals',
        priceBand: 'Premium'
      }
    ],
    allModels: [
      {
        model: 'New Balance 574',
        variant: 'Low',
        descriptor: 'Classic heritage runner',
        audience: 'Everyday wearers',
        priceBand: 'Mid'
      },
      {
        model: 'New Balance 550',
        variant: 'Low',
        descriptor: 'Retro basketball-silhouette revival',
        audience: 'Fashion crowd',
        priceBand: 'Mid'
      },
      {
        model: 'New Balance 990 Series',
        variant: 'Low',
        descriptor: 'Premium cushioning, dad shoe aesthetic',
        audience: 'Premium casuals',
        priceBand: 'Premium'
      },
      {
        model: 'New Balance 9060 / 57/40',
        variant: 'Low',
        descriptor: 'Contemporary design & comfort',
        audience: 'Trend-aware crowd',
        priceBand: 'Mid'
      },
      {
        model: 'Fresh Foam',
        variant: 'Low',
        descriptor: 'Performance + lifestyle crossover',
        audience: 'Active & comfort buyers',
        priceBand: 'Mid'
      }
    ]
  },
  {
    id: 'dr-martens',
    name: 'Dr. Martens',
    tagline: 'Tough by Nature. Timeless by Design.',
    heroImage: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=1200&h=600&fit=crop',
    accentColor: 'hsl(30, 100%, 35%)',
    featuredModels: [
      {
        model: '1460 8-eye Boot',
        variant: 'Boot',
        descriptor: 'Classic leather combat silhouette',
        audience: 'Alternative fashion & creatives',
        priceBand: 'Premium'
      },
      {
        model: '2976 Chelsea Boot',
        variant: 'Chelsea',
        descriptor: 'Slip-on grunge classic',
        audience: 'Street to smart-casual',
        priceBand: 'Premium'
      },
      {
        model: 'Jadon Platform',
        variant: 'Platform boot',
        descriptor: 'Elevated platform for fashion statement',
        audience: 'Bold stylers',
        priceBand: 'Premium'
      }
    ],
    allModels: [
      {
        model: '1460 8-eye Boot',
        variant: 'Boot',
        descriptor: 'Classic leather combat silhouette',
        audience: 'Alternative fashion & creatives',
        priceBand: 'Premium'
      },
      {
        model: '2976 Chelsea Boot',
        variant: 'Chelsea',
        descriptor: 'Slip-on grunge classic',
        audience: 'Street to smart-casual',
        priceBand: 'Premium'
      },
      {
        model: 'Jadon Platform',
        variant: 'Platform boot',
        descriptor: 'Elevated platform for fashion statement',
        audience: 'Bold stylers',
        priceBand: 'Premium'
      },
      {
        model: '1461 Oxford',
        variant: 'Low',
        descriptor: 'Dress-meets-rebellion shoe',
        audience: 'Versatile wardrobes',
        priceBand: 'Premium'
      }
    ]
  },
  {
    id: 'canvas',
    name: 'Canvas',
    tagline: 'Blank Canvas. Bold Moves.',
    heroImage: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?w=1200&h=600&fit=crop',
    accentColor: 'hsl(280, 60%, 50%)',
    featuredModels: [
      {
        model: 'Converse Chuck Taylor All-Star',
        variant: 'High / Low / Platform',
        descriptor: 'Timeless canvas silhouette',
        audience: 'Students, creatives',
        priceBand: 'Entry'
      },
      {
        model: 'Converse Platform',
        variant: 'High / Low',
        descriptor: 'Elevated sole for fashion-forward fits',
        audience: 'Trendsetters',
        priceBand: 'Mid'
      }
    ],
    allModels: [
      {
        model: 'Converse Chuck Taylor All-Star',
        variant: 'High / Low / Platform',
        descriptor: 'Timeless canvas silhouette',
        audience: 'Students, creatives',
        priceBand: 'Entry'
      },
      {
        model: 'Converse Platform',
        variant: 'High / Low',
        descriptor: 'Elevated sole for fashion-forward fits',
        audience: 'Trendsetters',
        priceBand: 'Mid'
      },
      {
        model: 'Canvas Casuals',
        variant: 'Low/High',
        descriptor: 'Affordable everyday streetwear',
        audience: 'Everyday wearers',
        priceBand: 'Entry'
      }
    ]
  },
  {
    id: 'nike-air-max',
    name: 'Nike Air Max',
    tagline: 'Air You Can See. Comfort You Can Feel.',
    heroImage: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&h=600&fit=crop',
    accentColor: 'hsl(200, 100%, 50%)',
    featuredModels: [
      {
        model: 'Air Max 90',
        variant: '—',
        descriptor: 'Chunky midsole, icon for 90s revival',
        audience: 'Retro streetwear',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max 97',
        variant: '—',
        descriptor: 'Wave lines, full-length air unit',
        audience: 'Sleek streetwear',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max 270',
        variant: '—',
        descriptor: 'Large heel air bubble, lifestyle comfort',
        audience: 'Casual wearers',
        priceBand: 'Mid'
      }
    ],
    allModels: [
      {
        model: 'Air Max 1',
        variant: '—',
        descriptor: 'OG visible air unit, classic lines',
        audience: 'Heritage fans',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max 90',
        variant: '—',
        descriptor: 'Chunky midsole, icon for 90s revival',
        audience: 'Retro streetwear',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max 95',
        variant: '—',
        descriptor: 'Layered side panels, bold profile',
        audience: 'Statement makers',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max 97',
        variant: '—',
        descriptor: 'Wave lines, full-length air unit',
        audience: 'Sleek streetwear',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max 270',
        variant: '—',
        descriptor: 'Large heel air bubble, lifestyle comfort',
        audience: 'Casual wearers',
        priceBand: 'Mid'
      },
      {
        model: 'Air Max Plus (TN)',
        variant: '—',
        descriptor: 'Tuned air tech, distinctive design',
        audience: 'Hype & OG fans',
        priceBand: 'Mid'
      }
    ]
  },
  {
    id: 'nike-other',
    name: 'Nike',
    tagline: 'Everyday Performance. Street Ready.',
    heroImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=600&fit=crop',
    accentColor: 'hsl(30, 100%, 50%)',
    featuredModels: [
      {
        model: 'Dunk',
        variant: 'Low / High / SB',
        descriptor: 'Skate/retro crossover, huge hype potential',
        audience: 'Collectors & skaters',
        priceBand: 'Premium'
      },
      {
        model: 'Blazer',
        variant: 'Mid / Low',
        descriptor: 'Vintage basketball silhouette now streetwear',
        audience: 'Minimalists & retro fans',
        priceBand: 'Mid'
      },
      {
        model: 'Huarache',
        variant: 'Low',
        descriptor: 'Distinctive cage and neoprene fit',
        audience: '90s revival fans',
        priceBand: 'Mid'
      }
    ],
    allModels: [
      {
        model: 'Dunk',
        variant: 'Low / High / SB',
        descriptor: 'Skate/retro crossover, huge hype potential',
        audience: 'Collectors & skaters',
        priceBand: 'Premium'
      },
      {
        model: 'Blazer',
        variant: 'Mid / Low',
        descriptor: 'Vintage basketball silhouette now streetwear',
        audience: 'Minimalists & retro fans',
        priceBand: 'Mid'
      },
      {
        model: 'Pegasus',
        variant: 'Running',
        descriptor: 'Performance running shoe with lifestyle crossover',
        audience: 'Runners & daily users',
        priceBand: 'Mid'
      },
      {
        model: 'Huarache',
        variant: 'Low',
        descriptor: 'Distinctive cage and neoprene fit',
        audience: '90s revival fans',
        priceBand: 'Mid'
      },
      {
        model: 'React / Vaporfly',
        variant: 'Performance-lifestyle',
        descriptor: 'Tech-led running options',
        audience: 'Athletes & tech-lovers',
        priceBand: 'Premium'
      }
    ]
  },
  {
    id: 'puma',
    name: 'Puma',
    tagline: 'Forever Faster, Forever Fresh',
    heroImage: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?w=1200&h=600&fit=crop',
    accentColor: 'hsl(180, 100%, 50%)',
    featuredModels: [
      {
        model: 'Suede Classic',
        variant: 'Low',
        descriptor: 'Iconic streetwear silhouette',
        audience: 'Retro street stylers',
        priceBand: 'Mid'
      },
      {
        model: 'RS-X',
        variant: 'Chunky',
        descriptor: 'Fashion-forward chunky profile',
        audience: 'Bold stylers',
        priceBand: 'Mid'
      },
      {
        model: 'Clyde',
        variant: 'Low',
        descriptor: 'Basketball-turned-street icon',
        audience: 'Heritage fans',
        priceBand: 'Mid'
      }
    ],
    allModels: [
      {
        model: 'Suede Classic',
        variant: 'Low',
        descriptor: 'Iconic streetwear silhouette',
        audience: 'Retro street stylers',
        priceBand: 'Mid'
      },
      {
        model: 'RS-X',
        variant: 'Chunky',
        descriptor: 'Fashion-forward chunky profile',
        audience: 'Bold stylers',
        priceBand: 'Mid'
      },
      {
        model: 'Cali',
        variant: 'Low',
        descriptor: 'Women-forward casual silhouette',
        audience: 'Lifestyle market',
        priceBand: 'Mid'
      },
      {
        model: 'Slipstream / Basket',
        variant: 'Low',
        descriptor: 'Sleek court-inspired options',
        audience: 'Casual wearers',
        priceBand: 'Entry'
      },
      {
        model: 'Clyde',
        variant: 'Low',
        descriptor: 'Basketball-turned-street icon',
        audience: 'Heritage fans',
        priceBand: 'Mid'
      }
    ]
  }
];
