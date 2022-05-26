import React from 'react';
import {projects} from "../../projectsData";
import Image from "next/image";
import {path} from "../../config";
import Link from "next/link";

const project = ({project}) => {

    return (
        <div className="project">
            <h1>{project.title}</h1>
            <span> {project.date} </span>
            <p>{project.infos}</p>
            <Image src={path + project.img} alt={project.title} width={300} height={200}/>
            <Link href="/portfolio">
                <a> Revenir au project </a>
            </Link>
        </div>
    );
};

export default project;

export const getStaticProps = (context) => {
    const filtered = projects.filter(project => project.id == context.params.id);
    console.log(filtered);
    if (filtered.length > 0) {
        return{
            props:{
                project: filtered[0]
            }
        }

    }
}

export const getStaticPaths = async () => {
    const ids = projects.map((project) => project.id);
    const paths = ids.map((id) => ({
        params: {id: id.toString()},
    }));

    return {
        paths,
        fallback: false
    }
}