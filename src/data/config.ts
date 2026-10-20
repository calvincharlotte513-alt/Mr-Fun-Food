export interface MenuItem {
  id: string;
  name: string;
  category: 'gizz-dodo' | 'upcoming';
  description: string;
  price?: number;
  image: string;
  isAvailable: boolean;
  statusText?: string;
  portionDetails?: string;
  ingredients: string[];
}

export interface GizzDodoRecipeVariation {
  id: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  image: string;
  culinaryHighlight: string;
  heatLevel: number; // 1 to 5
  crunchLevel: string;
  pairingDrink: string;
  chefSecret: string;
  price: number;
}

export interface TastingPack {
  id: string;
  name: string;
  badge: string;
  serves: string;
  weight: string;
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  features: string[];
}

export const BUSINESS_CONFIG = {
  brandName: 'MR FUN',
  fullName: 'MR FUN FOOD REPUBLIC HUB',
  topBarName: 'MR FUN FOOD REPUBLIC',
  productName: 'MR FUN GIZZDODO',
  tagline: 'Tastier Than Ever!',
  phone: '+234 813 677 7379',
  whatsappNumber: '2348136777379',
  email: 'hello@mrfungizzdodo.com',
  orderEmail: 'orders@mrfungizzdodo.com',
  cateringEmail: 'catering@mrfungizzdodo.com',
  address: 'Plot 12, Admiralty Way, Lekki Phase 1',
  city: 'Lagos, Nigeria',
  openingHours: 'Mon – Sat: 9:00 AM – 10:00 PM | Sun: 12:00 PM – 9:00 PM',
  currencySymbol: '₦',
  standardDeliveryFee: 1500,
  packagingFee: 300,
  freeDeliveryThreshold: 25000,
  socialLinks: {
    instagram: 'https://instagram.com/mrfungizzdodo',
    tiktok: 'https://tiktok.com/@mrfungizzdodo',
    facebook: 'https://facebook.com/mrfungizzdodo',
    youtube: 'https://youtube.com/@mrfungizzdodo',
  },
  assets: {
    logo: '/assets/aistudio/IMG-20261020-WA0007_12c0c704.jpg',
    chef: '/assets/aistudio/IMG-20261020-WA0016_81600fe9.jpg',
    ceoPhoto: '/assets/aistudio/IMG-20261020-WA0016_81600fe9.jpg',
    aboutHeritage: '/assets/images/hero_about_heritage_1792497456555.jpg',
    gizzdodoPanoramic: '/assets/images/hero_gizzdodo_panoramic_1792494941620.jpg',
    menuBackdrop: '/assets/images/hero_menu_culinary_backdrop_1792494941654.jpg',
    contactHospitality: '/assets/images/hero_contact_hospitality_1792494942268.jpg',
    gizzdodoBowl: '/assets/images/hero_nigerian_gizdodo_1792492147435.jpg',
    recipeClassic: '/assets/images/variation_classic_gizzdodo_1792496242875.jpg',
    recipeSpicy: '/assets/images/variation_spicy_gizzdodo_1792496244856.jpg',
    recipeGroundnut: '/assets/images/variation_groundnut_gizzdodo_1792497455416.jpg',
    recipeCoconut: '/assets/images/variation_coconut_gizzdodo_1792496249773.jpg',
  },
};

