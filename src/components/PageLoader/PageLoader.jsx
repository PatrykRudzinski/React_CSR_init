import React from 'react';
import FullScreen from 'containers/FullScreen';
import { PageTransitionWrapper } from 'containers';

const PageLoader = () => (
  <PageTransitionWrapper>
    <FullScreen>
      Loading.....!
    </FullScreen>
  </PageTransitionWrapper>
);

export default PageLoader;
