import React from "react";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import TimePicker from "./TimePicker";
import "../assets/style/components/App.css";

function App() {
  const imgs = ["ReactCourse", "crawler banner – 0", "Vue_Banner_1"];

  function renderImgs() {
    return imgs.map((img) => (
      <img
        src={require(`../assets/image/${img}.png`)}
        alt={img}
        name={img}
        key={img}
      />
    ));
  }

  return (
    <div className="App">
      <Dropdown>
        <option value="100" />
        <option value="200" />
        <option value="300" />
        <option value="400" />
      </Dropdown>

      <Carousel>{renderImgs()}</Carousel>
      <TimePicker />
    </div>
  );
}

export default App;
