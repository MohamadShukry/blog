import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList({articles}) {
  return (
    <div>{
        articles.map((res)=>(
            <>
            <Link key={res.name} className="article-list-item" to={`/articles/${res.name}`}>
            <h2>{res.title}</h2>
            <p>{res.content[0].substring(0, 200)}...</p>
            </Link>
            </>

        ))}</div>
  )
}

export default ArticleList