import React, { useState } from "react";
import Calendar from "react-calendar";
import { Main } from "./style";
import "react-calendar/dist/Calendar.css";

function Schedule() {
  const [value, onChange] = useState(new Date());

  return (
    <Main>
      <Calendar onChange={onChange} value={value} showNavigation={false} />
    </Main>
  );
}

export default Schedule;
