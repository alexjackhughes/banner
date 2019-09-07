import React from "react";

import Navigation from "../Navigation";
import Banner from "../Banner";

function App() {
  const [bannerVisible, changeBanner] = React.useState(false);

  return (
    <div className="App">
      <Navigation
        visible={bannerVisible}
        changeBanner={() => {
          changeBanner(!bannerVisible);
        }}
      />
      <Banner
        visible={bannerVisible}
        changeBanner={() => {
          changeBanner(!bannerVisible);
        }}
      />
    </div>
  );
}

export default App;
