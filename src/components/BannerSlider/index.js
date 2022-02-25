import React, { useState } from 'react';
import Banner from '../Banner';

import { SliderWrapper, IndicatorList, IndicatorItem } from './styles';

export default function BannerSlider() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const lenght = 4;

  return (
    <SliderWrapper>
      {[...Array(lenght)].map((_, index) => {
        return <Banner key={index} isActive={currentBanner === index}/>
      })}
      <IndicatorList>
        {[...Array(lenght)].map((_, index) => {
          return (
            <IndicatorItem key={index} onClick={() => setCurrentBanner(index)} isActive={currentBanner === index} />
          )
        })}
      </IndicatorList>
    </SliderWrapper>
  )
}
