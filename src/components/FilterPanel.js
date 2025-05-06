function FilterPanel({ filters, setFilters }) {
    const handleChange = (e) => {
      const { name, checked } = e.target;
      setFilters({ ...filters, [name]: checked });
    };
  
    return (
      <div style={{ marginBottom: '1rem' }}>
        <label>
          <input type="checkbox" name="name" checked={filters.name} onChange={handleChange} /> სახელი
        </label>
        <label>
          <input type="checkbox" name="email" checked={filters.email} onChange={handleChange} /> იმეილი
        </label>
        <label>
          <input type="checkbox" name="picture" checked={filters.picture} onChange={handleChange} /> ფოტო
        </label>
      </div>
    );
  }
  
  export default FilterPanel;
  