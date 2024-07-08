import { useEffect, useState } from "react";
import {
  Spinner,
  Toast,
  ToastHeader,
  Card,
  CardBody,
  CardHeader,
  CardSubtitle, // Corrected from CardSubTitle
} from "reactstrap";

export default function Posts() {
  const [postsList, setPostsList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/posts") // Removed the leading space in the URL
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center my-4">
          <Spinner color="primary" size="sm">
            Loading...
          </Spinner>
          <Spinner color="primary" size="sm" type="grow">
            Loading...
          </Spinner>
        </div>
      ) : null}

      {postsList.map((item, index) => (
        <Card
          key={item.id} // Added a key prop for each Card
          style={{
            width: "18rem",
            marginBottom: "1rem",
            backgroundColor: "#9DD4EC",
          }}
        >
          <CardHeader>
            <span className="text-primary">{index + 1}.</span> {item.title}
          </CardHeader>
          <CardBody>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {item.body}
            </CardSubtitle>
          </CardBody>
        </Card>
      ))}

      {error && (
        <div className="p-3 bg-danger my-2 rounded">
          <Toast>
            <ToastHeader>{error}</ToastHeader>
          </Toast>
        </div>
      )}
    </div>
  );
}
