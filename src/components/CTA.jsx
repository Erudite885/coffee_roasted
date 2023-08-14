import React from 'react'
import styles from "../style";
// import { arrowUp } from "../assets";
// import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-gradient-to-b from-amber-900 to-black rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Looking for a fresh cup of coffee?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300 text-center`}>
        Come drink coffee with us at <br /> Fleet Street, Chancery Lane, or
        Mikannourd Road.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button
        type="button"
        className={`py-4 rounded-[8px] animate-bounce px-6 border uppercase font-poppins flex flex-row font-medium text-[18px] text-white outline-none ${styles}`}
      >
        Book a Table
      </button>
    </div>
  </section>
);


export default CTA