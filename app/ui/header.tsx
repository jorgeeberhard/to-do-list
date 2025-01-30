export default function Header({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={className ? className : undefined}>
      <h1 className="text-3xl mb-3">{title}</h1>
    </div>
  );
}
