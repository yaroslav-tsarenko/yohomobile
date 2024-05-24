import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandngPage from "./pages/LandngPage";
import BlogPage from "./pages/BlogPage";
import ProductPage from "./pages/ProductPage";
import ProdctCategory from "./pages/ProdctCategory";
import InstallationGuide from "./pages/InstallationGuide";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/blogpage":
        title = "";
        metaDescription = "";
        break;
      case "/productpage":
        title = "";
        metaDescription = "";
        break;
      case "/prodctcategory":
        title = "";
        metaDescription = "";
        break;
      case "/installationguide":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandngPage />} />
      <Route path="/blogpage" element={<BlogPage />} />
      <Route path="/productpage" element={<ProductPage />} />
      <Route path="/prodctcategory" element={<ProdctCategory />} />
      <Route path="/installationguide" element={<InstallationGuide />} />
    </Routes>
  );
}
export default App;
