import React from 'react';
import useProjects from '../../Hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects] = useProjects();

    if (!projects | !projects?.length) return;

    return (
        <div className='px-5 lg:px-32 py-24 animate__animated animate__fadeInUp'>
            <h3 className='lg:text-4xl text-2xl hover:text-primary font-bold text-center uppercase mb-20'>Projects</h3>
            {
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3  justify-center">
                    {
                        projects.map(p => <Project key={p.id} project={p} />)
                    }
                </div>
            }
        </div>
    );
};

export default Projects;