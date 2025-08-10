'use client';
import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './NavProject.module.css';
 
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

const prefix = process.env.NODE_ENV === 'production' ? '/porfolio' : '';

const NavProject = () => {

    const projects: Project[] = [  
        {
            id: 1,
            title: 'Strategy RCT',
            description: "React Native web application in collaboration with the RCT club to write and share animated strategy scenarios.",
            image: `${prefix}/rct.svg`,
            technologies: ['React', 'TypeScript']
        },
        {
            id: 2,
            title: 'BIFROST',
            description: 'Enabled the creation of a secure gateway to connect services from a cloud provider to internal company services.',
            image: `${prefix}/mindflow.svg`,
            technologies: ['React', 'TypeScript']
        },
        {
            id: 3,
            title: 'SEAOPS',
            description: 'Project in collaboration with the national navy to create a maritime exercise reservation platform for the entire maritime fleet',
            image: `${prefix}/marine.svg`,
            technologies: ['React', 'TypeScript']
        },
        {
            id: 4,
            title: 'Project 4',
            description: 'This is a project',
            image: `${prefix}/thales.svg`,
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
        <div className={styles.projectContainer}>
            {/* Navigation Buttons */}
            <IconButton 
                onClick={handlePrev}
                className={`${styles.navButton} ${styles.navButtonLeft}`}
            >
                <ChevronLeftIcon fontSize="large" />
            </IconButton>

            {/* Projects Display */}
            <div className={styles.projectsDisplay}>
                {/* Previous Project (smaller) */}
                <motion.div
                    className={`w-64 opacity-50 scale-75 group relative cursor-pointer ${styles.projectItem}`}
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    onClick={handlePrev}
                >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <Image 
                            src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
                            alt="previous project"
                            width={256}
                            height={256}
                            className="rounded-lg shadow-lg transition-all duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 rounded-lg">
                            <div className="text-center text-white">
                                <h4 className="text-sm font-bold mb-1 drop-shadow-2xl text-shadow">{projects[(currentIndex - 1 + projects.length) % projects.length].title}</h4>
                                <p className="text-xs leading-relaxed drop-shadow-2xl text-shadow">{projects[(currentIndex - 1 + projects.length) % projects.length].description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Current Project (larger) */}
                <motion.div
                    className={`w-96 group relative ${styles.projectItem}`}
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
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <Image 
                            src={projects[currentIndex].image}
                            alt="current project"
                            className="rounded-lg shadow-lg transition-all duration-300 group-hover:blur-sm"
                            width={256}
                            height={256}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 rounded-lg">
                            <div className="text-center text-white">
                                <h3 className="text-xl font-bold mb-2 drop-shadow-2xl text-shadow">{projects[currentIndex].title}</h3>
                                <p className="text-sm leading-relaxed drop-shadow-2xl text-shadow">{projects[currentIndex].description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Next Project (smaller) */}
                <motion.div
                    className={`w-64 opacity-50 scale-75 group relative cursor-pointer ${styles.projectItem}`}
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    onClick={handleNext}
                >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <Image 
                            src={projects[(currentIndex + 1) % projects.length].image}
                            alt="next project"
                            width={256}
                            height={256}
                            className="rounded-lg shadow-lg transition-all duration-300 group-hover:blur-sm"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 rounded-lg">
                            <div className="text-center text-white">
                                <h4 className="text-sm font-bold mb-1 drop-shadow-2xl text-shadow">{projects[(currentIndex + 1) % projects.length].title}</h4>
                                <p className="text-xs leading-relaxed drop-shadow-2xl text-shadow">{projects[(currentIndex + 1) % projects.length].description}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <IconButton 
                onClick={handleNext}
                className={`${styles.navButton} ${styles.navButtonRight}`}
            >
                <ChevronRightIcon fontSize="large" />
            </IconButton>
        </div>
    );
}

export default NavProject;