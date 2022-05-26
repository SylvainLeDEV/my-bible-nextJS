import React from 'react';
import Meta from "../components/Meta";
import {projects} from "../projectsData";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className="portfolio">
            <Meta title="Les portfolio de Sylvain" description="Mes tous derniers projets réaliser"/>
            <h2>Portfolio</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id} >
                        <Link href="projects/[id]" as={`projects/${project.id}`}>
                            <a href="">
                                {project.title} <span>➡️</span>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;