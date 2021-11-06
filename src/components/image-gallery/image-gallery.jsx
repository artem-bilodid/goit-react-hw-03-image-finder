import ImageGalleryItem from '../image-gallery-item';
import { Component } from 'react';

class ImageGallery extends Component {
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { scrollY: window.scrollY };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevImages = prevProps.images;
    const { scrollY } = snapshot;
    const { images } = this.props;

    if (prevImages.length === 0 || prevImages === images) return;

    if (prevImages.length >= images.length) {
      window.scrollTo({
        top: 0,
      });
      return;
    }

    window.scrollTo({
      top: scrollY + window.innerHeight - 150,
      behavior: 'smooth',
    });
  }

  render() {
    const galleryItems = this.props.images.map(({ id, previewURL, tags }) => (
      <ImageGalleryItem key={id} src={previewURL} alt={tags} />
    ));
    return <ul className="ImageGallery">{galleryItems}</ul>;
  }
}

export default ImageGallery;
