import React, { useState } from 'react';
import Banner from '../Banner';

import { SliderWrapper } from './styles';

export default function BannerSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const lenght = 4;

  return (
    <SliderWrapper>
      {[...Array(lenght)].map((_, index) => {
        return <Banner key={index} isActive={currentBanner === index}/>
      })}
      <ul>
        {[...Array(lenght)].map((_, index) => {
          return (
            <li key={index} onClick={() => setCurrentBanner(index)}>
              {index}
            </li>
          )
        })}
      </ul>
    </SliderWrapper>
  )
}
