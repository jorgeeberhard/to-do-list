import { merriweather } from "@/app/fonts";

export default function Header({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={`${merriweather.className} ${className}`}>
      <h1 className="text-3xl mb-3">{title}</h1>
    </div>
  );
}
