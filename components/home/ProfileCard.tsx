import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-neutral-950 text-white p-8 rounded-xl shadow-md max-w-2xl mx-auto my-5 border-2 border-neutral-800">
      <h2 className="text-4xl font-bold">Swastik Biswas</h2>
      <p className="text-neutral-400 flex items-center gap-2">
        <span>📍</span> Kolkata, West Bengal 🇮🇳  |  Wilmington, DE 🇺🇸
      </p>
      <p className="mt-3 text-neutral-300">
        An 18 year old software engineer, developer. Residing in India, citizen of the United States. Building desktop applications using Java, C, C++, C#, Python, and web applications using Next.js and Typescript. Focusing on user experience and performance.
      </p>
      <div className="flex gap-3 mt-4">
        <a
          href="mailto:swastikbiswas962@gmail.com"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#ff5c00]"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/PolybitRockzz"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#ff5c00]"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://instagram.com/0x_swastikbiswas"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#ff5c00]"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com/in/polybit"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#ff5c00]"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;