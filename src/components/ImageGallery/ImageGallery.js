import {useEffect, useState } from "react";
import Loader from 'components/Loader/Loader'
import Notification from 'components/Notification/Notification'
import Button from 'components/Button/Button'
import ImageGalleryList from 'components/ImageGallery/ImageGalleryList/ImageGalleryList'
import Modal from 'components/Modal/Modal'
import FetchApi from 'components/FetchApi/FetchApi'
import { toast } from 'react-toastify';

export default function ImageGallery({searchImgs}) {
    const perPage = 12;
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showLoadMore, setShowLoadMore] = useState(false);
    const [contentModal, setContentModal] = useState({
        src: '',
        alt: '',
    });

    useEffect(() => {
        setPage(1);
    }, [searchImgs]);
    
    useEffect(() => {
        const fetchImg = async (searchQuery) => {
            setLoading(true);

            try {
                const result = await FetchApi(searchQuery, page, perPage);
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
                    setImages(prevImages => [...prevImages, ...data]);
                    setShowLoadMore(false);
                }
                else {
                    setImages(prevImages => [...prevImages, ...data]);
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

        if (!searchImgs) {    
            return;
        }

        fetchImg(searchImgs);
    }, [page, searchImgs])

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
