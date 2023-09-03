import Navbar from "./Components/Navbar";
import MainNews from "./Components/MainNews";
import NewNews from "./Components/NewNews";
import TrendingNews from "./Components/TrendingNews";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="priority-news-container">
        <MainNews />
        <NewNews />
      </div>
      <TrendingNews />
      <div className="footer">
        <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://www.frontendmentor.io/profile/JuanFuentes20">Juan Fuentes</a>.</p>
      </div>
    </div>
  );
}

export default App;
