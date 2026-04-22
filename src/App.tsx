import { Home } from "./pages/home/index.tsx";
import { useState } from "react";
import type { TaskStateModel } from "./models/taskStateModel.ts";
import { TaskContext } from "./contexts/taskContext/index.tsx";

import "./styles/theme.css";
import "./styles/global.css";

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedsecondsRemaining: "05:00",
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    workBreakTime: 5,
    workLongBreakTime: 15
  }
}

export function App() {
  const [ state, setState ] = useState(initialState);

  return (
    <TaskContext.Provider value={{chave1:123456789}}>
      <Home />
    </TaskContext.Provider>
  );
}
