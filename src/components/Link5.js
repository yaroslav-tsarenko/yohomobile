import "./Link5.css";

const Link5 = ({ className = "", whenWillIReceiveMyESIM }) => {
  return (
    <div className={`link13 ${className}`}>
      <b className="when-will-i">{whenWillIReceiveMyESIM}</b>
      <img className="button-toggle1" alt="" src="/button--toggle-1@2x.png" />
      <div className="border2" />
    </div>
  );
};

Link5.propTypes = {
  className: PropTypes.string,
  whenWillIReceiveMyESIM: PropTypes.string,
};

export default Link5;
