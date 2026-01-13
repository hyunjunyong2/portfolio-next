export type Project = {
  slug: string;
  title: string;
  period: string;
  summary: string;
  description: string[];

  role: string[];
  tech: string[];

  thumbnail?: string;
  links?: {
    demo?: string;
    github?: string;
  };

  retrospective?: string;
};

export const projects: Project[] = [
  {
    slug: 'jejunu-intro',
    title: '제주대학교 소개 웹사이트',
    period: '2020.12 ~ 2021.01',
    summary: '웹 개발 입문과 협업을 처음 경험한 프로젝트',

    description: [
      '웹 개발을 처음 시작하며 JavaScript 기반으로 페이지 구조를 설계한 프로젝트입니다.',
      '외부 API와의 통신을 통해 데이터를 화면에 렌더링하는 흐름을 처음 경험했습니다.',
      '팀 협업 과정에서 Git을 활용하며 코드 공유와 커뮤니케이션의 중요성을 인식하게 되었습니다.',
    ],

    role: [
      '메인 페이지 UI 구현',
      'API 응답 데이터 화면 반영',
      '팀원과의 Git 협업',
    ],

    tech: ['JavaScript', 'API 통신', 'Git'],

    retrospective:
      '지금 다시 만든다면 컴포넌트 단위 분리와 데이터 처리 로직을 더 명확히 나누고 싶습니다.',
  },

  {
    slug: 'hondimoang',
    title: '중간지점 약속 서비스 (혼디모앙)',
    period: '2021.03 ~ 2021.07',
    summary: '기획부터 구현까지 서비스 흐름을 경험한 팀 프로젝트',

    description: [
      '팀 프로젝트로 진행된 중간지점 약속 서비스입니다.',
      '기획 단계부터 참여하여 화면 구성과 기능 구현을 담당했습니다.',
      'API 통신 경험을 바탕으로 사용자 흐름을 고려한 화면 설계를 고민하게 되었습니다.',
    ],

    role: [
      '화면 UI 설계 및 구현',
      'API 연동',
      '팀 프로젝트 협업',
    ],

    tech: ['JavaScript', 'API 통신', '협업'],

    retrospective:
      '기능 구현뿐 아니라 일정 관리와 역할 분담의 중요성을 체감한 프로젝트였습니다.',
  },

  {
    slug: 'webtoon',
    title: '웹툰 사이트 개발',
    period: '2021.09 ~ 2021.12',
    summary: 'Vue 2 기반 SPA 구조와 API 통신 경험',

    description: [
      'Vue 2를 처음 도입하여 SPA 구조로 웹 서비스를 개발한 프로젝트입니다.',
      '컴포넌트 단위 설계를 통해 코드 관리의 필요성을 체감했습니다.',
      'Axios를 활용한 API 통신을 통해 비동기 처리 이해도가 향상되었습니다.',
    ],

    role: [
      'Vue 2 기반 프론트엔드 개발',
      'Axios API 통신',
      '컴포넌트 설계',
    ],

    tech: ['Vue.js 2', 'Axios', 'SPA'],

    retrospective:
      '이 프로젝트를 계기로 프레임워크 기반 개발에 익숙해졌고 이후 Nuxt 학습으로 이어졌습니다.',
  },
];
