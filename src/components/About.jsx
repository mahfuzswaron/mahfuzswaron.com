import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='lg:flex lg:mt-20 mt-10 mb-5 px-5'>
            <figure className='lg:w-1/2 px-5'>
                <img src="https://i.ibb.co/4tRZCmr/about.png" alt="about me" />
            </figure>
            <div className='lg:w-1/2 px-5'>
                <h3 className="hover:text-primary uppercase  text-4xl font-bold text-center">
                    About Me
                </h3>
                <p className='whitespace-pre-line  text-xl leading-relaxed  font-sans '>
                    {

                        `
                    "Who am I", You ask?
                    This is Mahfuz Swaron, a Web developer. Coding is my language. Keyboard is my mice. Linux is my home. Code with VsCode.

                    "What can I do", you know?
                    I can React.js, JavaScript, HTML, CSS, Express.js. Familiar with Firebase, MongoDB, Heroku, and GitHub. Learning TypeScript, Node.js, and Next.js
                    
                    "Why do I code", you ask?
                    I love to program machiene. To do that, I have chosen coding. And coding chose me as friend. Now I express my thoughts in code.

                    "How can I help you", You want to know?
                    As a web developer I will develop excellent sites and feauters. And as a man, I will give my full effort with sincerity and honesty to take your company to the next level.
                    `
                    }
                </p>
                <p className='text-xl my-5 hover:text-primary italic font-medium'>Want to discuss? <Link className='hover:link' to='/contact' >Let's go...</Link> </p>
            </div>
        </div >
    );
};

export default About;