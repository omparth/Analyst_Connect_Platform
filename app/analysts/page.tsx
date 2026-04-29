'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sliders, X, Star, Filter, ArrowUpDown } from 'lucide-react';
import { analysts } from '@/lib/analysts-data';
import { AnalystCard } from '@/components/analyst-card';

const expertiseOptions = [
  'Cloud Infrastructure', 'SaaS', 'Biotech', 'Fintech', 
  'Renewables', 'E-commerce', 'AI/ML', 'Real Estate',
];

export default function AnalystsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAnalysts = useMemo(() => {
    let result = analysts.filter((analyst) => {
      const matchesSearch =
        analyst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        analyst.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        analyst.expertise.some((exp) => exp.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesExpertise =
        selectedExpertise.length === 0 ||
        selectedExpertise.some((exp) => analyst.expertise.includes(exp));

      const matchesRating = analyst.rating >= minRating;

      return matchesSearch && matchesExpertise && matchesRating;
    });

    if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (sortBy === 'price-low') result.sort((a, b) => a.hourlyRate - b.hourlyRate);
    else if (sortBy === 'price-high') result.sort((a, b) => b.hourlyRate - a.hourlyRate);
    else if (sortBy === 'followers') result.sort((a, b) => b.followers - a.followers);

    return result;
  }, [searchQuery, selectedExpertise, minRating, sortBy]);

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise) ? prev.filter((e) => e !== expertise) : [...prev, expertise]
    );
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a]">
      <div className="bg-white dark:bg-black border-b border-border/60">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-4">
                Expert <span className="text-primary italic">Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlock specialized knowledge. We&apos;ve curated {analysts.length} elite analysts 
                to help you navigate complex market landscapes.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-muted/50 p-2 rounded-2xl border border-border">
                <div className="px-4 py-2 bg-background rounded-xl shadow-sm border border-border">
                    <span className="block text-xs font-bold uppercase text-muted-foreground tracking-wider">Total Experts</span>
                    <span className="text-xl font-bold">{analysts.length}</span>
                </div>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-border/60 shadow-sm">
        <section className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative w-full lg:flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <input
                type="text"
                placeholder="Search by name, industry or niche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border-none bg-muted/50 focus:ring-2 focus:ring-primary/20 transition-all text-sm font-medium"
              />
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border font-semibold text-sm transition-all w-full lg:w-auto ${
                  showFilters ? 'bg-foreground text-background border-foreground' : 'bg-background hover:bg-muted'
                }`}
              >
                <Sliders className="h-4 w-4" />
                {showFilters ? 'Close Filters' : 'Filters'}
              </button>

              <div className="relative flex-1 lg:flex-none">
                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full lg:w-56 pl-11 pr-4 py-3.5 rounded-2xl border bg-background text-sm font-semibold appearance-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="rating">Top Rated First</option>
                  <option value="price-low">Budget: Low to High</option>
                  <option value="price-high">Budget: High to Low</option>
                  <option value="followers">Most Popular</option>
                </select>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden border-t mt-4 pt-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {expertiseOptions.map((exp) => (
                        <button
                          key={exp}
                          onClick={() => toggleExpertise(exp)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedExpertise.includes(exp)
                              ? 'bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20'
                              : 'bg-background border-border text-foreground hover:border-primary/40'
                          }`}
                        >
                          {exp}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Minimum Rating</h3>
                      <div className="flex items-center gap-6">
                        <input
                          type="range"
                          min="0"
                          max="5"
                          step="0.5"
                          value={minRating}
                          onChange={(e) => setMinRating(parseFloat(e.target.value))}
                          className="flex-1 h-1.5 rounded-full bg-muted accent-primary cursor-pointer"
                        />
                        <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-xl border border-primary/20">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-bold">{minRating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    {(selectedExpertise.length > 0 || minRating > 0) && (
                      <button
                        onClick={() => { setSelectedExpertise([]); setMinRating(0); }}
                        className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-destructive hover:opacity-80 transition-opacity uppercase tracking-tighter"
                      >
                        <X className="h-3 w-3" /> Reset all filters
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-12">
        {filteredAnalysts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">No analysts found</h2>
            <p className="text-muted-foreground mb-8">Try adjusting your filters or search terms to find what you&apos;re looking for.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedExpertise([]); setMinRating(0); }}
              className="px-6 py-3 bg-foreground text-background rounded-xl font-bold"
            >
              Clear Everything
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAnalysts.map((analyst, index) => (
                <motion.div
                  key={analyst.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AnalystCard analyst={analyst} />
                </motion.div>
              ))}
            </div>
            <div className="mt-16 flex items-center justify-center border-t border-border pt-8">
                <p className="text-sm font-medium text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                   Showing <span className="text-foreground font-bold">{filteredAnalysts.length}</span> elite professionals
                </p>
            </div>
          </>
        )}
      </section>
    </div>
  );
}
