import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  id,
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.section>
  );
}