/* eslint-disable import/extensions */
/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from '@/utils/loadable';

export const SplashScreen: React.FC = lazyLoad(
  () => import('./Splash.view'),
  module => module.default,
);
