import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center mt-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src="https://i.pinimg.com/originals/87/12/08/871208c73ba0f34dd414c0db0b486971.gif" alt="" className="rounded img-fluid" />
    </div>
  );
}