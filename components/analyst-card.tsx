'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Analyst } from '@/lib/types';

interface AnalystCardProps {
  analyst: Analyst;
}

export function AnalystCard({ analyst }: AnalystCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={`/analysts/${analyst.id}`}>
        <div className="rounded-xl border border-border bg-card p-6 h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
          {/* Header with image and verified badge */}
          <div className="flex gap-4 mb-4">
            <div className="relative">
              <Image
                src={analyst.image}
                alt={analyst.name}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              {analyst.verified && (
                <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-1">
                  <CheckCircle className="h-4 w-4 text-primary-foreground" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{analyst.name}</h3>
              <p className="text-sm text-foreground/60">{analyst.title}</p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{analyst.bio}</p>

          {/* Stats */}
          <div className="flex gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{analyst.rating}</span>
              <span className="text-foreground/60">({analyst.reviews})</span>
            </div>
          </div>

          {/* Location and response time */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <MapPin className="h-4 w-4" />
              <span>{analyst.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Clock className="h-4 w-4" />
              <span>Response: {analyst.responseTime}</span>
            </div>
          </div>

          {/* Expertise tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {analyst.expertise.slice(0, 2).map((exp, i) => (
              <span
                key={i}
                className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded"
              >
                {exp}
              </span>
            ))}
            {analyst.expertise.length > 2 && (
              <span className="inline-block bg-muted text-foreground/60 text-xs px-2 py-1 rounded">
                +{analyst.expertise.length - 2} more
              </span>
            )}
          </div>

          {/* Hourly rate and CTA */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-foreground/60">Hourly Rate</p>
              <p className="font-bold text-lg text-foreground">${analyst.hourlyRate}</p>
            </div>
            <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              View Profile
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
