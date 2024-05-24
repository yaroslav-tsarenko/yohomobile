import "./FrameComponent14.css";

const FrameComponent14 = ({ className = "", strongWhenShouldIInstallA }) => {
  return (
    <div className={`image-inner1 ${className}`}>
      <div className="strong-when-should-i-install-parent">
        <div className="strong-when">{strongWhenShouldIInstallA}</div>
        <div className="border8" />
        <img className="image-icon25" alt="" src="/image-3@2x.png" />
      </div>
    </div>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
  strongWhenShouldIInstallA: PropTypes.string,
};

export default FrameComponent14;
