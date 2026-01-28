// Hero animation configuration
export const heroConfig = {
  // Animation settings
  animation: {
    duration: 2000,
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay: 300
  },

  // Text animation
  text: {
    revealDelay: 500,
    staggerDelay: 100,
    fadeInDuration: 800
  },

  // Background effects
  background: {
    gradient: {
      start: '#4F46E5',
      end: '#7C3AED'
    },
    particleCount: 50,
    particleSize: 3
  },

  // Button animation
  button: {
    hoverScale: 1.05,
    clickScale: 0.95,
    transitionDuration: 200
  }
};

// Animation variants for framer-motion
export const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1
    }
  }
};

export default heroConfig;