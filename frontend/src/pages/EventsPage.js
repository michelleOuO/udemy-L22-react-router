import { Link } from "react-router-dom";

function EventsPage() {
  const dummyEvents = [
    {
      id: "1",
      title: "Event 1",
    },
    {
      id: "2",
      title: "Event 2",
    },
  ];
  return (
    <div>
    <h1>Events Page</h1>
    <ul>
      {dummyEvents.map((event) => (
        <li key={event.id}>
          <Link to={event.id}>{event.title}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default EventsPage;
