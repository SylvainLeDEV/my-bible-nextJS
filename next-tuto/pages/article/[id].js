import React from 'react';
import Link from "next/link";
import Meta from "../../components/Meta";

const article = ({article}) => {
    return (
        <div className="article-page">
            <Meta title={article.title} description={article.body} />
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <Link href="/">
                <a>Retour à la liste des articles</a>
            </Link>
        </div>
    );
};

export default article;

export const getStaticProps = async (context) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + context.params.id);
    const article = await res.json();
    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const articles = await res.json();

    //Préparer les id dans un objet Path {id: 1, id: 2, id: 3...}
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({
        params: {id: id.toString()},
        }));

    return {
        paths,
        fallback: false
    }
}