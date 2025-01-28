export default function Header({ title }: { title: string }) {
  return (
    <header className="justify-center">
      <h1 className="text-3xl mb-3">{title}</h1>
    </header>
  );
}
