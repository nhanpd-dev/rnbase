/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from '@/utils/loadable';

export const SettingsScreen: React.FC = lazyLoad(
  () => import('./Settings.view'),
  (module) => module.default,
);
