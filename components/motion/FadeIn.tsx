/** CSS 애니메이션(.fade, globals.css)만 쓰는 서버 컴포넌트. JS가 없어도 내용이 보인다. */
export default function FadeIn({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <div className="fade" style={delay ? { animationDelay: `${delay}s` } : undefined}>
      {children}
    </div>
  );
}
