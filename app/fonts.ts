import { Merriweather, Roboto } from "next/font/google";

export const merriweather = Merriweather({
  weight: ["900", "700", "400", "300"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  weight: ["300", "400", "700", "900", "100", "500"],
  subsets: ["latin"],
});
