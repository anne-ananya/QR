import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useNavigate } from 'react-router-dom';
import './ScanPage.css';

const ScanPage = ({ savedLinks, setSavedLinks }) => {
  const [link, setLink] = useState('');
  const [generatedQR, setGeneratedQR] = useState('');
  const navigate = useNavigate();

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
    // Save the generated QR code or its associated data
    setSavedLinks((prevLinks) => [...prevLinks, generatedQR]);

    // Redirect to the Saved component
    navigate('/saved');
  };

  return (
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
            <button onClick={handleSaveQR} style={{ marginLeft: '10px' }}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScanPage;
