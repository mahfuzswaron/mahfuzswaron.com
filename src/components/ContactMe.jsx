import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        /* const email = e.target.email.value;
        const name = e.target.name.value;
        const message = e.target.message.value;
        const form = { name, email, message }; */
        emailjs.sendForm('service_77tsa48', 'template_kz0l0ds', form.current, 'dGRT_G2oWNSVKXjej')
            .then((result) => {
                if (result.text.toLowerCase() === 'ok') {
                    toast.success('Thanks for messaging me. I will reply soon.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            }, (error) => {
                toast.error('Sorry, something went wrong', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
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
                <form ref={form} onSubmit={handleSubmit} className='mx-auto grid grid-cols-1 gap-3 font-sans' >
                    <input required type="text" name="name" id="name" placeholder='Your Name' className='input input-primary bg-white text-xl py-3' />
                    <input required type="email" name="email" id="email" placeholder='Your Email' className='input input-primary bg-white text-xl py-3' />
                    <textarea required type="text" name="message" id="message" placeholder='Your Message' className='input input-primary bg-white text-xl py-3' />
                    <button type="submit" className="btn btn-primary text-white w-full">
                        SEND
                    </button>
                </form>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default ContactMe;