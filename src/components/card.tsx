type Props = {
  title: string;
  description?: string;
  cta?: { href: string; label: string };
};

export function Card({ title, description, cta }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {cta && (
        <a href={cta.href} className="text-primary-dark hover:underline">
          {cta.label}
        </a>
      )}
    </div>
  );
}


