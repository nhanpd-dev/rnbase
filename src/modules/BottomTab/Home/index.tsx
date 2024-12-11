/* eslint-disable import/extensions */
/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from '@/utils/loadable';

export const HomeScreen: React.FC = lazyLoad(
  () => import('./Home.view'),
  module => module.default,
);
