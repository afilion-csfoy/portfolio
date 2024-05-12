import React from 'react';
import { Link } from 'react-router-dom';

import articles from '../contenu-article';

export const PageListeArticles = () => {
    return (
        <>
            <h1>Liste d'articles</h1>
            {
                articles.map(article => (
                    <Link key={article.nom} to={`/article/${article.nom}`}>
                        <h3>{article.titre}</h3>
                        <p>{article.contenu[0].substring(0, 150)}...</p>
                    </Link>
                ))
            }
        </>
    )
}