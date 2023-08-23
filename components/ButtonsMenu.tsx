import { Button, ButtonGroup, Tooltip } from "@nextui-org/react";
import DeleteAccount from "@/components/DeleteAccount";
import ModifyAccount from "@/components/ModifyAccount";
import ChangePoint from "./ChangePoint";

interface id {
  id: number;
}

const ButtonsMenu = ({ id }: id) => {
  console.log(id);
  return (
    <div className="flex justify-center gap-4">
      <div className="flex flex-col items-center">
        <ChangePoint id={id}/>
      </div>
      <div className="flex flex-col items-center">
        <ButtonGroup>
          <ModifyAccount />
          <DeleteAccount />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ButtonsMenu;
