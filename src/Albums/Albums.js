import { useEffect, useState } from "react";

export default function Albums() {
  const [albumsList, setAlbumsList] = useState([]);
  const [error, setError] = useState("");

  // Fetch data from API or database
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbumsList(data);
        setError("");
      })
      .catch((err) => setError(err.message)); 
  }, []);

  return (
    <div>
      {albumsList.map((item, index) => (
        <div key={index}>
          <h3>
            {index + 1}).{item.title}
          </h3>
        </div>
      ))}
      <p>{error}</p>
    </div>
  );
}
 