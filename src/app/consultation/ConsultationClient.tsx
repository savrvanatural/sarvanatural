"use client";

import React from "react";
import { VAIDYA_PROFILES } from "@/data/vaidyas";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { useConsultationStore } from "@/store/useConsultationStore";
import {
  Sparkles,
  Calendar,
  ShieldCheck,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { buildConsultationInquiryWhatsAppUrl } from "@/lib/whatsapp";

export function ConsultationClient() {
  const { openConsultation } = useConsultationStore();

  const faqs = [
    {
      q: "How does the Ayurvedic consultation work?",
      a: "Our Vaidya conducts a 15-minute diagnostic assessment reviewing your current diet, sleep quality, and dominant Prakriti (Vata, Pitta, or Kapha) to advise appropriate herbs and lifestyle changes.",
    },
    {
      q: "What language will the doctor speak?",
      a: "Consultations are conducted in Hindi, English, or conversational Hinglish based on your preference selected during slot booking.",
    },
    {
      q: "Is there any fee or payment required?",
      a: "No. This preliminary 15-minute guidance session is provided completely free of charge as part of our Ayurvedic wellness initiative.",
    },
    {
      q: "Can I ask about specific products like Moringa, Triphala, or Ashwagandha?",
      a: "Absolutely. The Vaidya will advise on optimal dosage timing (Anupana) and whether a given botanical formulation suits your current bodily state and wellness goals.",
    },
  ];

  return (
    <div className="bg-ayur-cream min-h-screen py-8 sm:py-16 border-b border-ayur-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ayur-sageLight/70 border border-ayur-sage/30 text-xs font-semibold text-ayur-primary uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-ayur-gold" />
            <span>Complimentary Holistic Guidance</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-ayur-dark leading-tight">
            Consult Our Classical Ayurvedic Vaidyas
          </h1>
          <p className="text-xs sm:text-base text-stone-600 mt-2 sm:mt-3 leading-relaxed font-sans">
            Personalized advice on Dosha balancing, dietary rhythm (Dinacharya), and classical herbal decoctions from certified BAMS &amp; MD doctors.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => openConsultation()}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-ayur-primary text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded hover:bg-ayur-secondary transition-all shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-ayur-gold" />
              <span>Schedule 15-Min Free Session</span>
            </button>
            <a
              href={buildConsultationInquiryWhatsAppUrl({
                concern: "Ayurvedic Lifestyle & Formulation Guidance",
              })}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Doctor Profiles Grid */}
        <div className="mb-12 sm:mb-20">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-ayur-dark text-center mb-6 sm:mb-10">
            Our Panel of Ayurvedic Practitioners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {VAIDYA_PROFILES.map((doctor, idx) => (
              <div
                key={idx}
                className="bg-white p-5 sm:p-8 rounded-lg border border-ayur-border shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-ayur-gold/60 flex-shrink-0">
                      <ImageWithFallback
                        src={doctor.avatarUrl}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                        fallbackTitle="Vaidya"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-base sm:text-lg font-bold text-ayur-dark">
                        {doctor.name}
                      </h3>
                      <p className="text-xs text-ayur-primary font-medium mt-0.5">
                        {doctor.degrees}
                      </p>
                      <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                        {doctor.experienceYears}+ years clinical experience
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-stone-600 mb-6">
                    <div className="p-2.5 bg-ayur-parchment/60 rounded border border-ayur-sand/80">
                      <strong className="text-ayur-dark block mb-0.5 font-sans">
                        Specialization:
                      </strong>
                      <span>{doctor.specialization}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Govt. Registration: {doctor.registrationNo}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => openConsultation()}
                    className="flex-1 py-2.5 bg-ayur-parchment hover:bg-ayur-sageSubtle text-ayur-dark hover:text-ayur-primary border border-ayur-sand font-semibold text-xs rounded transition-colors text-center"
                  >
                    Book with {doctor.name.split(" ")[1]} &rarr;
                  </button>
                  <a
                    href={buildConsultationInquiryWhatsAppUrl({
                      concern: `Consultation with ${doctor.name} (${doctor.specialization})`,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded transition-colors flex items-center gap-1.5 shadow-xs"
                    title={`Inquire via WhatsApp with ${doctor.name}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Steps */}
        <div className="bg-white p-5 sm:p-12 rounded-lg border border-ayur-border mb-12 sm:mb-20">
          <h2 className="font-serif text-2xl font-bold text-ayur-dark text-center mb-8">
            How Your Consultation Unfolds
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-ayur-primary/10 text-ayur-primary flex items-center justify-center mx-auto font-bold font-serif text-lg border border-ayur-primary/20">
                1
              </div>
              <h4 className="font-serif text-base font-bold text-ayur-dark">
                Pick Date &amp; Slot
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Choose a 15-minute window that suits your schedule. Select Hindi, English, or Hinglish.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-ayur-primary/10 text-ayur-primary flex items-center justify-center mx-auto font-bold font-serif text-lg border border-ayur-primary/20">
                2
              </div>
              <h4 className="font-serif text-base font-bold text-ayur-dark">
                Prakriti Assessment
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Our Vaidya evaluates your Agni (digestive fire), daily sleep, and physical symptoms to pinpoint root imbalances.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-ayur-primary/10 text-ayur-primary flex items-center justify-center mx-auto font-bold font-serif text-lg border border-ayur-primary/20">
                3
              </div>
              <h4 className="font-serif text-base font-bold text-ayur-dark">
                Personalized Regimen
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto leading-relaxed">
                Receive an actionable summary including exact herb dosages, anupana pairings, and foods to favor.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-ayur-dark text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-lg border border-ayur-border/80 shadow-xs"
              >
                <h4 className="font-serif text-sm font-bold text-ayur-dark mb-1.5 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-ayur-gold flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
