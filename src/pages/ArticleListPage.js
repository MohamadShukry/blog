import React from 'react'
import articles from './article-content'

import ArticleList from '../components/ArticleList'

function ArticleListPage() {
  return (
    <div>
        <h1>Articles</h1>
        <ArticleList articles={articles}/>

        
    </div>
  )
}

export default ArticleListPage