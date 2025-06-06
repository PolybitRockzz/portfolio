const experiences = [
  {
    company: "Octran Technologies",
    role: "Co-Founder, Chief Technology Officer",
    date: "March, 2024 - Present",
    description:
      "A startup I co-founded with 2 friends. We are building applications and automations using recent large language models, what will benefit businesses.",
    link: "https://www.octrantech.com/",
  },
  {
    company: "Open Source",
    role: "Contributor",
    date: "March, 2021 - Present",
    description: "I actively try to contribute to or initiate various open source projects on my GitHub. I developed several apps, including a Reddit Video Creator, A Java IDE, and a 3D Graphics Engine from scratch.",
    link: "https://github.com/PolybitRockzz",
  },
];

const Experience = () => {
  return (
    <div className="max-w-2xl mx-auto text-white p-6 bg-neutral-950 rounded-xl shadow-lg">
      <h2 className="text-4xl text-center font-bold mb-6">Experience</h2>

      <div className="relative">
        {/* Vertical Line - extends fully */}
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-[#1f6feb]"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-6 items-start mb-8">
            {/* Timeline Dot */}
            <div className="mt-4 relative flex items-center">
              <div className="absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-neutral-900 border-2 border-[#1f6feb] rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-neutral-100 rounded-full"></div>
              </div>
            </div>

            {/* Experience Content */}
            <div>
              <h3 className="text-lg font-semibold text-[#1f6feb]">
                {exp.company}
              </h3>
              {exp.role && <p className="font-bold text-2xl">{exp.role}</p>}
              <p className="text-neutral-400 text-sm">{exp.date}</p>
              <p className="mt-2 text-neutral-300">{exp.description}</p>
              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1f6feb] hover:underline"
                >
                  {exp.link}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
