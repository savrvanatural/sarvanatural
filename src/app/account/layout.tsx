import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patron Account",
  description: "Manage your SARVA NATURAL orders, delivery addresses, and personal profile.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
