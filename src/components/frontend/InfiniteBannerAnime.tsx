"use client";

import { useEffect } from "react";
import {animate} from "animejs";
import Image from "next/image";

export default function InfiniteBannerAnime() {

  useEffect(() => {
    animate('.app-list-box-first',{
      translateX: ['250px', '-250px'],
      duration: 10000,
      alternate: true,
        ease: 'inOutSine',
      loop: true
    });
    animate('.app-list-box-two',{
        translateX: ['-250px', '250px'],
        duration: 10000,
        alternate: true,
        ease: 'inOutSine',
        loop: true
      });
      animate('.app-list-box-three',{
        translateX: ['150px', '-150px'],
        duration: 10000,
        alternate: true,
        ease: 'inOutSine',
        loop: true
      });
  }, []);

  return (
    <>
        <div className='app-list-box scale-110 app-list-box-first'><Image src="/banner/app_list_1.webp" alt="UI FLAT" width={3840} height={85} /></div>
        <div className='app-list-box scale-110 app-list-box-two'><Image src="/banner/app_list_2.webp" alt="UI FLAT" width={3840} height={85} /></div>
        <div className='app-list-box scale-110 app-list-box-three'><Image src="/banner/app_list_3.webp" alt="UI FLAT" width={3840} height={85} /></div>
    </>
  );
}
