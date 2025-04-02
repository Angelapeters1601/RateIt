import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { motion } from "framer-motion";


function ReviewCounter({ targetCount }) {
    return (
      <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }} 
          >
            {isVisible ? (
              <CountUp 
                end={targetCount} 
                duration={2.5} 
                separator=","
                suffix="+ Verified Reviews"
                className="text-3xl font-mono font-bold"
              />
            ) : (
              <span>0+ Verified Reviews</span>
            )}
          </motion.div>
        )}
      </VisibilitySensor>
    );
  }
  export default ReviewCounter