import React, { useState } from "react";
import "./style.css";
const App = () => {
  const genres = ["javascript", "fiction", "business"];
  const genreDb = {
    javascript: [
      { bookName: "Eloquent JavaScript", rating: "4/5" },
      { bookName: "You Don't Know JS", rating: "3.5/5" },
      { bookName: "JavaScript The Good Parts", rating: "4/5" },
    ],
    fiction: [
      { bookName: "Shiva Trilogy", rating: "5/5" },
      { bookName: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" },
      { bookName: "The House of Blue Mangoes", rating: "4/5" },
    ],
    business: [
      { bookName: "Never Split the Difference", rating: "3.5/5" },
      { bookName: "Loonshots", rating: "5/5" },
      {
        bookName: "Dream With Your Eyes Open by Ronnie Screwvala ",
        rating: "4/5",
      },
    ],
  };
  const [displayBooks, setDisplayBooks] = useState("javascript");

  const genresHandler = (genre) => {
    setDisplayBooks(genre);
  };
  return (
    <div className="container">
      <h2> 📚 goodbooks </h2>
      <p>Checkout my favorite books. Select a genre to get started</p>
      <div className="nav-sec">
        {genres.map((genre) => (
          <button className="genre" onClick={() => genresHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr></hr>
      <div className="genre-content">
        <ul>
          {genreDb[displayBooks].map((book) => (
            <li>
              <div id="book">{book.bookName}</div>
              <div id="rating"> {book.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
