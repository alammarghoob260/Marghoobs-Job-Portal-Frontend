import ApplicationCard from "./ApplicationCard";
const ApplicationGrid = ({ applications }) => (
  <div className="application-grid">
    {applications.map((app, i) => (
      <ApplicationCard key={i} app={app} />
    ))}
  </div>
);
export default ApplicationGrid;
