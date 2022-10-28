import "./App.css";
import { Route, Routes } from "react-router-dom";
import { NoMatch } from "./components/noMatch/NoMatch";
import { FemaleUsers } from "./components/femaleUsers/FemaleUsers";
import { MaleUsers } from "./components/maleUsers/MaleUsers"
import { Home } from "./components/home/Home";
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import { Users } from "./pages/Users";
import { Navbar } from "./components/navbar/Navbar";
import { UserGender } from "./components/userGender/UserGender";

function App() {
  return (
    <ErrorBoundary>
    <div className="app_container">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<Users />}/>
      <Route path="gender" element={<UserGender />}>
        <Route path="female" element={<FemaleUsers />} />
        <Route path="male" element={<MaleUsers />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
    </div>
    </ErrorBoundary>
  );
}

export default App;