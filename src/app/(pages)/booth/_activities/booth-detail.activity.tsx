import { ActivityComponentType } from '@stackflow/react';

type Params = {
  booth_id: string;
};

export const BoothDetailActivity: ActivityComponentType<Params> = ({
  params,
}: {
  params: Params;
}) => {
  return (
    <div className='p-4'>
      <h2 className='text-lg font-bold'>Booth ID: {params.booth_id}</h2>
    </div>
  );
};
