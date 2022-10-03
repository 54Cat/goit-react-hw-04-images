import React from "react";
import Searchbar from 'components/Searchbar/Searchbar';
import FetchApi from 'components/FetchApi/FetchApi';
// import ImageGallery from 'components/ImageGallery/ImageGallery';
// import Modal from 'components/Modal/Modal';

import { Container } from 'components/AppStyled';


export default class App extends React.Component {
  state = {
    searchQuery: null,
    page: 1,
    loading: false,
    showModal: false
  };

    //   componentDidMount() {
    //     console.log("componentDidMount");
    // }

  toggleModal = ()=> {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }
  
  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  }
  
  render() {
    // const { showModal, loading, searchQuery } = this.state;
    
    return (   

      
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <FetchApi></FetchApi>

        {/* <ImageGallery searchQuery={searchQuery} />
        
        <button type="button" onClick={this.toggleModal}>Modal</button>
        {showModal && <Modal onClose={this.toggleModal} />}

        {loading && <p>Loading...</p>}
        {searchQuery && <div>{searchQuery.name}</div>} */}
                
      </Container>
    ); 
  } 
}
