import React from 'react';
import TreeAnimation from '../components/TreeAnimation';
import { NavBar } from '../components/NavBar';

export function Home() {
  
  return (
      <>
      <NavBar isDark={false} />
      <TreeAnimation class='z-0'/>
      <div class='text-center pt-[5%] px-[20%] text-[#182e2e]'>
        <h1 class='font-bold text-7xl'>Woodsworth College Orientation 2023</h1>
        <body class='font-bold'>September 4th to September 9th</body>
      </div>
      <a href='/tickets'>
      <div class='text-center mt-[5%] py-4 mx-[43%] relative bg-[#182e2e] rounded-[30px] tracking-[.25em] text-white font-bold text-lg hover:cursor-pointer'>
        <h1>BUY TICKETS</h1>
      </div>
      </a>
      <div class='absolute mt-[23%] z-10 bg-[#182e2e] w-[100%] h-[100%]'>
        <div class='grid grid-cols-5 px-[15%] mt-[10%]'>
          <div class='col-span-2'>
            <h1 class='text-8xl font-extrabold tracking-wide text-white'>Discover The <span class='text-[#f0d8a6]'>Wolf</span> In You.</h1>
            <h2 class='mt-4 text-white mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem magna, volutpat eget dapibus vel, convallis ut felis.
            </h2>
            <a href='/more'>
              <div class='flex justify-start'>
                <div class='text-center mt-[5%] py-4 px-4 bg-[#f0d8a6] rounded-[30px] tracking-[.25em] text-[#182e2e] font-bold text-lg hover:cursor-pointer'>
                  <h1>LEARN MORE</h1>
                </div>
              </div>
            </a>
          </div>
          <div class='col-span-3'>
            <img src='./wolf.png' alt='wolf'/>
          </div>
        </div>
      </div>
      
      </>
  );
}
