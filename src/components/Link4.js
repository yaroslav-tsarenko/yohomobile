import "./Link4.css";

const Link4 = ({ className = "", canIUseHotspottetheringWi }) => {
  return (
    <div className={`link14 ${className}`}>
      <b className="can-i-use">{canIUseHotspottetheringWi}</b>
      <img className="button-toggle2" alt="" src="/button--toggle-1@2x.png" />
      <div className="border3" />
    </div>
  );
};

Link4.propTypes = {
  className: PropTypes.string,
  canIUseHotspottetheringWi: PropTypes.string,
};

export default Link4;
