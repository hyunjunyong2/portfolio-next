import Link from 'next/link';

export default function Contact() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-2 text-gray-600">
          언제든 편하게 연락 주세요.
        </p>
      </div>

      <ul className="space-y-4 text-gray-700">
        <li>
          📧 Email <br />
          <a
            href="mailto:hjy4649@naver.com"
            className="text-blue-500 hover:underline"
          >
            hjy4649@naver.com
          </a>
          <br />
          <a
            href="mailto:hjy123432@gmail.com"
            className="text-blue-500 hover:underline"
          >
            hjy123432@gmail.com
          </a>
        </li>

        <li>
          📞 Phone <br />
          <span className="font-medium">010-7714-4649</span>
        </li>

        <li>
          💻 GitHub <br />
          <Link
            href="https://github.com/hyunjunyong"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            github.com/hyunjunyong2
          </Link>
          <br />
          <Link
            href="https://github.com/hyunjunyong"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            github.com/hyunjunyong
          </Link>
          (이슈로 인해 2024이후 사용하지 않는 계정)
        </li>
      </ul>
    </section>
  );
}
