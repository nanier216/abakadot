import { useState } from "react"
import { Check, X, Zap, ArrowRight, Star } from "lucide-react"

export type Page = "home" | "pricing" | "about" | "faq" | "dashboard"

interface PricingProps {
  onNavigate: (page: Page) => void
}

type BillingPeriod = "1mo" | "6mo" | "1yr"

const premiumPrices: Record<BillingPeriod, {
  price: string
  period: string
  savings?: string
  per?: string
}> = {
  "1mo": { price: "₱500", period: "per month", per: "₱500/mo" },
  "6mo": {
    price: "₱2,700",
    period: "every 6 months",
    savings: "Save ₱300",
    per: "₱450/mo",
  },
  "1yr": {
    price: "₱5,400",
    period: "per year",
    savings: "Save ₱600",
    per: "₱450/mo",
  },
}

const billingOptions: { id: BillingPeriod; label: string }[] = [
  { id: "1mo", label: "1 Month" },
  { id: "6mo", label: "6 Months" },
  { id: "1yr", label: "1 Year" },
]

const basicFeatures = [
  { text: "Basic Alphabet Lessons (A–Z)", included: true },
  { text: "Voice command interaction", included: true },
  { text: "Progress tracking", included: true },
  { text: "Reading Mode", included: false },
  { text: "Learning Mode", included: false },
  { text: "Writing Mode", included: false },
  { text: "AI Spaced Repetition", included: false },
  { text: "Educator Dashboard access", included: false },
]

const premiumFeatures = [
  { text: "All Basic Alphabet Lessons", included: true },
  { text: "Voice command interaction", included: true },
  { text: "Full progress tracking", included: true },
  { text: "Reading Mode", included: true },
  { text: "Learning Mode", included: true },
  { text: "Writing Mode", included: true },
  { text: "AI Spaced Repetition algorithm", included: true },
  { text: "Educator Dashboard access", included: true },
]

export default function Pricing({ onNavigate }: PricingProps) {
  const [billing, setBilling] = useState<BillingPeriod>("1mo")

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-950">
      {/* ── Header ── */}
      <section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
            Affordable access to
            <br className="hidden sm:block" />{" "}
            <span className="text-brand-teal">tactile literacy.</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            One device. One mission. Transparent pricing designed for schools,
            families, and learners in low- and middle-income communities.
          </p>
        </div>
      </section>

      {/* ── Hardware ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
              Hardware
            </h2>
            <p className="text-slate-500">
              A one-time purchase — no ongoing hardware fees.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Visual */}
              <div className="bg-gradient-to-br from-brand-teal/8 to-brand-orange/8 p-10 flex items-center justify-center min-h-[280px]">
                <img
                  src="/image4.png"
                  alt="PinDot device"
                  className="max-h-64 w-auto object-contain drop-shadow-xl"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
                <div className="text-center text-slate-400 font-medium hidden">
                  PinDot Device
                </div>
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5 w-fit">
                  One-Time Purchase
                </div>
                <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">
                  PinDot Device
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  The flagship AI-powered Braille learning device with a
                  single-cell micro-solenoid mechanism, noise-cancellation
                  microphone, and cloud connectivity — built for durability in
                  any learning environment.
                </p>

                <div className="mb-8">
                  <div className="flex items-end gap-2">
                    <span className="font-display font-bold text-5xl text-slate-900 dark:text-white">
                      ₱11,000
                    </span>
                    <span className="text-slate-500 mb-1.5">one-time</span>
                  </div>
                  <p className="text-slate-400 text-sm mt-1">
                    Inclusive of device, charging cable, and setup guide
                  </p>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {[
                    "Single-cell micro-solenoid Braille matrix",
                    "Voice command + noise-cancellation mic",
                    "Cloud-connected via Wi-Fi",
                    "Compatible with Basic and Premium plans",
                    "1-year hardware warranty",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-slate-700 text-sm"
                    >
                      <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold px-7 py-3.5 rounded-2xl hover:bg-[#25B5A3] transition-all shadow-md shadow-brand-teal/20 hover:shadow-lg hover:shadow-brand-teal/25 w-full sm:w-fit">
                  Purchase PinDot <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Software Subscriptions ── */}
      <section className="pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                Software Plans
              </h2>
              <p className="text-slate-500">
                Choose how you want to subscribe. Cancel anytime.
              </p>
            </div>

            {/* Billing toggle */}
            <div className="flex items-center bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-2xl p-1.5 gap-1 w-fit">
              {billingOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setBilling(opt.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    billing === opt.id
                      ? "bg-brand-teal text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {opt.label}
                  {opt.id !== "1mo" && billing === opt.id && (
                    <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-brand-orange whitespace-nowrap">
                      Best value
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Plan */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-700 p-8 shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                  Basic
                </h3>
                <p className="text-slate-500 text-sm">
                  Get started with foundational Braille at no cost.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2">
                  <span className="font-display font-bold text-5xl text-slate-900 dark:text-white">
                    Free
                  </span>
                </div>
                <p className="text-slate-400 text-sm mt-1">
                  Forever — no credit card required
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {basicFeatures.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-start gap-3 text-sm ${
                      f.included ? "text-slate-700" : "text-slate-300"
                    }`}
                  >
                    {f.included ? (
                      <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                    ) : (
                      <X className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>

              <button className="w-full border-2 border-slate-200 text-slate-700 font-semibold py-3.5 rounded-2xl hover:border-brand-teal hover:text-brand-teal transition-all">
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="rounded-3xl p-8 shadow-xl flex flex-col relative overflow-hidden bg-gradient-to-br from-[#0d4f47] via-[#0f766e] to-brand-teal">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.15),transparent_55%)] pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-display text-2xl font-bold text-white">
                        Premium
                      </h3>
                      <div className="flex items-center gap-1 bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3" /> Most Popular
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm">
                      All three learning modes + AI personalization.
                    </p>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-end gap-2">
                    <span className="font-display font-bold text-5xl text-white">
                      {premiumPrices[billing].price}
                    </span>
                    <span className="text-slate-400 mb-1.5">
                      {premiumPrices[billing].period}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-1.5">
                    {premiumPrices[billing].per && billing !== "1mo" && (
                      <span className="text-brand-teal text-sm font-medium">
                        {premiumPrices[billing].per}
                      </span>
                    )}
                    {premiumPrices[billing].savings && (
                      <span className="inline-flex items-center gap-1 bg-brand-orange/20 text-brand-orange text-xs font-bold px-2.5 py-1 rounded-full">
                        <Zap className="w-3 h-3" />{" "}
                        {premiumPrices[billing].savings}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 mt-8">
                  {premiumFeatures.map((f) => (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <Check className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                      {f.text}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-brand-teal text-white font-semibold py-3.5 rounded-2xl hover:bg-[#25B5A3] transition-all shadow-lg shadow-brand-teal/30 flex items-center justify-center gap-2">
                  Subscribe to Premium <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-center text-slate-500 text-xs mt-4">
                  Requires PinDot hardware to use all modes.
                </p>
              </div>
            </div>
          </div>

          {/* Comparison note */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              All plans include cloud sync, automatic software updates, and
              access to curriculum improvements at no extra charge.{" "}
              <button
                onClick={() => onNavigate("faq")}
                className="text-brand-teal font-medium hover:underline"
              >
                Have questions? Read the FAQ →
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
