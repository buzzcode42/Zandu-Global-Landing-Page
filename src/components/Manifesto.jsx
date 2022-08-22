import React from 'react';

import Slide from './Slide'
import slideImages from './Slide/mock'

const Manifesto = () => {
  return (
    <section className='slide-wrapper' id="manifesto">
        <Slide images={slideImages} infiniteLoop={false} />
    </section>
  )
}

export default Manifesto