export const TASTING_PACKS: TastingPack[] = [
  {
    id: 'pack-solo',
    name: 'Solo Craving Pack',
    badge: 'Single Portion',
    serves: '1 Person',
    weight: '450g Pack',
    price: 4500,
    description: 'The definitive solo indulgence. Tender hand-trimmed chicken gizzard and sweet caramelized plantain tossed in our signature aromatic pepper glaze.',
    image: BUSINESS_CONFIG.assets.gizzdodoPanoramic,
    features: ['Freshly chopped gizzard & plantain', 'Standard pepper glaze', 'Tamper-proof insulated pack'],
  },
  {
    id: 'pack-feast',
    name: 'Feast Sharing Tray',
    badge: 'Most Popular',
    serves: '2 – 3 Persons',
    weight: '900g Platter',
    price: 7000,
    isPopular: true,
    description: 'Generously loaded for foodies and couples. Double portions of braised gizzards and golden dodo simmered together with sweet sliced onions.',
    image: BUSINESS_CONFIG.assets.gizzdodoBowl,
    features: ['Double portion gizzard & plantain', 'Extra sweet sautéed onions', 'Perfect for sharing'],
  },
  {
    id: 'pack-owambe',
    name: 'Owambe Mega Platter',
    badge: 'Party & Group Tray',
    serves: '6 – 8 Persons',
    weight: '2.5kg Mega Tray',
    price: 18500,
    description: 'The life of every Nigerian celebration. A magnificent feast tray piled high with caramelized plantain and tender gizzard in smoking hot reduction.',
    image: BUSINESS_CONFIG.assets.recipeSpicy,
    features: ['Party-grade feast portion', 'Kept warm in insulated foil tray', 'Includes custom spice adjustment'],
  },
];

export const CURRENT_MENU_ITEMS: MenuItem[] = [
  {
    id: 'gizz-dodo-classic',
    name: 'Signature Mr Fun Gizz Dodo',
    category: 'gizz-dodo',
    description:
      'Our flagship offering: chopped tender chicken gizzards and sweet ripe fried plantain (dodo) tossed in a fragrant, rich pepper and onion sauce.',
    price: 4500,
    image: BUSINESS_CONFIG.assets.gizzdodoPanoramic,
    isAvailable: true,
    portionDetails: 'Standard Pack (Chopped gizzard + Chopped plantain)',
    ingredients: ['Chopped Chicken Gizzard', 'Chopped Ripe Plantain (Dodo)', 'Red Bell Pepper (Tatashe)', 'Scotch Bonnet (Ata Rodo)', 'Sautéed Onions', 'Chef Seasoning'],
  },
  {
    id: 'gizz-dodo-jumbo',
    name: 'Gizz Dodo Special Feast Pack',
    category: 'gizz-dodo',
    description:
      'A generous portion of chopped seasoned gizzards and caramelized sweet plantains, simmered in extra savory pepper glaze for groups and gatherings.',
    price: 7000,
    image: BUSINESS_CONFIG.assets.gizzdodoBowl,
    isAvailable: true,
    portionDetails: 'Sharing Portion (Chopped gizzard + Chopped plantain)',
    ingredients: ['Double Portion Chopped Gizzard', 'Caramelized Sweet Dodo', 'Rich Pepper Sauce', 'Sliced Sweet Onions'],
  },
];

