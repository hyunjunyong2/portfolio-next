import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} 현준용. All rights reserved.
        </p>

        <div className="flex gap-5 text-sm text-gray-500">
          <a
            href="mailto:hjy123432@gmail.com"
            className="transition hover:text-black"
          >
            Email
          </a>
          <a
            href="https://github.com/hyunjunyong2"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-black"
          >
            GitHub
          </a>
          <Link href="/contact" className="transition hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
