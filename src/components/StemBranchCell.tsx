import React from "react";

export interface StemBranchData {
  hanja: string; // 메인 한자 (예: 甲)
  hangul: string; // 한글 (예: 갑)
  element: "wood" | "fire" | "earth" | "metal" | "water"; // 오행
  elementHanja: string; // 오행 한자 (예: 陽木)
}

const getElementColor = (element: StemBranchData["element"]) => {
  switch (element) {
    case "wood":
      return "#18868C";
    case "fire":
      return "#C23030";
    case "earth":
      return "#E6B53D";
    case "metal":
      return "#FFFFFF";
    case "water":
      return "#2F2F2F";
  }
};

export const StemBranchCell: React.FC<StemBranchData> = ({
  hanja,
  hangul,
  element,
  elementHanja,
}) => {
  const backgroundColor = getElementColor(element);
  const textColor = element === "metal" ? "#2F2F2F" : "#FFFFFF";
  const borderColor = element === "metal" ? "#2F2F2F" : backgroundColor;

  return (
    <div
      className="rounded-lg w-[55px] h-[55px] flex flex-col items-center justify-center gap-[2px]"
      style={{
        backgroundColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <p className="text-[8px] leading-none" style={{ color: textColor }}>
        {hangul}
      </p>
      <p
        className="text-[25px] font-bold leading-none"
        style={{ color: textColor }}
      >
        {hanja}
      </p>

      <p className="text-[8px] leading-none" style={{ color: textColor }}>
        {elementHanja}
      </p>
    </div>
  );
};
