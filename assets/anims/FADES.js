/**
 *
 *  This is the fades for the Framer Motion
 *
 */

const FADE_IN = {
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  hidden: {
    opacity: 0,
  },
};

const FADE_UP = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
  hidden: {
    opacity: 0,
    y: 30,
  },
};

export { FADE_IN, FADE_UP };
