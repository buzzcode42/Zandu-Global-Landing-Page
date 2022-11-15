import { Carousel } from 'flowbite-react'

import slideOne from '../assets/slide_one.jpg'
import slideTwo from '../assets/slide_two.jpg'
import slideThree from '../assets/slide_three.jpg'
import slideFour from '../assets/slide_four.jpg'
import slideFive from '../assets/slide_five.jpg'

export function Slide() {
  return (
    <div className="h-96 sm:h-[120rem] xl:h-[120rem] 2xl:h-[120rem]">
  <Carousel>
    <img
      src={slideOne}
      alt="..."
    />
    <img
      src={slideTwo}
      alt="..."
    />
    <img
      src={slideThree}
      alt="..."
    />
    <img
      src={slideFour}
      alt="..."
    />
    <img
      src={slideFive}
      alt="..."
    />
  </Carousel>
</div>
  )
}