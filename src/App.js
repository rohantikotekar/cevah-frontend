import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop5 from "./pages/Desktop5";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop2 from "./pages/Desktop2";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";
import Desktop6 from "./pages/Desktop6";

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
      case "/desktop-90":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-92":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-93":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-94":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-95":
        title = "";
        metaDescription = "";
        break;
      case "/desktop-120":
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
      <Route path="/" element={<Desktop5 />} />
      <Route path="/desktop-90" element={<Desktop />} />
      <Route path="/desktop-92" element={<Desktop1 />} />
      <Route path="/desktop-93" element={<Desktop2 />} />
      <Route path="/desktop-94" element={<Desktop3 />} />
      <Route path="/desktop-95" element={<Desktop4 />} />
      <Route path="/desktop-120" element={<Desktop6 />} />
    </Routes>
  );
}
export default App;
