import { useState } from "react"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"

export type Page = "home" | "pricing" | "about" | "faq" | "dashboard"

interface FAQProps {
  onNavigate: (page: Page) => void
}

const faqs = [
  {
    q: "Who is PinDot for?",
    a: "PinDot is designed specifically for learners with total blindness or severe low vision. Its voice-driven interface and tactile Braille output enable fully independent, eyes-free learning — making it suitable for children and adults across all literacy levels, from Pre-K introductory to Grade 2 Braille.",
  },
  {
    q: "How does the user interact with PinDot?",
    a: 'PinDot uses a built-in speech detection module paired with a noise-cancellation microphone. Learners issue voice commands — such as "Start Session", "Repeat", or "Next" — to navigate lessons entirely hands-free and without the need for a sighted facilitator. This design prioritizes independence and dignity in the learning process.',
  },
  {
    q: "How many Braille cells does PinDot have?",
    a: "PinDot utilizes a single Braille cell matrix — a single-cell micro-solenoid mechanism that renders one Braille character at a time. This focused design keeps the device affordable while still supporting the full Grade 1 and Grade 2 Braille curriculum across all three learning modes: Reading, Learning, and Writing.",
  },
  {
    q: "What happens if a student gets an answer wrong?",
    a: "The system is designed to support learners without discouraging them. In any of the three learning modes, a student is given a maximum of three attempts to identify or reproduce the correct Braille character. If all three attempts are incorrect, the system automatically reveals the correct answer and proceeds — ensuring the session continues to flow and the AI Spaced Repetition algorithm can re-queue that character for reinforced review in future sessions.",
  },
  {
    q: "What are the three learning modes?",
    a: "PinDot's Premium plan includes three distinct modes: Reading Mode — where the device actuates a Braille character and the learner identifies it verbally; Learning Mode — where a word is spoken aloud and the learner must recall and confirm the matching Braille cell; and Writing Mode — a more advanced mode where learners practice composing Braille sequences. All three modes are powered by the AI Spaced Repetition algorithm and available exclusively on the Premium subscription.",
  },
  {
    q: "Does PinDot require internet connectivity?",
    a: "PinDot is cloud-connected via Wi-Fi, which enables real-time progress syncing to the Educator Dashboard, curriculum updates, and AI personalization across sessions. However, the core learning session functionality is designed to operate even in lower-connectivity environments, with data syncing when a connection is restored.",
  },
  {
    q: "Can educators or caregivers monitor student progress remotely?",
    a: "Yes. PinDot includes a cloud-based Educator Dashboard (included with all Premium plan subscriptions) where educators and caregivers can view each learner's mastery percentage, current focus characters, session history, daily streaks, and average response time — in real time, from any device.",
  },
]

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
}: {
  q: string
  a: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden ${
        isOpen
          ? "border-brand-teal/30 shadow-md shadow-brand-teal/5"
          : "border-gray-100 dark:border-slate-700 shadow-sm hover:border-gray-200 hover:shadow-md"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
        aria-expanded={isOpen}
      >
        <span
          className={`font-display font-bold text-lg leading-snug transition-colors ${
            isOpen ? "text-brand-teal" : "text-slate-900 dark:text-white"
          }`}
        >
          {q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
            isOpen
              ? "bg-brand-teal text-white rotate-180"
              : "bg-slate-100 text-slate-500"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-1 border-t border-gray-100">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-[#F8FAFC] dark:bg-slate-950">
      {/* ── Header ── */}
      <section className="bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-slate-800 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">
              FAQ
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-5">
              Frequently asked questions
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Everything you need to know about PinDot — the device, the
              learning modes, and what happens inside a session.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accordion ── */}
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Still have questions CTA ── */}
      <section className="pb-10 md:pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm p-8 md:p-10 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">
                  Still have questions?
                </h3>
                <p className="text-slate-500 text-sm mt-0.5">
                  Check out our pricing page or try the live dashboard demo.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={() => onNavigate("pricing")}
                className="flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#25B5A3] transition-all shadow-sm shadow-brand-teal/20 text-sm"
              >
                View Pricing <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate("dashboard")}
                className="flex items-center justify-center gap-2 border border-gray-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:border-brand-teal hover:text-brand-teal transition-all text-sm"
              >
                Try Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
