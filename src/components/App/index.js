import React from "react";

import Navigation from "../Navigation";
import Banner from "../Banner";
import List from "../List";

function App() {
  const [bannerVisible, changeBanner] = React.useState(true);

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
      <List />
    </div>
  );
}

export default App;
