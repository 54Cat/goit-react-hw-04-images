import {Component} from "react";
// import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader'
import Button from 'components/Button/Button'
import ImageGallery from 'components/ImageGallery/ImageGallery'
import axios from "axios";

const URL = 'https://pixabay.com/api/';
const KEY = '29341553-4d62c8252f38dd5e4df787fdd';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
const PER_PAGE = 12;


export default class FetchApi extends Component {
    state = {
        items:[],
        loading: false,
        error: null,
        page: 1,
        searchQuery: "nature"
    }

    componentDidMount() {
        this.fetchImg();
    }

    // componentDidUpdate(prevProps, prevState) {
        // const prevName = prevProps.searchQuery;
        // const nextName = this.props.searchQuery;

        // const NEW_REQUEST_URL = `${URL}?key=${KEY}&q=${nextName}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${PER_PAGE}`;

        // if (prevName !== nextName) {
            // this.setState({ loading: true });

            // fetch(NEW_REQUEST_URL)
            //     .then(res => res.json())
            //     .then(searchQuery => this.setState({ searchQuery }))
            //     .finally(() => this.setState({ loading: false }));
        // }

        // if (prevState.page !== this.state.page) {
        //     this.fetchImg();
        // }

    // }

    fetchImg() {
        const { page, searchQuery } = this.state;
        this.setState({ loading: true });
        
        const REQUEST_URL = `${URL}?key=${KEY}&q=${searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}&page=${page}&per_page=${PER_PAGE}`;

        axios.get(REQUEST_URL)
            .then(({ data }) =>{
                this.setState(({ items }) => {
                    return {
                        items: [ ...items, ...data.hits]
                    }
                })
            })
            .catch(error => {
                this.setState({ error })
            })
            .finally(() => this.setState({ loading: false }))        
    }

    loadMore = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        })
    }


  

    render() {
        const { items, loading, error } = this.state;
        const isPost = Boolean(items.length);
       
        return (
            <>                 
                {loading && <Loader/>}
                {error && <p>ooops! try again.</p>}
                {isPost && <ImageGallery images={items} />}
                {isPost && <Button onClick={this.loadMore}/>}

            </>
        );
    }
}

