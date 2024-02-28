import React from "react";
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotfoundPage from "./NotfoundPage";
import CommentList from "../components/CommentList.js";
import axios from "axios";
import { useState, useEffect } from "react";
import AddComment from "../components/AddComment.js";


function ArticlePage() {
  const [ArticleUpvote, setArticleUpvote] = useState(0); // Changed state to hold upvotes directly
  const [ArticleComments, setArticleComments] = useState([]); // Changed state to hold comments directly
  const { articleID } = useParams();
  
  const article = articles.find((article) => article.name === articleID);

  useEffect(() => {
    // Define an async function to load article information
    const loadArticleInfo = async () => {
      try {
        const response = await axios.get(`/api/article/${articleID}`);
        const { upvotes, comments } = response.data; // Destructure upvotes and comments from response data
        setArticleUpvote(upvotes); // Update upvotes state directly
        setArticleComments(comments); // Update comments state directly
      
      } catch (error) {
        console.error("Error fetching article information:", error);
      }
    };

    // Call the loadArticleInfo function when the component mounts
    loadArticleInfo();
  }, [articleID]); // Include articleID in the dependency array


  const Upvote =async()=>{
    const response = await axios.put(`/api/article/${articleID}/upvotes`)
    const {upvotes} = response.data;
    setArticleUpvote(upvotes);
  }
  const handleCommentUpdate = (newComments) => {
    setArticleComments(newComments);
  };

  if (!article) {
    return <NotfoundPage />;
  }

  return (
    <>
      <h2>{article.name}</h2>
      <div className="upvotes-section">
      <button onClick={Upvote}>Upvote</button>
               
      <p>this is vote {ArticleUpvote}</p>
      </div>
      {article.content.map((prah, i) => (
        <p key={i}>{prah}</p>
      ))}
      {/* <AddComment articleID={articleID}
      onCommentUpdate={handleCommentUpdate} 
     
      /> */}
     <AddComment
            articleID={articleID}
            onCommentUpdate={handleCommentUpdate}  />
           
      <CommentList Comments={ArticleComments} />
    </>
  );
}

export default ArticlePage;
