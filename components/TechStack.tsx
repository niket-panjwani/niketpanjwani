import SectionTitle from "./SectionTitle";
import Image from 'next/image';

const TechStack = () => {

  const techStacks = [
    { name: 'React', icon: '/assets/images/techstack/react.svg' },
    { name: 'Node.js', icon: '/assets/images/techstack/nodejs.svg' },
    { name: 'JavaScript', icon: '/assets/images/techstack/javascript.svg' },
    { name: 'Python', icon: '/assets/images/techstack/python.svg' },
    { name: 'npm', icon: '/assets/images/techstack/npm.svg' },
    { name: 'Redux', icon: '/assets/images/techstack/redux.svg' },
    { name: 'AWS', icon: '/assets/images/techstack/aws.svg' },
    { name: 'Android', icon: '/assets/images/techstack/android.svg' },
    { name: 'Postgres', icon: '/assets/images/techstack/postgres.svg' },
    { name: 'Kotlin', icon: '/assets/images/techstack/kotlin.svg' },
    { name: 'Mysql', icon: '/assets/images/techstack/mysql.svg' },
    { name: 'Github', icon: '/assets/images/techstack/github.svg' },
    { name: 'Git', icon: '/assets/images/techstack/git.svg' },
    { name: 'Angular', icon: '/assets/images/techstack/angular.svg' },
    { name: 'Docker', icon: '/assets/images/techstack/docker.svg' },
    { name: 'Tailwind', icon: '/assets/images/techstack/tailwind.svg' },
    { name: 'Typescript', icon: '/assets/images/techstack/typescript.svg' },
    { name: 'Java', icon: '/assets/images/techstack/java.svg' },
    { name: 'Heroku', icon: '/assets/images/techstack/heroku.svg' },
    { name: 'Flask', icon: '/assets/images/techstack/flask.svg' },
    { name: 'OpenAi', icon: '/assets/images/techstack/openai.svg' },
    { name: 'NextJs', icon: '/assets/images/techstack/nextjs.svg' },
    { name: 'Spring', icon: '/assets/images/techstack/spring.svg' },
  ];

  return (  
    <section id="tech-stack" className="max-w-6xl mx-auto lgl:px-24 pt-12 pb-30">
      <SectionTitle title="My Tech Stack" titleNo="03" />
      <div className="flex flex-wrap justify-center items-center mt-8">
          {techStacks.map((tech, index) => (
            <div key={index} className="p-4" style={{ width: '100px', height: '100px', position: 'relative' }}>
              <Image src={tech.icon} alt={tech.name} fill style={{ objectFit: 'contain' }} />
            </div>
          ))}
        </div>
    </section>
  );
};

export default TechStack;