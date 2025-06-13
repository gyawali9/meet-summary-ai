import { Dispatch, SetStateAction } from "react";
import {
  CommandDialog,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function DashboardCommand({ open, setOpen }: Props) {
  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandList>List</CommandList>
      </CommandList>
    </CommandDialog>
  );
}
