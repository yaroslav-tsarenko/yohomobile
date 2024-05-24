import HeaderHeader from "../components/HeaderHeader";
import Main from "../components/Main";
import FrameComponent12 from "../components/FrameComponent12";
import "./ProdctCategory.css";

const ProdctCategory = () => {
  return (
    <div className="prodctcategory">
      <div className="backgroundhorizontalborder1">
        <u className="link-unlock1">
          Unlock Your Adventure: Explore Hot Events, Top Travel Guides, and
          Exclusive Discounts!
        </u>
      </div>
      <main className="header-header-parent">
        <HeaderHeader />
        <section className="main-wrapper">
          <Main />
        </section>
      </main>
      <FrameComponent12 />
    </div>
  );
};

export default ProdctCategory;
