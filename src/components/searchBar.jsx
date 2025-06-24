import React from 'react';

export default function SearchBar({ onSearch }) {
  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}
