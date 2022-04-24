import { useState } from 'react';

// styles 
import styles from './App.css';

// components
import SearchBar from './components/SearchBar/SeachBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';

const App = () => {
  const [results, setResults] = useState('');

  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults results={results} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
