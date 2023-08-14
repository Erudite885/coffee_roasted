import React from 'react'

import styles, {layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mt-[85px]`}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultricies ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <Button styles="mt-10 rounded-[10px]" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);


export default CardDeal