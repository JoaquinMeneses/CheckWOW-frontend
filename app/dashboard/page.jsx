"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAccounts();
  }, []);

  const loadAccounts = () => {
    axios("http://localhost:8000/accounts/all")
      .then((res) => {
        /* console.log(res.data.accounts); */
        setData(res.data.accounts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleAddPoints = (id) => {
    axios("http://localhost:8000/accounts/add")
      .then(() => {
        console.log(id);
        loadAccounts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubPoints = (id) => {
    axios("http://localhost:8000/accounts/sub")
      .then(() => {
        console.log(id);
        loadAccounts();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Main</th>
          <th>Alters</th>
          <th>Puntos</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.main}</td>
            <td>{item.alters.join(", ")}</td>
            <td>{item.puntos}</td>
            <td>
              <button onClick={() => handleAddPoints(item._id)}>
                Agregar Punto
              </button>
              <button onClick={() => handleSubPoints(item._id)}>
                Quitar Punto
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Page;
