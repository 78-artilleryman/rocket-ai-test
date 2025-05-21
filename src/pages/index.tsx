import { Background, Title } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-md mx-auto bg-yellow-gradient relative overflow-hidden">
      <section className="relative z-50 h-[680px] overflow-hidden">
        {/* 배경 */}
        <Background />

        {/* 타이틀 */}
        <Title />
      </section>
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
    </main>
  );
}
