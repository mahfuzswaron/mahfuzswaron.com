import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../Hooks/useProjects';

const ProjectDetails = () => {
    const { id } = useParams();
    const [projects] = useProjects();

    if (!projects | !projects?.length) {
        return
    }

    const project = projects.find(p => p.id === id);
    const { name, img, technologies, features, liveLink, description } = project;

    return (
        <div className='flex flex-col items-center px-5'>
            <figure className='w-full p-5 flex items-center '>
                <img className='shadow lg:shadow-lg block mx-auto border' src={img} alt={name} />
            </figure>

            <div className='p-5 w-full lg:p-20 grid grid-cols-1 gap-3 text-center lg:text-left'>
                <h1 className='text-3xl lg:text-4xl text-primary font-bold'>{name}</h1>

                <div>
                    <p className="lg:text-xl text-lg break-words text-left font-sans">
                        {description}
                    </p>
                </div>
                <div className='mt-3'>
                    <p className='text-xl lg:text-3xl hover:text-primary font-semibold mb-3'>Main Features</p>
                    <ul className='font-sans space-y-2 text-left'>
                        {
                            features.map((t, i) => <li className='hover:text-primary' key={i}> # {t}</li>)
                        }
                    </ul>
                </div>

                <div className='mt-3'>
                    <p className='text-xl lg:text-3xl hover:text-primary font-semibold mb-3'>Technologies used</p>
                    <ul className='font-sans flex flex-wrap space-x-3'>
                        {
                            technologies.map((t, i) => <li className='hover:text-primary'
                                key={i}> {t}</li>)
                        }
                    </ul>
                </div>

                <div className="flex space-x-4 mt-3">
                    <button >
                        <a className="btn btn-primary btn-outline " target={'_blank'} rel="noreferrer" href={project.githubClient}>
                            GitHub Repo
                        </a>
                    </button>
                    <button >
                        <a className="btn btn-primary text-white  " target={'_blank'} rel="noreferrer" href={liveLink}>
                            Visit
                        </a>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetails;