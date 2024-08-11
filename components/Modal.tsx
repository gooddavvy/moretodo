import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";

interface ModalProps {
  open: boolean;
  title: string;
  content: string;
  value?: string;
  onClose: () => void;
  onConfirm: (value?: string) => void;
  showInput?: boolean;
}

let Modal: React.FC<ModalProps> = ({
  open,
  title,
  content,
  value = "",
  onClose,
  onConfirm,
  showInput = false,
}) => {
  let [inputValue, setInputValue] = useState(value);

  let handleConfirm = () => {
    onConfirm(inputValue);
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setInputValue("");
        onClose();
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
        {showInput && (
          <TextField
            autoFocus
            margin="dense"
            label="Task"
            type="text"
            fullWidth
            variant="standard"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleConfirm} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
