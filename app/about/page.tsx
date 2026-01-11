import type { Metadata } from 'next';
import FadeIn from '@/components/motion/FadeIn';

export const metadata: Metadata = {
  title: 'About',
  description:
    '사용자 경험과 유지보수를 함께 고민하는 프론트엔드 개발자 현준용의 소개 페이지입니다.',
};

export default function About() {
  return (
    <section className="space-y-10">
      {/* Title */}
      <FadeIn>
        <h1 className="text-3xl sm:text-4xl font-bold">
          사용자 경험과 유지보수를 함께 고민하는 프론트엔드 개발자
        </h1>
      </FadeIn>

      {/* Intro */}
      <div className="space-y-4 text-sm sm:text-base text-gray-700">
        <p>
          혼자 문제를 해결하기보다는 팀과 함께 논의하며 더 나은 방향을
          찾아가는 과정을 즐깁니다.
          개발 과정에서 발생하는 이슈를 단순히 넘기지 않고,
          원인을 파악하고 해결하는 것을 중요하게 생각합니다.
        </p>

        <p>
          Vue와 Nuxt 기반의 웹 서비스 개발 경험을 바탕으로,
          현재는 Next.js App Router 환경에서
          확장성과 유지보수를 고려한 프론트엔드 구조에 관심을 두고 있습니다.
        </p>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="mb-3 text-xl font-semibold">기술 스택</h2>

        <div className="space-y-6 text-sm sm:text-base text-gray-700">
          <div>
            <h3 className="mb-1 font-medium">실무 경험</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Vue.js 2 / 3</li>
              <li>Nuxt.js 2 / 3 기반 웹 서비스 개발</li>
              <li>커머스 서비스 UI 개발 및 유지보수</li>
              <li>ESLint, Prettier를 활용한 협업 환경 구성</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-1 font-medium">확장 중인 기술</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Next.js (App Router) 기반 개인 프로젝트</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career */}
      <div>
        <h2 className="mb-3 text-xl font-semibold">경력</h2>
        <p className="text-sm sm:text-base text-gray-700">
          현재 가제트코리아에서 프론트엔드 개발자로 근무하며
          B2B 및 B2C 서비스를 모두 담당하고 있습니다.
          특히 B2B 서비스는 기획 단계부터 참여하여
          프론트엔드 구조 설계, 초기 개발, 그리고 현재까지
          유지보수를 진행하고 있습니다.
        </p>
      </div>
    </section>
  );
}
