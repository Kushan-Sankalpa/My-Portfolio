import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import CVModal from './components/CVModal';

function App() {
    const [showCVModal, setShowCVModal] = useState(false);

    const handleDownloadCV = () => {
        setShowCVModal(true);
    };

    return (
        <>
            <Header onDownloadCV={handleDownloadCV} />
            <Home onDownloadCV={handleDownloadCV} />
            <CVModal show={showCVModal} onClose={() => setShowCVModal(false)} />
        </>
    );
}

export default App;
