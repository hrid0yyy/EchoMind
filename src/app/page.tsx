import Image from "next/image";
import Link from "next/link";

// Placeholder type for team member
type TeamMember = {
  name: string;
  id: string;
  image: string;
};

export default function Home() {
  // Team members array (to be replaced with actual data)
  const teamMembers: TeamMember[] = [
    {
      name: "S.M. Mahbub Uddin Ahmed",
      id: "011221068",
      image: "/team/hridoy.jpg",
    },
    {
      name: "Mehrin Ahmed Chowdhury",
      id: "011221075",
      image: "/team/mehrin.jpg",
    },
    {
      name: "Nurjahan Kamal Chaity",
      id: "011221098",
      image: "/team/chaity.jpg",
    },
    {
      name: "Fayjullah Haque",
      id: "011221072",
      image: "/team/emon.jpg",
    },
    {
      name: "Shagin Ahmed Al Rahim",
      id: "011221169",
      image: "/team/shagin.jpg",
    },
    {
      name: "Yeamine Alam Sorol",
      id: "011221108",
      image: "/team/sorol.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-center items-center text-center py-10">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/logo.png"
            alt="EchoMind logo"
            width={220}
            height={48}
            priority
            className="mx-auto mb-6 hover:scale-105 transition-transform duration-300"
          />

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
            Transforming Mental Health with AI
          </h1>

          <p className="text-base text-gray-300 mb-8 max-w-xl mx-auto">
            EchoMind leverages AI to revolutionize mental health care through
            intelligent automation. Our innovative solutions provide
            personalized support, early detection, and seamless mental wellness
            management. Experience the future of mental health with AI-driven
            insights.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/solutions"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold 
                         hover:bg-blue-700 transition-colors duration-300 
                         flex items-center justify-center gap-2 shadow-md text-sm"
            >
              Our Solutions
            </Link>

            <Link
              href="/contact"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg font-semibold 
                         hover:bg-gray-700 transition-colors duration-300 
                         flex items-center justify-center gap-2 shadow-md text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Team Section */}
        <section className="mt-12 w-full">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Meet Our Innovative Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center transform transition-transform hover:scale-105"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mb-3 border-3 border-gray-800">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-xs">{member.id}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </Link>

          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
}
