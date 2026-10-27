import type { Metadata } from 'next';
import FadeIn from '@/components/motion/FadeIn';
import Section from '@/components/ui/Section';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    '프론트엔드 개발자 현준용의 연락처 페이지입니다. 이메일, 전화번호, GitHub 정보를 확인할 수 있습니다.',
};

const linkClass =
  'block font-medium underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent';

export default function Contact() {
  return (
    <div className="space-y-16">
      <FadeIn>
        <h1 className="font-display text-3xl font-bold leading-snug sm:text-5xl">
          언제든 편하게 연락 주세요.
        </h1>
      </FadeIn>

      <Section label="Email">
        <div className="space-y-2">
          <a href="mailto:hjy123432@gmail.com" className={linkClass}>
            hjy123432@gmail.com
          </a>
          <a href="mailto:hjy4649@naver.com" className={linkClass}>
            hjy4649@naver.com
          </a>
        </div>
      </Section>

      <Section label="Phone">
        <a href="tel:01077144649" className={linkClass}>
          010-7714-4649
        </a>
      </Section>

      <Section label="GitHub">
        <a
          href="https://github.com/hyunjunyong2"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          github.com/hyunjunyong2
        </a>
        <p className="mt-2 text-xs text-muted">
          ※ github.com/hyunjunyong 계정은 2024년 이후 사용하지 않습니다.
        </p>
      </Section>
    </div>
  );
}
