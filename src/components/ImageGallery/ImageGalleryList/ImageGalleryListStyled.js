import styled from '@emotion/styled';

const GalleryList = styled.ul` 
display: grid;
max-width: calc(100vw);
grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
grid-gap: 16px;
margin-top: 16px;
margin-bottom: 16px;
padding: 0;
list-style: none;
margin-left: auto;
margin-right: auto;

`;

export {
    GalleryList,
}
