"use client";

import { motion } from "framer-motion";

type MotionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MotionWrapper({ children, className }: MotionWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
