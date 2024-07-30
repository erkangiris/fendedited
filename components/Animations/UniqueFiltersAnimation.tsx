import { motion } from 'framer-motion';
import MotionBox from '../MotionBox';

export default function UniqueFiltersAnimation() {
  return (
    <MotionBox>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'easing', duration: 0.7 }}
      >
        <img
          src="/assets/images/advanced_filters.webp"
          width={610}
          height={560}
          alt="Advanced Filters"
          className="sm:w-60"
        />
      </motion.div>
      <motion.img
        src="/assets/images/af_1.png"
        alt="Advanced Filters"
        className="absolute bottom-0 -left-7 sm:w-7 sm:left-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, type: 'ease', duration: 0.4 }}
      />
      <motion.img
        src="/assets/images/af_2.png"
        alt="Advanced Filters"
        className="absolute bottom-0 -right-7 sm:w-7 sm:right-5"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'ease', duration: 0.4 }}
      />
    </MotionBox>
  );
}
