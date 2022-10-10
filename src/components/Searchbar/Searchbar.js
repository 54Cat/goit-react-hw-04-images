import { Component } from "react";
import { toast } from 'react-toastify';
import { Header, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from 'components/Searchbar/SearchbarStyled';
// import PropTypes from 'prop-types';

export default class Searchbar extends Component {
    state = {
        searchImgs: '',
    }

    handelSearchImgs = e => {
        this.setState({ searchImgs: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        const { searchImgs } = this.state;

        e.preventDefault();

        if (searchImgs.trim() === '') {
            toast.warn('Please, enter a search query!');
            return;
        }
        
        this.props.onSubmit(searchImgs)
        this.setState({ searchImgs: '' });
    }

    render() {
        const { searchImgs } = this.state;        
        const { handleSubmit, handelSearchImgs } = this;      

        return (
            <Header>
                <SearchForm onSubmit={handleSubmit}>
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchImgs}
                        onChange={handelSearchImgs}
                    />
                </SearchForm>
            </Header>

        );
    }
}
