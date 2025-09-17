import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import BookCard from "./Components/BookCard";

const App = () => {
  const [searchBook, setSearchBook] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const [favBookId, setFavBookId] = useState([]);
  const [favIcon, setIsFavIcon] = useState([]);
  // const [showIcon, setShowIcon] = useState(false);
  const [showFavBook, setShowFavBook] = useState(false);
  function toggleBook(id) {
    if (favBookId.includes(id)) {
      setFavBookId(favBookId.filter((bookId) => bookId !== id));
    } else {
      setFavBookId([...favBookId, id]);
    }
  }

  return (
    <>
      <div>
        <NavBar
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          searchBook={searchBook}
          setSearchBook={setSearchBook}
          favIcon={favIcon}
          setIsFavIcon={setIsFavIcon}
          favBookId={favBookId}
          setFavBookId={setFavBookId}
          toggleBook={toggleBook}
          showFavBook={showFavBook}
          setShowFavBook={setShowFavBook}
        />
        <BookCard
          showDialog={showDialog}
          setShowDialog={setShowDialog}
          searchBook={searchBook}
          setSearchBook={setSearchBook}
          favIcon={favIcon}
          setIsFavIcon={setIsFavIcon}
          favBookId={favBookId}
          setFavBookId={setFavBookId}
          toggleBook={toggleBook}
          showFavBook={showFavBook}
          setShowFavBook={setShowFavBook}
        />
      </div>
    </>
  );
};

export default App;
