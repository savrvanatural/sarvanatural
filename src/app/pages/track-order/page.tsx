import { permanentRedirect } from "next/navigation";

export default function TrackOrderLegacyRoute() {
  permanentRedirect("/pages/order-tracking");
}
