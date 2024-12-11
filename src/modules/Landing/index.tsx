import React from 'react';
import { lazyLoad } from '@/utils/loadable';

export const LandingPage: React.FC = lazyLoad(
  () => import('./Landing.view'),
  module => module.default,
);
