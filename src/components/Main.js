import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import Item9 from "./Item9";
import Item8 from "./Item8";
import Item7 from "./Item7";
import Item6 from "./Item6";
import Item5 from "./Item5";
import Item4 from "./Item4";
import Item3 from "./Item3";
import Item2 from "./Item2";
import Item1 from "./Item1";
import PropTypes from "prop-types";
import "./Main.css";

const Main = ({ className = "" }) => {
  return (
    <div className={`main ${className}`}>
      <div className="link-home-group">
        <div className="link-home-container">
          <span>Home</span>
          <b className="all-esims"> » All eSIMs</b>
        </div>
        <div className="frame-wrapper16">
          <div className="frame-parent67">
            <div className="frame-wrapper17">
              <div className="frame-parent68">
                <div className="frame-wrapper18">
                  <div className="stay-connected-anytime-and-parent">
                    <div className="stay-connected-anytime">
                      Stay Connected Anytime and
                    </div>
                    <div className="anywhere-wrapper">
                      <div className="anywhere">Anywhere</div>
                    </div>
                  </div>
                </div>
                <TextField
                  className="combobox"
                  placeholder="Where do you want to travel next?"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#ddd" },
                    "& .MuiInputBase-root": {
                      height: "64px",
                      backgroundColor: "#fff",
                      borderRadius: "16px",
                    },
                    "& .MuiInputBase-input": { color: "#222" },
                  }}
                />
              </div>
            </div>
            <div className="form-options-shop-order">
              <img
                className="image-fill-icon"
                loading="lazy"
                alt=""
                src="/image-fill.svg"
              />
              <div className="container20">
                <div className="sort-by-popularity">Sort by popularity</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item-group">
          <Item9
            link="/link1@2x.png"
            southEastAsia="South East Asia"
            eSIM="eSIM"
            prop="$1.90"
            prop1="$51.43"
          />
          <Item8
            link="/link-1@2x.png"
            linkHeading2IndonesiaESIM="Indonesia eSIM"
            prop="$18.00"
            prop1="$59.00"
          />
          <div className="item49">
            <div className="container-wrapper8">
              <div className="container21">
                <img
                  className="link-icon9"
                  loading="lazy"
                  alt=""
                  src="/link-2@2x.png"
                />
              </div>
            </div>
            <div className="background-group">
              <div className="background18" />
              <div className="frame-wrapper19">
                <div className="link-heading-2-japan-esim-parent">
                  <b className="link-heading4">Japan eSIM</b>
                  <div className="frame-parent69">
                    <div className="frame-parent70">
                      <div className="wrapper8">
                        <div className="div41">$5.50</div>
                      </div>
                      <b className="b10">{` – `}</b>
                    </div>
                    <div className="div42">$59.99</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Item7
            link="/link-3@2x.png"
            unitedStates="United States"
            uSAREAL="(USA) REAL"
            uNLIMITEDESIM="UNLIMITED eSIM"
            prop="$9.50"
            prop1="$43.00"
          />
        </div>
      </div>
      <div className="item-container">
        <Item6
          link="/link-4@2x.png"
          linkHeading2EuropeESIM="Europe eSIM"
          prop="$1.00"
          prop1="$49.60"
        />
        <div className="item50">
          <div className="container-wrapper9">
            <div className="container22">
              <div className="link16">
                <img
                  className="card-173-300x267png-icon"
                  loading="lazy"
                  alt=""
                  src="/card173300x267png@2x.png"
                />
                <b className="k1">k</b>
              </div>
            </div>
          </div>
          <div className="link-heading-2-thailand-es-parent">
            <b className="link-heading5">Thailand eSIM</b>
            <div className="div43">$11.00</div>
          </div>
        </div>
        <Item8
          link="/link-5@2x.png"
          linkHeading2IndonesiaESIM="Malaysia eSIM"
          prop="$3.80"
          prop1="$30.01"
          propPadding="25px 20px 34px"
          propMinWidth="151px"
          propMinWidth1="111px"
          propDisplay="inline-block"
          propMinWidth2="42.1px"
        />
        <Item5
          card36300x267png="/card36300x267png@2x.png"
          linkHeading2ChinaESIM="China eSIM"
          prop="$4.60"
          prop1="$63.00"
        />
      </div>
      <div className="item-parent1">
        <Item8
          link="/link-6@2x.png"
          linkHeading2IndonesiaESIM="Turkey eSIM"
          prop="$3.60"
          prop1="$63.00"
          propPadding="25px 20px 35px"
          propMinWidth="158px"
          propMinWidth1="96px"
          propDisplay="inline-block"
          propMinWidth2="42.2px"
        />
        <Item8
          link="/link-7@2x.png"
          linkHeading2IndonesiaESIM="Portugal eSIM"
          prop="$3.00"
          prop1="$63.00"
          propPadding="25px 20px 34px"
          propMinWidth="158px"
          propMinWidth1="109px"
          propDisplay="inline-block"
          propMinWidth2="42.2px"
        />
        <Item6
          link="/link-8@2x.png"
          linkHeading2EuropeESIM="Asia eSIM"
          prop="$1.90"
          prop1="$102.90"
          propMinWidth="158px"
          propFlex="1"
          propWidth="unset"
          propPadding="25px 20px 34px"
          propMinWidth1="77px"
          propMinWidth2="62px"
        />
        <Item6
          link="/link-9@2x.png"
          linkHeading2EuropeESIM="Israel eSIM"
          prop="$4.10"
          prop1="$63.00"
          propMinWidth="158px"
          propFlex="1"
          propWidth="unset"
          propPadding="25px 20px 34px"
          propMinWidth1="85px"
          propMinWidth2="54.1px"
        />
      </div>
      <div className="item-parent2">
        <Item7
          link="/link-10@2x.png"
          unitedStates="China + Macao+"
          uSAREAL="Hong Kong ( HK"
          uNLIMITEDESIM=") eSIM"
          prop="$2.00"
          prop1="$31.77"
          propMinWidth="168px"
          propMinWidth1="42px"
          propMinWidth2="50px"
        />
        <Item9
          link="/link-11@2x.png"
          southEastAsia="United States"
          eSIM="(USA) eSIM"
          prop="$8.17"
          prop1="$98.10"
        />
        <div className="item51">
          <div className="container-wrapper10">
            <div className="container23">
              <img className="link-icon10" alt="" src="/link-12@2x.png" />
            </div>
          </div>
          <div className="united-states-canada-esim-parent">
            <div className="united-states-container">
              <span>
                <p className="united-states1">United States +</p>
                <p className="canada-esim">Canada eSIM</p>
              </span>
            </div>
            <div className="parent7">
              <div className="div44">$7.60</div>
              <b className="b11">{` – `}</b>
              <div className="wrapper9">
                <div className="div45">$105.80</div>
              </div>
            </div>
          </div>
        </div>
        <Item5
          card36300x267png="/card75300x267png@2x.png"
          linkHeading2ChinaESIM="Hong Kong eSIM"
          prop="$3.00"
          prop1="$22.08"
          propPadding="44px 20px 53px"
          propMinWidth="168px"
          propFlex="1"
          propWidth="unset"
          propMinWidth1="128.4px"
        />
      </div>
      <div className="item-parent3">
        <Item5
          card36300x267png="/card170300x267png@2x.png"
          linkHeading2ChinaESIM="Taiwan eSIM"
          prop="$3.60"
          prop1="$68.80"
          propPadding="25px 20px 34px"
          propMinWidth="unset"
          propFlex="unset"
          propWidth="285px"
          propMinWidth1="98px"
        />
        <Item4
          link="/link-13@2x.png"
          linkHeading2AustraliaESIM="Australia eSIM"
          prop="$4.90"
          prop1="$52.60"
        />
        <Item4
          link="/link-14@2x.png"
          linkHeading2AustraliaESIM="Cyprus eSIM"
          prop="$3.30"
          prop1="$63.00"
          propPadding="25px 20px 34px"
          propMinWidth="99px"
        />
        <Item6
          link="/link-15@2x.png"
          linkHeading2EuropeESIM="Canada eSIM"
          prop="$7.60"
          prop1="$105.80"
          propMinWidth="unset"
          propFlex="unset"
          propWidth="285px"
          propPadding="25px 20px 34px"
          propMinWidth1="103px"
          propMinWidth2="61px"
        />
        <div className="item52">
          <div className="container-wrapper11">
            <div className="container24">
              <img
                className="link-icon11"
                loading="lazy"
                alt=""
                src="/link-16@2x.png"
              />
            </div>
          </div>
          <div className="united-kingdom-uk-esim-parent">
            <div className="united-kingdom-uk-container">
              <p className="united-kingdom">United Kingdom</p>
              <p className="uk-esim">(UK) eSIM</p>
            </div>
            <div className="frame-parent71">
              <div className="parent8">
                <div className="div46">$4.40</div>
                <b className="b12">{` – `}</b>
              </div>
              <div className="div47">$63.00</div>
            </div>
          </div>
        </div>
        <Item4
          link="/link-17@2x.png"
          linkHeading2AustraliaESIM="Singapore eSIM"
          prop="$2.30"
          prop1="$43.00"
          propPadding="34px 20px 43px"
          propMinWidth="122px"
        />
        <div className="item53">
          <div className="container-wrapper12">
            <div className="container25">
              <img className="link-icon12" alt="" src="/link-18@2x.png" />
            </div>
          </div>
          <div className="frame-parent72">
            <div className="frame-wrapper20">
              <div className="singapore-malaysia-esim-parent">
                <div className="singapore-malaysia-container">
                  <p className="singapore">Singapore +</p>
                  <p className="malaysia-esim">Malaysia eSIM</p>
                </div>
                <div className="parent9">
                  <div className="div48">$1.90</div>
                  <b className="b13">{` – `}</b>
                  <div className="wrapper10">
                    <div className="div49">$36.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="background19" />
          </div>
        </div>
        <div className="item54">
          <div className="container-wrapper13">
            <div className="container26">
              <img className="link-icon13" alt="" src="/link-19@2x.png" />
            </div>
          </div>
          <div className="link-heading-2-india-esim-parent">
            <b className="link-heading6">India eSIM</b>
            <div className="parent10">
              <div className="div50">$7.60</div>
              <b className="b14">{` – `}</b>
              <div className="wrapper11">
                <div className="div51">$105.80</div>
              </div>
            </div>
          </div>
        </div>
        <Item4
          link="/link-20@2x.png"
          linkHeading2AustraliaESIM="Nepal eSIM"
          prop="$9.20"
          prop1="$60.00"
          propPadding="34px 20px 43px"
          propMinWidth="88px"
        />
        <Item3
          link="/link-21@2x.png"
          southKorea="South Korea"
          eSIM="eSIM"
          prop="$2.20"
          prop1="$59.00"
        />
        <Item3
          link="/link-22@2x.png"
          southKorea="Australia + New"
          eSIM="Zealand eSIM"
          prop="$5.00"
          prop1="$65.00"
          propWidth="285px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <Item4
          link="/link-23@2x.png"
          linkHeading2AustraliaESIM="Spain eSIM"
          prop="$3.29"
          prop1="$63.00"
          propPadding="34px 20px 43px"
          propMinWidth="87px"
        />
        <Item4
          link="/link-24@2x.png"
          linkHeading2AustraliaESIM="Italy eSIM"
          prop="$4.50"
          prop1="$63.00"
          propPadding="25px 20px 34px"
          propMinWidth="76px"
        />
        <div className="item55">
          <div className="container-wrapper14">
            <div className="container27">
              <img className="link-icon14" alt="" src="/link-25@2x.png" />
            </div>
          </div>
          <div className="link-heading-2-vietnam-esi-parent">
            <b className="link-heading7">Vietnam eSIM</b>
            <div className="parent11">
              <div className="div52">$1.90</div>
              <b className="b15">{` – `}</b>
              <div className="wrapper12">
                <div className="div53">$4.99</div>
              </div>
            </div>
          </div>
        </div>
        <Item4
          link="/link-26@2x.png"
          linkHeading2AustraliaESIM="Germany eSIM"
          prop="$4.30"
          prop1="$63.00"
          propPadding="25px 20px 34px"
          propMinWidth="113px"
        />
        <Item4
          link="/link-27@2x.png"
          linkHeading2AustraliaESIM="France eSIM"
          prop="$4.50"
          prop1="$63.00"
          propPadding="25px 20px 34px"
          propMinWidth="96px"
        />
        <Item4
          link="/link-28@2x.png"
          linkHeading2AustraliaESIM="Georgia eSIM"
          prop="$3.80"
          prop1="$31.90"
          propPadding="34px 20px 43px"
          propMinWidth="104px"
        />
        <div className="item56">
          <div className="container-wrapper15">
            <div className="container28">
              <img
                className="link-icon15"
                loading="lazy"
                alt=""
                src="/link-29@2x.png"
              />
            </div>
          </div>
          <div className="frame-parent73">
            <div className="frame-parent74">
              <div className="background-wrapper">
                <div className="background20" />
              </div>
              <b className="link-heading8">Latin America</b>
            </div>
            <div className="frame-parent75">
              <div className="frame-parent76">
                <div className="wrapper13">
                  <div className="div54">$9.00</div>
                </div>
                <b className="b16">{` – `}</b>
              </div>
              <div className="wrapper14">
                <div className="div55">$200.00</div>
              </div>
            </div>
          </div>
        </div>
        <Item4
          link="/link-30@2x.png"
          linkHeading2AustraliaESIM="Albania eSIM"
          prop="$4.70"
          prop1="$49.60"
          propPadding="34px 20px 43px"
          propMinWidth="101px"
        />
        <Item2
          link="/link-31@2x.png"
          global96ESIM="Global 96 eSIM"
          yohoSpecial="(Yoho Special)"
          prop="$16.61"
          prop1="$19.71"
        />
        <div className="item57">
          <div className="container-wrapper16">
            <div className="container29">
              <img
                className="link-icon16"
                loading="lazy"
                alt=""
                src="/link-32@2x.png"
              />
            </div>
          </div>
          <div className="link-heading-2-ghana-esim-parent">
            <b className="link-heading9">Ghana eSIM</b>
            <div className="frame-parent77">
              <div className="frame-parent78">
                <div className="wrapper15">
                  <div className="div56">$6.40</div>
                </div>
                <b className="b17">{` – `}</b>
              </div>
              <div className="wrapper16">
                <div className="div57">$125.70</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item58">
          <div className="container-wrapper17">
            <div className="container30">
              <img
                className="link-icon17"
                loading="lazy"
                alt=""
                src="/link-33@2x.png"
              />
            </div>
          </div>
          <div className="guadeloupe-esim-parent">
            <b className="guadeloupe-esim">
              <p className="guadeloupe">Guadeloupe</p>
              <p className="esim4">eSIM</p>
            </b>
            <div className="frame-parent79">
              <div className="frame-parent80">
                <div className="wrapper17">
                  <div className="div58">$10.60</div>
                </div>
                <b className="b18">{` – `}</b>
              </div>
              <div className="div59">$114.70</div>
            </div>
          </div>
        </div>
        <Item4
          link="/link-34@2x.png"
          linkHeading2AustraliaESIM="Greece eSIM"
          prop="$4.50"
          prop1="$27.38"
          propPadding="34px 20px 43px"
          propMinWidth="99px"
        />
        <Item3
          link="/link-35@2x.png"
          southKorea="New Zealand"
          eSIM="eSIM"
          prop="$5.00"
          prop1="$55.50"
          propWidth="285px"
          propFlex="unset"
          propMinWidth="unset"
        />
      </div>
      <div className="item-parent4">
        <Item6
          link="/link-36@2x.png"
          linkHeading2EuropeESIM="Austria eSIM"
          prop="$4.10"
          prop1="$50.02"
          propMinWidth="175px"
          propFlex="1"
          propWidth="unset"
          propPadding="44px 20px 53px"
          propMinWidth1="99px"
          propMinWidth2="54px"
        />
        <Item8
          link="/link-37@2x.png"
          linkHeading2IndonesiaESIM="Switzerland eSIM"
          prop="$5.75"
          prop1="$63.00"
          propPadding="44px 20px 53px"
          propMinWidth="175px"
          propMinWidth1="unset"
          propDisplay="unset"
          propMinWidth2="40.4px"
        />
        <Item8
          link="/link-38@2x.png"
          linkHeading2IndonesiaESIM="Rwanda eSIM"
          prop="$15.50"
          prop1="$53.00"
          propPadding="44px 20px 53px"
          propMinWidth="175px"
          propMinWidth1="105px"
          propDisplay="inline-block"
          propMinWidth2="49px"
        />
        <Item7
          link="/link-39@2x.png"
          unitedStates="United Arab"
          uSAREAL="Emirates (UAE)"
          uNLIMITEDESIM="eSIM"
          prop="$12.30"
          prop1="$96.50"
          propMinWidth="175px"
          propMinWidth1="49.6px"
          propMinWidth2="54px"
        />
      </div>
      <div className="item-parent5">
        <div className="item59">
          <div className="container-wrapper18">
            <div className="container31">
              <img
                className="link-icon18"
                loading="lazy"
                alt=""
                src="/link-40@2x.png"
              />
            </div>
          </div>
          <div className="link-heading-2-poland-esim-parent">
            <b className="link-heading10">Poland eSIM</b>
            <div className="parent12">
              <div className="div60">$4.10</div>
              <b className="b19">{` – `}</b>
              <div className="wrapper18">
                <div className="div61">$37.80</div>
              </div>
            </div>
          </div>
        </div>
        <Item1
          link="/link-41@2x.png"
          netherlands="Netherlands"
          prop="$4.10"
          prop1="$37.80"
        />
        <div className="item60">
          <div className="container-wrapper19">
            <div className="container32">
              <img className="link-icon19" alt="" src="/link-42@2x.png" />
            </div>
          </div>
          <div className="link-heading-2-belgium-esi-parent">
            <b className="link-heading11">Belgium eSIM</b>
            <div className="parent13">
              <div className="div62">$4.10</div>
              <b className="b20">{` – `}</b>
              <div className="wrapper19">
                <div className="div63">$37.80</div>
              </div>
            </div>
          </div>
        </div>
        <Item8
          link="/link-43@2x.png"
          linkHeading2IndonesiaESIM="Nordic eSIM"
          prop="$3.29"
          prop1="$20.06"
          propPadding="34px 20px 43px"
          propMinWidth="150px"
          propMinWidth1="94px"
          propDisplay="inline-block"
          propMinWidth2="42.2px"
        />
      </div>
      <div className="item-parent6">
        <Item8
          link="/link-44@2x.png"
          linkHeading2IndonesiaESIM="Serbia eSIM"
          prop="$5.90"
          prop1="$73.30"
          propPadding="34px 20px 43px"
          propMinWidth="159px"
          propMinWidth1="93px"
          propDisplay="inline-block"
          propMinWidth2="41.9px"
        />
        <div className="item61">
          <div className="container-wrapper20">
            <div className="container33">
              <img
                className="link-icon20"
                loading="lazy"
                alt=""
                src="/link-45@2x.png"
              />
            </div>
          </div>
          <div className="mozambique-esim-parent">
            <b className="mozambique-esim">
              <span className="mozambique-esim-txt-container">
                <p className="mozambique">Mozambique</p>
                <p className="esim5">eSIM</p>
              </span>
            </b>
            <div className="frame-parent81">
              <div className="frame-parent82">
                <div className="wrapper20">
                  <div className="div64">$14.00</div>
                </div>
                <b className="b21">{` – `}</b>
              </div>
              <div className="div65">$78.20</div>
            </div>
          </div>
        </div>
        <Item8
          link="/link-46@2x.png"
          linkHeading2IndonesiaESIM="Palestine eSIM"
          prop="$16.50"
          prop1="$56.50"
          propPadding="34px 20px 43px"
          propMinWidth="159px"
          propMinWidth1="114px"
          propDisplay="inline-block"
          propMinWidth2="49.1px"
        />
        <div className="item62">
          <div className="container-wrapper21">
            <div className="container34">
              <img className="link-icon21" alt="" src="/link-47@2x.png" />
            </div>
          </div>
          <div className="link-heading-2-russia-esim-parent">
            <b className="link-heading12">Russia eSIM</b>
            <div className="parent14">
              <div className="div66">$7.47</div>
              <b className="b22">{` – `}</b>
              <div className="wrapper21">
                <div className="div67">$95.44</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item-parent7">
        <Item8
          link="/link-48@2x.png"
          linkHeading2IndonesiaESIM="Sri Lanka eSIM"
          prop="$5.00"
          prop1="$55.50"
          propPadding="34px 20px 43px"
          propMinWidth="158px"
          propMinWidth1="114.2px"
          propDisplay="inline-block"
          propMinWidth2="41.6px"
        />
        <Item8
          link="/link-49@2x.png"
          linkHeading2IndonesiaESIM="Ukraine eSIM"
          prop="$3.20"
          prop1="$20.00"
          propPadding="34px 20px 43px"
          propMinWidth="158px"
          propMinWidth1="103px"
          propDisplay="inline-block"
          propMinWidth2="42.3px"
        />
        <Item8
          link="/link-50@2x.png"
          linkHeading2IndonesiaESIM="Fiji eSIM"
          prop="$14.00"
          prop1="$78.20"
          propPadding="34px 20px 43px"
          propMinWidth="158px"
          propMinWidth1="65.3px"
          propDisplay="inline-block"
          propMinWidth2="49.5px"
        />
        <Item1
          link="/link-51@2x.png"
          netherlands="Montenegro"
          prop="$7.47"
          prop1="$95.44"
          propMinWidth="158px"
        />
      </div>
      <div className="item-parent8">
        <div className="item63">
          <div className="container-wrapper22">
            <div className="container35">
              <img
                className="link-icon22"
                loading="lazy"
                alt=""
                src="/link-52@2x.png"
              />
            </div>
          </div>
          <div className="link-heading-2-uzbekistan-parent">
            <b className="link-heading13">Uzbekistan eSIM</b>
            <div className="parent15">
              <div className="div68">$4.10</div>
              <b className="b23">{` – `}</b>
              <div className="wrapper22">
                <div className="div69">$37.80</div>
              </div>
            </div>
          </div>
        </div>
        <Item3
          link="/link-53@2x.png"
          southKorea="Faroe Islands"
          eSIM="eSIM"
          prop="$5.30"
          prop1="$61.50"
          propWidth="unset"
          propFlex="1"
          propMinWidth="171px"
        />
        <Item8
          link="/link-54@2x.png"
          linkHeading2IndonesiaESIM="Egypt eSIM"
          prop="$9.60"
          prop1="$30.30"
          propPadding="34px 20px 43px"
          propMinWidth="171px"
          propMinWidth1="88px"
          propDisplay="inline-block"
          propMinWidth2="41.9px"
        />
        <Item8
          link="/link-55@2x.png"
          linkHeading2IndonesiaESIM="Jersey eSIM"
          prop="$6.33"
          prop1="$73.03"
          propPadding="34px 20px 43px"
          propMinWidth="171px"
          propMinWidth1="95px"
          propDisplay="inline-block"
          propMinWidth2="42px"
        />
      </div>
      <div className="item-parent9">
        <Item8
          link="/link-56@2x.png"
          linkHeading2IndonesiaESIM="Pakistan eSIM"
          prop="$4.70"
          prop1="$49.60"
          propPadding="34px 20px 43px"
          propMinWidth="167px"
          propMinWidth1="110px"
          propDisplay="inline-block"
          propMinWidth2="41.1px"
        />
        <Item8
          link="/link-57@2x.png"
          linkHeading2IndonesiaESIM="Tunisia eSIM"
          prop="$5.30"
          prop1="$61.50"
          propPadding="34px 20px 43px"
          propMinWidth="167px"
          propMinWidth1="98px"
          propDisplay="inline-block"
          propMinWidth2="41.8px"
        />
        <div className="item64">
          <div className="container-wrapper23">
            <div className="container36">
              <img
                className="link-icon23"
                loading="lazy"
                alt=""
                src="/link-58@2x.png"
              />
            </div>
          </div>
          <div className="link-heading-2-martinique-parent">
            <b className="link-heading14">Martinique eSIM</b>
            <div className="frame-parent83">
              <div className="parent16">
                <div className="div70">$4.40</div>
                <b className="b24">{` – `}</b>
              </div>
              <div className="wrapper23">
                <div className="div71">$114.70</div>
              </div>
            </div>
          </div>
        </div>
        <Item2
          link="/link-59@2x.png"
          global96ESIM="Saudi Arabia"
          yohoSpecial="eSIM"
          prop="$7.60"
          prop1="$36.80"
          propWidth="unset"
          propFlex="1"
          propMinWidth="167px"
          propWidth1="unset"
          propWidth2="unset"
          propDisplay="inline-block"
          propMinWidth1="40px"
          propFlex1="unset"
          propMinWidth2="54px"
        />
      </div>
    </div>
  );
};

Main.propTypes = {
  className: PropTypes.string,
};

export default Main;
