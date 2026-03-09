import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import EventsPage from "./pages/EventsPage";
import EventsPage, { eventsLoader } from "./pages/Event";
import EventDetailPage, {
  eventDetailLoader,
  deleteEventAction,
} from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import { manipulateEventAction } from "./components/EventForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

export default router;
