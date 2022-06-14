import React from 'react';
import photo from '../../../src/images/profile-pic.jpg';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe';
const Home = () => {
    return (
        <div>
            <h1 className='lg:text-8xl text-4xl font-thin text-center mt-10 tracking-normal hover:text-primary'>MAHFUZ SWARON</h1>
            <h2 className='lg:text-2xl text-lg font-bold text-center mt-2 uppercase'>A Web Developer's web</h2>
            <img class="mask mask-circle w-40 h-40 mx-auto mt-14 mb-10" src={photo} alt='mahfuz swaron' />
            <p className='text-left mx-auto lg:w-1/3 w-2/3 text-xl whitespace-pre-line pb-10 font-sans'>
                {
                    `From childhood, I was very curious about web technology. Always thought about what is going on behind the screen?

                    After hearing about Web Development, I jumped in the web.

                    Finaly, learned Web Development. Now, Web is my home.
                    `
                }
            </p>
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;