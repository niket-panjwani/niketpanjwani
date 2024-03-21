import SectionTitle from "./SectionTitle";
import experiences from './experiences.json';

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto lgl:px-24 pt-24 pb-30">
      {/* Section Title aligned to the top-left */}
      <SectionTitle title="My Journey So Far..." titleNo="02" />

      <div className="flex flex-col items-center relative">
        {/* Central line */}
        <div className="absolute inset-0 flex justify-center">
          <div className="w-0.5 bg-gray-200"></div> {/* Central vertical line */}
        </div>

        {experiences.map((experience, index) => (
          <div key={index} className={`flex w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
            <div className={`w-6/12 px-4 py-2 ${index % 2 === 0 ? 'text-right mr-2' : 'text-left ml-2'}`}>
              <div className="text-xl font-semibold">{experience.title}</div>
              <div className="text-sm text-base text-textDark">{experience.date}</div>
              <p className="mt-2 text-base text-textDark">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
