import { SaJuColumn } from "@/constants";

export interface CellData {
  hanja: string;
  hangul: string;
}

export interface RowConfig {
  title: {
    hanja: string;
    hangul: string;
    isSmall?: boolean;
  };
  data: (data: SaJuColumn) => CellData;
}

export const transformSaJuData = (): RowConfig[] => {
  return [
    {
      title: { hanja: "十星", hangul: "십성" },
      data: (data: SaJuColumn): CellData => ({
        hanja: data.tenStar,
        hangul: data.tenStarKor,
      }),
    },
    {
      title: { hanja: "天干", hangul: "천간" },
      data: (data: SaJuColumn): CellData => ({
        hanja: data.heavenlyStem,
        hangul: data.heavenlyStemKor,
      }),
    },
    {
      title: { hanja: "地支", hangul: "지지" },
      data: (data: SaJuColumn): CellData => ({
        hanja: data.earthlyBranch,
        hangul: data.earthlyBranchKor,
      }),
    },
    {
      title: { hanja: "十星", hangul: "십성" },
      data: (data: SaJuColumn): CellData => ({
        hanja: data.tenStarBottom,
        hangul: data.tenStarBottomKor,
      }),
    },
    {
      title: {
        hanja: "十二運星",
        hangul: "십이운성",
        isSmall: true,
      },
      data: (data: SaJuColumn): CellData => ({
        hanja: data.twelveStars,
        hangul: data.twelveStarsKor,
      }),
    },
  ];
};

export const PERIODS = ["time", "day", "month", "year"] as const;
