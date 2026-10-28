import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "View your selected classical Ayurvedic formulations in your shopping cart.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
