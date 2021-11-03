import { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./features/home/HomePage";
import PlatformsPage from "./features/platforms/PlatformsPage";
import GamesPage from "./features/games/GamesPage";
import GenresPage from "./features/genres/GenresPage";
import TagsPage from "./features/tags/TagsPage";
import DevelopersPage from "./features/developers/DevelopersPage";
import PublishersPage from "./features/publishers/PublishersPage";
import StoresPage from "./features/stores/StoresPage";

const App: FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen  justify-between">
        <Navbar />
        <main className="mb-auto ">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/games">
              <GamesPage />
            </Route>
            <Route path="/platforms">
              <PlatformsPage />
            </Route>
            <Route path="/genres">
              <GenresPage />
            </Route>
            <Route path="/tags">
              <TagsPage />
            </Route>
            <Route path="/developers">
              <DevelopersPage />
            </Route>
            <Route path="/publishers">
              <PublishersPage />
            </Route>
            <Route path="/stores">
              <StoresPage />
            </Route>
          </Switch>
        </main>
        <footer className="h-10  pt-5 pb-10 text-center">
          Powered by{" "}
          <a
            href="https://rawg.io"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            RAWG
          </a>
        </footer>
      </div>
    </Router>
  );
};

export default App;
