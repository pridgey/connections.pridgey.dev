import { Dialog } from "@components";

type LeaderBoardProps = {
  OnClose: () => void;
};

export const LeaderBoard = (props: LeaderBoardProps) => (
  <Dialog
    Title="You're Doing Great!"
    OnClose={props.OnClose}
    Body="Stats not yet available"
  />
);
