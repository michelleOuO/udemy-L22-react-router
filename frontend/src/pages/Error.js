import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error occurred!!";
  let message = "Something went wrong...(x_x)";

  if (error.status === 500) {
    message = error.data?.message ?? message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  console.log(error);

  return <PageContent title={title}>{message}</PageContent>;
}

export default ErrorPage;
