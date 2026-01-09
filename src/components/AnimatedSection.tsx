import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: delay / 1000 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
