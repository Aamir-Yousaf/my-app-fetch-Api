import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Spinner,
  Toast,
  ToastHeader,
} from "reactstrap";

export default function AlbumsDetails() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // Fetch data from API or database
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setError("");
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
      {loading ? (
        <div>
          <Spinner color="primary" size="sm">
            Loading...
          </Spinner>
          <Spinner color="primary" size="sm" type="grow">
            Loading...
          </Spinner>
        </div>
      ) : null}
      {error ? (
        <div className="p-3 bg-danger my-2 rounded">
          <Toast>
            <ToastHeader>{error}</ToastHeader>
          </Toast>
        </div>
      ) : null}
      {data.map((item, index) => (
        <Card key={index} style={{ width: "18rem", margin: "1rem" }}>
          <img alt="Card cap" src={item.thumbnailUrl} width="100%" />
          <CardBody>
            <CardTitle>{item.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted">{item.url}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
