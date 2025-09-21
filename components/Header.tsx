import Link from 'next/link';

export function Header() {
  return (
    <header className="py-6 bg-white shadow">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-lg font-semibold text-gray-800">Lovable</a>
          </Link>
        </div>
        <nav className="space-x-4 text-gray-800">
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}