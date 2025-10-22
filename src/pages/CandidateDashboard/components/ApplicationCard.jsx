const ApplicationCard = ({ app }) => (
  <div className="application-card">
    <h3>{app.title}</h3>
    <p className="company">{app.company}</p>
    <p className={`status ${app.status.toLowerCase()}`}>Status: {app.status}</p>
    <p className="date">Date: {app.date}</p>
  </div>
);
export default ApplicationCard;
