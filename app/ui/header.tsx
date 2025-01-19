export default function Header({ title }: { title: string }) {
  return (
    <div className="col-start-2">
      <header className="">
        <h1 className="text-3xl mb-3">{title}</h1>
      </header>
    </div>
  );
}
