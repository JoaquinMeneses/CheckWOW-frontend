import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const Account = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="p-4 rounded-lg hover:bg-[#f8d300] hover:text-black font-bold transition-colors">
          Mi cuenta
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Editar mi cuenta</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Cerrar mi cuenta
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default Account;
