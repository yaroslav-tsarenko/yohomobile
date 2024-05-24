import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Link1 from "./Link1";
import Link from "./Link";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLinkContainer3Click = useCallback(() => {
    navigate("/productpage");
  }, [navigate]);

  return (
    <section className={`landngpage-child ${className}`}>
      <div className="frame-parent17">
        <div className="many-esims-in-one-place-find-parent">
          <h1 className="many-esims-in-container">
            <span>{`Many eSIMs in one place, `}</span>
            <span className="find-yours">find yours</span>
            <span> here</span>
          </h1>
          <div className="our-esims-are">
            Our eSIMs are trusted by over 1,000,000 people worldwide
          </div>
        </div>
        <div className="frame-parent18">
          <div className="item-parent">
            <div className="item3">
              <div className="local-esim">Local eSIM</div>
            </div>
            <div className="item4">
              <div className="multicountry-esim">Multicountry eSIM</div>
            </div>
          </div>
          <div className="frame-parent19">
            <div className="frame-parent20">
              <div className="heading-3-asia-parent">
                <b className="heading-35">Asia</b>
                <div className="link-view-all-wrapper">
                  <a className="link-view">View all</a>
                </div>
              </div>
              <Link1 khpng="/khpng@2x.png" cambodia="Cambodia" prop="$6" />
              <Link jppng="/jppng@2x.png" japan="Japan" prop="$1.8" />
            </div>
            <div className="link-parent1">
              <Link1
                khpng="/mnpng@2x.png"
                cambodia="Mongolia"
                prop="$21"
                propDebugCommit="unset"
                propWidth="unset"
                propAlignSelf="unset"
                propAlignSelf1="unset"
                propWidth1="77px"
                propMinWidth="71px"
              />
              <Link
                jppng="/twpng@2x.png"
                japan="Taiwan"
                prop="$3.5"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="59px"
                propDebugCommit1="unset"
                propMinWidth1="77px"
              />
            </div>
            <div className="frame-parent21">
              <div className="heading-3-europe-parent">
                <b className="heading-36">Europe</b>
                <div className="link-view-all-container">
                  <a className="link-view1">View all</a>
                </div>
              </div>
              <Link
                jppng="/atpng@2x.png"
                japan="Austria"
                prop="$4.5"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="59px"
                propDebugCommit1="unset"
                propMinWidth1="77px"
              />
              <Link1
                khpng="/czpng@2x.png"
                cambodia="Czech Republic"
                prop="$5"
                propDebugCommit="unset"
                propWidth="119.1px"
                propAlignSelf="stretch"
                propAlignSelf1="stretch"
                propWidth1="128px"
                propMinWidth="63px"
              />
              <Link
                jppng="/iepng@2x.png"
                japan="Ireland"
                prop="$4"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="58px"
                propDebugCommit1="unset"
                propMinWidth1="64px"
              />
              <Link1
                khpng="/sepng@2x.png"
                cambodia="Sweden"
                prop="$4"
                propDebugCommit="unset"
                propWidth="unset"
                propAlignSelf="unset"
                propAlignSelf1="unset"
                propWidth1="67px"
                propMinWidth="64px"
              />
            </div>
            <div className="frame-parent22">
              <div className="heading-3-americas-parent">
                <b className="heading-37">Americas</b>
                <div className="link-view-all-frame">
                  <a className="link-view2">View all</a>
                </div>
              </div>
              <Link1
                khpng="/arpng@2x.png"
                cambodia="Argentina"
                prop="$34"
                propDebugCommit="unset"
                propWidth="74.7px"
                propAlignSelf="stretch"
                propAlignSelf1="stretch"
                propWidth1="83px"
                propMinWidth="74px"
              />
              <Link1
                khpng="/copng@2x.png"
                cambodia="Colombia"
                prop="$21"
                propDebugCommit="unset"
                propWidth="unset"
                propAlignSelf="unset"
                propAlignSelf1="unset"
                propWidth1="79px"
                propMinWidth="71px"
              />
              <Link
                jppng="/jmpng@2x.png"
                japan="Jamaica"
                prop="$27"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="69px"
                propDebugCommit1="unset"
                propMinWidth1="72.1px"
              />
              <Link
                jppng="/pepng@2x.png"
                japan="Peru"
                prop="$21"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="39px"
                propDebugCommit1="unset"
                propMinWidth1="71px"
              />
            </div>
            <div className="frame-parent23">
              <div className="heading-3-oceania-parent">
                <b className="heading-38">Oceania</b>
                <div className="link-view-all-wrapper1">
                  <a className="link-view3">View all</a>
                </div>
              </div>
              <Link
                jppng="/aupng@2x.png"
                japan="Australia"
                prop="$3.1"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="73px"
                propDebugCommit1="unset"
                propMinWidth1="74px"
              />
              <Link
                jppng="/wspng@2x.png"
                japan="Samoa"
                prop="$45"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="57px"
                propDebugCommit1="unset"
                propMinWidth1="74px"
              />
            </div>
            <div className="frame-parent24">
              <div className="heading-3-africa-parent">
                <b className="heading-39">Africa</b>
                <div className="link-view-all-wrapper2">
                  <a className="link-view4">View all</a>
                </div>
              </div>
              <Link
                jppng="/egpng@2x.png"
                japan="Egypt"
                prop="$25"
                propDebugCommit="unset"
                propAlignSelf="stretch"
                propFlex="unset"
                propFlex1="unset"
                propMinWidth="49px"
                propDebugCommit1="unset"
                propMinWidth1="73px"
              />
            </div>
            <Link
              jppng="/mapng@2x.png"
              japan="Morocco"
              prop="$44"
              propDebugCommit="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="72px"
              propDebugCommit1="unset"
              propMinWidth1="74px"
            />
            <Link
              jppng="/ugpng@2x.png"
              japan="Uganda"
              prop="$16"
              propDebugCommit="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propFlex1="unset"
              propMinWidth="66px"
              propDebugCommit1="unset"
              propMinWidth1="71px"
            />
          </div>
          <div className="frame-wrapper8">
            <div className="frame-parent25">
              <div className="link-parent2">
                <Link1
                  khpng="/hkpng@2x.png"
                  cambodia="Hong Kong"
                  prop="$2.5"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="94px"
                  propMinWidth="77px"
                />
                <Link1
                  khpng="/krpng@2x.png"
                  cambodia="South Korea"
                  prop="$2.2"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="102px"
                  propMinWidth="77px"
                />
                <Link1
                  khpng="/phpng@2x.png"
                  cambodia="Philippines"
                  prop="$6"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="93px"
                  propMinWidth="64px"
                />
                <Link
                  jppng="/thpng@2x.png"
                  japan="Thailand"
                  prop="$3.97"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="72px"
                  propDebugCommit1="unset"
                  propMinWidth1="87px"
                />
              </div>
              <div className="link-parent3">
                <Link
                  jppng="/bepng@2x.png"
                  japan="Belgium"
                  prop="$4.5"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="71px"
                  propDebugCommit1="unset"
                  propMinWidth1="77px"
                />
                <Link1
                  khpng="/dkpng@2x.png"
                  cambodia="Denmark"
                  prop="$4"
                  propDebugCommit="unset"
                  propWidth="68.5px"
                  propAlignSelf="stretch"
                  propAlignSelf1="stretch"
                  propWidth1="78px"
                  propMinWidth="64px"
                />
                <Link
                  jppng="/plpng@2x.png"
                  japan="Poland"
                  prop="$3.44"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="59px"
                  propDebugCommit1="unset"
                  propMinWidth1="88px"
                />
                <Link1
                  khpng="/chpng@2x.png"
                  cambodia="Switzerland"
                  prop="$5.74"
                  propDebugCommit="unset"
                  propWidth="88.9px"
                  propAlignSelf="stretch"
                  propAlignSelf1="stretch"
                  propWidth1="98px"
                  propMinWidth="86px"
                />
              </div>
              <div className="link-parent4">
                <Link1
                  khpng="/bspng@2x.png"
                  cambodia="Bahamas"
                  prop="$40"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="78px"
                  propMinWidth="74px"
                />
                <Link1
                  khpng="/crpng@2x.png"
                  cambodia="Costa Rica"
                  prop="$21"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="87px"
                  propMinWidth="71px"
                />
                <Link
                  jppng="/mxpng@2x.png"
                  japan="Mexico"
                  prop="$21"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="59px"
                  propDebugCommit1="unset"
                  propMinWidth1="71px"
                />
                <Link1
                  khpng="/uspng@2x.png"
                  cambodia="United States"
                  prop="$5"
                  propDebugCommit="unset"
                  propWidth="102.3px"
                  propAlignSelf="stretch"
                  propAlignSelf1="stretch"
                  propWidth1="112px"
                  propMinWidth="63px"
                />
              </div>
              <div className="link-parent5">
                <Link
                  jppng="/nrpng@2x.png"
                  japan="Nauru"
                  prop="$49"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="52px"
                  propDebugCommit1="unset"
                  propMinWidth1="74px"
                />
                <Link
                  jppng="/topng@2x.png"
                  japan="Tonga"
                  prop="$47"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="51px"
                  propDebugCommit1="unset"
                  propMinWidth1="73px"
                />
              </div>
              <div className="link-parent6">
                <Link
                  jppng="/ghpng@2x.png"
                  japan="Ghana"
                  prop="$6"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="54px"
                  propDebugCommit1="unset"
                  propMinWidth1="64px"
                />
                <Link1
                  khpng="/zapng@2x.png"
                  cambodia="South Africa"
                  prop="$5.74"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="102px"
                  propMinWidth="86px"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper9">
            <div className="frame-parent26">
              <div className="link-parent7">
                <Link
                  jppng="/inpng@2x.png"
                  japan="India"
                  prop="$8"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="42px"
                  propDebugCommit1="unset"
                  propMinWidth1="64px"
                />
                <Link1
                  khpng="/mypng@2x.png"
                  cambodia="Malaysia"
                  prop="$3"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="71px"
                  propMinWidth="64px"
                />
                <Link
                  jppng="/qapng@2x.png"
                  japan="Qatar"
                  prop="$6.5"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="47px"
                  propDebugCommit1="unset"
                  propMinWidth1="77px"
                />
              </div>
              <div className="link-parent8">
                <Link
                  jppng="/bzpng@2x.png"
                  japan="Belize"
                  prop="$29"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="50px"
                  propDebugCommit1="unset"
                  propMinWidth1="73px"
                />
                <Link
                  jppng="/fipng@2x.png"
                  japan="Finland"
                  prop="$4"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="63px"
                  propDebugCommit1="unset"
                  propMinWidth1="64px"
                />
                <Link
                  jppng="/ptpng@2x.png"
                  japan="Portugal"
                  prop="$1.99"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="72px"
                  propDebugCommit1="unset"
                  propMinWidth1="85px"
                />
                <Link1
                  khpng="/gbpng@2x.png"
                  cambodia="United Kingdom"
                  prop="$3.29"
                  propDebugCommit="unset"
                  propWidth="123.6px"
                  propAlignSelf="stretch"
                  propAlignSelf1="stretch"
                  propWidth1="137px"
                  propMinWidth="88px"
                />
              </div>
              <div className="link-parent9">
                <Link
                  jppng="/brpng@2x.png"
                  japan="Brazil"
                  prop="$27"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="46px"
                  propDebugCommit1="unset"
                  propMinWidth1="72.1px"
                />
                <Link
                  jppng="/ecpng@2x.png"
                  japan="Ecuador"
                  prop="$21"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="69px"
                  propDebugCommit1="unset"
                  propMinWidth1="71px"
                />
                <Link
                  jppng="/papng@2x.png"
                  japan="Panama"
                  prop="$21"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="69px"
                  propDebugCommit1="unset"
                  propMinWidth1="71px"
                />
                <Link
                  jppng="/uspng@2x.png"
                  japan="United States…"
                  prop="$11"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="1"
                  propMinWidth="124px"
                  propDebugCommit1="unset"
                  propMinWidth1="69px"
                  onLinkContainer3Click={onLinkContainer3Click}
                />
              </div>
              <div className="link-parent10">
                <Link1
                  khpng="/nzpng@2x.png"
                  cambodia="New Zealand"
                  prop="$6.1"
                  propDebugCommit="unset"
                  propWidth="97.8px"
                  propAlignSelf="stretch"
                  propAlignSelf1="stretch"
                  propWidth1="109px"
                  propMinWidth="74px"
                />
                <Link
                  jppng="/vupng@2x.png"
                  japan="Vanuatu"
                  prop="$73"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="70px"
                  propDebugCommit1="unset"
                  propMinWidth1="73px"
                />
              </div>
              <div className="link-parent11">
                <Link
                  jppng="/lrpng@2x.png"
                  japan="Liberia"
                  prop="$18"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="57px"
                  propDebugCommit1="unset"
                  propMinWidth1="71px"
                />
                <Link1
                  khpng="/tzpng@2x.png"
                  cambodia="Tanzania"
                  prop="$15"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="74px"
                  propMinWidth="71px"
                />
              </div>
            </div>
          </div>
          <div className="frame-wrapper10">
            <div className="frame-parent27">
              <div className="link-parent12">
                <Link
                  jppng="/idpng@2x.png"
                  japan="Indonesia"
                  prop="$6.33"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="81px"
                  propDebugCommit1="unset"
                  propMinWidth1="87px"
                />
                <Link1
                  khpng="/mvpng@2x.png"
                  cambodia="Maldives"
                  prop="$87"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="73px"
                  propMinWidth="73px"
                />
                <Link1
                  khpng="/sgpng@2x.png"
                  cambodia="Singapore"
                  prop="$2.3"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="85px"
                  propMinWidth="77.1px"
                />
              </div>
              <div className="link-parent13">
                <Link1
                  khpng="/bwpng@2x.png"
                  cambodia="Botswana"
                  prop="$16"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="83px"
                  propMinWidth="71px"
                />
                <Link
                  jppng="/frpng@2x.png"
                  japan="France"
                  prop="$4.5"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="56px"
                  propDebugCommit1="unset"
                  propMinWidth1="77px"
                />
                <Link
                  jppng="/espng@2x.png"
                  japan="Spain"
                  prop="$3.29"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="47px"
                  propDebugCommit1="unset"
                  propMinWidth1="88px"
                />
              </div>
              <div className="link-parent14">
                <Link
                  jppng="/capng@2x.png"
                  japan="Canada"
                  prop="$5.5"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="63px"
                  propDebugCommit1="unset"
                  propMinWidth1="77px"
                />
                <Link
                  jppng="/gupng@2x.png"
                  japan="Guam"
                  prop="$21"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="50px"
                  propDebugCommit1="unset"
                  propMinWidth1="71px"
                />
                <Link1
                  khpng="/pypng@2x.png"
                  cambodia="Paraguay"
                  prop="$21"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="78px"
                  propMinWidth="71px"
                />
                <Link1
                  khpng="/vepng@2x.png"
                  cambodia="Venezuela"
                  prop="$21"
                  propDebugCommit="unset"
                  propWidth="77.4px"
                  propAlignSelf="stretch"
                  propAlignSelf1="stretch"
                  propWidth1="86px"
                  propMinWidth="71px"
                />
              </div>
              <div className="link-frame">
                <Link
                  jppng="/pgpng@2x.png"
                  japan="Papua New…"
                  prop="$23"
                  propDebugCommit="unset"
                  propAlignSelf="unset"
                  propFlex="1"
                  propFlex1="1"
                  propMinWidth="106px"
                  propDebugCommit1="unset"
                  propMinWidth1="74px"
                />
              </div>
              <div className="link-parent15">
                <Link1
                  khpng="/mupng@2x.png"
                  cambodia="Mauritius"
                  prop="$49"
                  propDebugCommit="unset"
                  propWidth="unset"
                  propAlignSelf="unset"
                  propAlignSelf1="unset"
                  propWidth1="78px"
                  propMinWidth="74px"
                />
                <Link
                  jppng="/tnpng@2x.png"
                  japan="Tunisia"
                  prop="$7"
                  propDebugCommit="unset"
                  propAlignSelf="stretch"
                  propFlex="unset"
                  propFlex1="unset"
                  propMinWidth="59px"
                  propDebugCommit1="unset"
                  propMinWidth1="63px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
