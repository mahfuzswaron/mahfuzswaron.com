import React from 'react';

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    return (
        <div className='mb-10 lg:mt-44 mt-10 lg:px-20 px-5 lg:flex '>
            <div className='lg:w-1/2 px-5 mb-10 lg:mb-0'>
                <img src="https://i.ibb.co/LQ62C5k/contact.png" alt="contact me" />
            </div>
            <div className=' lg:w-1/2 px-5'>
                <h3 className="text-2xl lg:text-4xl text-center uppercase hover:text-primary font-bold lg:mb-14 mb-8">
                    Contact Me
                </h3>
                <form onSubmit={handleSubmit} className=' mx-auto grid grid-cols-1 gap-3' action="mailto:mahfuzswaron@gmail.com" method="post" enctype="text/plain">
                    <input required type="text" name="name" id="name" placeholder='Your Name' className='input input-primary bg-white text-xl py-3' />
                    <input required type="email" name="email" id="email" placeholder='Your Email' className='input input-primary bg-white text-xl py-3' />
                    <textarea required type="text" name="message" id="message" placeholder='Your Message' className='input input-primary bg-white text-xl py-3' />
                    <button type="submit" className="btn btn-primary text-white w-full">
                        SEND
                    </button>
                </form>
            </div>

        </div>
    );
};

export default ContactMe;