"use client";

import React, { useState } from "react";
import { Search, Truck, CheckCircle2 } from "lucide-react";

interface TrackingStep {
  title: string;
  date: string;
  completed: boolean;
}

interface TrackingItem {
  name: string;
  qty: number;
  price: number;
}

interface TrackingResult {
  id: string;
  date: string;
  status: string;
  estimatedDelivery: string;
  courier: string;
  trackingNumber: string;
  destination: string;
  timeline: TrackingStep[];
  items: TrackingItem[];
}

export function OrderTrackingClient() {
  const [orderId, setOrderId] = useState("");
  const [phone, setPhone] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [orderResult, setOrderResult] = useState<TrackingResult | null>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;

    // Simulated tracking result
    setHasSearched(true);
    setOrderResult({
      id: orderId.toUpperCase().startsWith("SARVA-") ? orderId.toUpperCase() : `SARVA-${orderId}`,
      date: "October 25, 2026",
      status: "In Transit",
      estimatedDelivery: "2-3 Business Days",
      courier: "BlueDart Express",
      trackingNumber: "BD982736412IN",
      destination: "Delhi NCR / North Hub",
      timeline: [
        { title: "Order Verified & Confirmed", date: "Oct 25, 10:14 AM", completed: true },
        { title: "Quality Inspected & Packed at GMP Facility", date: "Oct 25, 02:30 PM", completed: true },
        { title: "Dispatched via Express Courier", date: "Oct 25, 06:45 PM", completed: true },
        { title: "In Transit to Destination Hub", date: "Oct 26, 04:20 AM", completed: true },
        { title: "Out for Delivery", date: "Estimated tomorrow", completed: false },
      ],
      items: [
        { name: "Sarva Natural Moringa Capsules (60 Caps)", qty: 1, price: 499 },
        { name: "Sarva Natural Triphala Capsules (60 Caps)", qty: 1, price: 449 },
      ],
    });
  };

  return (
    <div className="bg-ayur-cream min-h-screen py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-ayur-primary font-sans block mb-1">
            Real-Time Updates
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ayur-dark leading-tight">
            Track Your Consignment
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
            Enter your SARVA NATURAL Order ID (e.g., SARVA-847291) to check live dispatch and delivery milestones.
          </p>
        </div>

        {/* Tracking Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-ayur-border shadow-soft mb-8">
          <form onSubmit={handleTrack} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                  Order ID *
                </label>
                <input
                  type="text"
                  required
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="e.g. SARVA-847291"
                  className="w-full px-3.5 py-2.5 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary uppercase font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-ayur-dark mb-1 font-sans">
                  Registered Mobile Number (Optional)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 text-xs border border-stone-200 rounded focus:outline-none focus:ring-1 focus:ring-ayur-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-ayur-primary text-white font-semibold text-xs uppercase tracking-wider rounded hover:bg-ayur-secondary transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Track Consignment</span>
            </button>
          </form>
        </div>

        {/* Tracking Result */}
        {hasSearched && orderResult && (
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-ayur-border shadow-soft space-y-6 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-stone-100">
              <div>
                <span className="text-[10px] text-ayur-muted font-mono uppercase tracking-wider block">
                  Order Identifier
                </span>
                <h3 className="font-serif text-xl font-bold text-ayur-dark">
                  {orderResult.id}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  <Truck className="w-3.5 h-3.5" />
                  <span>{orderResult.status}</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
              <div>
                <span className="text-stone-400 block text-[11px]">Courier Partner</span>
                <strong className="text-ayur-dark">{orderResult.courier}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">AWB Tracking No.</span>
                <strong className="text-ayur-dark font-mono">{orderResult.trackingNumber}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Order Date</span>
                <strong className="text-ayur-dark">{orderResult.date}</strong>
              </div>
              <div>
                <span className="text-stone-400 block text-[11px]">Estimated Arrival</span>
                <strong className="text-emerald-700">{orderResult.estimatedDelivery}</strong>
              </div>
            </div>

            {/* Timeline */}
            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ayur-primary font-sans mb-4">
                Shipment Milestones
              </h4>
              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-200">
                {orderResult.timeline.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span
                      className={`absolute -left-6 top-0.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                        step.completed
                          ? "border-emerald-700 text-emerald-700"
                          : "border-stone-300 text-transparent"
                      }`}
                    >
                      {step.completed && <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-700 text-white" />}
                    </span>
                    <div>
                      <h5 className={`text-xs font-semibold ${step.completed ? "text-ayur-dark" : "text-stone-400"}`}>
                        {step.title}
                      </h5>
                      <span className="text-[11px] text-stone-500">{step.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Items in parcel */}
            <div className="pt-4 border-t border-stone-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-ayur-primary font-sans mb-3">
                Items in Consignment
              </h4>
              <div className="space-y-2">
                {orderResult.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 bg-stone-50 rounded text-xs">
                    <span className="text-stone-700">{item.name} &times; {item.qty}</span>
                    <strong className="text-ayur-dark">₹{item.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-xs text-stone-500">
          Have an issue with your consignment? Email our dispatch desk at{" "}
          <a href="mailto:care@sarvanatural.com" className="text-ayur-primary underline font-medium">
            care@sarvanatural.com
          </a>
        </div>
      </div>
    </div>
  );
}
