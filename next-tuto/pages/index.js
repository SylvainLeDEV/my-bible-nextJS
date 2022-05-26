import React from 'react';
import Article from "../components/Article";
import Meta from "../components/Meta";

const Index = ({articles}) => {
    return (
        <div>
            <h1>Blog</h1>
            <Meta title="Bienvenue sur les blogs" description="Blog" />
            <div className="article-list">
                {articles.map((article) => (
                    <Article key={article.id} article={article} />
                ))}

            </div>

        </div>
    );
};

export default Index;

// Executer le code coté serveur
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
    const articles = await res.json();
    return {
        props: {
            articles
        }
    }
}