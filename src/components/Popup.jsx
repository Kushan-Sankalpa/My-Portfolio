
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Popup = ({ show, onClose, item }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="work__popup">
            <div className="work__popup-content">
                <button className="popup__close" onClick={onClose}>
                    &times;
                </button>
                <h3 className="popup__title">{item.title}</h3>
                <img src={item.image} alt={item.title} className="popup__img" />
                <p className="popup__description">{item.description}</p>
                <p className="popup__tools">
                    <strong>Tools:</strong> {item.tools.join(', ')}
                </p>
            </div>
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
        image: PropTypes.string.isRequired,
        sourceUrl: PropTypes.string,
        status: PropTypes.string,
        description: PropTypes.string,
        tools: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export default Popup;
