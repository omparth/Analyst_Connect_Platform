'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Star,
  MapPin,
  Clock,
  Users,
  CheckCircle,
  ArrowLeft,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe,
  Award
} from 'lucide-react';
import { analysts } from '@/lib/analysts-data';
import { use } from 'react';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AnalystDetailPage({ params }: PageProps) {
  const { id } = use(params);
  const analyst = analysts.find((a) => a.id === id);

  if (!analyst) notFound();

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] pb-20">
      <div className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link
            href="/analysts"
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-tighter text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Directory
          </Link>
          <div className="hidden md:flex items-center gap-2 text-xs font-bold text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for Consultation
          </div>
        </div>
      </div>

      <motion.section
        className="mx-auto max-w-7xl px-6 pt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
            
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-white dark:bg-black p-8 md:p-12 shadow-sm">
              <div className="absolute top-0 right-0 p-8">
                 <Award className="h-12 w-12 text-primary/10" />
              </div>
              
              <div className="relative flex flex-col md:flex-row gap-8 items-start">
                <div className="relative shrink-0">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <Image
                    src={analyst.image}
                    alt={analyst.name}
                    width={180}
                    height={180}
                    className="relative rounded-3xl object-cover shadow-2xl border-4 border-white dark:border-zinc-900"
                  />
                  {analyst.verified && (
                    <div className="absolute -bottom-3 -right-3 rounded-2xl bg-primary p-2.5 shadow-xl ring-4 ring-white dark:ring-black">
                      <ShieldCheck className="h-6 w-6 text-primary-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                      {analyst.name}
                    </h1>
                    <p className="text-xl font-medium text-primary mt-1">{analyst.title}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-xl border border-border">
                      <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                      <span className="font-bold text-foreground">{analyst.rating}</span>
                      <span className="text-muted-foreground text-sm">({analyst.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-xl border border-border">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <span className="font-bold">{analyst.followers.toLocaleString()}</span>
                      <span className="text-muted-foreground text-sm">Followers</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4" /> {analyst.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {analyst.responseTime} Response
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-border/50">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Professional Brief</h2>
                <p className="text-xl leading-relaxed text-foreground/80 font-medium italic">
                  &quot;{analyst.bio}&quot;
                </p>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Market Specialization</h2>
                <div className="flex flex-wrap gap-3">
                  {analyst.expertise.map((exp, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-2 rounded-2xl border border-primary/10 bg-primary/5 px-5 py-3 transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      <Zap className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                      <span className="font-bold text-sm tracking-tight">{exp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="sticky top-28 space-y-6">
              <div className="rounded-[2rem] border-2 border-primary/20 bg-white dark:bg-black p-8 shadow-xl shadow-primary/5">
                <div className="flex items-end gap-1 mb-8">
                  <span className="text-5xl font-black tracking-tighter">${analyst.hourlyRate}</span>
                  <span className="text-muted-foreground font-bold mb-1.5 uppercase text-xs tracking-widest">/ Per Hour</span>
                </div>

                <div className="space-y-3">
                  <button className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-5 font-black text-primary-foreground transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/30 active:scale-95">
                    Schedule Session
                    <Calendar className="h-5 w-5 transition-transform group-hover:rotate-12" />
                  </button>

                  <button className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-border bg-background px-6 py-5 font-bold text-foreground transition-colors hover:bg-muted">
                    <MessageSquare className="h-5 w-5" />
                    Drop a Message
                  </button>
                </div>

                <p className="mt-6 text-center text-xs font-bold text-muted-foreground uppercase tracking-tighter">
                  Verified secure booking & payment
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-muted/30 p-6">
                <h3 className="flex items-center gap-2 font-bold text-foreground mb-4">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  Analyst Guarantee
                </h3>
                <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    Full identity & credential verification.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5" />
                    Money-back if not satisfied.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
