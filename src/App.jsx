import { useState } from 'react';
import './App.css'
const dictionaryData = [
  {
    id: 1,
    word: "React",
    meaning: "A JavaScript library for building user interfaces"
  },
  {
    id: 2,
    word: "Component",
    meaning: "A reusable building block for creating UI elements"
  },
  {
    id: 3,
    word: "JavaScript",
    meaning: "A high-level, interpreted scripting language"
  },
  {
    id: 4,
    word: "HTML",
    meaning:
      "Hypertext Markup Language, used for structuring content on the web"
  },
  {
    id: 5,
    word: "CSS",
    meaning: "Cascading Style Sheets, used for styling web pages"
  },
  {
    id: 6,
    word: "Node.js",
    meaning: "A JavaScript runtime that allows server-side scripting"
  },
  {
    id: 7,
    word: "API",
    meaning:
      "Application Programming Interface, a set of rules for interacting with software"
  },
  { id: 8, word: "Database", meaning: "A structured collection of data" },
  {
    id: 9,
    word: "AJAX",
    meaning: "Asynchronous JavaScript and XML, a web development technique"
  },
  {
    id: 10,
    word: "Framework",
    meaning: "A pre-built structure for developing applications"
  },
  {
    id: 11,
    word: "Library",
    meaning: "A collection of pre-written code for common tasks"
  },
  { id: 12, word: "Git", meaning: "A distributed version control system" },
  {
    id: 13,
    word: "GitHub",
    meaning: "A web-based platform for version control and collaboration"
  },
  {
    id: 14,
    word: "JSON",
    meaning: "JavaScript Object Notation, a lightweight data-interchange format"
  },
  { id: 15, word: "CSS Flexbox", meaning: "A layout model for design" },
  { id: 16, word: "HTML5", meaning: "The latest version of the HTML standard" },
  {
    id: 17,
    word: "Responsive Design",
    meaning: "Design that adapts to different screen sizes"
  },
  {
    id: 18,
    word: "REST API",
    meaning: "Representational State Transfer, a web architectural style"
  },
  {
    id: 19,
    word: "Router",
    meaning: "A component that manages navigation in a web application"
  },
  {
    id: 20,
    word: "State",
    meaning: "Data that can change over time in a React component"
  }
];
function App() {
  const [searchWord, setSearchWord] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [word, setWord] = useState("");


  const handleSearch = (e) => {
    e.preventDefault();
    const filteredWord = dictionaryData.filter((meaning) =>(meaning.word.toLowerCase().includes(word.toLowerCase())));
    setErrorMessage(filteredWord.length === 0 ? "No matching words found." : "")
    setSearchWord(filteredWord);
  };

  return (
    <div className="dictionary__container">
      <h1>Dictionary App</h1>
      <form onSubmit={handleSearch}>
        <input
          placeholder="Search for word"
          value={word}
          type="text"
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <h2>Definition :</h2>

      {errorMessage && <p>{errorMessage}</p>}
      {word && (
        <ul>
          {searchWord.map((mean) => (
            <li key={mean.id}>
              <strong>{mean.word}</strong> : <em>{mean.meaning}</em>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App
