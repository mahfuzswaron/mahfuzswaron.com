import React from 'react';
import photo from '../../../src/images/profile-pic.jpg';
const Banner = () => {
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co/VjCTJDn/half-circle-bg-80.png')",
            backgroundRepeat: "no-repeat",
            backgroundPositionX: "center"
        }}
            className='bg-[length:540%] lg:bg-[length:110%] animate__animated animate__fadeInDown'>

            <h1 className='lg:text-8xl text-4xl font-thin text-center pt-10 tracking-normal text-white '>MAHFUZ SWARON</h1>
            <h2 className='lg:text-2xl text-lg font-bold text-center mt-2 uppercase'>A Web Deve-lover </h2>
            <img class="mask mask-circle w-40 h-40 mx-auto mt-14 mb-10" src={photo} alt='mahfuz swaron' />
            <p className='text-left mx-auto lg:w-1/3 w-2/3 text-xl whitespace-pre-line pb-20 font-sans text-white'>
                {
                    `Curiousity about web technology was in my mind from childhood. Wanted to know how is the web working? How is it made?  

                    At the age of seventeen, I learned the basic knowledge of web development.

                    And Finally, I jumped into the web.
                    `
                }
            </p>
        </div>
    );
};

export default Banner;