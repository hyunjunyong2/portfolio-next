import FadeIn from '@/components/motion/FadeIn';

type Props = {
  label: string;
  /** 라벨이 제목이 아닌 경우(기간 등) 'p' 로 지정해 헤딩 구조를 지킨다 */
  labelAs?: 'h2' | 'p';
  children: React.ReactNode;
};

/** 좌측에 작은 라벨, 우측에 본문을 두는 에디토리얼 섹션 */
export default function Section({ label, labelAs = 'h2', children }: Props) {
  const Label = labelAs;
  return (
    <FadeIn>
      <section className="grid gap-4 border-t border-line pt-8 md:grid-cols-[10rem_1fr] md:gap-10">
        <Label className="font-mono text-xs uppercase tracking-widest text-muted md:pt-1.5">
          {label}
        </Label>
        <div>{children}</div>
      </section>
    </FadeIn>
  );
}
