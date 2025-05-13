import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4">
      <div className="relative w-48 h-48 mb-8">
        <Image
          src="/affseclogodark.png"
          alt="Affillia Security Logo"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Site Under Construction
      </h1>
      <p className="text-xl text-center max-w-2xl mb-12">
        We are currently developing our new website to better serve high-net-worth individuals with elite personal protection services.
      </p>
      <div className="bg-primary-dark text-text-light py-3 px-6 rounded-md">
        Coming Soon
      </div>
    </div>
  );
} 