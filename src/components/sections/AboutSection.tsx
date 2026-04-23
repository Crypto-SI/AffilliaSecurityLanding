import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about-us" className="bg-primary-light py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary-dark md:text-4xl">
            About <span className="text-accent-gold">Affillia Security</span>
          </h2>
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <Image
                src="/affseclogodarktrans.png"
                alt="Affillia Security Team"
                width={500}
                height={350}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="mb-6 text-lg">
                Affillia Security is a premier personal close protection company dedicated to
                ensuring the safety and security of high-net-worth individuals and their families.
              </p>
              <p className="mb-6 text-lg">
                Founded on a commitment to excellence, our team consists of extensively trained
                security professionals with backgrounds in military special forces, law enforcement,
                and specialized security operations.
              </p>
              <p className="text-lg">
                We understand the unique security challenges faced by wealthy individuals and provide
                custom solutions that balance comprehensive protection with lifestyle flexibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

