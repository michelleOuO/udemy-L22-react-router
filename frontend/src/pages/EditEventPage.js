import { Suspense } from "react";
import { useRouteLoaderData, Await } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const { event } = useRouteLoaderData("event-detail");

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent) => <EventForm event={loadedEvent} method="patch" />}
      </Await>
    </Suspense>
  );
}

export default EditEventPage;
