// import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItemStyled';

export default function ImageGalleryItem({src, modalURL,  alt, onClickImg }) {

    return (
        <GalleryItem onClick={() => {onClickImg({modalURL, alt})}}>
            <GalleryItemImage src={src} alt={alt} />           
        </GalleryItem>
    );
}

// FriendItem.propTypes = {
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool,
// }
