import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { Container } from 'components/AppStyled';

export default function App() {
const [searchImgs, setSearchImgs] = useState('');
    
  return (         
    <Container>
      <Searchbar onSubmit={setSearchImgs} />
      <ImageGallery searchImgs={searchImgs} /> 
      <ToastContainer
        autoClose={3000}
        pauseOnFocusLoss={false}
      />
    </Container>
  ); 
} 
