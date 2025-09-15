import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import BookCard from "./Components/BookCard";
const App = () => {
  const [searchBook, setSearchBook] = useState("");

  const [showDialog, setShowDialog] = useState(false);
  return (
    <div>
      <NavBar
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        searchBook={searchBook}
        setSearchBook={setSearchBook}
      />
      <BookCard
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        searchBook={searchBook}
        setSearchBook={setSearchBook}
      />
    </div>
  );
};

export default App;
