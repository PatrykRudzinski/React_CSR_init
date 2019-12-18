import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

import pageTransition from 'styles/animations/pageTransition';

const PageTransitionWrapper = ({ children }) => (
  <AnimatePresence>
    <motion.div
      {...pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  </AnimatePresence>
);

PageTransitionWrapper.propTypes = {
  children: PropTypes.node,
};

export default PageTransitionWrapper;
