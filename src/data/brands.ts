import jordanShatteredBackboard from '@/assets/jordan/jordan-shattered-backboard.jpg';
import jordanBlackToe from '@/assets/jordan/jordan-black-toe.jpg';
import jordanChicago from '@/assets/jordan/jordan-chicago.jpg';
import jordanBred from '@/assets/jordan/jordan-bred.jpg';
import jordanPatentBred from '@/assets/jordan/jordan-patent-bred.jpg';
import jordanBlackWhite from '@/assets/jordan/jordan-black-white.jpg';
import jordanTaxi from '@/assets/jordan/jordan-taxi.jpg';
import jordanUncToe from '@/assets/jordan/jordan-unc-toe.jpg';
import jordanUniversityBlue from '@/assets/jordan/jordan-university-blue.jpg';
import jordanDarkMocha from '@/assets/jordan/jordan-dark-mocha.jpg';
import jordanTravisScott from '@/assets/jordan/jordan-travis-scott.jpg';

export interface BrandModel {
  model: string;
  variant: string;
  descriptor: string;
  audience: string;
  priceBand: 'Entry' | 'Mid' | 'Premium';
  priceKsh?: number;
  image: string;
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
        model: 'Jordan 1 Retro High OG',
        variant: 'Shattered Backboard',
        descriptor: 'Iconic orange and black colorway',
        audience: 'Collectors & streetwear',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanShatteredBackboard
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Chicago',
        descriptor: 'The original MJ colorway',
        audience: 'Collectors',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanChicago
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Bred',
        descriptor: 'Classic black and red heritage',
        audience: 'Sneakerheads',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanBred
      },
      {
        model: 'Jordan 1 Retro High OG SP',
        variant: 'Travis Scott Mocha',
        descriptor: 'Coveted collaboration with reverse swoosh',
        audience: 'Hype collectors',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanTravisScott
      }
    ],
    allModels: [
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Shattered Backboard',
        descriptor: 'Iconic orange and black colorway',
        audience: 'Collectors & streetwear',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanShatteredBackboard
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Black Toe',
        descriptor: 'Timeless black, white and red design',
        audience: 'Classic collectors',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanBlackToe
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Chicago',
        descriptor: 'The original MJ colorway',
        audience: 'Collectors',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanChicago
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Bred',
        descriptor: 'Classic black and red heritage',
        audience: 'Sneakerheads',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanBred
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Patent Bred',
        descriptor: 'Glossy patent leather finish',
        audience: 'Style collectors',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanPatentBred
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Black White',
        descriptor: 'Clean monochrome essential',
        audience: 'Everyday wearers',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanBlackWhite
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'Taxi',
        descriptor: 'Bold yellow and black colorway',
        audience: 'Statement makers',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanTaxi
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'UNC Toe',
        descriptor: 'University Blue accent details',
        audience: 'Jordan fans',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanUncToe
      },
      {
        model: 'Jordan 1 Retro High OG',
        variant: 'University Blue',
        descriptor: 'Full UNC-inspired colorway',
        audience: 'Blue lovers',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanUniversityBlue
      },
      {
        model: 'Jordan 1 Retro High',
        variant: 'Dark Mocha',
        descriptor: 'Earthy tones with premium suede',
        audience: 'Style enthusiasts',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanDarkMocha
      },
      {
        model: 'Jordan 1 Retro High OG SP',
        variant: 'Travis Scott Mocha',
        descriptor: 'Coveted collaboration with reverse swoosh',
        audience: 'Hype collectors',
        priceBand: 'Mid',
        priceKsh: 3500,
        image: jordanTravisScott
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
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Force 1 Shadow',
        variant: '—',
        descriptor: 'Layered panels, chunky aesthetic',
        audience: 'Trend-focused Gen Z',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Force 1 High',
        variant: '—',
        descriptor: 'Classic high-top AF1 look',
        audience: 'Retro lovers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Air Force 1 Low',
        variant: 'White / All-Black / Custom',
        descriptor: 'Minimal, timeless everyday sneaker',
        audience: 'All audiences',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Force 1 Mid',
        variant: '—',
        descriptor: 'Slightly elevated ankle coverage',
        audience: 'Street stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Force 1 High',
        variant: '—',
        descriptor: 'Classic high-top AF1 look',
        audience: 'Retro lovers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Force 1 Shadow',
        variant: '—',
        descriptor: 'Layered panels, chunky aesthetic',
        audience: 'Trend-focused Gen Z',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Force 1 Pixel',
        variant: '—',
        descriptor: 'Modernized AF1 silhouette',
        audience: 'Casual wearers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1603808033587-5e92e56fc61a?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'vans',
    name: 'Vans',
    tagline: 'Off The Wall — Everyday Culture',
    heroImage: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=1200&h=600&fit=crop',
    accentColor: 'hsl(180, 100%, 35%)',
    featuredModels: [
      {
        model: 'Old Skool',
        variant: 'Low',
        descriptor: 'Suede + canvas side stripe, skate staple',
        audience: 'Skaters & creatives',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&h=800&fit=crop'
      },
      {
        model: 'Sk8-Hi',
        variant: 'High',
        descriptor: 'Padded collar, ankle support',
        audience: 'Streetstyle & skateboarders',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1533630654995-daa4ec13b2eb?w=800&h=800&fit=crop'
      },
      {
        model: 'Slip-On (Checkerboard)',
        variant: 'Low',
        descriptor: 'Iconic easy-wear model',
        audience: 'Festival & casual crowd',
        priceBand: 'Entry',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Old Skool',
        variant: 'Low',
        descriptor: 'Suede + canvas side stripe, skate staple',
        audience: 'Skaters & creatives',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&h=800&fit=crop'
      },
      {
        model: 'Sk8-Hi',
        variant: 'High',
        descriptor: 'Padded collar, ankle support',
        audience: 'Streetstyle & skateboarders',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1533630654995-daa4ec13b2eb?w=800&h=800&fit=crop'
      },
      {
        model: 'Authentic',
        variant: 'Low',
        descriptor: 'Original canvas low-top',
        audience: 'Casual & classic looks',
        priceBand: 'Entry',
        image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&h=800&fit=crop'
      },
      {
        model: 'Era',
        variant: 'Low',
        descriptor: 'Updated fit with padded collar',
        audience: 'Skate casuals',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1591690776519-05b1ac28085f?w=800&h=800&fit=crop'
      },
      {
        model: 'Slip-On (Checkerboard)',
        variant: 'Low',
        descriptor: 'Iconic easy-wear model',
        audience: 'Festival & casual crowd',
        priceBand: 'Entry',
        image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'canvas',
    name: 'Canvas',
    tagline: 'Blank Canvas. Bold Moves.',
    heroImage: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=1200&h=600&fit=crop',
    accentColor: 'hsl(30, 50%, 50%)',
    featuredModels: [
      {
        model: 'Converse Chuck Taylor All-Star',
        variant: 'High / Low / Platform',
        descriptor: 'Timeless canvas silhouette',
        audience: 'Students, creatives',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&h=800&fit=crop'
      },
      {
        model: 'Converse Platform',
        variant: 'High / Low',
        descriptor: 'Elevated sole for fashion-forward fits',
        audience: 'Trendsetters',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Converse Chuck Taylor All-Star',
        variant: 'High / Low / Platform',
        descriptor: 'Timeless canvas silhouette',
        audience: 'Students, creatives',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=800&h=800&fit=crop'
      },
      {
        model: 'Converse Platform',
        variant: 'High / Low',
        descriptor: 'Elevated sole for fashion-forward fits',
        audience: 'Trendsetters',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop'
      },
      {
        model: 'Canvas casuals (local / minimalist)',
        variant: 'Low/High',
        descriptor: 'Affordable everyday streetwear',
        audience: 'Everyday wearers',
        priceBand: 'Entry',
        image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'nike-airmax',
    name: 'Nike Air Max',
    tagline: 'Air You Can See. Comfort You Can Feel.',
    heroImage: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=1200&h=600&fit=crop',
    accentColor: 'hsl(210, 100%, 50%)',
    featuredModels: [
      {
        model: 'Air Max 90',
        variant: '—',
        descriptor: 'Chunky midsole, icon for 90s revival',
        audience: 'Retro streetwear',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max 97',
        variant: '—',
        descriptor: 'Wave lines, full-length air unit',
        audience: 'Sleek streetwear',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max 270',
        variant: '—',
        descriptor: 'Large heel air bubble, lifestyle comfort',
        audience: 'Casual wearers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Air Max 1',
        variant: '—',
        descriptor: 'OG visible air unit, classic lines',
        audience: 'Heritage fans',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max 90',
        variant: '—',
        descriptor: 'Chunky midsole, icon for 90s revival',
        audience: 'Retro streetwear',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max 95',
        variant: '—',
        descriptor: 'Layered side panels, bold profile',
        audience: 'Statement makers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max 97',
        variant: '—',
        descriptor: 'Wave lines, full-length air unit',
        audience: 'Sleek streetwear',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max 270',
        variant: '—',
        descriptor: 'Large heel air bubble, lifestyle comfort',
        audience: 'Casual wearers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&h=800&fit=crop'
      },
      {
        model: 'Air Max Plus (TN)',
        variant: '—',
        descriptor: 'Tuned air tech, distinctive design',
        audience: 'Hype & OG fans',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'adidas',
    name: 'Adidas',
    tagline: 'Sport Roots, Street Future',
    heroImage: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 0%, 0%)',
    featuredModels: [
      {
        model: 'Superstar',
        variant: 'Low',
        descriptor: 'Shell-toe classic',
        audience: 'Timeless streetwear',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=800&h=800&fit=crop'
      },
      {
        model: 'Stan Smith',
        variant: 'Low',
        descriptor: 'Clean tennis silhouette',
        audience: 'Minimalist fashion',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
      },
      {
        model: 'Samba',
        variant: 'Low',
        descriptor: 'Indoor soccer heritage',
        audience: 'Retro & street stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1618356748377-d3a8c6d0f6b6?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Superstar',
        variant: 'Low',
        descriptor: 'Shell-toe classic',
        audience: 'Timeless streetwear',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=800&h=800&fit=crop'
      },
      {
        model: 'Stan Smith',
        variant: 'Low',
        descriptor: 'Clean tennis silhouette',
        audience: 'Minimalist fashion',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=800&fit=crop'
      },
      {
        model: 'Samba',
        variant: 'Low',
        descriptor: 'Indoor soccer heritage',
        audience: 'Retro & street stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1618356748377-d3a8c6d0f6b6?w=800&h=800&fit=crop'
      },
      {
        model: 'NMD',
        variant: 'Low',
        descriptor: 'Boost midsole, modern lifestyle',
        audience: 'Urban commuters',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1542423348-1089e6e8e1ee?w=800&h=800&fit=crop'
      },
      {
        model: 'Ultraboost',
        variant: 'Low',
        descriptor: 'Performance running fused with lifestyle',
        audience: 'Comfort-first buyers',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1624974292623-87b5fb64f228?w=800&h=800&fit=crop'
      },
      {
        model: 'Yeezy (350 / 700)',
        variant: 'Low/Chunky',
        descriptor: 'High-demand collaborative silhouette',
        audience: 'Hype market',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'newbalance',
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
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=800&fit=crop'
      },
      {
        model: 'New Balance 550',
        variant: 'Low',
        descriptor: 'Retro basketball-silhouette revival',
        audience: 'Fashion crowd',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop'
      },
      {
        model: 'New Balance 990 Series',
        variant: 'Low',
        descriptor: 'Premium cushioning, dad shoe aesthetic',
        audience: 'Premium casuals',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'New Balance 574',
        variant: 'Low',
        descriptor: 'Classic heritage runner',
        audience: 'Everyday wearers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=800&fit=crop'
      },
      {
        model: 'New Balance 550',
        variant: 'Low',
        descriptor: 'Retro basketball-silhouette revival',
        audience: 'Fashion crowd',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop'
      },
      {
        model: 'New Balance 990 Series',
        variant: 'Low',
        descriptor: 'Premium cushioning, dad shoe aesthetic',
        audience: 'Premium casuals',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=800&h=800&fit=crop'
      },
      {
        model: 'New Balance 9060 / 57/40',
        variant: 'Low',
        descriptor: 'Contemporary design & comfort',
        audience: 'Trend-aware crowd',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1610683945097-a8d4eaa7a50d?w=800&h=800&fit=crop'
      },
      {
        model: 'Fresh Foam (running collection)',
        variant: 'Low',
        descriptor: 'Performance + lifestyle crossover',
        audience: 'Active & comfort buyers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'drmartens',
    name: 'Dr. Martens',
    tagline: 'Tough by Nature. Timeless by Design.',
    heroImage: 'https://images.unsplash.com/photo-1602488606990-4b00c3344e0f?w=1200&h=600&fit=crop',
    accentColor: 'hsl(0, 70%, 40%)',
    featuredModels: [
      {
        model: '1460 8-eye Boot',
        variant: 'Boot',
        descriptor: 'Classic leather combat silhouette',
        audience: 'Alternative fashion & creatives',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1602488606990-4b00c3344e0f?w=800&h=800&fit=crop'
      },
      {
        model: '2976 Chelsea Boot',
        variant: 'Chelsea',
        descriptor: 'Slip-on grunge classic',
        audience: 'Street to smart-casual',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop'
      },
      {
        model: 'Jadon Platform',
        variant: 'Platform boot',
        descriptor: 'Elevated platform for fashion statement',
        audience: 'Bold stylers',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1628776346886-34d9f1c86e3c?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: '1460 8-eye Boot',
        variant: 'Boot',
        descriptor: 'Classic leather combat silhouette',
        audience: 'Alternative fashion & creatives',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1602488606990-4b00c3344e0f?w=800&h=800&fit=crop'
      },
      {
        model: '2976 Chelsea Boot',
        variant: 'Chelsea',
        descriptor: 'Slip-on grunge classic',
        audience: 'Street to smart-casual',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&h=800&fit=crop'
      },
      {
        model: 'Jadon Platform',
        variant: 'Platform boot',
        descriptor: 'Elevated platform for fashion statement',
        audience: 'Bold stylers',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1628776346886-34d9f1c86e3c?w=800&h=800&fit=crop'
      },
      {
        model: '1461 Oxford',
        variant: 'Low',
        descriptor: 'Dress-meets-rebellion shoe',
        audience: 'Versatile wardrobes',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&h=800&fit=crop'
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
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop'
      },
      {
        model: 'Blazer',
        variant: 'Mid / Low',
        descriptor: 'Vintage basketball silhouette now streetwear',
        audience: 'Minimalists & retro fans',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&h=800&fit=crop'
      },
      {
        model: 'Huarache',
        variant: 'Low',
        descriptor: 'Distinctive cage and neoprene fit',
        audience: '90s revival fans',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Dunk',
        variant: 'Low / High / SB',
        descriptor: 'Skate/retro crossover, huge hype potential',
        audience: 'Collectors & skaters',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop'
      },
      {
        model: 'Blazer',
        variant: 'Mid / Low',
        descriptor: 'Vintage basketball silhouette now streetwear',
        audience: 'Minimalists & retro fans',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=800&h=800&fit=crop'
      },
      {
        model: 'Pegasus',
        variant: 'Running',
        descriptor: 'Performance running shoe with lifestyle crossover',
        audience: 'Runners & daily users',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=800&h=800&fit=crop'
      },
      {
        model: 'Huarache',
        variant: 'Low',
        descriptor: 'Distinctive cage and neoprene fit',
        audience: '90s revival fans',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=800&h=800&fit=crop'
      },
      {
        model: 'React / Vaporfly',
        variant: 'Performance-lifestyle',
        descriptor: 'Tech-led running options',
        audience: 'Athletes & tech-lovers',
        priceBand: 'Premium',
        image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop'
      }
    ]
  },
  {
    id: 'puma',
    name: 'Puma',
    tagline: 'Forever Faster, Forever Fresh',
    heroImage: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=1200&h=600&fit=crop',
    accentColor: 'hsl(340, 100%, 50%)',
    featuredModels: [
      {
        model: 'Suede Classic',
        variant: 'Low',
        descriptor: 'Iconic streetwear silhouette',
        audience: 'Retro street stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&h=800&fit=crop'
      },
      {
        model: 'RS-X',
        variant: 'Chunky',
        descriptor: 'Fashion-forward chunky profile',
        audience: 'Bold stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1552066344-2464c1135c32?w=800&h=800&fit=crop'
      },
      {
        model: 'Cali',
        variant: 'Low',
        descriptor: 'Women-forward casual silhouette',
        audience: 'Lifestyle market',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1603808033587-5e92e56fc61a?w=800&h=800&fit=crop'
      }
    ],
    allModels: [
      {
        model: 'Suede Classic',
        variant: 'Low',
        descriptor: 'Iconic streetwear silhouette',
        audience: 'Retro street stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?w=800&h=800&fit=crop'
      },
      {
        model: 'RS-X',
        variant: 'Chunky',
        descriptor: 'Fashion-forward chunky profile',
        audience: 'Bold stylers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1552066344-2464c1135c32?w=800&h=800&fit=crop'
      },
      {
        model: 'Cali',
        variant: 'Low',
        descriptor: 'Women-forward casual silhouette',
        audience: 'Lifestyle market',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1603808033587-5e92e56fc61a?w=800&h=800&fit=crop'
      },
      {
        model: 'Slipstream / Basket',
        variant: 'Low',
        descriptor: 'Sleek court-inspired options',
        audience: 'Casual wearers',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&h=800&fit=crop'
      },
      {
        model: 'Clyde',
        variant: 'Low',
        descriptor: 'Basketball-turned-street icon',
        audience: 'Heritage fans',
        priceBand: 'Mid',
        image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&h=800&fit=crop'
      }
    ]
  }
];
