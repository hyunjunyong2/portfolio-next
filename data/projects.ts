export type ProjectCategory = 'work' | 'side';

export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  description: string[];
  role: string[];
  tech: string[];
  category: ProjectCategory;
  company?: string;
  link?: string;
  github?: string;
  youtube?: string;
  awards?: string[];
  retrospective?: string;
  thumbnail?: string;
};


export const projects: Project[] = [
  // ───── 실무 프로젝트 (최신순) ─────
  {
    category: 'work',
    slug: 'usimsa-partners',
    title: '유심사 B2B 파트너스 웹',
    company: '가제트코리아 (유심사)',
    period: '2026.08 ~ 현재',
    summary: '모노레포에서 제휴사 웹을 독립 저장소로 분리·재구축하고 리브랜딩·결제·쿠폰 구현',

    description: [
      '유심사 FE 모노레포의 partners 도메인을 Nuxt 4 기반 독립 저장소로 분리·이관했습니다. 라우팅 개편, 죽은 코드 정리, 레거시 SCSS의 Tailwind 4 전환, element-plus 의존 제거(자체 컴포넌트 대체)를 프론트엔드 단독으로 진행했습니다.',
      '레거시 useApi()를 삭제하고 타입이 있는 use*API() 레이어로 통일했습니다. 파트너 식별 헤더를 전역 주입하고, 이를 우회하던 raw $fetch/useFetch 4곳을 이관했으며 전역 토스트·401 처리를 공통화했습니다.',
      'Figma 기준으로 Button·BottomSheet·Tab·TextFields 등 디자인 시스템 컴포넌트를 제작하고 홈·상품 상세·결제·마이페이지·고객센터를 리브랜딩 시안에 맞춰 구현했습니다. 레이어 없는 전역 position 선언이 Tailwind absolute/fixed를 무력화하던 문제를 8개 파일 14곳에서 찾아 수정했습니다.',
      '공항 송영(TA) 예약 3단계와 Toss 결제 플로우를 구현하고, 소개 이미지를 WebP로 분할·preload 처리했습니다. 로컬 목업 측정 기준 모바일 느린 4G LCP가 약 48% 개선됐습니다.',
      '파트너 전용 쿠폰(usageScope=PARTNERS) 필터링과 다건구매 결제를 구현해 운영에 반영했습니다. 다건구매 승인 복구(409 응답 복구, 재시도 시 주문 재사용, 불확실한 승인 결과의 재승인 차단)는 설계·구현했으나 실서버 검증 전입니다. 고객센터·공지 새 시안도 구현했습니다.',
      'ESLint·Prettier를 도입하고, 결제·주문 로직은 Node 단위 테스트로 검증했습니다.',
      'AI 코딩 도구(Claude Code)를 개발 전반에 활용했습니다. PRD·설계 문서(docs/)를 먼저 정리한 뒤 구현하고, 측정 결과와 미검증 범위를 문서로 남기는 방식으로 개발했습니다.',
    ],

    role: [
      '프론트엔드 단독 담당 — 모노레포 분리·마이그레이션 주도',
      'API 레이어 통일 및 전역 에러 처리 설계',
      '결제(Toss)·다건구매 주문 플로우 설계 및 구현',
      '디자인 시스템 컴포넌트 구현 및 리브랜딩 화면 개발',
      '파트너 전용 쿠폰 필터·다건구매 결제 개발 (운영 반영), 고객센터·공지 새 시안 개발',
      'AI 코딩 도구 활용 문서 선행 개발 (PRD·설계 문서, 테스트 검증)',
    ],

    tech: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS 4', 'Pinia', 'Toss Payments', 'Supabase', 'GitHub Actions', 'Claude Code'],
  },

  {
    category: 'work',
    slug: 'usimsa-sales-partners',
    title: '세일즈 파트너스 포털',
    company: '가제트코리아 (유심사)',
    period: '2024.07 ~ 현재',
    summary: 'B2B 파트너사용 주문·개통·정산 관리 포털 초기 구축',

    description: [
      '파트너사(대리점 등)를 위한 B2B 주문/정산/개통 관리 포털을 기획 단계부터 참여하여 프론트엔드를 단독으로 구축했습니다.',
      '역할 기반 권한 관리 시스템과 i18n 다국어 처리를 설계·구현했습니다.',
      '유심·이심 대량 개통 기능(CSV → Excel 전환, ICCID 처리)을 개발했습니다. 대량구매 리뉴얼 런칭 후 월 매출이 2~4월 평균 대비 약 3.5배(+247.8%, 6월 기준)로 성장했습니다. 이는 기획·영업을 포함한 팀 성과이며, 본인은 대량 개통 프론트엔드를 담당했습니다.',
      'HTTP 공통 함수 리팩토링, 세션 만료 처리 등 서비스 안정성을 위한 공통 기반 작업을 담당했습니다.',
    ],

    role: [
      '서비스 초기 구축(프론트엔드 단독) - 로그인, 사이드메뉴, 권한관리, 브레드크럼 설계',
      '역할 기반 권한 관리 시스템 설계 및 구현',
      'i18n 다국어 처리 구현',
      '유심 대량 개통 기능 개발 (CSV→Excel 전환, ICCID 처리) — 대량구매 리뉴얼 후 월 매출 약 3.5배 (팀 성과)',
      '이심 전체 상품 조회 기능 개발',
      'HTTP 공통 함수 리팩토링 및 에러 처리',
    ],

    tech: ['Nuxt3', 'i18n', 'Floating UI', 'Pinia'],
  },

  {
    category: 'work',
    slug: 'usimsa-web',
    title: '유심사몰 (B2C 웹 · Nuxt3 + Next.js 전환)',
    company: '가제트코리아 (유심사)',
    period: '2024.03 ~ 현재',
    summary: 'B2C 유심·eSIM 커머스 웹의 인증·결제·성능 개선, 공항 송영(TA) 개발, Next.js 점진적 전환',

    description: [
      '대규모 B2C 서비스를 Nuxt3로 개발·유지보수하는 한편, 2026.03부터 Turborepo 모노레포 기반 Next.js 전환에 참여했습니다. 같은 서비스가 Nuxt3 웹과 Next.js 모노레포 두 저장소로 운영되어 양쪽을 병행했습니다.',
      '네이버·애플·구글·카카오 4종 소셜 로그인 통합 인증 시스템 전체를 설계·구현했습니다. 활성 사용자의 27%(GA 기준)가 거치는 핵심 플로우로, 본인인증 통합(계정 분기·파트너 채널·경로 복원)을 처리합니다. 만료 JWT로 인한 로그인 루프는 exp 기준 판정, 쿠키 수명 min(의도값, JWT exp), 시계 오차 5분 허용, returnUrl 허용 도메인 검증으로 방어했습니다. 결제 승인에는 orderId 기반 멱등키를 적용했습니다.',
      '상품 상세 SSR 성능을 개선했습니다. 독립 호출 4개를 Promise.allSettled로 병렬화하고 SSR 호출에 revalidate를 적용했으며, 인라인 base64 아이콘을 webp로 교체(111KB → 5.2KB)했습니다. SSR 응답 지연 단축을 목표로 한 작업입니다.',
      '공항 송영(TA) 서비스를 개발했습니다. 호텔↔호텔 이동, 항공편 조회 실패 시 수기 입력 폴백, 이용 24시간 전 리드타임 검사, 8개 공항 확장, 공통 패키지(@repo/shuttle) 분리를 구현했습니다. 서비스는 오픈 후 한 달 만에 월 예약이 약 12배 늘고 일 매출 최고치를 경신했습니다(팀 성과).',
      'Next.js 전환에서는 공유 패키지(@repo/shuttle) 설계와 함께 KCB Okcert 본인인증을 단일 훅(useOkcertVerification)으로 추상화하고, 멀티 Analytics 연동과 AES-CBC 클라이언트 암호화를 구현했습니다.',
      'Storybook 기반 디자인 시스템(_usdg, 컴포넌트 26개·스토리 22개)을 프론트엔드 단독으로 구축하고 메인·결제·더보기 화면에 리브랜딩 UI를 적용했습니다. 이 작업에 AI 코딩 도구(Claude Code)를 활용했고, Figma Code Connect 연동 POC도 진행했습니다.',
      'Flutter 앱-웹 브릿지(useAppCheck, iOS/Android 버전 분기, 양방향 네이티브 통신)와 파트너스 전용 서브도메인·사용처별 쿠폰 노출 규칙, Airbridge 이벤트 트래킹도 구현했습니다.',
    ],

    role: [
      '4종 소셜 로그인 통합 인증 설계·구현 및 로그인 루프 방어 (활성 사용자의 27%, GA 기준)',
      '상품 상세 SSR 성능 개선 (호출 병렬화·revalidate·아이콘 경량화)',
      '공항 송영(TA) 예약 서비스 개발 — 오픈 후 월 예약 약 12배 (팀 성과)',
      'Next.js 전환 참여 — 공유 패키지(@repo/shuttle) 설계, 본인인증 훅(useOkcertVerification) 구현',
      '디자인 시스템(_usdg)·Storybook 구축 (AI 코딩 도구 활용)',
      'Flutter 앱-웹 브릿지 구현',
      '파트너스 서브도메인·쿠폰 노출 규칙 개발',
    ],

    tech: ['Nuxt3', 'Vue3', 'Next.js 16', 'React 19', 'TypeScript', 'Turborepo', 'Tailwind CSS v4', 'Pinia', 'Zustand', 'Storybook', 'Sentry', 'Playwright', 'Claude Code'],
  },

  {
    category: 'work',
    slug: 'usimsa-admin',
    title: '유심사 어드민',
    company: '가제트코리아 (유심사)',
    period: '2024.03 ~ 현재',
    summary: '내부 관리자 어드민 유지보수, 성능 개선 및 신규 기능 개발',

    description: [
      '유심사 내부 관리자용 어드민 패널의 개발 및 유지보수를 담당했습니다.',
      '성능 개선 작업(FE-355)으로 Iconify 외부 API 의존성을 제거하고 nuxt-icon으로 전환했으며, 폰트 최적화와 하이드레이션 오류 수정, 사이드메뉴 일원화를 진행했습니다.',
      '대시보드·관리처 API 중복 호출을 제거했습니다.',
      '다국가 기능 삭제와 레거시·API 정리 리팩토링을 진행했습니다(변경 파일 183개, 순감 약 1만 줄).',
      '파트너스 전용 쿠폰 생성과 쿠폰 적용 상품명 검증기(validateCouponProducts)를 구현하고, 파트너스 리브랜딩 어드민(상품·배너·타임세일 관리, 공동 로고 합성) UI를 PRD 기반으로 개발해 운영에 배포했습니다. 모든 요청을 $fetch.create 래퍼로 바꿔 네트워크 끊김·5xx 전역 알림을 구현했습니다.',
      'TipTap 리치 에디터를 커스텀하여 이미지 리사이징, 폰트 패밀리 20여 종 적용, 콜아웃 충돌 수정 등을 구현했습니다.',
      'CLAUDE.md로 프론트엔드 코딩 컨벤션을 문서화하고 Vercel 빌드·타입 오류를 정리했습니다.',
    ],

    role: [
      '성능 개선 — Iconify → nuxt-icon 전환, 폰트 최적화, 하이드레이션 오류 수정',
      '대시보드·관리처 API 중복 호출 제거',
      '레거시·API 정리 리팩토링 주도 — 변경 파일 183개, 순감 약 1만 줄',
      'TipTap 에디터 커스텀 (이미지 리사이징, 폰트 20종, 콜아웃)',
      '원가관리 페이지 신규 개발 및 API 연동',
      '쿠폰 사용처 확장·입력 검증 및 파트너스 리브랜딩 어드민 UI 개발',
      '코딩 컨벤션(CLAUDE.md) 정립 및 빌드 안정화',
    ],

    tech: ['Nuxt3', 'Element Plus', 'TipTap', 'Nuxt-Icon', 'Pinia'],
  },

  {
    category: 'work',
    slug: 'badream',
    title: '바드림 서비스 웹 개발',
    company: '싸이클로이드',
    period: '2023.11 ~ 2024.01',
    summary: '바드림 서비스 프론트엔드 개발 참여',
    link: 'https://ba-dream.com/',

    description: [
      '싸이클로이드 재직 기간 중 바드림 서비스의 프론트엔드 개발에 참여했습니다.',
    ],

    role: [
      '바드림 서비스 프론트엔드 개발',
    ],

    tech: ['Vue.js', 'Nuxt.js'],
  },

  {
    category: 'work',
    slug: 'shopping-backoffice',
    title: '쇼핑몰 솔루션 백오피스',
    company: '커넥트웨이브',
    period: '2023.03 ~ 2023.08',
    summary: 'Storybook 기반 아토믹 디자인 시스템 구축 및 컴포넌트 주도 개발',

    description: [
      '분리된 Storybook 프로젝트를 활용하여 아토믹 디자인 시스템을 개발했습니다.',
      '컴포넌트 주도 개발(CDD) 체계를 구축하여 재사용 가능한 UI 컴포넌트 라이브러리를 제작했습니다.',
      '일관된 디자인 언어와 개발 효율성 향상에 기여했습니다.',
    ],

    role: [
      'Storybook 기반 아토믹 디자인 시스템 개발',
      '컴포넌트 주도 개발(CDD) 체계 구축',
      '재사용 가능한 UI 컴포넌트 라이브러리 제작',
    ],

    tech: ['Vue.js', 'Storybook', '아토믹 디자인', 'CDD'],
  },

  {
    category: 'work',
    slug: 'ittalk',
    title: '잇톡 백오피스',
    company: '커넥트웨이브',
    period: '2022.11 ~ 2023.02',
    summary: '백오피스 페이지 구축 및 인증 로직, API 연동 구현',

    description: [
      '잇톡 서비스의 백오피스 페이지를 처음부터 구축했습니다.',
      '로그인 인증 로직을 구현하여 보안이 필요한 관리자 페이지를 안정적으로 처리했습니다.',
      'API 인터페이스 설계 및 연동을 통해 백엔드와의 데이터 흐름을 구성했습니다.',
    ],

    role: [
      '백오피스 페이지 퍼블리싱',
      '로그인 인증 로직 구현',
      'API 인터페이스 구현 및 연동',
    ],

    tech: ['Vue.js', 'Nuxt.js'],
  },

  {
    category: 'work',
    slug: 'nalbang',
    title: '날방 백오피스 및 시청자 서비스',
    company: '커넥트웨이브',
    period: '2022.06 ~ 2022.12',
    summary: '라이브 방송 플랫폼의 백오피스 기능 개발 및 유지보수',
    link: 'https://www.nalbang.tv/',

    description: [
      '라이브 방송 플랫폼 날방의 백오피스 및 시청자 서비스를 담당했습니다.',
      '방송 연장 횟수 증가 및 시간 설정 기능, VOD Iframe 삽입 기능 등 핵심 기능을 개발했습니다.',
      '시청자 통계 엑셀 다운로드 및 분 단위 그래프 기능을 개발하여 운영 효율을 높였습니다.',
      'Git Husky를 도입하여 커밋 컨벤션을 통일하고 팀 협업 환경을 개선했습니다.',
      '크로스 브라우징 이슈에 대응하여 다양한 브라우저 환경에서 안정적인 서비스를 제공했습니다.',
    ],

    role: [
      '방송 연장 횟수 증가 및 시간 설정 기능 개발',
      'VOD Iframe 삽입 기능 개발',
      '경매 기능 개발',
      '시청자 통계 엑셀 및 분 단위 그래프 기능 개발',
      '크로스 브라우징 이슈 대응',
      '유튜브 동시송출 기능 개발',
      'Git Husky 도입으로 커밋 컨벤션 통일',
    ],

    tech: ['Vue.js', 'Nuxt.js', 'Git Husky', 'Chart.js'],
  },

  {
    category: 'work',
    slug: 'qpicki',
    title: '큐픽 퍼블리싱',
    company: '커넥트웨이브',
    period: '2022.07 ~ 2022.08',
    summary: '쇼핑몰 빌더 서비스 UI 퍼블리싱 및 반응형 작업',
    link: 'https://qpicki.com/introduction/preview?id=1&fileName=main',

    description: [
      '쇼핑몰 빌더 서비스 큐픽의 페이지 UI 퍼블리싱을 담당했습니다.',
      '제공된 디자인을 바탕으로 페이지를 구현하고, 배너 기능을 jQuery로 제작했습니다.',
      '다양한 디바이스에서 일관된 UI를 제공하기 위한 반응형 작업을 진행했습니다.',
    ],

    role: [
      '페이지 퍼블리싱',
      'jQuery 기반 배너 기능 제작',
      '반응형 작업',
    ],

    tech: ['HTML/CSS', 'jQuery', '반응형'],
  },

  {
    category: 'work',
    slug: 'justgo',
    title: '일단 떠나',
    company: '커넥트웨이브',
    period: '2022.02 ~ 2022.08',
    summary: '여행 서비스 메인 페이지 리뉴얼 및 웹 성능 개선',
    link: 'https://www.g-justgo.com/#/',

    description: [
      '여행 서비스 "일단 떠나"의 유지보수 및 리뉴얼 작업을 담당했습니다.',
      'moment 라이브러리 제거, jQuery를 Vue로 전환, 이미지 최적화 및 lazy loading 적용을 통해 번들 사이즈를 3.5MB에서 2.3MB로 약 34% 감소시켰습니다.',
      '메인 페이지 및 주요 페이지 디자인 수정과 배너 기능을 추가했습니다.',
    ],

    role: [
      '메인 페이지 및 주요 페이지 디자인 수정',
      '배너 기능 추가',
      'moment 라이브러리 삭제로 번들 경량화',
      'jQuery를 Vue로 전환',
      '이미지 최적화 및 lazy loading 적용',
      '번들 사이즈 3.5MB → 2.3MB 감소 및 리뉴얼 배포',
    ],

    tech: ['Vue.js', 'Nuxt.js', 'Lazy Loading', '번들 최적화'],
  },

  // ───── 사이드 프로젝트 (최신순) ─────
  {
    category: 'side',
    slug: 'webtoon',
    title: '웹툰 사이트 개발',
    period: '2021.09 ~ 2021.12',
    summary: 'Vue 2 기반 SPA 구조와 API 통신 경험',
    github: 'https://github.com/hyunjunyong/WEBTOON',
    youtube: 'https://www.youtube.com/watch?v=Poc69s8sO08&list=PLqbWuGdVBJd0-Bd2wqieXWXfQdzyBX-gf',

    description: [
      '개발자의 품격 3기 기업 연계 프로젝트로, Vue 2를 처음 도입하여 SPA 구조로 웹 서비스를 개발했습니다.',
      '로그인/회원가입, 웹툰 등록 및 승인, 좋아요·조회수·장르별 정렬 기능을 구현했습니다.',
      '백엔드와 API 연동을 담당하여 비동기 처리 이해도를 높였습니다.',
    ],

    role: [
      '백엔드 API 연동',
      '작가홈, 웹툰홈 페이지 제작 및 디자인',
      '컴포넌트 설계',
    ],

    tech: ['Vue.js 2', 'Axios', 'SPA'],

    retrospective:
      '이 프로젝트를 계기로 프레임워크 기반 개발에 익숙해졌고 이후 Nuxt 학습으로 이어졌습니다.',
  },

  {
    category: 'side',
    slug: 'hondimoang',
    title: '중간지점 약속 서비스 (혼디모앙)',
    period: '2021.03 ~ 2021.07',
    summary: '기획부터 구현까지, 수상 경력이 있는 팀 프로젝트',
    github: 'https://github.com/hyunjunyong/middle-location-pg',
    link: 'https://hyunjunyong.github.io/middle-location-pg/',

    description: [
      '매일 같은 약속 장소로 불편함을 겪는 사람들을 위한 중간지점 약속 잡기 서비스입니다.',
      '사용자들이 주소를 입력하면 중간거리를 찾고, 주변 장소를 추천해주는 서비스입니다.',
      '각 사용자 위치에서의 교통편 및 거리 정보를 제공합니다.',
    ],

    role: [
      '각 사용자 위치에서 교통편 및 거리 기능 구현',
      '장소 추천 API 연동',
      '화면 UI 설계 및 구현',
    ],

    tech: ['JavaScript', 'API 통신', 'Git'],

    awards: [
      '2021.07 스마트 SW 경진대회 최우수상',
      '2021.10 SW 중심대학 공동창업 캠프 대상',
    ],

    retrospective:
      '기능 구현뿐 아니라 일정 관리와 역할 분담의 중요성을 체감한 프로젝트였습니다.',
  },

  {
    category: 'side',
    slug: 'jejunu-intro',
    title: '제주대학교 소개 웹사이트',
    period: '2020.12 ~ 2021.01',
    summary: '웹 개발 입문과 협업을 처음 경험한 프로젝트',
    github: 'https://github.com/hyunjunyong/jeju242.github.io',
    link: 'https://jeju242.github.io/',

    description: [
      '제주대학교 × 카카오 주최 프로젝트로, 웹 개발을 처음 시작하며 진행한 팀 프로젝트입니다.',
      '특정 건물의 위치 및 정보 확인, 간단한 퀴즈, 건물 댓글 기능을 구현했습니다.',
      'Git을 활용한 팀 협업을 처음 경험하며 코드 공유와 커뮤니케이션의 중요성을 인식했습니다.',
    ],

    role: [
      '제주대학교를 소개하는 퀴즈 기능 구현',
      'API 응답 데이터 화면 반영',
      '팀원과의 Git 협업',
    ],

    tech: ['JavaScript', 'API 통신', 'Git'],

    retrospective:
      '지금 다시 만든다면 컴포넌트 단위 분리와 데이터 처리 로직을 더 명확히 나누고 싶습니다.',
  },
];
