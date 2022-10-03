// import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from 'components/ImageGalleryItem/ImageGalleryItemStyled';

export default function ImageGalleryItem({ modal, src, alt, onClick }) {

    return (
        <GalleryItem onClick={onClick}>
            <GalleryItemImage src={src} alt={alt} />           
        </GalleryItem>
    );
}

// FriendItem.propTypes = {
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool,
// }
