import { BookOpen, Hand, CheckCircle2, Zap, Activity, ArrowRight, Eye, DollarSign, Globe2, ChevronRight, Sparkles } from 'lucide-react';

export type Page = 'home' | 'pricing' | 'about' | 'faq' | 'dashboard';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const steps = [
  {
    num: '01', icon: BookOpen, title: 'Learn',
    desc: 'The AI introduces new Braille characters through structured, grade-appropriate lessons at the learner\'s pace.',
    color: 'text-brand-teal', bg: 'bg-brand-teal/10', border: 'border-brand-teal/20',
  },
  {
    num: '02', icon: Hand, title: 'Practice',
    desc: 'Learners use voice commands to interact with the single-cell micro-solenoid Braille matrix in real time.',
    color: 'text-brand-orange', bg: 'bg-brand-orange/10', border: 'border-brand-orange/20',
  },
  {
    num: '03', icon: CheckCircle2, title: 'Evaluate',
    desc: 'Each response is assessed instantly. Up to three attempts are allowed before the correct answer is revealed.',
    color: 'text-brand-teal', bg: 'bg-brand-teal/10', border: 'border-brand-teal/20',
  },
  {
    num: '04', icon: Zap, title: 'Adapt',
    desc: 'The AI Spaced Repetition algorithm recalibrates difficulty, reinforcing weak characters and advancing strong ones.',
    color: 'text-brand-orange', bg: 'bg-brand-orange/10', border: 'border-brand-orange/20',
  },
  {
    num: '05', icon: Activity, title: 'Monitor',
    desc: 'Educators and caregivers track each learner\'s mastery, streaks, and response time through the live dashboard.',
    color: 'text-brand-teal', bg: 'bg-brand-teal/10', border: 'border-brand-teal/20',
  },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="bg-white dark:bg-slate-950">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white dark:bg-slate-950">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-teal/6 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 md:pt-16 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
              AI-Powered · Voice-Driven · Accessible
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.05] tracking-tight mb-6">
              Intelligence you can{' '}
              <span className="text-brand-teal">feel.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
              PinDot is a cloud-connected, AI-driven Braille learning device that delivers independent, voice-guided tactile education at a price the world can afford.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('pricing')}
                className="flex items-center justify-center gap-2 bg-brand-teal text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-[#25B5A3] transition-all shadow-lg shadow-brand-teal/25 hover:shadow-xl hover:shadow-brand-teal/30 hover:-translate-y-0.5"
              >
                Get PinDot <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('dashboard')}
                className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold text-lg px-8 py-4 rounded-2xl hover:border-brand-teal hover:text-brand-teal transition-all"
              >
                Try the Dashboard
              </button>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex items-center gap-8">
              {[
                { value: '12K+', label: 'Students' },
                { value: '40+', label: 'Countries' },
                { value: '98%', label: 'Satisfaction', teal: true },
              ].map(s => (
                <div key={s.label} className="flex flex-col">
                  <span className={`font-display font-bold text-2xl ${s.teal ? 'text-brand-teal' : 'text-slate-900 dark:text-white'}`}>{s.value}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Device visual */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-transparent to-brand-orange/10 rounded-3xl blur-xl" />
            <img
              src="/image4.png"
              alt="PinDot Braille learning device"
              className="relative w-full max-w-md object-contain drop-shadow-2xl hover:scale-[1.03] transition-transform duration-700 ease-out"
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      </section>

      {/* ── The Global Problem ── */}
      <section className="py-14 md:py-20 relative overflow-hidden bg-gradient-to-br from-[#0d4f47] via-[#0f766e] to-[#134e4a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.12),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">The Global Problem</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Vision impairment is a global crisis. Assistive technology shouldn't be.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {[
              {
                icon: Eye,
                stat: '2.2B',
                label: 'People worldwide experience vision impairment',
                sub: 'WHO estimates at least 1 billion cases are preventable or have yet to be addressed.',
                color: 'text-white', bg: 'bg-white/15',
              },
              {
                icon: Globe2,
                stat: '$411B',
                label: 'Annual financial burden from vision impairment',
                sub: 'Lost productivity, healthcare costs, and lost economic opportunity compound the crisis yearly.',
                color: 'text-brand-orange', bg: 'bg-brand-orange/20',
              },
              {
                icon: DollarSign,
                stat: '$500–$5K+',
                label: 'Cost of commercial Braille displays',
                sub: 'Existing Braille display hardware prices most low- and middle-income families completely out of reach.',
                color: 'text-white', bg: 'bg-white/15',
              },
            ].map(item => (
              <div key={item.stat} className="bg-white/8 border border-white/15 rounded-2xl p-7 backdrop-blur-sm hover:bg-white/12 transition-all">
                <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className={`font-display font-bold text-4xl md:text-5xl mb-2 ${item.color}`}>{item.stat}</div>
                <p className="text-white font-semibold leading-snug mb-2">{item.label}</p>
                <p className="text-white/60 text-sm leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Contrast callout */}
          <div className="bg-white/10 border border-white/20 rounded-2xl p-7 text-center max-w-3xl mx-auto">
            <p className="text-white text-lg md:text-xl font-display font-semibold leading-relaxed">
              PinDot costs{' '}
              <span className="text-brand-teal font-bold">₱11,000</span>
              {' '}— a fraction of what global alternatives demand, and built specifically for low- and middle-income communities.
            </p>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#F8FAFC] dark:bg-slate-900 py-12 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">How It Works</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight mb-4">
              Five steps to tactile mastery
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              Powered by an AI Spaced Repetition algorithm and a single-cell micro-solenoid Braille mechanism — no teacher required.
            </p>
          </div>

          {/* Steps: desktop horizontal, mobile vertical */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-teal via-brand-orange to-brand-teal opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
              {steps.map((step, i) => (
                <div key={step.num} className="relative flex flex-col items-center text-center lg:text-center">
                  {/* Vertical connector (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 top-[104px] w-0.5 h-6 bg-gradient-to-b from-brand-teal/40 to-transparent" />
                  )}

                  {/* Number + Icon node */}
                  <div className={`relative w-[104px] h-[104px] ${step.bg} border-2 ${step.border} rounded-2xl flex flex-col items-center justify-center mb-5 shadow-sm`}>
                    <span className={`font-display font-bold text-xs ${step.color} mb-1 tracking-widest`}>{step.num}</span>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>

                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>

                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute -right-3 top-[52px] -translate-y-1/2 w-5 h-5 text-slate-300 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Feature callouts */}
          <div className="mt-16 grid sm:grid-cols-2 gap-5">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm flex gap-5 items-start">
              <div className="w-10 h-10 bg-brand-teal/10 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5 text-brand-teal" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">AI Spaced Repetition</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Characters are re-queued based on each learner's error patterns, maximizing long-term retention with minimal session time.</p>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm flex gap-5 items-start">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center shrink-0">
                <Hand className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Single-Cell Micro-Solenoid</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">A precision-engineered single Braille cell renders all Grade 1 and Grade 2 characters with tactile accuracy in a compact, affordable form factor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-white dark:bg-slate-950 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-brand-teal to-[#1CB8A8] rounded-3xl p-10 md:p-16 shadow-2xl shadow-brand-teal/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to bring Braille<br className="hidden sm:block" /> literacy to your classroom?
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                Explore the full PinDot ecosystem — from affordable hardware to an AI-powered educator dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('pricing')}
                  className="flex items-center justify-center gap-2 bg-white text-brand-teal font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-slate-50 transition-all shadow-lg"
                >
                  View Pricing <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => onNavigate('about')}
                  className="flex items-center justify-center gap-2 border-2 border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-white/10 transition-all"
                >
                  Meet the Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
