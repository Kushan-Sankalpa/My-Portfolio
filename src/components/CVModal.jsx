import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CVModal = ({ show, onClose }) => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <div className="cv__overlay">
            <div className="cv__content">
                <div className="cv__header">
                    <h2>My CV</h2>
                    <div className="cv__header-buttons">
                        <a href="/cv/mycv.pdf" download className="cv__download-btn">
                            Download
                        </a>
                        <button className="cv__close-btn" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
                <iframe
                    src="/cv/mycv.pdf"
                    title="My CV"
                    className="cv__iframe"
                ></iframe>
            </div>
        </div>,
        document.body
    );
};

CVModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default CVModal;
