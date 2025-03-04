import { motion } from "framer-motion";

const AnimatedSection = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: .2, y: 60 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
