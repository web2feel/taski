import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import AppContextComp from "./context/AppContext";
import Board from "./components/Board";

function App() {
  return (
    <AppContextComp>
      <div className="App flex flex-col bg-slate-200 min-h-screen">
        <Header />
        <Main>
          <Board />
        </Main>
        <Footer />
      </div>
    </AppContextComp>
  );
}

export default App;
