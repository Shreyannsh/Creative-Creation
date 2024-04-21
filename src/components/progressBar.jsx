import "../styles/ProgressBar.css";

const ProgressBar = ({ value }) => {
  const fillWidth = `${(value / 5) * 100}%`;

  return (
    <div className="progress-bar-section">
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: fillWidth }}></div>
      </div>
      <span>{value} / 5 Creatives</span>
    </div>
  );
};

export default ProgressBar;
