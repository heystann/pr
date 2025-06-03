import { useState } from 'react';

export function SearchInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
}
