import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch("http://localhost:8080/eventsss");

  if (!response.ok) {
    // eslint-disable-next-line no-throw-literal
    throw { message: "Something went wrong..."}
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
