type Props = {
  title: string;
  description?: string;
  cta?: { href: string; label: string };
};

export function Card({ title, description, cta }: Props) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-dark transition-colors duration-200">{title}</h3>
      {description && <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>}
      {cta && (
        <a href={cta.href} className="inline-flex items-center text-primary-dark font-medium hover:text-primary group-hover:gap-2 gap-1 transition-all duration-200">
          {cta.label}
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      )}
    </div>
  );
}


