"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import ButtonsMenu from "@/components/ButtonsMenu";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:8000/accounts/all")
      .then((res) => {
        console.log(res.data.accounts);
        setData(res.data.accounts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      key: "main",
      label: "MAIN",
    },
    {
      key: "alters",
      label: "ALTERS",
    },
    {
      key: "puntos",
      label: "PUNTOS",
    },
    {
      key: "acciones",
      label: "ACCIONES",
    },
  ];

  return (
    <div className="m-4">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.key}
              className={column.label === "ACCIONES" ? "text-center" : ""}
            >
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={data}>
          {(item: any) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell key={columnKey}>
                  {columnKey === "acciones" ? (
                    <ButtonsMenu id={item._id} />
                  ) : columnKey === "alters" ? (
                    item.alters.join(", ")
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
