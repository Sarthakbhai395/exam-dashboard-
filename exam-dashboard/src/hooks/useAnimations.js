import { useCallback } from 'react';

/**
 * Custom hook for common animation variants used throughout the application
 * Compatible with Framer Motion for creating consistent animations
 */
export const useAnimations = () => {
  // Fade in animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  // Slide up animation
  const slideUp = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Slide in from left animation
  const slideInLeft = {
    hidden: { 
      opacity: 0,
      x: -30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Slide in from right animation
  const slideInRight = {
    hidden: { 
      opacity: 0,
      x: 30
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Scale animation
  const scale = {
    hidden: { 
      opacity: 0,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Stagger children animations
  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Pulse animation (for attention)
  const pulse = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Bounce animation
  const bounce = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Page transition animations
  const pageTransition = {
    initial: { 
      opacity: 0,
    },
    enter: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Creates a custom stagger animation with specified parameters
  const createStagger = useCallback((delay = 0.3, staggerTime = 0.2) => {
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerTime,
          delayChildren: delay
        }
      }
    };
  }, []);

  return {
    fadeIn,
    slideUp,
    slideInLeft,
    slideInRight,
    scale,
    stagger,
    pulse,
    bounce,
    pageTransition,
    createStagger
  };
};

export default useAnimations;