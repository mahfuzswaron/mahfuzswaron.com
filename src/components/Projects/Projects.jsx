import React, { useEffect, useState } from 'react';
import useProjects from '../../Hooks/useProjects';
import Project from './Project';

const Projects = () => {
    const [projects] = useProjects();

    if (!projects | !projects?.length) return;

    return (
        <div className='px-5 lg:px-20 py-20 '>
            <h3 className='lg:text-4xl text-2xl hover:text-primary font-bold text-center uppercase mb-20'>Projects</h3>
            {
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        projects.map(p => <Project key={p.id} project={p} />)
                    }
                </div>
            }
        </div>
    );
};

export default Projects;