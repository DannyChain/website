const title = "DannyChain";
const description = "Entrepreneur | Developer | Trader | Admin at hypnochain.com | Hive-Engine Witness";

const SEO = {
  title,
  description,
  canonical: "https://dannychain.vercel.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://dannychain.vercel.app",
    title,
    description,
    images: [
      {
        url: "https://dannychain.vercel.app/static/images/banner.jpg",
        alt: title,
        width: 2240,
        height: 1260,
      },
    ],
  },
  twitter: {
    handle: "@Danny_Chain",
    site: "@Danny_Chain",
    cardType: "summary_large_image",
  },
};

export default SEO;
