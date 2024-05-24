import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import "./HeaderHeader.css";

const HeaderHeader = ({ className = "" }) => {
  return (
    <header className={`header-header2 ${className}`}>
      <div className="overlay2" />
      <div className="horizontalborder4">
        <img
          className="link-logo-bpng2"
          loading="lazy"
          alt=""
          src="/link--logobpng@2x.png"
        />
        <div className="horizontalborder-inner">
          <div className="frame-parent88">
            <div className="item-link-home-frame">
              <a className="item-link6">Home</a>
            </div>
            <div className="frame-wrapper21">
              <FormControl
                className="parent17"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "87.20000000000073px",
                  height: "19px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 14.8,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="14px"
                      height="14px"
                      src="/image.png"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Buy eSIM</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="frame-wrapper22">
              <FormControl
                className="parent18"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "93.39999999999964px",
                  height: "19px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 13,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="14px"
                      height="14px"
                      src="/image-1.png"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>Get Started</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="frame-wrapper23">
              <FormControl
                className="parent19"
                variant="standard"
                sx={{
                  borderTopWidth: "0px",
                  borderRightWidth: "0px",
                  borderBottomWidth: "0px",
                  borderLeftWidth: "0px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "82.79999999999927px",
                  height: "19px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "19px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 13.9,
                    fontWeight: "Medium",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                  },
                }}
              >
                <InputLabel color="primary" />
                <Select
                  color="primary"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="14px"
                      height="14px"
                      src="/image-2.png"
                      style={{}}
                    />
                  )}
                >
                  <MenuItem>About Us</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
            </div>
            <div className="item-link-my-esimstopup-frame">
              <a className="item-link7">My eSIMs/Topup</a>
            </div>
            <img
              className="item-link-cartpng2"
              loading="lazy"
              alt=""
              src="/item--link--cartpng@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

HeaderHeader.propTypes = {
  className: PropTypes.string,
};

export default HeaderHeader;
