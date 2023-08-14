import React from 'react'

import { features, featuresFour, featuresThree, featuresTwo } from "../constants";
// import { barista2, beans } from '../assets'
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] rounded-full object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-stone-400 text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Billing = () => (
  <>
    <div
      id="product"
      className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-0 relative z-[1]"
    >
      <h1 className={styles.heading2}>Our Menu</h1>
    </div>

    <section
      className={`${layout.section} bg-stone-800 rounded-[20px] md:rounded-[16px] relative mt-0 mb-10`}
    >
      <div className={layout.sectionImg}>
        <div className={`${layout.sectionImgReverse} flex-col`}>
          {featuresThree.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))}
        </div>

        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full amber__gradient" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {featuresFour.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  </>
);

export default Billing