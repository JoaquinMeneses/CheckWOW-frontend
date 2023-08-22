"use client";

import Buttons from "@/components/ButtonsMenu";
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
    account: "Tony Reichert",
    main: "CEO",
    alters: "Active",
    puntos: 1,
    acciones: <ButtonTable />,
  },
  {
    key: "2",
    account: "Zoey Lang",
    main: "Technical Lead",
    alters: "Paused",
    puntos: 5,
    acciones: <ButtonTable />,
  },
  {
    key: "3",
    account: "Jane Fisher",
    main: "Senior Developer",
    alters: "Active",
    puntos: 100,
    acciones: <ButtonTable />,
  },
  {
    key: "4",
    account: "William Howard",
    main: "Community Manager",
    alters: ["Vacation"],
    puntos: 15,
    acciones: <ButtonTable />,
  },
];

const columns = [
  {
    key: "account",
    label: "CUENTA",
  },
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
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
