import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white pt-3"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-18">
        Hello, I'm Sahil, a passionate and creative web developer who has recently graduated 
        and is ready to take the digital world by storm. With a solid foundation in 
        web development and a hunger to learn and grow, I am excited to embark on this 
        journey of turning innovative ideas into functional, user-friendly, and visually 
        appealing websites.
        </p>

        <br />

        <p className="text-xl">
        My love for coding and technology led me to pursue a degree in Web Design and Development 
        from Humber College. Throughout my academic journey, I honed my skills in front-end 
        and back-end development, mastering languages like HTML, CSS, JavaScript, and 
         React, Node.js. I also have experience in database management, API integration, 
         and version control systems. Along with programming, I also have hands-on experience
         in Adobe Suites of application such as Photoshop, Illustrator, After Effects and Premier Pro.
        </p>

        <br />

        <p className="text-xl">
        I thrive on turning complex ideas into clean, efficient, and interactive digital solutions. 
        A relentless learner, I'm always exploring new coding techniques and design concepts to 
        enhance user experiences.
        </p>

        <br />

        <p className="text-xl">
        Let's collaborate and bring innovative web concepts to life. Join me on this exciting 
        journey of crafting impactful digital experiences.
        </p>

        <br />

        <p className="text-xl">
        Sincerely,
        <br />
        Sahil Mann
        </p>

      </div>
    </div>
  );
};

export default About;