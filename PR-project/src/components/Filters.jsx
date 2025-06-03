import { useState } from 'react';

const FilterComponent = () => {
  

  const filters = [
    { id: 1, name: 'all' },
    { id: 2, name: 'audio' },
    { id: 3, name: 'artwork' },
    { id: 4, name: 'video' }
  ];

  const [activeFilter, setActiveFilter] = useState(filters[0].id);

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
  };

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter.id}
          className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;