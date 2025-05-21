export interface StemBranchData {
  hanja: string; // 메인 한자 (예: 甲)
  hangul: string; // 한글 (예: 갑)
  element: "wood" | "fire" | "earth" | "metal" | "water"; // 오행
  elementHanja: string; // 오행 한자 (예: 陽木)
}

export interface SaJuColumn {
  tenStar: string; // 十星
  tenStarKor: string; // 십성 한글
  heavenlyStem: StemBranchData; // 天干
  earthlyBranch: StemBranchData; // 地支
  tenStarBottom: string; // 下部 十星
  tenStarBottomKor: string; // 하부 십성 한글
  twelveStars: string; // 十二運星
  twelveStarsKor: string; // 십이운성 한글
  twelveFates: string[]; // 十二神煞
  twelveFatesKor: string[]; // 십이신살 한글
}

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

// 더미 데이터 예시
export const dummySaJuData: SaJuTableProps = {
  birthDateTime: {
    year: 1980,
    month: 8,
    day: 27,
    hour: 8,
    minute: 10,
  },
  name: "윤병현",
  saJuData: {
    year: {
      tenStar: "比肩",
      tenStarKor: "비견",
      heavenlyStem: {
        hanja: "庚",
        hangul: "경",
        element: "metal",
        elementHanja: "陽金",
      },
      earthlyBranch: {
        hanja: "申",
        hangul: "신",
        element: "metal",
        elementHanja: "陽金",
      },
      tenStarBottom: "偏財",
      tenStarBottomKor: "편재",
      twelveStars: "長生",
      twelveStarsKor: "장생",
      twelveFates: [],
      twelveFatesKor: [],
    },
    month: {
      tenStar: "劫財",
      tenStarKor: "겁재",
      heavenlyStem: {
        hanja: "乙",
        hangul: "을",
        element: "wood",
        elementHanja: "陰木",
      },
      earthlyBranch: {
        hanja: "未",
        hangul: "미",
        element: "earth",
        elementHanja: "陰土",
      },
      tenStarBottom: "正財",
      tenStarBottomKor: "정재",
      twelveStars: "帝旺",
      twelveStarsKor: "제왕",
      twelveFates: ["月德", "天德"],
      twelveFatesKor: ["월덕귀인", "천덕귀인"],
    },
    day: {
      tenStar: "食神",
      tenStarKor: "식신",
      heavenlyStem: {
        hanja: "丙",
        hangul: "병",
        element: "fire",
        elementHanja: "陽火",
      },
      earthlyBranch: {
        hanja: "午",
        hangul: "오",
        element: "fire",
        elementHanja: "陰火",
      },
      tenStarBottom: "偏官",
      tenStarBottomKor: "편관",
      twelveStars: "衰",
      twelveStarsKor: "쇠",
      twelveFates: ["天德", "月德"],
      twelveFatesKor: ["천덕귀인", "월덕귀인"],
    },
    time: {
      tenStar: "傷官",
      tenStarKor: "상관",
      heavenlyStem: {
        hanja: "丁",
        hangul: "정",
        element: "fire",
        elementHanja: "陰火",
      },
      earthlyBranch: {
        hanja: "巳",
        hangul: "사",
        element: "fire",
        elementHanja: "陰火",
      },
      tenStarBottom: "正官",
      tenStarBottomKor: "정관",
      twelveStars: "死",
      twelveStarsKor: "사",
      twelveFates: ["天醫", "月德"],
      twelveFatesKor: ["천의", "월덕귀인"],
    },
  },
};
