import './App.css';
import Header from './components/Header/Header';
import Footer from "../src/components/Footer/Footer";
import CarouselEffect from './components/Carousel/CarouselEffect';
import Catagory from './components/Category/Category';

function App() {
  return (
    <div>
      <Header />
      <CarouselEffect />
      <Catagory />
      <Footer />
    </div>
  );
}

export default App;