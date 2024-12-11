/* eslint-disable import/extensions */
/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from '@/utils/loadable';

export const LoginScreen: React.FC = lazyLoad(
  () => import('./Login.view'),
  module => module.default,
);
