import React from "react";

function Logo() {
  return (
    <div>
      <h1 className="md:text-[20px] tracking-widest">
        <img
          className="w-4 object-scale-down inline-block mx-2 -mt-1"
          src="/images/supersimplelogo.png"
          alt=""
        />
        SUPER SIMPLE
      </h1>
    </div>
  );
}

export default Logo;
