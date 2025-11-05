import { useEffect, useState } from "react";
import axios from "axios";
import ProgramCard from "./Programcard";

export const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://selfish-dedra-ahmedsamir3bass-a06d47e8.koyeb.app/api/programs/")
      .then((res) => {
        setPrograms(res.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching programs:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="programms-container">
      {programs.map((program) => (
        <ProgramCard key={program.id} program={program} />
      ))}
    </div>
  );
};
