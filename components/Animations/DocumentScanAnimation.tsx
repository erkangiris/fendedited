import { motion } from 'framer-motion';
import MotionBox from '../MotionBox';
export default function DocumentScanAnimation() {
  return (
    <MotionBox>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{ type: 'easing', duration: 0.7 }}
      >
        <img
          src="/assets/images/document_scanner.webp"
          width={610}
          height={560}
          alt="Document Scanner"
          className="sm:w-60"
        />
      </motion.div>
    </MotionBox>
  );
}
