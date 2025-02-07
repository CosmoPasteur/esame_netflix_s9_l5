import "./App.css";
import Footer from "./component/footer";
import NewReleases from "./component/NewReleases";
import TopBar from "./component/TopBar";
import TrendingNow from "./component/TrendingNow";
import TvShow from "./component/TVShow";
import WatchItAgain from "./component/WatchItAgain";
// import gallerieFilm from "./component/GallerieTot";

function App() {
  return (
    <>
      <TopBar />
      <TvShow />
      <h3 className="bg-dark text-white mb-0">Trending Now</h3>
      <TrendingNow />
      <h3 className="bg-dark text-white mb-0">Watch It Again</h3>
      <WatchItAgain />
      <h3 className="bg-dark text-white mb-0">New Releases</h3>
      <NewReleases />
      {/* <gallerieFilm /> */}
      <Footer />
    </>
  );
}

export default App;
