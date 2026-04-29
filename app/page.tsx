'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Zap, Search, Users, CheckCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },  },
};

const features = [
  {
    icon: TrendingUp,
    title: 'Expert Analysis',
    description: 'Access deep market insights from verified industry experts with proven track records.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: Shield,
    title: 'Verified Professionals',
    description: 'All analysts are thoroughly vetted with comprehensive credentials and verified experience.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10'
  },
  {
    icon: Zap,
    title: 'Real-time Access',
    description: 'Connect with analysts on-demand for timely insights when you need them most.',
    color: 'text-amber-500',
    bg: 'bg-amber-500/10'
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-70" />

      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-40">
        <motion.div
          className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">Now Live: SEBI Registered Analysts</span>
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl leading-[1.1]">
              Strategic Insights from <span className="text-primary italic">Top Analysts</span>
            </h1>

            <p className="mb-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
              Bridge the gap between data and decisions. Connect with verified experts for high-impact market assessments and research.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/analysts"
                className="group inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:translate-y-[-2px] hover:shadow-xl active:scale-95"
              >
                Find Top Analysts
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-input bg-background px-8 py-4 font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Our Methodology
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>Vetted Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>1-on-1 Sessions</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative lg:ml-auto">
            <div className="relative h-[450px] w-full max-w-[500px] overflow-hidden rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-1 shadow-2xl shadow-primary/10">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
               <div className="relative h-full w-full rounded-[22px] bg-card p-10 flex flex-col justify-center items-center overflow-hidden">
                  
                  <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}                    className="absolute top-10 right-10 bg-background border border-border p-4 rounded-2xl shadow-sm"
                  >
                    <Search className="h-6 w-6 text-primary" />
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-10 left-10 bg-background border border-border p-4 rounded-2xl shadow-sm"
                  >
                    <Users className="h-6 w-6 text-emerald-500" />
                  </motion.div>

                  <div className="relative text-center">
                    <div className="mb-2 text-7xl font-black tracking-tighter text-primary">
                      150+
                    </div>
                    <div className="text-lg font-medium text-foreground">Verified Case Studies</div>
                    <div className="mt-4 flex -space-x-3 justify-center">
                        {[1,2,3,4].map(i => (
                          <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold">
                            U{i}
                          </div>
                        ))}
                    </div>
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Why Choose Analyst Connect?
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary rounded-full mb-6" />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We provide a secure and transparent ecosystem for professional financial consultation and market research.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-2xl hover:shadow-primary/5"
                >
                  <div className={`mb-6 inline-flex rounded-xl ${feature.bg} p-4 transition-transform group-hover:scale-110`}>
                    <Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-8 py-20 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary blur-[100px]" />
          </div>

          <div className="relative z-10">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-background md:text-5xl">
              Ready to elevate your strategy?
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-400">
              Join 5,000+ investors getting real-time insights from vetted analysts. Your first consultation is just a click away.
            </p>
            <Link
              href="/analysts"
              className="inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              Start Exploring Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
