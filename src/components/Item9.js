import "./Item9.css";

const Item9 = ({ className = "", link, southEastAsia, eSIM, prop, prop1 }) => {
  return (
    <div className={`item40 ${className}`}>
      <div className="container-wrapper">
        <div className="container11">
          <img className="link-icon1" loading="lazy" alt="" src={link} />
        </div>
      </div>
      <div className="south-east-asia-esim-parent">
        <div className="south-east-asia-container">
          <p className="south-east-asia">{southEastAsia}</p>
          <p className="esim1">{eSIM}</p>
        </div>
        <div className="parent3">
          <div className="div23">{prop}</div>
          <b className="b1">{` – `}</b>
          <div className="wrapper">
            <div className="div24">{prop1}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Item9.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string,
  southEastAsia: PropTypes.string,
  eSIM: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
};

export default Item9;
