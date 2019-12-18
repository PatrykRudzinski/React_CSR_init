const variants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '100vw',
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
