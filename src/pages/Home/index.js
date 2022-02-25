import React from 'react'

import Header from "../../components/Header";
import BannerSlider from "../../components/BannerSlider";
import Shelf from '../../components/Shelf';
import News from '../../components/News';

export default function Home() {
  return (
    <>
      <Header />
      <BannerSlider />
      <Shelf />
      <News />
    </>
  )
}
