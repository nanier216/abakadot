import { Target, Globe2, Heart, GraduationCap, Mail, ExternalLink } from 'lucide-react';

export type Page = 'home' | 'pricing' | 'about' | 'faq' | 'dashboard';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

const team = [
  {
    name: 'Nanier P. Leona',
    role: 'Team Leader',
    degree: 'BS Computer Engineering',
    initials: 'NL',
    color: 'bg-brand-teal text-white',
    bio: 'Leads the PinDot hardware-software integration and project direction, ensuring the device meets both technical standards and accessibility goals.',
    tag: 'Team Leader',
    tagColor: 'bg-brand-teal/10 text-brand-teal',
  },
  {
    name: 'Ashley Zoie B. Bien',
    role: 'Software Engineer',
    degree: 'BS Computer Engineering',
    initials: 'AB',
    color: 'bg-brand-orange text-white',
    bio: 'Develops the AI learning engine and cloud connectivity layer, translating complex spaced-repetition algorithms into seamless learner experiences.',
    tag: 'Core Engineer',
    tagColor: 'bg-brand-orange/10 text-brand-orange',
  },
  {
    name: 'Angeli Jean V. Navarro',
    role: 'Hardware Engineer',
    degree: 'BS Computer Engineering',
    initials: 'AN',
    color: 'bg-brand-teal text-white',
    bio: 'Designs and refines the micro-solenoid Braille cell mechanism, balancing tactile accuracy, component cost, and long-term durability.',
    tag: 'Core Engineer',
    tagColor: 'bg-brand-teal/10 text-brand-teal',
  },
  {
    name: 'Ryan Alvin O. Mercado',
    role: 'Faculty Mentor',
    degree: 'Mentor & Adviser',
    initials: 'RM',
    color: 'bg-slate-700 text-white',
    bio: 'Provides engineering and research guidance to Team AbakaDot, drawing on years of academic experience in embedded systems and assistive technology development.',
    tag: 'Mentor',
    tagColor: 'bg-slate-100 text-slate-600',
  },
];

const values = [
  { icon: Target, title: 'Mission-Driven', desc: 'Every design decision is anchored to one goal: making Braille literacy affordable and accessible for low- and middle-income communities worldwide.' },
  { icon: Globe2, title: 'Global Reach', desc: 'We build for the 2.2 billion people experiencing vision impairment — prioritizing those underserved by mainstream assistive technology markets.' },
  { icon: Heart, title: 'Learner-First', desc: 'From the noise-cancellation microphone to the AI curriculum engine, every feature starts with the learner\'s independence and dignity in mind.' },
];

export default function About({ onNavigate: _ }: AboutProps) {
  return (
    <div className="bg-white dark:bg-slate-950">

      {/* ── Mission Hero ── */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-[#0d4f47] via-[#0f766e] to-brand-teal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.15),transparent_55%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-teal text-xs font-bold uppercase tracking-widest mb-6">About Us</span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Team <span className="text-brand-teal">AbakaDot</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
            We are democratizing tactile literacy globally — bridging the gap in assistive technology for low- and middle-income regions, one Braille cell at a time.
          </p>
          <div className="inline-flex items-center gap-3 bg-white/15 border border-white/25 rounded-2xl px-6 py-3">
            <GraduationCap className="w-5 h-5 text-brand-orange" />
            <span className="text-white font-medium">Ateneo de Naga University · College of Engineering</span>
          </div>
        </div>
      </section>

      {/* ── Mission Details ── */}
      <section className="bg-[#F8FAFC] dark:bg-slate-900 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <span className="inline-block text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">Our Mission</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                Assistive technology should know no economic boundary.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Commercial Braille displays cost between $500 and several thousands of dollars — placing them well out of reach for the vast majority of the world's 2.2 billion people with vision impairment. That disparity drove us to build PinDot.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our device combines a single-cell micro-solenoid Braille mechanism with voice-driven AI to deliver a full tactile literacy curriculum at a fraction of the cost — designed from the ground up for learners in the Philippines and beyond.
              </p>
            </div>

            <div className="space-y-5">
              {values.map(v => (
                <div key={v.title} className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-100 dark:border-slate-700 shadow-sm flex gap-5 items-start hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 bg-brand-teal/10 rounded-xl flex items-center justify-center shrink-0">
                    <v.icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1.5">{v.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="bg-white dark:bg-slate-950 py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-teal text-xs font-bold uppercase tracking-widest mb-4">The Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              The engineers behind PinDot
            </h2>
            <p className="text-slate-500 text-lg mt-3 max-w-xl mx-auto">
              A student-led capstone team from Ateneo de Naga University building technology that matters.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-700 shadow-sm p-6 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Avatar */}
                <div className="relative mb-5">
                  <div className={`w-20 h-20 rounded-2xl ${member.color} flex items-center justify-center font-display font-bold text-2xl shadow-md`}>
                    {member.initials}
                  </div>
                  <span className={`absolute -bottom-2 left-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${member.tagColor}`}>
                    {member.tag}
                  </span>
                </div>

                {/* Info */}
                <div className="mt-3 flex-1">
                  <h3 className="font-display font-bold text-slate-900 dark:text-white text-lg leading-snug">{member.name}</h3>
                  <p className="text-brand-teal text-sm font-semibold mt-0.5">{member.role}</p>
                  <p className="text-slate-400 text-xs font-medium mt-0.5">{member.degree}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-4">{member.bio}</p>
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-5 pt-5 border-t border-gray-100">
                  <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 text-slate-400 hover:bg-brand-teal/10 hover:text-brand-teal transition-all" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-50 text-slate-400 hover:bg-brand-teal/10 hover:text-brand-teal transition-all" aria-label="LinkedIn">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* University banner */}
          <div className="mt-14 bg-gradient-to-r from-brand-teal/8 to-brand-orange/5 border border-brand-teal/15 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                <GraduationCap className="w-7 h-7 text-brand-teal" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Ateneo de Naga University</h4>
                <p className="text-slate-500 text-sm">Naga City, Camarines Sur, Philippines</p>
              </div>
            </div>
            <div className="text-slate-600 text-sm max-w-sm text-center sm:text-right">
              PinDot was developed as a BS Computer Engineering capstone project, merging embedded systems, AI, and inclusive design.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
