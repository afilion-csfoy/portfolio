import React from 'react';
import { useParams } from 'react-router';

import articles from '../contenu-article';

export const PageArticle = () => {
    const { nom: nomArticle } = useParams();
    const article = articles.find(article => article.nom === nomArticle)

    if (article === undefined) {
        return <h1>Cet article n'existe pas</h1>
    }

    return (
        <>
            <h1>{article.titre}</h1>
            {article.contenu.map(paragraphe => <p>{paragraphe}</p>)}
        </>
    )
}