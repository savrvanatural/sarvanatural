import React from "react";
import { Metadata } from "next";
import { OrderTrackingClient } from "./OrderTrackingClient";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getBreadcrumbSchema } from "@/lib/seo/structured-data";

export const metadata: Metadata = buildPageMetadata({
  title: "Track Your Order Consignment — Live Courier Dispatch Status",
  description:
    "Track your SARVA NATURAL shipment live. Enter your Order ID to see real-time dispatch, transit, and delivery updates via BlueDart, Delhivery, or DTDC.",
  path: "/pages/order-tracking",
});

export default function OrderTrackingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Track Order", path: "/pages/order-tracking" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <OrderTrackingClient />
    </>
  );
}
