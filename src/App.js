import { Route, Routes } from 'react-router-dom';
import {
  Hero ,
Navbar ,
Plan , Footer,
 ImageSlider,
  Offer,
   Room
   } from './components';

function App () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

  );
}

export default App;

function Home () {
  return (<div className='flex flex-col'>
    <Navbar />
    <Hero />
    <Offer />
    <Plan />
    <Room/>
    <ImageSlider/>
    <Footer/>
  </div>);

}
