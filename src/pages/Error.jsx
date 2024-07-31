import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return <div>something went wrong </div>;
};

export default Error;
