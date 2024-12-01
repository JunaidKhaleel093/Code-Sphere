import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './pages/Home';
import ContactForm from './Components/ContactForm';
import Blog from './pages/Blog';
import About from './pages/About';
import FullArticle from './pages/FullArticle';
import FeaturedPost from './Components/FeaturedPost';
import Article2 from './pages/Article2';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/article-2" element={<Article2 />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/" component={FeaturedPost} />
            <Route path="/full-article" element={<FullArticle />} /> 
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;