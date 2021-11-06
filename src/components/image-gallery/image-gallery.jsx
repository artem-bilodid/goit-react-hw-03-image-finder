import ImageGalleryItem from '../image-gallery-item';
import Modal from '../modal';
import { Component } from 'react';

class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    itemId: null,
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return { scrollY: window.scrollY };
  }

  adjustScroll = (scrollY, prevImages, images) => {
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
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const prevImages = prevProps.images;
    const { scrollY } = snapshot;
    const { images } = this.props;

    this.adjustScroll(scrollY, prevImages, images);
  }

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  handleItemClick = event => {
    const { id } = event.currentTarget;
    this.setState({ itemId: id });
    this.toggleModal();
  };

  render() {
    const { images } = this.props;
    const { isModalOpen, itemId } = this.state;

    const modalImage = images?.find(image => image.id === Number(itemId));
    const imageSrc = modalImage?.largeImageURL;
    const imageTags = modalImage?.tags;

    const galleryItems = images.map(({ id, previewURL, tags }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        src={previewURL}
        alt={tags}
        onClick={this.handleItemClick}
      />
    ));

    return (
      <>
        <ul className="ImageGallery">{galleryItems}</ul>
        {isModalOpen && <Modal onClose={this.toggleModal} src={imageSrc} alt={imageTags} />}
      </>
    );
  }
}

export default ImageGallery;
