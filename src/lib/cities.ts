export type City = {
  slug: string;
  name: string;
  province: string;
  provinceName: string;
  tier: 1 | 2;
  heroImage: string;
  imageAlt: string;
};

const IMAGES = [
  "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/4481534/pexels-photo-4481534.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1400",
  "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1400",
];

export const cities: City[] = [
  // ── Tier 1 — Major Canadian Cities ──────────────────────────────────
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "AB",
    provinceName: "Alberta",
    tier: 1,
    heroImage: IMAGES[0],
    imageAlt: "Small business web design in Edmonton Alberta",
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "AB",
    provinceName: "Alberta",
    tier: 1,
    heroImage: IMAGES[1],
    imageAlt: "Professional web design services in Calgary Alberta",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "BC",
    provinceName: "British Columbia",
    tier: 1,
    heroImage: IMAGES[2],
    imageAlt: "Web design company in Vancouver British Columbia",
  },
  {
    slug: "toronto",
    name: "Toronto",
    province: "ON",
    provinceName: "Ontario",
    tier: 1,
    heroImage: IMAGES[3],
    imageAlt: "Website design services for Toronto Ontario businesses",
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "ON",
    provinceName: "Ontario",
    tier: 1,
    heroImage: IMAGES[4],
    imageAlt: "Web design and development in Ottawa Ontario",
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "MB",
    provinceName: "Manitoba",
    tier: 1,
    heroImage: IMAGES[5],
    imageAlt: "Small business website design in Winnipeg Manitoba",
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "NS",
    provinceName: "Nova Scotia",
    tier: 1,
    heroImage: IMAGES[0],
    imageAlt: "Professional web design for Halifax Nova Scotia businesses",
  },
  {
    slug: "saskatoon",
    name: "Saskatoon",
    province: "SK",
    provinceName: "Saskatchewan",
    tier: 1,
    heroImage: IMAGES[1],
    imageAlt: "Web design services in Saskatoon Saskatchewan",
  },
  {
    slug: "regina",
    name: "Regina",
    province: "SK",
    provinceName: "Saskatchewan",
    tier: 1,
    heroImage: IMAGES[2],
    imageAlt: "Website design and development in Regina Saskatchewan",
  },
  {
    slug: "victoria",
    name: "Victoria",
    province: "BC",
    provinceName: "British Columbia",
    tier: 1,
    heroImage: IMAGES[3],
    imageAlt: "Web design company in Victoria British Columbia",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    province: "ON",
    provinceName: "Ontario",
    tier: 1,
    heroImage: IMAGES[4],
    imageAlt: "Web design services in Mississauga Ontario",
  },
  {
    slug: "brampton",
    name: "Brampton",
    province: "ON",
    provinceName: "Ontario",
    tier: 1,
    heroImage: IMAGES[5],
    imageAlt: "Professional web design for Brampton Ontario businesses",
  },

  // ── Tier 2 — Alberta Cities ──────────────────────────────────────────
  {
    slug: "red-deer",
    name: "Red Deer",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[0],
    imageAlt: "Web design and development in Red Deer Alberta",
  },
  {
    slug: "lethbridge",
    name: "Lethbridge",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[1],
    imageAlt: "Small business web design in Lethbridge Alberta",
  },
  {
    slug: "airdrie",
    name: "Airdrie",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[2],
    imageAlt: "Professional website design in Airdrie Alberta",
  },
  {
    slug: "st-albert",
    name: "St. Albert",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[3],
    imageAlt: "Web design services for St. Albert Alberta businesses",
  },
  {
    slug: "spruce-grove",
    name: "Spruce Grove",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[4],
    imageAlt: "Website design in Spruce Grove Alberta",
  },
  {
    slug: "fort-mcmurray",
    name: "Fort McMurray",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[5],
    imageAlt: "Web design company in Fort McMurray Alberta",
  },
  {
    slug: "grande-prairie",
    name: "Grande Prairie",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[0],
    imageAlt: "Small business web design in Grande Prairie Alberta",
  },
  {
    slug: "medicine-hat",
    name: "Medicine Hat",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[1],
    imageAlt: "Professional web design for Medicine Hat Alberta businesses",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[2],
    imageAlt: "Web design services in Beaumont Alberta",
  },
  {
    slug: "leduc",
    name: "Leduc",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[3],
    imageAlt: "Website design and development in Leduc Alberta",
  },
  {
    slug: "camrose",
    name: "Camrose",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[4],
    imageAlt: "Professional web design in Camrose Alberta",
  },
  {
    slug: "lloydminster",
    name: "Lloydminster",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[5],
    imageAlt: "Small business website design in Lloydminster Alberta",
  },
  {
    slug: "cochrane",
    name: "Cochrane",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[0],
    imageAlt: "Web design services for Cochrane Alberta businesses",
  },
  {
    slug: "chestermere",
    name: "Chestermere",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[1],
    imageAlt: "Professional web design in Chestermere Alberta",
  },
  {
    slug: "okotoks",
    name: "Okotoks",
    province: "AB",
    provinceName: "Alberta",
    tier: 2,
    heroImage: IMAGES[2],
    imageAlt: "Web design and development for Okotoks Alberta businesses",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByProvince(): Record<string, City[]> {
  return cities.reduce(
    (acc, city) => {
      if (!acc[city.provinceName]) acc[city.provinceName] = [];
      acc[city.provinceName].push(city);
      return acc;
    },
    {} as Record<string, City[]>,
  );
}
