import Link from 'next/link';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="text-center py-20 bg-gray-100">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">Welcome to Lovable</h1>
          <p className="max-w-4xl mx-auto text-lg sm:text-2xl text-gray-500">We offer you the best digital marketing services to grow your business. We create lovable experiences for your customers.</p>
          <div className="mt-10">
            <Link href="/about">
              <a className="inline-block py-4 px-8 leading-none text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow">Learn More</a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}