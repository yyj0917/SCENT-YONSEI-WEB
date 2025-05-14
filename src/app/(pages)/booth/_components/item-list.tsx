import ItemCard from './item-card';

export default function ItemList() {
  return (
    <section className='pt-4 pb-12 w-full grid grid-cols-2 gap-x-3 gap-y-4'>
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </section>
  );
}
