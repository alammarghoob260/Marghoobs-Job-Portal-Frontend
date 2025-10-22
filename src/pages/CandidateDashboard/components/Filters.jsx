const Filters = ({ filters, onChange, onReset }) => (
  <div className="filters">
    <input
      name="title"
      placeholder="Job Title"
      value={filters.title}
      onChange={onChange}
    />
    <input
      name="location"
      placeholder="Location"
      value={filters.location}
      onChange={onChange}
    />
    <select name="type" value={filters.type} onChange={onChange}>
      <option value="">Job Type</option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option>
      <option value="Remote">Remote</option>
    </select>
    <input
      name="salary"
      placeholder="Salary Range"
      value={filters.salary}
      onChange={onChange}
    />
    <button onClick={onReset}>Reset</button>
  </div>
);
export default Filters;
