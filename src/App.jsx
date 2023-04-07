import Nav from "./components/Nav";
import Jumbo2 from "./components/Jumbo2";
import Soundsection from "./components/Soundsection";
import DisplaySection from "./components/DisplaySection";
import WebgiViwer from "./components/WebgiViewer";
import { useRef } from "react";
import Loader from "./components/Loader";
function App() {
  const webgiViewerRef = useRef();
  const contentRef= useRef();

  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview();
  };
  return (
    <div className="App">
      <Loader/>
      <div ref={contentRef} id="content">
      <Nav />
      <Jumbo2 />
      <Soundsection />
      <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViwer contentRef={contentRef} ref={webgiViewerRef} />
    </div>
  );
}

export default App;
