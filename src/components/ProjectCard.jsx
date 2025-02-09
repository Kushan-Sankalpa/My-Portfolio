// src/components/ProjectCard.jsx
import  { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from './Popup';

const ProjectCard = ({ item }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSourceClick = (e) => {
        e.preventDefault();
        if (item.sourceUrl && item.sourceUrl !== '#') {
            window.open(item.sourceUrl, '_blank');
        }
    };

    return (
        <div className="work__card">
            <img src={item.image} alt={item.title} className="work__img" />
            <h3 className="work__title">{item.title}</h3>

            <div className="work__button-container">
                <a
                    href="#"
                    className="work__button"
                    onClick={handleSourceClick}
                    onMouseEnter={() => item.status === 'development' && setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <i className="bx bxl-github work__button-icon" /> Source
                </a>
                {showTooltip && item.status === 'development' && (
                    <div className="work__tooltip">Under Development</div>
                )}
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
        image: PropTypes.string.isRequired,
        sourceUrl: PropTypes.string,
        status: PropTypes.string,
        description: PropTypes.string,
        tools: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default ProjectCard;
