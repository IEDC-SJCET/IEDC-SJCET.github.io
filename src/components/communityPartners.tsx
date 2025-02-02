import Image from "next/image";


const partners = [
  {
    name: "KSUM",
    image: "/images/partners/ksum.png",
    url: "https://startupmission.kerala.gov.in/",
  },
  {
    name: "DSC",
    image: "/images/partners/dsc(grey).png",
    url: "https://developers.google.com/community/gdsc",
  },
  {
    name: "Innovation Center",
    image: "/images/partners/ezgif.com-gif-maker.png",
    url: "https://iedc.startupmission.in/",
  },
  {
    name: "GTech",
    image: "/images/partners/gtech.png",
    url: "https://gtech.kerala.gov.in/",
  },
  {
    name: "IEDC",
    image: "/images/partners/iedc.png",
    url: "https://iedc.startupmission.in/",
  },
  {
    name: "TinkerHub",
    image: "/images/partners/tinkerhub(black).png",
    url: "https://tinkerhub.org/",
  },
];

const CommunityPartners = () => {
  return (
    <section 
      id="communityPartners" 
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-4 md:p-6 lg:p-8"
    >
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-2xl font-bold text-purple-500 md:text-3xl lg:text-4xl mb-4">
          Community Partners
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg mb-8">
          We collaborate with leading organizations in the startup and technology ecosystem 
          to provide our students with the best opportunities for growth, innovation, and 
          entrepreneurial success.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full max-w-[200px] aspect-square">
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityPartners;