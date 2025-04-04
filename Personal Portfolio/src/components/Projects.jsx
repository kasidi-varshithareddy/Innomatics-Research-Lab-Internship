import React from "react";
import employeeMSImage from "../assets/sentiment analysis.png";
import bookMSImage from "../assets/malware.jpeg";
import employeeMSImages from "../assets/sports.png.png";
import bookMSImages from "../assets/healthcare.jpg";

const projects = [
  {
    id: 1,
    name: "Sentiment Analysis on incoming calls on Helpdesk",
    technologies: "Machine Learning, NLP",
    image: employeeMSImage,
    github: "https://github.com/kasidi-varshithareddy/SENTIMENT-ANALYSIS-OF-INCOMING-CALLS-ON-HELPDESK",
  },
  {
    id: 2,
    name: "Malware Detection",
    technologies: "Machine Learning",
    image: bookMSImage,
    github: "https://github.com/kasidi-varshithareddy/A-Strategy-for-Effective-Detection-of-Malware",
  },
  {
    id: 3,
    name: "Sports management website for college",
    technologies: "HTML,CSS",
    image: employeeMSImages,
    github: "https://github.com/kasidi-varshithareddy/Sports-Management-Website-for-Collegee-",
  },
  {
    id: 4,
    name: "AI chatbot in healthcare",
    technologies: "Python",
    image: bookMSImages ,
    github: "https://github.com/kasidi-varshithareddy/AI-Chatbot-in-Healthcare" 
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
