import { motion } from 'framer-motion';
import MotionBox from '../MotionBox';

export default function MultiplePageScanAnimation() {
  return (
    <MotionBox>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'easing', duration: 0.7 }}
      >
        <img
          src="/assets/images/batch_scanning.webp"
          width={610}
          height={560}
          alt="Batch Scanning"
          className="sm:w-60"
        />
      </motion.div>
      <motion.img
        src="/assets/images/bs_1.png"
        alt="Batch Scanning"
        className="absolute z-10 m-auto bottom-12 sm:w-52 sm:-bottom-5"
        initial={{ y: '140%', scale: 1.2 }}
        animate={{ y: 0, scale: 0.8 }}
        transition={{ delay: 0.4, type: 'damping', duration: 0.5 }}
      />
      <motion.img
        src="/assets/images/bs_2.png"
        alt="Batch Scanning"
        className="absolute m-auto bottom-3 z-20 sm:w-52 sm:-bottom-2"
        initial={{ y: '140%', scale: 1 }}
        animate={{ y: 0, scale: 0.9 }}
        transition={{ delay: 0.8, type: 'damping', duration: 0.5 }}
      />
      <motion.img
        src="/assets/images/bs_3.png"
        alt="Batch Scanning"
        className="absolute m-auto -bottom-3 z-30 sm:w-52 sm:-bottom-2"
        initial={{ y: '140%', scale: 1 }}
        animate={{ y: 0, scale: 1 }}
        transition={{ delay: 1.2, type: 'damping', duration: 0.5 }}
      />
    </MotionBox>
  );
}
