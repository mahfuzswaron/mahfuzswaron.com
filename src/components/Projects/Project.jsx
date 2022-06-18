import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { name, img, description, liveLink } = project;
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="card w-full h-64 bg-secondary bg-opacity-70 border border-secondary shadow-lg rounded-lg relative">
            <figure className="p-2 h-full">
                <img src={img} alt="Shoes" className="rounded-lg border border-secondary hover:scale-105" />
            </figure>
            <div className={`h-full w-full absolute bg-primary opacity-0 ${show && 'opacity-100 transition duration-300 ease-in-out'} `} ></div>
            <div onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className="card-body p-5 items-center text-center absolute opacity-0 hover:opacity-100 ">
                <h2 className="card-title text-white text-xl uppercase">{name}</h2>
                <p className='text-white text-lg font-sans max-h-[112px] overflow-hidden text-ellipsis'>{description}</p>
                <div className="card-actions">
                    <button onClick={() => navigate(`/projects/${project.id}`)} className="btn btn-outline btn-md text-white font-sans">Details</button>
                    <button >
                        <a className="btn btn-secondary text-primary  " target={'_blank'} rel="noreferrer" href={liveLink}>
                            Visit Site
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Project;