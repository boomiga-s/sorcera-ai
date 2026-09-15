export function StepNumeral({ n }: { n: 1 | 2 | 3 }) {
  return (
    <span className="step-numeral" aria-hidden="true">
      {n}
    </span>
  );
}
