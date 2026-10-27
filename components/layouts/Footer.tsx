import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs">
          © {new Date().getFullYear()} 현준용
        </p>

        <div className="flex gap-6">
          <a href="mailto:hjy123432@gmail.com" className="transition-colors hover:text-ink">
            Email
          </a>
          <a
            href="https://github.com/hyunjunyong2"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <Link href="/contact" className="transition-colors hover:text-ink">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
