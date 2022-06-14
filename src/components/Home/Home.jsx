import React from 'react';
import photo from '../../../src/images/profile-pic.jpg';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe';
const Home = () => {
    return (
        <div>
            <h1 className='lg:text-8xl text-4xl font-thin text-center mt-10 tracking-normal hover:text-primary '>MAHFUZ SWARON</h1>
            <h2 className='lg:text-2xl text-lg font-bold text-center mt-2 uppercase'>A Web Developer's web</h2>
            <img class="mask mask-circle w-40 h-40 mx-auto mt-14 mb-10" src={photo} alt='mahfuz swaron' />
            <p className='text-left mx-auto lg:w-1/3 w-2/3 text-xl whitespace-pre-line pb-10 font-sans'>
                {
                    `Curiousity about web technology was in my mind from childhood. Wanted to know how is the web working? How is it made?  

                    At the age of seventeen, I learned the basic knowledge of web development.

                    Finally, I jumped into the web.
                    `
                }
            </p>
            <div className='bg-secondary'>
                <Projects />
            </div>
            <ContactMe />
        </div>
    );
};

export default Home;