
'use client';

import { motion } from 'framer-motion';
import {
  Users,
  TrendingUp,
  ShieldCheck,
  Target,
  Award,
  Zap,
  CheckCircle2,
  Globe,
  PieChart,
} from 'lucide-react';

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function AboutSection() {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#060606] selection:bg-primary/30 selection:text-primary">
      <div className="absolute left-0 top-0 -z-10 h-[500px] w-full bg-gradient-to-b from-primary/5 to-transparent" />

      <motion.section
        className="mx-auto max-w-7xl px-6 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-16">
          <div className="max-w-3xl">
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary"
            >
              <Zap className="h-3 w-3 fill-current" />
              Our Story
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-8 text-5xl font-black leading-[0.9] tracking-tight text-foreground md:text-7xl"
            >
              Bridging the gap between{' '}
              <span className="italic text-primary">
                Intelligence
              </span>{' '}
              & Capital.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl leading-relaxed text-muted-foreground"
            >
              Analyst Connect isn&apos;t just a directory; it&apos;s a
              financial ecosystem built to replace noise with signal.
              We empower retail investors with institutional-grade
              insights.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <motion.div
              variants={itemVariants}
              className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-white p-8 shadow-sm transition-colors hover:border-primary/50 dark:bg-zinc-900/50 md:col-span-2 md:p-12"
            >
              <div className="relative z-10">
                <Target className="mb-6 h-10 w-10 text-primary" />

                <h2 className="mb-4 text-3xl font-bold">
                  Our Mission
                </h2>

                <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
                  To democratize financial intelligence. We believe
                  premium market analysis shouldn&apos;t be gated behind
                  institutional paywalls. Our mission is to make
                  actionable insights accessible to every retail
                  participant.
                </p>
              </div>

              <div className="absolute -bottom-10 -right-10 opacity-[0.03] transition-opacity group-hover:opacity-[0.07]">
                <Target className="h-64 w-64 text-foreground" />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between rounded-[2.5rem] border border-border bg-foreground p-8 text-background"
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] opacity-60">
                The Impact
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-black tracking-tighter">
                    150+
                  </div>
                  <div className="text-sm font-medium opacity-70">
                    Verified Professional Analysts
                  </div>
                </div>

                <div className="h-px bg-background/20" />

                <div>
                  <div className="text-5xl font-black tracking-tighter">
                    10k+
                  </div>
                  <div className="text-sm font-medium opacity-70">
                    Decisions Influenced Daily
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-border bg-white p-8 shadow-sm transition-all hover:shadow-xl dark:bg-zinc-900/50"
            >
              <TrendingUp className="mb-6 h-10 w-10 text-primary" />

              <h2 className="mb-4 text-2xl font-bold">
                Our Vision
              </h2>

              <p className="leading-relaxed text-muted-foreground">
                To become the world&apos;s most transparent layer for
                investment collaboration, where merit is the only
                currency.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative grid grid-cols-1 gap-8 overflow-hidden rounded-[2.5rem] border border-border bg-primary p-8 text-primary-foreground md:col-span-2 md:grid-cols-2 md:p-12"
            >
              <div className="z-10">
                <ShieldCheck className="mb-6 h-10 w-10 text-primary-foreground/80" />

                <h2 className="mb-4 text-3xl font-bold tracking-tight">
                  Trust by Design
                </h2>

                <p className="leading-relaxed text-primary-foreground/80">
                  Every analyst on our platform goes through a
                  multi-stage vetting process including track-record
                  verification and SEBI compliance checks.
                </p>
              </div>

              <div className="z-10 flex flex-col justify-end space-y-4">
                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                  <CheckCircle2 className="h-5 w-5" />
                  <span className="text-sm font-bold">
                    SEBI Reg. Verified
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur-md">
                  <PieChart className="h-5 w-5" />
                  <span className="text-sm font-bold">
                    Transparency Audited
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="pt-10">
            <motion.h2
              variants={itemVariants}
              className="mb-16 text-center text-sm font-black uppercase tracking-[0.3em] text-muted-foreground"
            >
              Our Core Pillars
            </motion.h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {[
                {
                  icon: Users,
                  title: 'Verified Experts',
                  desc:
                    'No more anonymous gurus. Connect with real professionals with skin in the game.',
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  desc:
                    'Access insights from diverse markets, from NSE to NASDAQ and beyond.',
                },
                {
                  icon: Award,
                  title: 'Performance First',
                  desc:
                    'We rank analysts based on the accuracy of their assessments, not popularity.',
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group text-center"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-muted transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-8 w-8" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="px-4 leading-relaxed text-muted-foreground">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
