import React from "react";

import {
  Navbar,
  Hero,
  Business,
  Billing,
  CTA,
  Testimonials,
  Footer,
} from "./components";
import styles from "./style";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div
      className={`bg-current fixed w-full z-[90] ${styles.paddingX} ${styles.flexCenter}`}
    >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-black ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <Billing />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
