import { motion } from 'framer-motion';
import MotionBox from '../MotionBox';

export default function AllRoundConversionAnimation() {
  return (
    <MotionBox>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'easing', duration: 0.7 }}
      >
        <img
          src="/assets/images/all_round_conversion.webp"
          alt="Document Scanner"
          className="sm:w-60"
        />
      </motion.div>
      <motion.img
        src="/assets/images/ar_1.png"
        alt="Document Scanner"
        className="absolute z-10 -left-10 bottom-5 sm:w-3 sm:bottom-3 sm:left-2"
        initial={{ y: '170%', x: '150%', rotate: 0 }}
        animate={{ y: 0, x: 0, rotate: -15 }}
        transition={{ delay: 0.2, type: 'damping', duration: 0.5 }}
      />
      <motion.img
        src="/assets/images/ar_2.png"
        alt="Document Scanner"
        className="absolute  z-20 bottom-8 sm:w-24 sm:bottom-6"
        initial={{ y: '150%', x: 0, rotate: 0 }}
        animate={{ y: 0, x: '-100%', rotate: -15 }}
        transition={{ delay: 0.4, type: 'damping', duration: 0.5 }}
      />
      <motion.img
        src="/assets/images/ar_3.png"
        alt="Document Scanner"
        className="absolute  z-30 bottom-12 sm:w-24 sm:bottom-10"
        initial={{ y: '150%', x: '-5%' }}
        animate={{ y: 0, x: '-5%' }}
        transition={{ delay: 0.6, type: 'damping', duration: 0.5 }}
      />
      <motion.img
        src="/assets/images/ar_4.png"
        alt="Document Scanner"
        className="absolute  z-40 bottom-8 sm:w-24 sm:bottom-6"
        initial={{ y: '150%', x: 0, rotate: 0 }}
        animate={{ y: 0, x: '100%', rotate: 15 }}
        transition={{ delay: 0.8, type: 'damping', duration: 0.5 }}
      />
    </MotionBox>
  );
}
