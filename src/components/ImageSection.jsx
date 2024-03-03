
import { motion } from 'framer-motion';
import dashboardImage from '../assets/lpsecurityUI.png';
import AnimatedPath from '../components/AnimatedPath';

const Hmmm = () => {

  return (
    <div id="about">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 1, delay: 1 } },
      }}
    >
      <div>
        <svg width="220" height="1200" className='absolute hidden ml-10 xl:block' viewBox="0 0 200 1252">
          <AnimatedPath svgPathId="svgPath" scrollMultiplier={4}/>
          <path id="svgPath" stroke="#4B50E6" strokeWidth="4px" fill="none" d="M2.15289 0C2.15289 434.378 2.15289 820.96 2.15289 959.954C6 1031 110 1074.56 336.5 1053"></path>
        </svg>
        <img
          src={dashboardImage}
          className="xl:ml-32 mt-6 mb-6 animate-pin shadow-lg border-4 border-gray-200/10 rounded"
          alt="UI Image"
        />
      </div>
    </motion.div>
  </div>
  );
}

export default Hmmm;
