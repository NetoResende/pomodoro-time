import { Home } from "./pages/home/index.tsx";
import { TaskContextProvider } from "./contexts/taskContext/TaskContextProvider.tsx";

import "./styles/theme.css";
import "./styles/global.css";

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
