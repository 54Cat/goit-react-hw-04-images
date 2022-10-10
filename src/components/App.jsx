import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

import { Container } from 'components/AppStyled';

export default class App extends Component {
  state = {
    searchImgs: '',
  };
  
  handleFormSubmit = searchImgs => {
    this.setState({ searchImgs });
  }
  
  render() {
    const { searchImgs } = this.state;
    const { handleFormSubmit } = this;
    
    return (         
      <Container>
        <Searchbar onSubmit={handleFormSubmit} />
        <ImageGallery searchImgs={searchImgs} /> 
        <ToastContainer
          autoClose={3000}
          pauseOnFocusLoss={false}
        />
      </Container>
    ); 
  } 
}
