import { useParams } from "react-router-dom";

function EventDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>EventDetailPage</h1>
      <p>Event ID: {id}</p>
    </div>
  );
}

export default EventDetailPage;
