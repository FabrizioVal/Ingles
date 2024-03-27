import { motion,useInView } from 'framer-motion';
import meeting from '../assets/meeting.jpg'

// UX

// CHECK OUT "EASE", "TYPE" AND "STIFFNESS" VALUES
// THAT COULD BE ADDED LATER

const variantsTitle = {
  slide: {
    
    opacity:[0,1],
    translateX: ["50%", "50%","0%"], 
    translateY: ["50%", "50%","0%"], 

    transition: {
      duration: 2,
      
      times: [0, 1],
      delay: [1], 
    }
  }
};


const variantsSubtitle = {
  slide: {

    opacity:[0,1],
    translateX: ["50%", "50%", "0%"], 
    translateY: ["-150%", "-150%", "0%"], 
    transition: {
      // Total duration:
      duration: 2,
      // Timing of each keyframe
      times: [0, 1],

      delay: [3],

    }
  }
};

// Variants for animation
const variantsImage = {
  
  slide: {
    
    translateX: ["50%", "0%"],
    opacity: [0,1],

    transition: {
      // Total duration:
      duration: 1,
      // Timing of each keyframe
      times: [0, 0.8],

      delay: [5],

    }
  }
};

// UI

const Hero = () => {

  
  return (
    <div className="p-4 flex flex-row text-left w-screen h-screen  justify-between">
      
      {/* Left div */}
      <div className="w-1/2 p-4 text-left flex flex-col justify-between">
        <motion.div
          variants={variantsTitle}
          animate="slide"
          className="text-center"
        >
          <motion.div>
            <motion.h1 className="text-5xl font-bold mt-6">¿Necesitas preparación específica de inglés?</motion.h1>
          </motion.div>
        </motion.div>

        <motion.div
          variants={variantsSubtitle}
          animate="slide"
        >
          <motion.p className="text-2xl text-center mb-6">Una clase virtual es exactamente lo que puede ayudarte a estar listo.</motion.p>
        </motion.div>
      </div>

      {/* Right div with image */}
      <motion.div
        className="w-1/2 flex justify-center items-center"
        variants={variantsImage}
        animate="slide"
      >
        <img src={meeting} alt="Your Image" className="max-w-full h-auto p-8" />
      </motion.div>
    </div>
  );
}

export default Hero;