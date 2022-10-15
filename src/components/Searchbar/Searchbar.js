import { useState } from "react";
import { toast } from 'react-toastify';
import { Header, SearchForm, SearchFormBtn, SearchFormBtnLabel, SearchFormInput } from 'components/Searchbar/SearchbarStyled';
// import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {   
    const [searchImgs, setSearchImgs] = useState('');


    const handelSearchImgs = e => {
        setSearchImgs( e.currentTarget.value.toLowerCase() );
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (searchImgs.trim() === '') {
            toast.warn('Please, enter a search query!');
            return;
        }
        
        onSubmit(searchImgs);
        setSearchImgs('');
    }     

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
