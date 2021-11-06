const ImageGalleryItem = ({ id, src, alt, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img id={id} src={src} alt={alt} onClick={onClick} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
