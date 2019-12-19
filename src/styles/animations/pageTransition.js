const variants = {
  initial: {
    opacity: 0,
    scale: 0.75,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.75,
  },
};

const transition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

const style = {
  position: 'absolute',
};

export default { style, transition, variants };