export const GIZZ_DODO_RECIPES: GizzDodoRecipeVariation[] = [
  {
    id: 'classic-gizz-dodo',
    title: 'Classic Gizz Dodo',
    badge: 'The Signature',
    subtitle: 'The timeless standard of chopped gizzard and sweet plantain',
    description:
      'Our iconic recipe that started it all: chopped chicken gizzards braised to tender savory perfection, paired with naturally ripened golden fried plantain cubes, united in a fragrant red pepper and sweet onion reduction.',
    image: BUSINESS_CONFIG.assets.recipeClassic,
    culinaryHighlight: 'Tender Chopped Gizzard · Caramelized Dodo · Signature Pepper Reduction',
    heatLevel: 3,
    crunchLevel: 'Soft & Tender with Golden Crust',
    pairingDrink: 'Chilled Hibiscus Zobo with Ginger & Cloves',
    chefSecret: 'Simmered in double-reduced red tatashe paste for concentrated savory umami.',
    price: 4500,
  },
  {
    id: 'spicy-gizz-dodo',
    title: 'Spicy Gizz Dodo',
    badge: 'Fiery & Bold',
    subtitle: 'An intense, heat-packed pepper celebration',
    description:
      'Crafted for lovers of bold Nigerian heat. Succulent chopped gizzards and sweet plantains glazed in an elevated scotch bonnet (ata rodo) reduction with cracked chili flakes and sautéed red onions.',
    image: BUSINESS_CONFIG.assets.recipeSpicy,
    culinaryHighlight: 'Intense Scotch Bonnet Glaze · Chili Flakes · Sweet Red Onions',
    heatLevel: 5,
    crunchLevel: 'High Heat Sizzle & Caramelized Edges',
    pairingDrink: 'Ice-Cold Nigerian Chapman with Angostura Bitters',
    chefSecret: 'Flame-seared scotch bonnets tossed with charred shallots for aromatic fire.',
    price: 4500,
  },
  {
    id: 'groundnut-gizz-dodo',
    title: 'Groundnut Gizzdodo',
    badge: 'Nutty & Crunchy',
    subtitle: 'Tender chopped gizzard & sweet plantain tossed with roasted groundnuts',
    description:
      'A beloved, deeply savory culinary fusion pairing tender chopped chicken gizzards and sweet caramelized plantain (dodo) with golden roasted, crunchy groundnuts (peanuts), all brought together in our signature pepper and onion glaze.',
    image: BUSINESS_CONFIG.assets.recipeGroundnut,
    culinaryHighlight: 'Chopped Tender Gizzard · Golden Sweet Dodo · Roasted Crunchy Groundnuts',
    heatLevel: 3,
    crunchLevel: 'Distinct Crunchy Roasted Groundnut Texture',
    pairingDrink: 'Cold Malt Beverage or Palm Wine',
    chefSecret: 'Hand-roasted Nigerian groundnuts crushed coarse for an unforgettable textural bite.',
    price: 4800,
  },
  {
    id: 'coconut-gizz-dodo',
    title: 'Coconut Gizz Dodo',
    badge: 'Aromatic & Exotic',
    subtitle: 'Infused with fragrant coconut essence',
    description:
      'A distinctive culinary harmony: tender gizzard cubes and sweet caramelized plantains slowly simmered in an aromatic coconut milk-infused pepper sauce, topped with toasted coconut accents.',
    image: BUSINESS_CONFIG.assets.recipeCoconut,
    culinaryHighlight: 'Pure Coconut Milk Infusion · Toasted Coconut Flakes · Sweet Dodo Balance',
    heatLevel: 2,
    crunchLevel: 'Velvety Sauce with Crisp Coconut Flakes',
    pairingDrink: 'Fresh Coconut Water or Pineapple Ginger Juice',
    chefSecret: 'Freshly extracted creamy coconut milk blended directly into the reduction.',
    price: 5000,
  },
];

export const UPCOMING_MENU_ITEMS: MenuItem[] = [
  {
    id: 'coconut-rice-future',
    name: 'Fragrant Coconut Rice',
    category: 'upcoming',
    description:
      'Rich, aromatic rice slow-cooked in pure fresh coconut milk extract with herbs and native seasonings. Currently in active culinary perfection.',
    image: BUSINESS_CONFIG.assets.menuBackdrop,
    isAvailable: false,
    statusText: 'Future Offering · In Development',
    ingredients: ['Fresh Coconut Milk Extract', 'Parboiled Long Grain Rice', 'Aromatic Herbs', 'Chef Secret Blend'],
  },
];

export const KITCHEN_LAWS = [
  {
    number: '01',
    title: 'Zero Pre-Fried Dodo',
    description: 'Every plantain is cubed and fried fresh for each order. No reheated, rubbery dodo ever leaves our kitchen.',
  },
  {
    number: '02',
    title: 'Triple-Cleaned Tender Gizzards',
    description: 'Trimmed meticulously by hand and slow-braised until succulent and tender to bite, never tough or chewy.',
  },
  {
    number: '03',
    title: 'Fresh Lagos Scotch Bonnets',
    description: 'Pure, market-fresh tatashe, shombo, and ata rodo. Zero artificial powders, synthetic dyes, or shortcuts.',
  },
  {
    number: '04',
    title: 'Tamper-Sealed Delivery Trays',
    description: 'Insulated hot-pack packaging engineered to preserve aroma, sizzle, and heat from our woks to your doorstep.',
  },
  {
    number: '05',
    title: 'The “Tastier Than Ever” Vow',
    description: 'If every single mouthful does not make you pause and smile with satisfaction, we have not met our standard.',
  },
];
