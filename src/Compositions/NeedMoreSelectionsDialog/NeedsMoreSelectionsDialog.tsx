import { Dialog } from "@components";

type NeedsMoreSelectionsDialogProps = {
  OnClose: () => void;
};

export const NeedsMoreSelectionsDialog = (
  props: NeedsMoreSelectionsDialogProps
) => (
  <Dialog
    Title="Not Enough"
    OnClose={props.OnClose}
    Body="You have selected too few items. Please select four options to check."
  />
);
