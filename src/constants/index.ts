export interface SaJuColumn {
  tenStar: string; // 十星
  tenStarKor: string; // 십성 한글
  heavenlyStem: string; // 天干
  heavenlyStemKor: string; // 천간 한글
  earthlyBranch: string; // 地支
  earthlyBranchKor: string; // 지지 한글
  tenStarBottom: string; // 下部 十星
  tenStarBottomKor: string; // 하부 십성 한글
  twelveStars: string; // 十二運星
  twelveStarsKor: string; // 십이운성 한글
  twelveFates: string[]; // 十二神煞
  twelveFatesKor: string[]; // 십이신살 한글
}

// 더미 데이터 예시
export const dummySaJuData = {
  birthDateTime: {
    year: 1980,
    month: 8,
    day: 27,
    hour: 8,
    minute: 10,
  },
  saJuData: {
    year: {
      tenStar: "比肩",
      tenStarKor: "비견",
      heavenlyStem: "庚",
      heavenlyStemKor: "경",
      earthlyBranch: "申",
      earthlyBranchKor: "신",
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
      heavenlyStem: "乙",
      heavenlyStemKor: "을",
      earthlyBranch: "未",
      earthlyBranchKor: "미",
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
      heavenlyStem: "丙",
      heavenlyStemKor: "병",
      earthlyBranch: "午",
      earthlyBranchKor: "오",
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
      heavenlyStem: "丁",
      heavenlyStemKor: "정",
      earthlyBranch: "巳",
      earthlyBranchKor: "사",
      tenStarBottom: "正官",
      tenStarBottomKor: "정관",
      twelveStars: "死",
      twelveStarsKor: "사",
      twelveFates: ["天醫", "月德"],
      twelveFatesKor: ["천의", "월덕귀인"],
    },
  },
};
