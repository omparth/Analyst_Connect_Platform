'use client';

import { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import {
  Mail,
  MessageCircle,
  Clock,
  Send,
  Sparkles,
  ChevronDown,
  Check, 
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const topics = [
  'General Inquiry',
  'Investment Consultation',
  'Partnership Proposal',
  'Technical Support',
];

export function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);

  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-primary/30 dark:bg-[#060606]">
      <motion.section
        className="mx-auto max-w-7xl px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary"
              >
                <Sparkles className="h-3 w-3 fill-current" />
                Get In Touch
              </motion.div>

              <h1 className="text-5xl font-black leading-[0.9] tracking-tight text-foreground md:text-7xl">
                Let&apos;s talk{' '}
                <span className="italic text-primary">Strategy.</span>
              </h1>

              <p className="max-w-md text-xl leading-relaxed text-muted-foreground">
                Have a specific investment query or looking for a partnership?
                Our team typically responds within 4 working hours.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  icon: Mail,
                  label: 'Email us at',
                  value: 'hello@analystconnect.com',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp Support',
                  value: '+91 1234123456',
                },
                {
                  icon: Clock,
                  label: 'Response Time',
                  value: '< 4 Hours (Mon - Sat)',
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white shadow-sm transition-all group-hover:border-primary/50 group-hover:shadow-md dark:bg-zinc-900">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/20 to-transparent opacity-50 blur-2xl" />

            <div className="rounded-[2.5rem] border border-border bg-white p-8 shadow-2xl backdrop-blur-sm dark:bg-zinc-900/50 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-black uppercase tracking-widest text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-2xl border border-border bg-muted/30 px-5 py-4 text-foreground outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="ml-1 text-xs font-black uppercase tracking-widest text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="yourmail@example.com"
                      className="w-full rounded-2xl border border-border bg-muted/30 px-5 py-4 text-foreground outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Topic
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex w-full items-center justify-between rounded-2xl border border-border bg-muted/30 px-5 py-4 text-left font-bold text-foreground outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                    >
                      <span>{selectedTopic}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setIsOpen(false)} 
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-2xl dark:bg-zinc-900"
                          >
                            {topics.map((topic) => (
                              <button
                                key={topic}
                                type="button"
                                onClick={() => {
                                  setSelectedTopic(topic);
                                  setIsOpen(false);
                                }}
                                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all hover:bg-primary/10 hover:text-primary"
                              >
                                <span className={selectedTopic === topic ? 'text-primary' : 'text-muted-foreground'}>
                                  {topic}
                                </span>
                                {selectedTopic === topic && (
                                  <Check className="h-4 w-4 text-primary" />
                                )}
                              </button>
                            ))}
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="ml-1 text-xs font-black uppercase tracking-widest text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full resize-none rounded-2xl border border-border bg-muted/30 px-5 py-4 text-foreground outline-none transition-all focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-primary px-8 py-5 font-black text-primary-foreground transition-all active:scale-[0.98]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Send Message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
                </button>
              </form>

              <p className="mt-6 text-center text-xs font-medium text-muted-foreground">
                By sending this message, you agree to our{' '}
                <span className="cursor-pointer text-primary underline">
                  Privacy Policy
                </span>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}