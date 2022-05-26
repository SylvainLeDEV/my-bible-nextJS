import React from 'react';
import Head from "next/head";

const Meta = ({title, description}) => {
    return (
        <Head>
            <title> {title} </title>
            <meta name="description" content={description}></meta>
        </Head>
    );
};

Meta.defaultProps = {
    title: 'Le blog des développeurs, pour les passionnés de web',
    description: 'Apprendre et comprendre le developpement, javascript, react, node, mongo, nextjs, graphql, ...'
}

export default Meta;