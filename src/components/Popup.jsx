import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Popup = ({ show, onClose, item }) => {
    // Use item.images if provided; otherwise, fallback to [item.image]
    const images =
        item.images && item.images.length > 0 ? item.images : [item.image];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Reset gallery and full screen mode whenever the popup is (re)opened
    useEffect(() => {
        if (show) {
            setCurrentImageIndex(0);
            setIsFullScreen(false);
        }
    }, [show]);

    if (!show) return null;

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Clicking the image enters full-screen mode
    const handleImageClick = () => {
        setIsFullScreen(true);
    };

    // Exit full-screen mode
    const handleExitFullScreen = () => {
        setIsFullScreen(false);
    };

    // Standard popup content with gallery
    const popupContent = (
        <div className="work__popup-content">
            <button className="popup__close" onClick={onClose}>
                &times;
            </button>
            <h3 className="popup__title">{item.title}</h3>
            <div className="popup__gallery">
                <img
                    src={images[currentImageIndex]}
                    alt={`${item.title} ${currentImageIndex + 1}`}
                    className="popup__img"
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                />
                {images.length > 1 && (
                    <div className="popup__gallery-nav">
                        <button className="gallery-nav-btn prev" onClick={handlePrev}>
                            Previous
                        </button>
                        <button className="gallery-nav-btn next" onClick={handleNext}>
                            Next
                        </button>
                    </div>
                )}
            </div>
            <p className="popup__description">{item.description}</p>
            <p className="popup__tools">
                <strong>Tools:</strong> {item.tools.join(', ')}
            </p>
        </div>
    );

    // Full-screen overlay view of the image
    const fullScreenContent = (
        <div className="fullscreen-overlay">
            <button className="fullscreen-back-btn" onClick={handleExitFullScreen}>
                Back
            </button>
            <img
                src={images[currentImageIndex]}
                alt={`${item.title} full screen`}
                className="fullscreen-img"
            />
        </div>
    );

    return ReactDOM.createPortal(
        <div className="work__popup">
            {isFullScreen ? fullScreenContent : popupContent}
        </div>,
        document.body
    );
};

Popup.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string),
        image: PropTypes.string,
        sourceUrl: PropTypes.string,
        status: PropTypes.string,
        description: PropTypes.string,
        tools: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default Popup;
