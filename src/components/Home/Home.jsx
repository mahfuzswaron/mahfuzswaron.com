import React from 'react';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe';
import Banner from './Banner';
const Home = () => {
    return (
        <div>
            <Banner />
            <div className='bg-secondary'>
                <Projects />
            </div>
            <ContactMe />
        </div>

    );
};

export default Home;