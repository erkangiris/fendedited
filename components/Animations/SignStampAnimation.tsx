import { motion } from 'framer-motion';
import MotionBox from '../MotionBox';

export default function SignStampAnimation() {
  return (
    <MotionBox>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'easing', duration: 0.7 }}
      >
        <img
          src="/assets/images/sing_stamp.webp"
          width={610}
          height={560}
          alt="Sign & Stamp"
          className="sm:w-60"
        />
      </motion.div>
      <motion.img
        src="/assets/images/ss_1.png"
        alt="Sign & Stamp"
        className="absolute top-80 -left-32 sm:w-28 sm:left-1 sm:top-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, type: 'ease', duration: 0.4 }}
      />
      <motion.img
        src="/assets/images/ss_2.png"
        alt="Sign & Stamp"
        className="absolute top-60 -right-28 sm:top-24 sm:right-1 sm:w-28"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: 'ease', duration: 0.4 }}
      />
    </MotionBox>
  );
}
