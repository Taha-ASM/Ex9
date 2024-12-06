import { useState, useEffect } from "react";

export default function () {
  const [dogs, setDogs] = useState([]);

  async function getDogs() {
    const res = await fetch(
      "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
    );
    setDogs(await res.json());
  }

  useEffect(() => {
    getDogs();
  }, []);

  //   console.log(getDgos);

  return (
    <div className="flex gap-4">
      {dogs.map((i) => (
        <div className="flex-wrap">
          <img className="w-40 h-40 obejct-cover" src={i.url} />
          <p>{i.id}</p>
        </div>
      ))}
    </div>
  );
}
