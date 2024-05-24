import "./Link6.css";

const Link6 = ({ className = "", whenDoesMyYohoMobileESIMS }) => {
  return (
    <div className={`link12 ${className}`}>
      <b className="when-does-my">{whenDoesMyYohoMobileESIMS}</b>
      <img className="button-toggle" alt="" src="/button--toggle-1@2x.png" />
      <div className="border1" />
    </div>
  );
};

Link6.propTypes = {
  className: PropTypes.string,
  whenDoesMyYohoMobileESIMS: PropTypes.string,
};

export default Link6;
