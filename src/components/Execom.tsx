import Image from "next/image";

// Execom members data
const execomMembers = [
  { name: "Member 1", image: "/images/execom/Instagram post - 86.png" },
  { name: "Member 2", image: "/images/execom/Instagram post - 67.png" },
  { name: "Member 3", image: "/images/execom/Instagram post - 52.png" },
  { name: "Member 4", image: "/images/execom/Instagram post - 64.png" },
  { name: "Member 5", image: "/images/execom/Instagram post - 93.png" },
  { name: "Member 6", image: "/images/execom/Instagram post - 95.png" },
  { name: "Member 7", image: "/images/execom/Instagram post - 94.png" },
  { name: "Member 8", image: "/images/execom/Instagram post - 92.png" },
];

const ExecomGallery = () => {
  return (
    <section 
      id="execomGallery" 
      className="flex min-h-screen w-full flex-col items-center justify-center bg-white p-4 md:p-6 lg:p-8"
    >
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-2xl font-bold text-purple-500 md:text-3xl lg:text-4xl mb-4">
          Execom Members
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg mb-8">
          Meet our dedicated Execom members who drive innovation, leadership, and community engagement.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-4">
          {execomMembers.map((member, index) => (
            <div
              key={index}
              className="group flex items-center justify-center transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full max-w-[400px] aspect-auto">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  
                  className="object-fit rounded-lg"
                 width={400}
                    height={600}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecomGallery;
