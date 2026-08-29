import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({ as = "section", className = "", children, delay = 0, id }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.section;
  return (
    <MotionTag
      id={id}
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
