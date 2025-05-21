import Image from "next/image";
import React from "react";

export const Title = () => {
  return (
    <div className="flex flex-col items-center gap-3 overflow-hidden pt-21 pb-23 bg-black-gradient w-full z-50">
      <h1 className="text-xl font-normal text-white text-center">제 1장</h1>
      <Image
        src="/headerIcon.svg"
        alt="헤더 아이콘"
        width={157}
        height={20}
        priority
      />
      <h1 className="text-xl font-normal text-white text-center">
        나의 사주팔자
      </h1>
    </div>
  );
};
