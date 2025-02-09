import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="bg-neutral-950 text-white p-8 rounded-xl shadow-md max-w-2xl mx-auto my-5 border-2 border-neutral-800">
      <h2 className="text-4xl font-bold">Swastik Biswas</h2>
      <p className="text-neutral-400 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 15" fill="none" className="w-4 h-4">
          <path d="M6 3.5C6 2.67157 6.67157 2 7.5 2S9 2.67157 9 3.5 8.32843 5 7.5 5C6.67157 5 6 4.32843 6 3.5zM8 5.94999C9.14112 5.71836 10 4.70948 10 3.5 10 2.11929 8.88071 1 7.5 1 6.11929 1 5 2.11929 5 3.5c0 1.20948.85888 2.21836 2 2.44999V13.5c0 .2761.22386.5.5.5s.5-.2239.5-.5V5.94999z" fill={"currentcolor"} fillRule={"evenodd"} clipRule={"evenodd"} />
        </svg>
        Kolkata, West Bengal 🇮🇳  |  Wilmington, DE 🇺🇸
      </p>
      <p className="mt-3 text-neutral-300">
        An 18 year old software engineer, developer. Residing in India, citizen of the United States. Proficient in desktop applications, web applications, and machine learning models. Focusing on user experience and performance. Currently pursuing a B.Tech in Computer Science and Engineering at KIIT University.
      </p><div className="flex gap-3 mt-4">
        <a
          href="mailto:swastikbiswas962@gmail.com"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#1f6feb]"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://github.com/PolybitRockzz"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#1f6feb]"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://instagram.com/0x_swastikbiswas"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#1f6feb]"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://linkedin.com/in/polybit"
          target="_blank"
          className="p-2 bg-neutral-950 transition-all border-2 border-neutral-800 rounded-lg hover:bg-neutral-700 hover:text-[#1f6feb]"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;