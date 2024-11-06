export default function SectionHeader({ title }: {title: string}) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-center">{title}</h2>
    </div>
  );
}