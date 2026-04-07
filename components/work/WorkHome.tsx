import React from 'react'
import InfiniteMenu from '../ui/InfiniteMenu';
import { Work2 } from '../projects/Data';

export default function WorkHome() {
  return (
    <div>
      <div className='h-svh relative'>
  <InfiniteMenu items={Work2}
    scale={1}
/>
</div>
    </div>
  )
}


