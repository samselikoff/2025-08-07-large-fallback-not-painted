import { Suspense } from 'react';
import { Skeleton } from '../Skeleton';
import { SlowRSC } from '../SlowRSC';

export default function Home() {
  return (
    <Suspense fallback={<Skeleton lines={100} />}>
      <SlowRSC />
    </Suspense>
  );
}
