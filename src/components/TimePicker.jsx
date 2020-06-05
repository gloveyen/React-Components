import React, { useState, useEffect } from "react";
import "../assets/style/components/TimePicker.css";

function TimePicker(props) {
  const [showState, setShowState] = useState(false);
  const [timePicked, setTimePicked] = useState({});

  useEffect(function () {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    let meri = true;
    let h_t = h;
    if (h > 12) {
      h_t = h - 12;
      meri = false;
    }

    setTimePicked({ h: h_t, m: m, meri: meri });
  }, []);

  function toggleShow() {
    setShowState(!showState);
  }

  function timeFormat() {
    const { h, m, meri } = timePicked;
    return `${h}:${m} ${meri ? "AM" : "PM"}`;
  }

  function toggleMeri() {
    console.log("change");

    const new_meri = !timePicked.meri;
    setTimePicked({ ...timePicked, meri: new_meri });
  }

  function hour_add() {
    let new_h = timePicked.h + 1;
    let new_meri = timePicked.meri;
    if (new_h === 12) {
      new_meri = !new_meri;
    }
    if (new_h > 12) {
      new_h = 1;
    }
    setTimePicked({ ...timePicked, h: new_h, meri: new_meri });
  }

  function hour_minus() {
    let new_h = timePicked.h - 1;
    let new_meri = timePicked.meri;
    if (new_h === 11) {
      new_meri = !new_meri;
    }
    if (new_h < 1) {
      new_h = 12;
    }
    setTimePicked({ ...timePicked, h: new_h, meri: new_meri });
  }

  function min_add() {
    let new_m = timePicked.m + 1;
    if (new_m === 60) {
      new_m = 0;
    }
    setTimePicked({ ...timePicked, m: new_m });
  }

  function min_minus() {
    let new_m = timePicked.m - 1;
    if (new_m < 0) {
      new_m = 59;
    }
    setTimePicked({ ...timePicked, m: new_m });
  }

  return (
    <div className="timepicker-component">
      <div className="timepicker-container" onClick={toggleShow}>
        <div className="timepicker-control">
          <i className="fas fa-clock"></i>
        </div>
        <span>{timeFormat()}</span>
      </div>

      <div id="timepicker-pick" className={showState ? "hide" : null}>
        <div>{timeFormat()}</div>
        <ul>
          <li className="picker">
            <button onClick={hour_minus}>{"<"}</button>
            <span>{timePicked.h > 12 ? timePicked.h - 12 : timePicked.h}</span>
            <button onClick={hour_add}>{">"}</button>
          </li>
          <li>:</li>
          <li className="picker">
            <button onClick={min_minus}>{"<"}</button>
            <span>{timePicked.m}</span>
            <button onClick={min_add}>{">"}</button>
          </li>
          <li>:</li>
          <li className="picker">
            <button onClick={toggleMeri}>{"<"}</button>
            <span>{timePicked.meri ? "AM" : "PM"}</span>
            <button onClick={toggleMeri}>{">"}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TimePicker;
