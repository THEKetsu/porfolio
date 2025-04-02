'use client';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Image
 from 'next/image';
 
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

const NavProject = () => {

    const projects: Project[] = [  
        {
            id: 1,
            title: 'Strategy RCT',
            description: 'Projet qui a pour but de créer une application web pour la gestion des stratégies et scénarios de match de l\'équipe de RCT',
            image: '/companies/rct.svg',
            technologies: ['React', 'TypeScript']
        },
        {
            id: 2,
            title: 'BIFROST',
            description: 'This is a project',
            image: '/companies/mindflow.svg',
            technologies: ['React', 'TypeScript']
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'This is a project',
            image: '/companies/marine.svg',
            technologies: ['React', 'TypeScript']
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is a project',
            image: '/companies/thales.svg',
            technologies: ['React', 'TypeScript']
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(1);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Navigation Buttons */}
            <Button 
                variant="contained" 
                onClick={handlePrev}
                className="absolute left-4 z-10">
                {'<'}
            </Button>

            {/* Projects Display */}
            <div className="flex items-center justify-center gap-4 overflow-hidden">
                {/* Previous Project (smaller) */}
                <motion.div
                    className="w-64 opacity-50 scale-75"
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                >
                    <Image 
                        src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
                        alt="previous project"
                        width={256}
                        height={256}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Current Project (larger) */}
                <motion.div
                    className="w-96"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 3}}
                    style={{ 
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                     }}
                >
                    <Image 
                        src={projects[currentIndex].image}
                        alt="current project"
                        className="rounded-lg shadow-lg"
                        width={256}
                        height={256}
                    />
                    <div className="mt-4 text-center">
                        <h3 className="text-xl font-bold">{projects[currentIndex].title}</h3>
                        <p>{projects[currentIndex].description}</p>
                    </div>
                </motion.div>

                {/* Next Project (smaller) */}
                <motion.div
                    className="w-64 opacity-50 scale-75"
                    initial={{ x: 100 }}
                    animate={{ x: 0 ,
             
                    }}
                >
                    <Image 
                        src={projects[(currentIndex + 1) % projects.length].image}
                        alt="next project"
                        width={256}
                        height={256}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
            <Button 
                variant="contained" 
                onClick={handleNext}
                className="absolute right-4 z-10"
            >
                {'>'}
            </Button>
        </div>
    );
}

export default NavProject;