import { ReactNode, useMemo } from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 24,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    const transforms = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      fade: {},
    };

    return {
      hidden: {
        opacity: 0,
        ...transforms[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
      },
    };
  }, [direction, distance, prefersReducedMotion]);

  const transition = useMemo(() => ({
    duration: prefersReducedMotion ? 0.15 : duration,
    delay: prefersReducedMotion ? 0 : delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  }), [delay, duration, prefersReducedMotion]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function RevealGroup({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: RevealGroupProps) {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      variants={containerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade";
  distance?: number;
}

export function RevealItem({
  children,
  className,
  direction = "up",
  distance = 20,
}: RevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = useMemo(() => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }

    const transforms = {
      up: { y: distance },
      down: { y: -distance },
      left: { x: distance },
      right: { x: -distance },
      fade: {},
    };

    return {
      hidden: {
        opacity: 0,
        ...transforms[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      },
    };
  }, [direction, distance, prefersReducedMotion]);

  return (
    <motion.div variants={variants} className={cn(className)}>
      {children}
    </motion.div>
  );
}
