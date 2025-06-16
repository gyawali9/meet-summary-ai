import { Dispatch, SetStateAction } from "react";
import { CommandInput, CommandList, CommandResponsiveDialog } from "@/components/ui/command";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export function DashboardCommand({ open, setOpen }: Props) {
  return (
    <CommandResponsiveDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or agent" />
      <CommandList>
        <CommandList>List</CommandList>
      </CommandList>
    </CommandResponsiveDialog>
  );
}
