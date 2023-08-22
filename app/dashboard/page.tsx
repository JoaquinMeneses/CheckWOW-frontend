"use client";
import ButtonTable from "@/components/ButtonTable";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    main: "Panaderito",
    alters: ["Panpija", "Panchota"],
    puntos: 10,
    acciones: <ButtonTable />,
  },
];

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

const Dashboard = () => {
  return (
    <div className="m-4">
      <Table aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>
                  {columnKey === "alters"
                    ? item.alters.join(", ")
                    : getKeyValue(item, columnKey)}
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
