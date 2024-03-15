// // page.tsx

// import PaginationControls from '@/components/PaginationControls'
// import Image from 'next/image'

// const data = [
//   'entry 1',
//   'entry 2',
//   'entry 3',
//   'entry 4',
//   'entry 5',
//   'entry 6',
//   'entry 7',
//   'entry 8',
//   'entry 9',
//   'entry 10',
// ]

// export default function Home({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined }
// }) {
//   const page = searchParams['page'] ?? '1'
//   const per_page = searchParams['per_page'] ?? '5'

//   // mocked, skipped and limited in the real app
//   const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
//   const end = start + Number(per_page) // 5, 10, 15 ...

//   const entries = data.slice(start, end)

//   return (
//     <div className='flex flex-col gap-2 items-center'>
//       {entries.map((entry) => (
//         <p key={entry}>{entry}</p>
//       ))}

//       <PaginationControls
//         hasNextPage={end < data.length}
//         hasPrevPage={start > 0}
//       />
//     </div>
//   )
// }


// // PaginationControls.tsx
// 'use client'

// import { FC } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'

// interface PaginationControlsProps {
//   hasNextPage: boolean
//   hasPrevPage: boolean
// }

// const PaginationControls: FC<PaginationControlsProps> = (
//   {
//     hasNextPage,
//     hasPrevPage,
//   }
// ) => {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const page = searchParams.get('page') ?? '1'
//   const per_page = searchParams.get('per_page') ?? '5'

//   return (
//     <div className='flex gap-2'>
//       <button
//         className='bg-blue-500 text-white p-1'
//         disabled={!hasPrevPage}
//         onClick={() => {
//           router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`)
//         }}>
//         prev page
//       </button>

//       <div>
//         {page} / {Math.ceil(10 / Number(per_page))}
//       </div>

//       <button
//         className='bg-blue-500 text-white p-1'
//         disabled={!hasNextPage}
//         onClick={() => {
//           router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`)
//         }}>
//         next page
//       </button>
//     </div>
//   )
// }

// export default PaginationControls



"use client"



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  return (
    <div className=' bg-yellow-300'>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <Image alt=' slide' height={100} width={100} src="/slides/1.png" />
        </SwiperSlide>
        <SwiperSlide>
           <Image alt=' slide' height={100} width={100} src="/slides/1.png" />
        </SwiperSlide>
        <SwiperSlide>
           <Image alt=' slide' height={100} width={100} src="/slides/1.png" />
        </SwiperSlide>
        <SwiperSlide>
           <Image alt=' slide' height={100} width={100} src="/slides/1.png" />
        </SwiperSlide>
        <SwiperSlide>
           <Image alt=' slide' height={100} width={100} src="/slides/1.png" />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}