import {Component} from "react";
import Loader from 'components/Loader/Loader'
import Notification from 'components/Notification/Notification'
import Button from 'components/Button/Button'
import ImageGalleryList from 'components/ImageGallery/ImageGalleryList/ImageGalleryList'
import Modal from 'components/Modal/Modal'
import FetchApi from 'components/FetchApi/FetchApi'
import { toast } from 'react-toastify';

export default class ImageGallery extends Component {
    state = {
        images: [],
        page: 1,
        perPage: 12,
        error: null,
        loading: false,
        showModal: false,
        showLoadMore: false,
        contentModal: {
            src: '',
            alt: '',
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        
        const prevSearchImgs = prevProps.searchImgs;
        const nextSearchImgs = this.props.searchImgs;

        if (prevSearchImgs !== nextSearchImgs) {
            this.setState({
                page: 1
            });
            this.fetchImg(nextSearchImgs);
        }
        else if (prevState.page !== page) {
            this.fetchImg(nextSearchImgs);
        }
    }

    async fetchImg(nameImgs) {
        const { page, perPage } = this.state;

        this.setState({
            loading: true,
        })
        try {
            const result = await FetchApi(nameImgs, page, perPage);
            const data = result.hits;
            const totalPage = Math.ceil(result.totalHits / perPage);
    
            if (result.totalHits === 0) {
                return toast.warn("Nothing found! Try again, please.");
            }
            else if (page === 1) {
                this.setState(() => {
                    return {
                        images: [...data],
                        showLoadMore: true
                    }
                });
            }
            else if (page >= totalPage) {
                this.setState(({ images }) => {
                    return {
                        images: [...images, ...data],
                        showLoadMore: false
                    }
                });
            }
            else {
                this.setState(({ images }) => {
                    return {
                        images: [...images, ...data],
                        showLoadMore: true
                    }
                });
            }
        } catch (error) {
            this.setState({ error })
        } finally {
            this.setState({
                loading: false,
            })
        }
    }


    loadMore = () => {
        this.setState(({ page }) => {
            return {
                page: page + 1
            }
        })
    }

    openModal = (contentModal) => {
        this.setState({
            showModal: true,
            contentModal,
        });
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            contentModal: {
                urlLarge: '',
                title: '',
            }
        });
    }

    render() {
        const { loading, error, images, showModal, showLoadMore, contentModal } = this.state;
        const { loadMore, openModal, closeModal } = this;
        return (
            <>              
                {loading && <Loader />}

                {error && <Notification/>}
                {images && <ImageGalleryList images={images} onClick={openModal} />}    
                {showLoadMore && <Button onClick={loadMore} />}
                {showModal && <Modal onClose={closeModal} content={contentModal} />}
            </>
        )
    }
}

//  if (status === 'idle') {
//     return <Notification/>;
// }

// if (status === 'pending') {
//     return <Loader/>;
// }

// if (status === 'rejected') {
//     return  toast.warn('ooops! try again.');
// }

// if (status === 'resolved') {
//     return (
//         <>
//             <ImageGalleryList images={images} />
//             <Button onClick={loadMore} />
//         </>
//     );
// }