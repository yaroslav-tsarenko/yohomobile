import FrameComponent11 from "../components/FrameComponent11";
import Topup from "../components/Topup";
import Background from "../components/Background";
import Contact from "../components/Contact";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div className="productpage">
      <b className="strong-data">Data:</b>
      <b className="strong-validity">{`Validity: `}</b>
      <b className="strong-coverage">{`Coverage: `}</b>
      <div className="container1">
        <div className="united-states-us">🇸 United States (US)</div>
      </div>
      <b className="strong-mobile">{`Mobile network operator: `}</b>
      <b className="strong-esim">{`eSIM phone number: `}</b>
      <div className="container2">
        <div className="yes">Yes</div>
      </div>
      <b className="strong-hotspot">{`Hotspot/ Tethering: `}</b>
      <div className="excellent">Excellent</div>
      <img className="starpng-icon" alt="" src="/starpng@2x.png" />
      <main className="frame-main">
        <section className="frame-section">
          <FrameComponent11 />
          <div className="background3" />
          <Topup />
        </section>
        <section className="customer-reviews">
          <Background />
        </section>
      </main>
      <Contact />
    </div>
  );
};

export default ProductPage;
