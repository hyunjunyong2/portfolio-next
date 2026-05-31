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
    slug: 'usimsa-hawaii',
    title: '유심사 메인 서비스 Next.js 전환',
    company: '가제트코리아 (유심사)',
    period: '2026.03 ~ 현재',
    summary: 'Turborepo 모노레포 기반 Nuxt3 → Next.js 점진적 전환',

    description: [
      'Turborepo 기반 모노레포 구성으로 상품·마이페이지·어필리에이트 3개 Next.js 앱과 공유 패키지(@repo/ui ~30개 컴포넌트, @repo/utils 등)를 설계 및 초기 구축했습니다.',
      'KCB Okcert 본인인증 및 계정 통합 플로우를 단일 커스텀 훅(useOkcertVerification)으로 추상화하여 신규·기존 계정 통합 분기와 SNS 중복 계정 처리를 구현했습니다.',
      '어필리에이트 크리에이터 플랫폼 앱 전체를 신규 개발했습니다. 가입 3단계 플로우(SNS 채널 등록·SMS 인증, Zustand 상태관리), 크리에이터 대시보드, 출금 신청 4단계, 판매/출금 내역 조회를 포함합니다.',
      'MarketTap·AirBridge·Naver·Kakao Pixel 멀티 Analytics를 동시 연동하고, identity ready 플래그로 product_view race condition을 방지했습니다.',
      'Web Crypto API 기반 AES-CBC 클라이언트 암호화를 구현하여 비밀번호 변경 시 서버/클라이언트 인증 분리 구조를 적용했습니다.',
    ],

    role: [
      'Turborepo 모노레포 구조 설계 및 공유 패키지 초기 구축',
      'KCB Okcert 본인인증 플로우 설계 및 useOkcertVerification 커스텀 훅 구현',
      'MarketTap·AirBridge·Naver·Kakao Pixel 멀티 Analytics 연동',
      'Web Crypto API 기반 AES-CBC 클라이언트 암호화 구현',
      '항공사 이메일 인증 플로우 신규 구현 (Context API, URL 토큰 파싱)',
    ],

    tech: ['Next.js 16', 'TypeScript', 'Turborepo', 'TailwindCSS v4', 'Zustand', 'Sentry', 'Playwright'],
  },

  {
    category: 'work',
    slug: 'usimsa-sales-partners',
    title: '세일즈 파트너스 포털',
    company: '가제트코리아 (유심사)',
    period: '2024.07 ~ 현재',
    summary: 'B2B 파트너사용 주문·개통·정산 관리 포털 초기 구축',

    description: [
      '파트너사(대리점 등)를 위한 B2B 주문/정산/개통 관리 포털을 기획 단계부터 참여하여 구축했습니다.',
      '역할 기반 권한 관리 시스템과 i18n 다국어 처리를 설계·구현했습니다.',
      '유심·이심 대량 개통 기능을 개발하여 파트너사의 운영 효율을 높였습니다.',
      'HTTP 공통 함수 리팩토링, 세션 만료 처리 등 서비스 안정성을 위한 공통 기반 작업을 담당했습니다.',
    ],

    role: [
      '서비스 초기 구축 - 로그인, 사이드메뉴, 권한관리, 브레드크럼 설계',
      '역할 기반 권한 관리 시스템 설계 및 구현',
      'i18n 다국어 처리 구현',
      '유심 대량 개통 기능 개발 (CSV→Excel 전환, ICCID 처리)',
      '이심 전체 상품 조회 기능 개발',
      'HTTP 공통 함수 리팩토링 및 에러 처리',
    ],

    tech: ['Nuxt3', 'i18n', 'Floating UI', 'Pinia'],
  },

  {
    category: 'work',
    slug: 'usimsa-admin',
    title: '유심사 어드민',
    company: '가제트코리아 (유심사)',
    period: '2024.03 ~ 현재',
    summary: '내부 관리자 어드민 유지보수 및 신규 기능 개발',

    description: [
      '유심사 내부 관리자용 어드민 패널의 개발 및 유지보수를 담당했습니다.',
      'Lighthouse 기준 LCP 3.2s → 2.7s(15.6%), Speed Index 2.5s → 1.7s(32%), CLS 0.478 → 0.154(67.8%) 개선을 달성했습니다.',
      'Iconify 외부 API 의존성 제거 및 nuxt-icon 전환으로 네트워크 병목 약 600ms를 제거했습니다.',
      'API 중복 호출 개선으로 전체 호출 횟수 40% 감소, 최초 호출 이후 75% 감소를 달성했습니다.',
      '미사용 페이지·컴포넌트 정리 및 API 도메인별 분리 리팩토링으로 전체 코드 약 10,500줄 감소(183개 파일)를 달성했습니다.',
      'Element Plus 등 무거운 라이브러리 청크 분리로 번들 최대 파일 크기를 1,146KB → 1,012KB(11.7% 감소)로 줄였습니다.',
      'TipTap 리치 에디터를 커스텀하여 이미지 리사이징, 폰트 패밀리 20여 종 적용, 콜아웃 충돌 수정 등을 구현했습니다.',
    ],

    role: [
      'LCP 15.6%, Speed Index 32%, CLS 67.8% 개선 (Lighthouse 기준)',
      'Iconify → nuxt-icon 전환으로 네트워크 병목 600ms 제거',
      'API 중복 호출 40% 감소, 최초 호출 이후 75% 감소',
      '리팩토링 주도 — 코드 10,500줄 감소, 번들 최대 파일 11.7% 감소 (1,146KB → 1,012KB)',
      'TipTap 에디터 커스텀 (이미지 리사이징, 폰트 20종, 콜아웃)',
      '원가관리 페이지 신규 개발 및 API 연동',
      'SCM 기능 개발 (공지사항 CRUD, 브랜치 관리)',
    ],

    tech: ['Nuxt3', 'Element Plus', 'TipTap', 'Nuxt-Icon', 'Pinia'],
  },

  {
    category: 'work',
    slug: 'usimsa-web',
    title: '유심사 메인 웹사이트',
    company: '가제트코리아 (유심사)',
    period: '2024.03 ~ 현재',
    summary: 'B2C 유심 서비스 메인 웹사이트 개발 및 유지보수',

    description: [
      '활성 사용자 약 66만 명(Google Analytics 기준, 2026.05) 규모의 B2C 서비스를 개발 및 유지보수했습니다.',
      '네이버·애플·구글·카카오 4종 소셜 로그인 통합 인증 시스템 전체를 설계 및 구현했습니다. 전체 활성 사용자의 27%(월 약 18만 명)가 거치는 핵심 플로우로, requiresUnifiedAuth 리다이렉트, 파트너 채널 분기, 카카오 state 파라미터 returnUrl 처리, 경로 복원 로직을 포함합니다.',
      'Flutter 앱-웹 브릿지를 구현했습니다. useAppCheck composable로 UserAgent를 파싱하여 iOS/Android 기능 지원 버전을 분기하고, 웹↔앱 양방향 네이티브 통신을 구성했습니다. iOS+Android 앱 트래픽 약 7만 명(전체의 10%)을 대상으로 동작합니다.',
      '그랩 제휴쿠폰 공통 모달 컴포넌트를 설계하고 API 연동 및 모바일 반응형 대응을 완료했습니다.',
      'SEO 동적 처리(신규 상품 페이지), sitemap/robots 관리로 검색 노출을 최적화했습니다.',
      '레퍼럴 경로 검증 로직을 구현하여 파트너스 유입을 안정화했습니다.',
    ],

    role: [
      '네이버·애플·구글·카카오 4종 소셜 로그인 통합 인증 플로우 전체 설계 및 구현 (월 약 18만 명 / 전체의 27%)',
      'Flutter 앱-웹 브릿지 구현 (useAppCheck composable, 양방향 네이티브 통신, 약 7만 명 대상)',
      '그랩 제휴쿠폰 공통 모달 컴포넌트 제작 및 API 연동',
      '레퍼럴 경로 검증 로직 구현',
      'SEO 동적 처리 및 이미지 경로 이관',
      '이벤트 페이지 댓글 CRUD 기능 개발',
    ],

    tech: ['Nuxt3', 'Vue3', 'TypeScript', 'Pinia', 'Element Plus', 'Flutter WebView Bridge'],
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
