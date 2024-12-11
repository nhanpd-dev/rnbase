import React, { lazy, Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

type Unpromisify<T> = T extends Promise<infer P> ? P : never;

export const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(importFunc: () => T, selectorFunc?: (s: Unpromisify<T>) => U) => {
  let lazyFactory: () => Promise<{ default: U }> = importFunc;

  if (selectorFunc) {
    lazyFactory = () => importFunc().then(module => ({ default: selectorFunc(module) }));
  }

  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={<ActivityIndicator />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};
