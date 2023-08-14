import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 border uppercase font-poppins flex flex-row font-medium text-[18px] text-white outline-none ${styles}`}
    >
      view our menu
    </button>
  );
};

export default Button;
