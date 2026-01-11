import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    '프론트엔드 개발자 현준용의 연락처 페이지입니다. 이메일, 전화번호, GitHub 정보를 확인할 수 있습니다.',
};


export default function Contact() {
  return (
    <section className="space-y-10">
      {/* Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
        <p className="mt-2 text-sm sm:text-base text-gray-600">
          언제든 편하게 연락 주세요.
        </p>
      </div>

      {/* Cards */}
      <ul className="space-y-4">
        {/* Email */}
        <li className="rounded-lg border p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">📧 Email</p>
          <div className="space-y-1">
            <a
              href="mailto:hjy4649@naver.com"
              className="block font-medium text-blue-500 hover:underline"
            >
              hjy4649@naver.com
            </a>
            <a
              href="mailto:hjy123432@gmail.com"
              className="block font-medium text-blue-500 hover:underline"
            >
              hjy123432@gmail.com
            </a>
          </div>
        </li>

        {/* Phone */}
        <li className="rounded-lg border p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">📞 Phone</p>
          <a
            href="tel:01077144649"
            className="font-medium text-blue-500 hover:underline"
          >
            010-7714-4649
          </a>
        </li>

        {/* GitHub */}
        <li className="rounded-lg border p-4">
          <p className="mb-2 text-sm font-medium text-gray-500">💻 GitHub</p>
          <div className="space-y-1">
            <Link
              href="https://github.com/hyunjunyong"
              target="_blank"
              className="block font-medium text-blue-500 hover:underline"
            >
              github.com/hyunjunyong2
            </Link>
            <p className="text-xs text-gray-500">
              ※ github.com/hyunjunyong 계정은 2024년 이후 사용하지 않습니다.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
