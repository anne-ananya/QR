import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import './Saved.css';

const Saved = ({ savedLinks, deleteLink }) => {
  const handleDelete = (index) => {
    deleteLink(index);
  };

  const handleDownload = async (link, index) => {
    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(link)}`
      );
      const blob = await response.blob();
      saveAs(blob, `qrcode_${index}.png`);
    } catch (error) {
      console.error('Error occurred while handling download:', error);
    }
  };
  

  const handleEnlargeQR = (index) => {
    setEnlargedIndex(index);
  };

  const handleCloseEnlarged = () => {
    setEnlargedIndex(null);
  };

  const [enlargedIndex, setEnlargedIndex] = useState(null);

  return (
    <div className="saved-page-container">
      <h2>Saved Links</h2>

      {savedLinks.map((link, index) => (
        <div key={index} className="saved-link-container">
          <div className="link-container">
            <a href={link} className="saved-link" target="_blank" rel="noopener noreferrer">
              {link}
            </a>
            <div className="qr-container">
            <img
              className={`qr-code ${enlargedIndex === index ? 'enlarged' : ''}`}
              id={`qrcode_${index}`}
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
                link
              )}`}
              alt="QR Code"
              onClick={() => handleEnlargeQR(index)}
            />
          </div>
            <div className="button-container">
              <button className="download-button" onClick={() => handleDownload(link, index)}>
                Download
              </button>
              <button className="delete-button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </div>
         
        </div>
      ))}

      {enlargedIndex !== null && (
        <div className="enlarged-overlay" onClick={handleCloseEnlarged}>
          <img
            className="enlarged-qr"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
              savedLinks[enlargedIndex]
            )}`}
            alt="Enlarged QR Code"
          />
        </div>
      )}
    </div>
  );
};

export default Saved;
