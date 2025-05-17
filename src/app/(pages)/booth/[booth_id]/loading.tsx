import React from 'react';
import Loading from 'react-loading';

export default function BoothDetailPageLoading() {
  return (
    <div className='w-full h-full flex-center'>
      <Loading type='spin' color='#000' height={100} width={100} />
    </div>
  );
}
