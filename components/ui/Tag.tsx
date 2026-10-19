export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
