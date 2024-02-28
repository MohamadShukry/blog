import React from 'react';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import NavBar from './pages/NavBar'
import Home from './pages/HomePage'
import NotFoundPage from './pages/NotfoundPage'



function App() {
  

  
  return (

    <BrowserRouter>
    <div className="App">
        <NavBar/>

      <div id='page-body'>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/articles' element={<ArticleListPage/>}/>
        <Route path='/articles/:articleID' element={<ArticlePage/>}/>
        <Route path='/articles/:articleID' element={<ArticlePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
        


        </div>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
