import {useEffect, useState} from "react";
import Loader from 'components/Loader/Loader'
import Notification from 'components/Notification/Notification'
import Button from 'components/Button/Button'
import ImageGalleryList from 'components/ImageGallery/ImageGalleryList/ImageGalleryList'
import Modal from 'components/Modal/Modal'
import FetchApi from 'components/FetchApi/FetchApi'
import { toast } from 'react-toastify';

export default function ImageGallery({searchImgs}) {
    
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [contentModal, setContentModal] = useState({
        src: '',
        alt: '',
    });

    useEffect(() => {
        if (!searchImgs) { 
            return;          
        }
        setPage(1);
        fetchImg ();
    }, [searchImgs])
    
    useEffect(() => {
        if (!searchImgs) {    
            return;           
        }
        fetchImg();
    }, [page])
    
    const fetchImg = async () => {
        setLoading(true);

        try {
            const result = await FetchApi(searchImgs, page, perPage);
            const data = result.hits;
            const totalPage = Math.ceil(result.totalHits / perPage);

            if (result.totalHits === 0) {
                return toast.warn("Nothing found! Try again, please.");
            }
            else if (page === 1) {
                setShowLoadMore(true);
                setImages([...data]);
            }
            else if (page >= totalPage) {
                setImages([...images, ...data]);
                setShowLoadMore(false);
            }
            else {
                setImages([...images, ...data]);
                setShowLoadMore(true);
            }
        }
        catch (error) {
            setError({ error });
        }
        finally {
            setLoading(false);
        }
    }

    const loadMore = () => {
        setPage(page => page + 1);
    }

    const openModal = (contentModal) => {
        setShowModal(true);
        setContentModal(contentModal);
    }

    const closeModal = () => {
        setShowModal(false);
        setContentModal({
            urlLarge: '',
            title: '',
        });  
    }

    return (
        <>
            {loading && <Loader />}

            {error && <Notification />}
            {images && <ImageGalleryList images={images} onClick={openModal} />}
            {showLoadMore && <Button onClick={loadMore} />}
            {showModal && <Modal onClose={closeModal} content={contentModal} />}
        </>
    )
}
