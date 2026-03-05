import { useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const { event } = useRouteLoaderData("event-detail");

  return <EventItem event={event} />;
}

export default EventDetailPage;

export async function eventDetailLoader({ request, params }) {
  console.log("request", request);
  console.log("params", params);

  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected event.",
      }),
      {
        status: 500,
      },
    );
  } else {
    return response;
  }
}
