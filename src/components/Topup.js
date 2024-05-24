import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import "./Topup.css";

const Topup = ({ className = "" }) => {
  return (
    <div className={`topup ${className}`}>
      <div className="topup-inner-parent">
        <div className="topup-inner">
          <div className="topup-options">
            <div className="topup-title">
              <b className="strong-top-up">{`Top-up option: `}</b>
              <div className="topup-availability">
                <div className="container9">
                  <div className="not-available">Not available</div>
                </div>
              </div>
            </div>
            <b className="row-cell">Data</b>
          </div>
        </div>
        <FormControl
          className="data-options"
          variant="standard"
          sx={{
            borderTopWidth: "0px",
            borderRightWidth: "0px",
            borderBottomWidth: "0px",
            borderLeftWidth: "0px",
            borderRadius: "0px 0px 0px 0px",
            width: "46.33238070494502%",
            height: "60px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "60px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "60px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "60px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "60px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "#333",
              fontSize: 12.6,
              fontWeight: "Regular",
              fontFamily: "Helvetica Neue",
              textAlign: "left",
              p: "0 !important",
              marginLeft: "11.100000000000364px",
            },
          }}
        >
          <InputLabel color="primary" />
          <Select
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent="null"
          >
            <MenuItem>Unlimited - 30 Days</MenuItem>
          </Select>
          <FormHelperText />
        </FormControl>
        <div className="product-details">
          <div className="details-content-wrapper">
            <div className="details-content">
              <b className="link-clear">Clear</b>
              <p className="no-restrictions-unlimited">
                No restrictions, unlimited data, unlimited local calls,
                unlimited local messaging.
              </p>
            </div>
          </div>
          <div className="purchase">
            <div className="purchase-inner">
              <div className="email">
                <div className="email-content">
                  <img
                    className="rocketsvg-icon"
                    loading="lazy"
                    alt=""
                    src="/rocketsvg.svg"
                  />
                  <div className="youll-receive-an">
                    You’ll receive an email with your eSIM in seconds(Except USA
                    Real Unlimited
                  </div>
                </div>
              </div>
              <div className="purchase-this-product-container">
                <span>{`Purchase this product now and earn `}</span>
                <b>43</b>
                <span> Points!</span>
              </div>
            </div>
            <div className="product-info">
              <div className="product-parent">
                <div className="product">Product)</div>
                <div className="availability-info">
                  <div className="stock-parent">
                    <div className="stock">
                      <b className="b">$43.00</b>
                      <div className="stock-info">
                        <div className="availability-wrapper">
                          <div className="availability">
                            <b>Availability:</b>
                            <span>{` `}</span>
                          </div>
                        </div>
                        <div className="in-stock">In stock</div>
                      </div>
                    </div>
                    <Button
                      className="button2"
                      disableElevation={true}
                      variant="contained"
                      sx={{
                        color: "#fff",
                        fontSize: "9",
                        background: "#ff9000",
                        borderRadius: "6px",
                        "&:hover": { background: "#ff9000" },
                        height: 40,
                      }}
                    >
                      Surf now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Topup.propTypes = {
  className: PropTypes.string,
};

export default Topup;
