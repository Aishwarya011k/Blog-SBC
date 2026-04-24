import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          {index > 0 && <span>/</span>}
          {index === items.length - 1 ? (
            <span className="text-primary font-semibold">{item.label}</span>
          ) : (
            <Link href={item.href} className="text-primary hover:underline">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
