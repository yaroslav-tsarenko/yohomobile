import { useMemo } from "react";
import "./FrameComponent7.css";

const FrameComponent7 = ({
  className = "",
  makeADifferenceThisHolida,
  volunteerOpportunities,
  makeADifferenceThisHolida1,
  ofGivingSpreadHolidayJoyB,
  mostEveryLittleActMatters,
  prop,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const linkRead4Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const paragraphHorizontalBorder4Style = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={`frame-parent49 ${className}`}>
      <div className="make-a-difference-this-holiday-wrapper">
        <h1 className="make-a-difference-container">
          <p className="make-a-difference">{makeADifferenceThisHolida}</p>
          <p className="volunteer-opportunities">{volunteerOpportunities}</p>
        </h1>
      </div>
      <div className="make-a-difference-this-holiday-container">
        <p className="make-a-difference-container1">
          <span>
            <span className="make-a-difference1">
              {makeADifferenceThisHolida1}
            </span>
            <span className="of-giving-spread">
              {ofGivingSpreadHolidayJoyB}
            </span>
            <span className="most-every-little">
              {mostEveryLittleActMatters}
            </span>
          </span>
        </p>
      </div>
      <div className="frame-parent50">
        <div className="link-read-more-about-make-a-wrapper">
          <b className="link-read6" style={linkRead4Style}>
            Read More »
          </b>
        </div>
        <div
          className="paragraphhorizontalborder6"
          style={paragraphHorizontalBorder4Style}
        >
          <div className="claudia6">{`Claudia `}</div>
          <div className="div17">•</div>
          <div className="div18">{prop}</div>
          <div className="div19">•</div>
          <div className="no-comments6"> No Comments</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
  makeADifferenceThisHolida: PropTypes.string,
  volunteerOpportunities: PropTypes.string,
  makeADifferenceThisHolida1: PropTypes.string,
  ofGivingSpreadHolidayJoyB: PropTypes.string,
  mostEveryLittleActMatters: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default FrameComponent7;
