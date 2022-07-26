import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header';
import Signin from './components/Signin/Signin'
import Register from './components/Register/Register'
import { Routes, Route  } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import Category from './components/Category/Category';
import AddCategory from './components/Category/AddCategory';
import Articles from './components/Articles/Articles';
import AddArticle from './components/Articles/AddArticle';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Auth from './components/Authentication/Auth';
import SingleArticlePage from './components/Articles/SingleArticlePage';
import EditCategory from './components/Category/EditCategory';
import EditArticle from './components/Articles/EditArticle';
import ErrorPage from './components/Error/ErrorPage';
import User from './components/Users/User';
import EditUser from './components/Users/EditUser';

function App() {
  return (
    <div className="App">
        <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path ='/signin' element={<Signin />}/>
        <Route path ='/signup' element={<Auth><Register /></Auth>}/>
        <Route path='/admin' element={<Auth><Dashboard /></Auth> }/>
        <Route path='/categories' element={<Auth><Category /></Auth>}/>
        <Route path='/addcategory' element={<Auth><AddCategory /></Auth>}/>
        <Route path='/articles' element={<Auth><Articles /></Auth>}/>
        <Route path='/addarticles' element={<Auth><AddArticle/></Auth>}/>
        <Route path='/articles/:id' element={<SingleArticlePage />}/>
        <Route path='/category/edit/:id' element={<EditCategory />}/>
        <Route path='/article/edit/:id' element={<EditArticle />}/>
        <Route path='/users' element={<User />}/>
        <Route path='/users/edit/:id' element={<EditUser />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </div>
  );
}

export default App;
