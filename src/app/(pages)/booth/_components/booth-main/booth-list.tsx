import { BoothCard } from './booth-card';

export function BoothList() {
  return (
    <section className='pt-4 pb-12 w-full grid grid-cols-2 gap-x-3 gap-y-4'>
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
      <BoothCard />
    </section>
  );
}
