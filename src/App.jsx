import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Target,
  TrendingUp,
  Map,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SKILL_OPTIONS = [
  "Python",
  "SQL",
  "JavaScript",
  "HTML / CSS",
  "React",
  "Java",
  "C++",
  "Git / GitHub",
  "AWS / Cloud",
  "Figma",
  "Excel / PowerBI",
];

const EXPERIENCE_OPTIONS = [
  "Fresher / Graduate (0–1 Years)",
  "Early Career Professional (1–3 Years)",
  "Mid-Level Developer (3+ Years)",
];

const FOCUS_OPTIONS = [
  { id: "immediate", label: "Immediate Job Match (Fastest Placement)" },
  { id: "maximize", label: "Maximize Package (High-Pay Career Pivot)" },
];

export default function App() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [experience, setExperience] = useState(EXPERIENCE_OPTIONS[0]);
  const [focus, setFocus] = useState("immediate");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleSkill = (skill) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill],
    );
  };

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (selectedSkills.length === 0 || !email) return; // Basic validation
    setIsSubmitted(true);
    // Smooth scroll to results if on mobile, or just let the transition happen
    setTimeout(() => {
      document
        .getElementById("results-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToAudit = () => {
    document
      .getElementById("audit-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-dark-bg font-sans selection:bg-emerald-accent selection:text-white pb-20 md:pb-0">
      {/* SECTION A: TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-emerald-accent shadow-emerald-glow" />
              <span className="font-heading font-bold text-xl tracking-tight text-gray-50">
                SkillMatch AI
              </span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-400 hover:text-emerald-hover transition-colors font-medium"
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-gray-400 hover:text-emerald-hover transition-colors font-medium"
              >
                Benefits
              </a>
              <a
                href="#faq"
                className="text-gray-400 hover:text-emerald-hover transition-colors font-medium"
              >
                FAQ
              </a>
            </nav>

            <button
              onClick={scrollToAudit}
              className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold rounded-full bg-dark-surface border border-dark-border text-white hover:border-emerald-accent hover:text-emerald-accent transition-all"
            >
              Check My Skills
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* SECTION B: HERO SECTION */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-emerald-accent/50 bg-emerald-tint mb-8 shadow-emerald-glow">
            <Sparkles className="w-4 h-4 text-emerald-accent" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-accent">
              30-Second AI Skill & Career Audit
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-gray-50 leading-tight mb-6">
            Find Out What Job Your <br className="hidden md:block" /> Skills Are
            Worth Right Now
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Select the tools and languages you know today. Get matched to your
            best immediate job role, discover high-paying pivot paths, and skip
            the entry-level salary trap.
          </p>
        </section>

        {/* MAIN INTERACTIVE AREA: FORM & RESULTS */}
        <section
          id="audit-section"
          className="px-4 sm:px-6 lg:px-8 pb-24 max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              /* SECTION C: INTERACTIVE INPUT FORM */
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-dark-surface border border-dark-border rounded-xl p-6 md:p-8 shadow-xl"
              >
                <div className="mb-8 border-b border-dark-border pb-4">
                  <h2 className="text-2xl font-heading font-bold text-gray-50">
                    Run Your Free Skill Audit
                  </h2>
                  <p className="text-gray-400 mt-2 text-sm">
                    Tell us what you know, we'll tell you what you're worth.
                  </p>
                </div>

                <form onSubmit={handleAuditSubmit} className="space-y-8">
                  {/* Step 1: Skill Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      1. Select Your Current Tech Stack
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {SKILL_OPTIONS.map((skill) => {
                        const isSelected = selectedSkills.includes(skill);
                        return (
                          <button
                            type="button"
                            key={skill}
                            onClick={() => toggleSkill(skill)}
                            className={`px-4 py-2 min-h-[44px] rounded-full text-sm font-medium transition-all duration-200 border ${
                              isSelected
                                ? "bg-emerald-accent/20 border-emerald-accent text-emerald-accent shadow-emerald-glow"
                                : "bg-[#1F2937] border-transparent text-gray-300 hover:bg-[#374151]"
                            }`}
                          >
                            {skill}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Experience Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      2. Years of Experience
                    </label>
                    <div className="relative">
                      <select
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        className="w-full bg-[#1F2937] border border-dark-border text-white text-sm rounded-lg focus:ring-emerald-accent focus:border-emerald-accent block p-3.5 appearance-none min-h-[44px]"
                      >
                        {EXPERIENCE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Primary Career Focus */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      3. Primary Career Focus
                    </label>
                    <div className="space-y-3">
                      {FOCUS_OPTIONS.map((opt) => (
                        <label
                          key={opt.id}
                          className={`flex items-center p-4 border rounded-xl cursor-pointer transition-colors ${focus === opt.id ? "border-emerald-accent bg-emerald-tint" : "border-dark-border bg-[#1F2937] hover:bg-[#374151]"}`}
                        >
                          <input
                            type="radio"
                            name="focus"
                            value={opt.id}
                            checked={focus === opt.id}
                            onChange={() => setFocus(opt.id)}
                            className="w-4 h-4 text-emerald-accent bg-gray-700 border-gray-600 focus:ring-emerald-accent focus:ring-2"
                          />
                          <span className="ml-3 text-sm font-medium text-gray-200">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Step 4: Email Input */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                      4. Where should we send your full PDF career roadmap?
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address (e.g. alex@gmail.com)"
                      className="w-full bg-[#1F2937] border border-dark-border text-white text-sm rounded-lg focus:ring-emerald-accent focus:border-emerald-accent block p-3.5 min-h-[44px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={selectedSkills.length === 0 || !email}
                    className="w-full flex items-center justify-center space-x-2 bg-emerald-accent hover:bg-emerald-hover text-dark-bg font-bold py-4 px-6 rounded-xl transition-all hover:scale-[1.02] shadow-emerald-glow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[56px]"
                  >
                    <span>Reveal My Job Matches</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </motion.div>
            ) : (
              /* SECTION D: DYNAMIC RESULTS VIEW */
              <motion.div
                id="results-section"
                key="results"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-6"
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-heading font-bold text-gray-50 flex items-center justify-center gap-3">
                    <Target className="w-8 h-8 text-emerald-accent" />
                    Your Skill-to-Job Audit Results
                  </h2>
                  <p className="text-gray-400 mt-2">
                    Based on your selections, here is your current market value.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Box 1 (Baseline Match) */}
                  <div className="bg-dark-surface border border-dark-border rounded-xl p-6 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-accent text-dark-bg">
                        88% Match
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Immediate Fit
                    </p>
                    <h3 className="text-xl font-bold text-white mb-4 pr-24">
                      Junior Full-Stack / Python Developer
                    </h3>

                    <div className="mb-6">
                      <p className="text-sm text-gray-400 mb-1">
                        Expected Salary
                      </p>
                      <p className="text-2xl font-bold text-emerald-accent">
                        ₹4.5 – ₹6.5 LPA
                      </p>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mt-auto">
                      Your existing stack allows you to immediately apply for
                      entry-level engineering roles at IT services and product
                      startups.
                    </p>
                  </div>

                  {/* Box 2 (High-Package Accelerator) */}
                  <div className="bg-dark-surface border border-emerald-accent/50 rounded-xl p-6 relative shadow-emerald-glow overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border border-emerald-accent text-emerald-accent bg-emerald-tint shadow-emerald-glow">
                        +120% Package Boost
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-emerald-accent uppercase tracking-wider mb-2">
                      Upgrade Role
                    </p>
                    <h3 className="text-xl font-bold text-white mb-4 pr-32">
                      AI Application Engineer / RAG Developer
                    </h3>

                    <div className="mb-4">
                      <p className="text-sm text-gray-400 mb-1">
                        Expected Salary
                      </p>
                      <p className="text-2xl font-bold text-white">
                        ₹10.0 – ₹16.0 LPA
                      </p>
                    </div>

                    <div className="mb-4 mt-auto">
                      <p className="text-sm font-medium text-gray-300 mb-2">
                        Missing Skills to Learn:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-accent shrink-0 mt-0.5" />
                          <span>
                            LangChain & AI APIs (Connecting LLMs to apps)
                          </span>
                        </li>
                        <li className="flex items-start text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-accent shrink-0 mt-0.5" />
                          <span>Vector Databases (Pinecone / Qdrant)</span>
                        </li>
                        <li className="flex items-start text-sm text-gray-400">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-accent shrink-0 mt-0.5" />
                          <span>FastAPI & Async Python</span>
                        </li>
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-dark-border mt-2">
                      <p className="text-xs font-medium text-gray-400">
                        Estimated Learning Time:{" "}
                        <strong className="text-emerald-accent">
                          4 to 6 Weeks
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Box 3 (1:1 Strategy Call Offer) */}
                <div className="bg-gradient-to-r from-dark-surface to-[#162032] border border-dark-border rounded-xl p-6 md:p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2">
                      Want a Human Expert to Review Your Resume & Strategy?
                    </h3>
                    <p className="text-sm text-gray-400">
                      An AI roadmap gives you direction, but execution gets you
                      hired. Book a 10-minute strategy call to review your
                      portfolio projects.
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      document
                        .getElementById("consultation")
                        .scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full md:w-auto shrink-0 bg-dark-bg border border-emerald-accent text-emerald-accent hover:bg-emerald-accent hover:text-dark-bg font-bold py-3 px-6 rounded-xl transition-all shadow-emerald-glow min-h-[44px]"
                  >
                    Book Free 10-Min Strategy Call
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* SECTION E: THREE CORE BENEFITS */}
        <section
          id="benefits"
          className="py-20 bg-dark-surface border-y border-dark-border"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-center text-gray-50 mb-16">
              Why Use SkillMatch AI?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-dark-bg p-8 rounded-xl border border-dark-border flex flex-col items-start hover:border-emerald-accent/50 transition-colors">
                <div className="p-3 bg-emerald-tint rounded-xl mb-6 border border-emerald-accent/20">
                  <Target className="w-6 h-6 text-emerald-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Stop Applying Blindly
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Stop sending hundreds of generic resumes. Target specific job
                  titles that actively demand the exact tools you already know.
                </p>
              </div>
              <div className="bg-dark-bg p-8 rounded-xl border border-dark-border flex flex-col items-start hover:border-emerald-accent/50 transition-colors">
                <div className="p-3 bg-emerald-tint rounded-xl mb-6 border border-emerald-accent/20">
                  <TrendingUp className="w-6 h-6 text-emerald-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Bypass the Entry-Level Trap
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Adding just 1 or 2 high-value skills (like AI APIs or Vector
                  DBs) can double your starting offer before your first
                  interview.
                </p>
              </div>
              <div className="bg-dark-bg p-8 rounded-xl border border-dark-border flex flex-col items-start hover:border-emerald-accent/50 transition-colors">
                <div className="p-3 bg-emerald-tint rounded-xl mb-6 border border-emerald-accent/20">
                  <Map className="w-6 h-6 text-emerald-accent" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  100% Clear Upskill Plan
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Know precisely what technologies to spend your next 30 days
                  learning instead of wasting months watching random tutorials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION F: 1:1 STRATEGY CONSULTATION SECTION */}
        <section id="consultation" className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-dark-surface border border-emerald-accent/40 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-emerald-glow-strong">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-32 bg-emerald-accent/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 text-center">
                Want Help Executing Your Career Pivot?
              </h2>
              <p className="text-lg text-gray-300 text-center mb-10 max-w-2xl mx-auto">
                Get your resume, GitHub portfolio, and upskilling plan reviewed
                directly by a senior engineer.
              </p>

              <div className="space-y-4 max-w-xl mx-auto mb-10">
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-accent mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Resume Critique</h4>
                    <p className="text-sm text-gray-400">
                      Identify why your current resume isn't getting
                      shortlisted.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-accent mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Project Selection</h4>
                    <p className="text-sm text-gray-400">
                      Choose 2 high-impact portfolio projects that impress
                      hiring managers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-emerald-accent mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white">Salary Negotiation</h4>
                    <p className="text-sm text-gray-400">
                      Learn how to position your skills for product-tier pay
                      scales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => alert("Calendly Modal would open here!")}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-emerald-accent hover:bg-emerald-hover text-dark-bg font-bold rounded-xl transition-all hover:scale-105 shadow-emerald-glow min-h-[56px] text-lg"
                >
                  Claim My Free 10-Min Strategy Call
                </button>
                <p className="mt-4 text-xs font-semibold text-emerald-accent flex items-center justify-center">
                  <Sparkles className="w-3 h-3 mr-1" /> Only 5 free slots
                  available per week. 100% free consultation, no sales pitch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION G: FREQUENTLY ASKED QUESTIONS */}
        <section id="faq" className="py-20 bg-dark-bg px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center text-white mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is the SkillMatch AI checkup completely free?",
                  a: "Yes, 100% free. You get an instant baseline job match, salary benchmark, and missing skill analysis displayed directly on your screen.",
                },
                {
                  q: "How accurate are the salary benchmarks?",
                  a: "Our data is benchmarked against real-time hiring offers across IT services, Global Capability Centers (GCCs), and product startups.",
                },
                {
                  q: "What if I only know basic programming or HTML/CSS?",
                  a: "That's completely fine! The tool identifies entry-level roles and shows you the exact 1–2 skills needed to jump to a full developer pay grade.",
                },
                {
                  q: "What happens on the 1:1 strategy call?",
                  a: "We review your current profile, evaluate your target projects, and build a realistic 30-day timeline to help you start landing interviews.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-dark-border rounded-xl bg-dark-surface overflow-hidden transition-colors hover:border-gray-700"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center focus:outline-none min-h-[64px]"
                  >
                    <span className="font-semibold text-gray-200 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed border-t border-dark-border mt-2 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* SECTION H: FOOTER */}
      <footer className="bg-dark-surface border-t border-dark-border py-12 px-4 sm:px-6 lg:px-8 mt-10 md:mt-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <Terminal className="w-5 h-5 text-emerald-accent" />
              <span className="font-heading font-bold text-lg text-white">
                SkillMatch AI
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering freshers and developers to unlock their real market
              value.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-emerald-accent transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:block">•</span>
            <a href="#" className="hover:text-emerald-accent transition-colors">
              Terms of Service
            </a>
            <span className="hidden md:block">•</span>
            <a href="#" className="hover:text-emerald-accent transition-colors">
              Contact Us
            </a>
          </div>
          <div className="text-sm text-gray-500">
            © 2026 SkillMatch AI. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA Banner */}
      {!isSubmitted && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-dark-bg/90 backdrop-blur-lg border-t border-dark-border z-50">
          <button
            onClick={scrollToAudit}
            className="w-full bg-emerald-accent text-dark-bg font-bold py-3 px-4 rounded-xl shadow-emerald-glow min-h-[44px]"
          >
            Run Free Skill Audit
          </button>
        </div>
      )}
    </div>
  );
}
