export function Skeleton({ lines }: { lines: number }) {
  return (
    <div>
      {Array.from(Array(lines).keys()).map((i) => (
        <p key={i}>All work and no play makes Jack a dull boy...</p>
      ))}
    </div>
  );
}
