import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error">
            <h1>Ohh!!</h1>
            <p>
                {err?.error?.message}
            </p>
        </div>
    )
}

export default Error;
