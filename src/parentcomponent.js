import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Saved from './saved';

const ParentComponent = () => {
  const [link, setLink] = useState('');
  const [generatedQR, setGeneratedQR] = useState('');
  const [savedLinks, setSavedLinks] = useState([]);

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleGenerateQR = () => {
    setGeneratedQR(link);
  };

  const handleDownloadQR = () => {
    const canvas = document.getElementById('qrcode');
    const dataURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = dataURL;
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
  };

  const handleSaveQR = () => {
    setSavedLinks((prevLinks) => [...prevLinks, generatedQR]);
    setGeneratedQR('');
    setLink('');
  };

  const deleteLink = (index) => {
    setSavedLinks((prevLinks) => prevLinks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="scan-page-container">
        <h2>Generate QR Code</h2>

        <div className="input-container">
          <input
            type="text"
            value={link}
            onChange={handleLinkChange}
            placeholder="Enter the link"
          />
          <button onClick={handleGenerateQR}>Generate</button>
        </div>

        {generatedQR && (
          <div className="qrcode-container">
            <QRCode id="qrcode" value={generatedQR} size={200} />
            <div>
              <button onClick={handleDownloadQR}>Download</button>
              <button onClick={handleSaveQR} style={{ marginLeft: '10px' }}>
                Save
              </button>
            </div>
          </div>
        )}
      </div>

      <Saved savedLinks={savedLinks} deleteLink={deleteLink} />
    </div>
  );
};

export default ParentComponent;
