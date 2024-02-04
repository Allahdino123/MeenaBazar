
import './App.css';
import Header from './components/Header';
import HeaderB from './components/HeaderB';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Selling from './components/Selling';
import Stunning from './components/Stunning';
import Testimonials from './components/Testimonials';
import Articles from './components/Articles';
import CardBanner from './components/CardBanner';
import NewsBlog from './components/NewsBlog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <HeaderB/>
     <NavBar/>
     <Hero/>
     <Collection/>
     <Selling/>
     <Stunning/>
     <Testimonials/>
     <Articles/>
     <CardBanner/>
     <NewsBlog/>
     <Footer/>
    </div>
  );
}

export default App;
