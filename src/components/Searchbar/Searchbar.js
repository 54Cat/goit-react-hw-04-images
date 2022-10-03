import React from "react";
// import PropTypes from 'prop-types';
import { Header, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from 'components/Searchbar/SearchbarStyled';

export default class Searchbar extends React.Component {
    state = {
        searchQuery: '',
    }

    handelEnterSearchQuery = e => {
        this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    }

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.searchQuery.trim() === '') {
            alert("enter search");
            return;
        }
        
        this.props.onSubmit(this.state.searchQuery)
        this.setState({ searchQuery: '' });
    }

    render() {
        return (
            <Header>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchFormBtn type="submit">
                        <SearchFormBtnLabel>Search</SearchFormBtnLabel>
                    </SearchFormBtn>

                    <SearchFormInput
                        type="text"
                        autocomplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.searchQuery}
                        onChange={this.handelEnterSearchQuery}
                    />
                </SearchForm>
            </Header>

        );
    }
}
