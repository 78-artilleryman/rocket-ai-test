import { SaJuColumn } from "@/constants";
import {
  transformSaJuData,
  PERIODS,
  type RowConfig,
  formatDateTime,
} from "@/utils";
import Image from "next/image";
import React from "react";
import { StemBranchCell } from "./StemBranchCell";

export interface SaJuTableProps {
  birthDateTime: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };
  saJuData: {
    time: SaJuColumn;
    day: SaJuColumn;
    month: SaJuColumn;
    year: SaJuColumn;
  };
  name: string;
}

const SaJuTable = ({ birthDateTime, saJuData, name }: SaJuTableProps) => {
  const rows = transformSaJuData();

  return (
    <div className="w-[350px] bg-[#F5F3EC] mx-auto text-[#424242] border-[3px] border-[#1B2F49]">
      <div className="relative">
        {/* 수평 보더 */}
        <div className="absolute top-2 left-0 right-0 h-[1px] bg-[#2B557E]" />
        <div className="absolute bottom-2 left-0 right-0 h-[1px] bg-[#2B557E]" />

        {/* 수직 보더 */}
        <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-[#2B557E]" />
        <div className="absolute top-0 bottom-0 right-2 w-[1px] bg-[#2B557E]" />

        <div className="p-5">
          <div className="w-full pt-10 flex justify-between">
            <Image
              src="leftCloud.svg"
              alt="왼쪽 구름 아이콘"
              width={57}
              height={38}
              className="w-[57px] h-[38px] mt-1"
            />
            <div className="text-[#424242] text-center">
              <h2 className="text-base font-normal mb-3">{name}님의 사주</h2>
            </div>

            <Image
              src="rightCloud.svg"
              alt="오른쪽 구름 아이콘"
              width={57}
              height={38}
              className="w-[57px] h-[38px] -mt-3"
            />
          </div>
          <h2 className="w-full text-xl mb-5 font-bold flex justify-center">
            {formatDateTime(birthDateTime)}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-[50px] border border-black border-t-0 border-l-0 p-1 text-xl"></th>
                  <th className=" border border-black border-t-0 p-1 text-xl">
                    時
                  </th>
                  <th className=" border border-black border-t-0 p-1 text-xl">
                    日
                  </th>
                  <th className=" border border-black border-t-0 p-1 text-xl">
                    月
                  </th>
                  <th className=" border border-black border-t-0 border-r-0 p-1 text-xl">
                    年
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ title, data }: RowConfig, index) => {
                  // 천간이나 지지인 경우 StemBranchCell을 사용
                  const isStemOrBranch =
                    title.hanja === "天干" || title.hanja === "地支";

                  return (
                    <tr key={index}>
                      <td
                        className={`min-w-[50px] border border-black border-l-0 py-1 pr-2 text-center font-bold ${
                          title.isSmall ? "text-[10px]" : "text-xs"
                        }`}
                      >
                        <p>{title.hanja}</p>
                        <p className="text-[7px] font-medium">
                          ({title.hangul})
                        </p>
                      </td>
                      {PERIODS.map((period) => {
                        if (isStemOrBranch) {
                          const stemBranchData =
                            title.hanja === "天干"
                              ? saJuData[period].heavenlyStem
                              : saJuData[period].earthlyBranch;

                          return (
                            <td
                              key={period}
                              className={`border border-black p-1 text-center ${
                                period === "year" ? "border-r-0" : ""
                              }`}
                            >
                              <StemBranchCell {...stemBranchData} />
                            </td>
                          );
                        }

                        const cellData = data(saJuData[period]);
                        return (
                          <td
                            key={period}
                            className={`border border-black p-1 text-center bg-[#FDFDFB] ${
                              period === "year" ? "border-r-0" : ""
                            }`}
                          >
                            <p className="text-sm font-bold">
                              {cellData.hanja}
                            </p>
                            <p className="text-[10px]">({cellData.hangul})</p>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
                <tr>
                  <td className="min-w-[50px] border border-black border-l-0 border-b-0 py-1 pr-2 text-center font-bold text-xs">
                    <p>貴人</p>
                    <p className="text-[7px] font-medium">(귀인)</p>
                  </td>
                  {PERIODS.map((period) => (
                    <td
                      key={period}
                      className={`border border-black border-b-0 p-1 text-center bg-[#FDFDFB] ${
                        period === "year" ? "border-r-0" : ""
                      }`}
                    >
                      {saJuData[period].twelveFates.length > 0 ? (
                        saJuData[period].twelveFates.map((fate, index) => (
                          <React.Fragment key={index}>
                            <p className="text-sm font-bold">{fate}</p>
                            <p className="text-[10px]">
                              ({saJuData[period].twelveFatesKor[index]})
                            </p>
                          </React.Fragment>
                        ))
                      ) : (
                        <p className="text-[10px]">(없음)</p>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaJuTable;
