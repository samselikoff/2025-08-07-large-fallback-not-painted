import { Suspense } from 'react';
import { Skeleton } from '../Skeleton';
import { SlowRSC } from '../SlowRSC';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<Skeleton lines={300} />}>
        <SlowRSC />
      </Suspense>
    </div>
  );
}
