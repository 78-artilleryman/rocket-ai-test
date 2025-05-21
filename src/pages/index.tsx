import { Background, Title } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-md mx-auto bg-yellow-gradient relative overflow-hidden">
      {/* 첫번째 섹션*/}
      <section className="relative z-50 h-[680px] overflow-hidden">
        {/* 배경 */}
        <Background />

        {/* 타이틀 */}
        <Title />
      </section>

      {/* 두번째 섹션*/}
      <section className="bg-[#F3F2EF] h-110 relative">
        <div className="absolute -top-11 w-full h-50 z-50">
          <Image src="/topBalloon.svg" alt="말풍선" width={255} height={139} />
        </div>
        <p className="text-[#424242] text-center text-base font-normal max-w-[140px] absolute top-5 left-15 z-50">
          이제 본격적으로 <br />
          OO님의 사주팔자를 분석해볼 차례네요.
        </p>
        <div className="w-[351px] pt-27.5 flex justify-between">
          <div className="w-[153px] pt-32">
            <Image
              src="/section2Icon.png"
              alt="icon"
              width={153}
              height={120}
            />
          </div>
          <Image src="/hand.png" alt="손 그림" width={120} height={285} />
        </div>
      </section>

      {/* 세번째 섹션*/}
      <section className="w-full relative bg-[#F3F2EF] pb-20">
        <div className="absolute -top-31 w-full h-50 z-50">
          <Image
            src="/bottomBalloon.svg"
            alt="말풍선"
            width={280}
            height={139}
          />
        </div>
        <p className="text-[#424242] text-center text-base font-normal max-w-[172px] absolute -top-18 left-14 z-50">
          제가 oo님의 사주를
          <br />
          보기 쉽게 표로 정리했어요.
        </p>
        <div className="w-full relative">
          <Image
            src="/section3Character.png"
            alt="캐릭터"
            width={448}
            height={306}
          />
          <div className="w-full h-[118px] bg-white-gradient absolute left-0 bottom-0 z-50"></div>
        </div>
        {/* 사주 표*/}
        <div className="w-[350px] h-[620px] bg-red-200 -mt-5 mx-auto"></div>
      </section>
    </main>
  );
}
