export const SITE_URL = "https://realwebstudio.com";
export const SITE_NAME = "RealWebStudio";
export const SITE_DESCRIPTION =
  "Done-for-you websites, local SEO, and AI growth systems for Canadian small businesses.";

export const BUSINESS = {
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "support@realwebstudio.com",
  telephone: "+1-587-875-6567",
  address: {
    streetAddress: "2311 90b St SW, Suite 201",
    addressLocality: "Edmonton",
    addressRegion: "AB",
    postalCode: "T6X 1V8",
    addressCountry: "CA",
  },
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
