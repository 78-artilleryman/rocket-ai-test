import Image from "next/image";
import React from "react";

export const Background = () => {
  return (
    <>
      <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 w-118 h-90 flex items-center justify-center text-white opacity-10 blur-xs text-[60px] leading-[90px] tracking-[12px] font-normal text-center pointer-events-none whitespace-pre-line z-40">
        甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙
      </div>
      <div className="absolute -bottom-25 -left-23 z-30">
        <Image
          src="/rectangle2.svg"
          alt="사각형"
          width={345}
          height={336}
          priority
        />
      </div>
      <div className="absolute -bottom-7 left-0 z-30 w-full">
        <Image
          src="/rectangle.svg"
          alt="사각형"
          width={658}
          height={313}
          priority
        />
      </div>
      <div className="absolute top-85 left-1/2 -translate-x-1/2 w-118 h-90 flex items-center justify-center text-white opacity-10 blur-xs text-[60px] leading-[90px] tracking-[12px] font-normal text-center pointer-events-none whitespace-pre-line z-40">
        甲乙丙丁戊己 庚辛壬癸子丑 寅卯辰巳午未 申酉戌亥甲乙
      </div>
      <div>
        <Image
          className="absolute bottom-0 right-0 z-30"
          src="/body.png"
          alt="바디"
          width={298}
          height={405}
          priority
        />
        <Image
          className="absolute bottom-0 right-0 z-30"
          src="/allCharacter.png"
          alt="캐릭터 전체"
          width={201.377}
          height={520.976}
          priority
        />
        <div className="absolute bottom-0 w-full h-50 bg-white-gradient z-50"></div>
      </div>
    </>
  );
};
