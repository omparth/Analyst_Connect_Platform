'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonPrimaryProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function ButtonPrimary({ children, onClick, className = '', ...props }: ButtonPrimaryProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground hover:opacity-90 transition-opacity ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
