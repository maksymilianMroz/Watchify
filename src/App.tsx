import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SearchBar from "./components/SearchBar/SearchBar";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Main />
    </div>
  );
};

export default App;
