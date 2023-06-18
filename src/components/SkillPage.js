import React from 'react';
import Skill from '../pages/Skills';

const SkillPage = () => {
  const webDevSkills = [
    {
      title: 'HTML',
      description: 'Creating the structure and content of web pages.',
      icon: 'html-icon.png',
    },
    {
      title: 'CSS',
      description: 'Styling web pages and creating visually appealing designs.',
      icon: 'css-icon.png',
    },
    {
      title: 'JavaScript',
      description: 'Adding interactivity and functionality to web pages.',
      icon: 'javascript-icon.png',
    },
    {
      title: 'React.js',
      description: 'Building dynamic and responsive web applications.',
      icon: 'react-icon.png',
    },
    // Add more web development skills as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Web Development Skills</h2>
      {webDevSkills.map((skill) => (
        <Skill
          key={skill.title}
          title={skill.title}
          description={skill.description}
          icon={skill.icon}
        />
      ))}
    </div>
  );
};

export default SkillPage;
