import { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';

const ProjectCard = ({ item }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    // Use the `image` property if available; otherwise, fallback to the first image in `images`
    const displayImage = item.image || (item.images && item.images.length > 0 ? item.images[0] : '');

    // Open the GitHub repository in a new tab
    const handleSourceClick = (e) => {
        e.preventDefault();
        if (item.sourceUrl && item.sourceUrl !== '#') {
            window.open(item.sourceUrl, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="work__card">
            {/* Status badge – appears on hover */}
            {item.status === 'completed' && (
                <div className="project-status completed">
                    <i className="uil uil-check-circle"></i> Completed
                </div>
            )}
            {item.status === 'development' && (
                <div className="project-status ongoing">
                    <i className="uil uil-clock"></i> Ongoing
                </div>
            )}

            <img src={displayImage} alt={item.title} className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <div className="work__button-container">
                {/* GitHub source icon */}
                <a
                    href="#"
                    className="work__button"
                    onClick={handleSourceClick}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    title="View Source on GitHub"
                >
                    <i className="bx bxl-github work__button-icon"></i>
                </a>
                {showTooltip && item.status === 'development' && (
                    <div className="work__tooltip">Under Development</div>
                )}

                {/* "View More" button triggers the popup modal */}
                <button
                    className="work__button pop-view-more-button"
                    onClick={() => setShowPopup(true)}
                >
                    View More <i className="bx bx-right-arrow-alt"></i>
                </button>
            </div>

            <Popup show={showPopup} onClose={() => setShowPopup(false)} item={item} />
        </div>
    );
};

ProjectCard.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
        sourceUrl: PropTypes.string,
        status: PropTypes.string,
        description: PropTypes.string,
        tools: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default ProjectCard;
