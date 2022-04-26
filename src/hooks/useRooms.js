import { useState, useEffect } from "react";
import { fetchRooms } from "../utils/api";

const useRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms().then((rooms) => {
      setRooms(rooms);
      setLoading(false);
    });
  }, []);

  return { rooms, loading };
};

export default useRooms;
