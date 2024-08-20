import Header from "./components/ui/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Graphs from "./components/Graphs";
import UserQuestionnaire from "./components/UserQuestionnaire";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-interaction" element={<UserQuestionnaire />} />
        <Route path="/impact" element={<Graphs />} />
      </Routes>
    </div>
  );
}

export default App;
