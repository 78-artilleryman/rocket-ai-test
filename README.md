# 로켓 AI 코딩 테스트

## 기술 스택

- **Frontend Framework**: Next.js 14
- **스타일링**: Tailwind CSS
- **언어**: TypeScript

## 실행 방법

1. **환경 설정**

   ```bash
   # 저장소 클론
   git clone [https://github.com/78-artilleryman/rocket-ai-test]
   cd rocket-ai-test

   # 의존성 설치
   npm install
   ```

2. **개발 서버 실행**

   ```bash
   npm run dev
   ```

   브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인할 수 있습니다.

3. **빌드 및 프로덕션 실행**

   ```bash
   # 프로덕션 빌드
   npm run build

   # 프로덕션 서버 실행
   npm run start
   ```

## 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── SaJuTable.tsx       # 사주 테이블 메인 컴포넌트
│   └── StemBranchCell.tsx  # 천간/지지 셀 컴포넌트
│   └── Title.tsx           # 페이지 타이틀 컴포넌트
│   └── Title.tsx           # 첫번째 섹션 배경 컴포넌트
│
├── constants/          # 상수 및 타입 정의
├── utils/              # 유틸리티 함수
└── pages/              # Next.js 페이지
```
