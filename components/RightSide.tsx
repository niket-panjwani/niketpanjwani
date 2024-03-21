import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-20 text-textLight">
      <a href="mailto:niket@niketpanjwani.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          niket@niketpanjwani.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
