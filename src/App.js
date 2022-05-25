import { useState } from "react";
import Page from "./components/Page";
import Share from "./components/Share";
import SocialContainer from "./components/SocialContainer";

function App(props) {
  const [shareCount, setShareCount] = useState(0);
  const [shares, setShares] = useState([]);

  const style = {
    padding: "10px",
    borderRadius: "50px",
    border: "2px solid #ddd",
    textAlign: "center",
    position: "fixed",
    top: "10px",
    right: "10px",
    background: "#FAF3DD",
    fontWeight: "bold",
  };

  const clickHandler = (name) => {
    const count = shareCount + 1;
    setShareCount(count);
    setShares([...shares, <Share name={name} />]);
  };

  return (
    <Page>
      <SocialContainer onClick={clickHandler} />
      {shares}
      <div style={style}>Shares: {shareCount}</div>
    </Page>
  );
}

export default App;
