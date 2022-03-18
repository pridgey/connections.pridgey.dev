import { Dialog } from "@components";
import { GuessGraph, LastSevenWinsGraph } from "@compositions";

type WinDialogProps = {
  OnClose: () => void;
};

export const WinDialog = (props: WinDialogProps) => {
  return (
    <Dialog
      Title="Great Job"
      OnClose={props.OnClose}
      Body={
        <>
          <LastSevenWinsGraph />
          <GuessGraph />
        </>
      }
    />
  );
};
