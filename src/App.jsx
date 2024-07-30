import { CursorFollow } from "./components/CursorFollow";
import { DraggableCuy } from "./components/Draggable";
import { FLipCuy } from "./components/FlipAnimation";
import { HoverButton } from "./components/HoverButton";
import { ImageReveal } from "./components/ImageReveal";
import { Marquee } from "./components/Marquee";
import OverlappingCards from "./components/OverlappingCards";
import { OverlayNavbar } from "./components/OverlayNavbar";
import TextReveal from "./components/TextReveal";

function App() {
  return (
    <>
      <OverlayNavbar />
      <TextReveal />
      <CursorFollow />
      <ImageReveal />
      <HoverButton />
      <Marquee />
      <OverlappingCards />
      <FLipCuy />
      <DraggableCuy />
    </>
  );
}

export default App;
