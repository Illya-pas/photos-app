import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

interface IModalProps {
  open: boolean;
  setOpen: any;
  photoItem: any;
}

export const ModalPhoto = ({ open, setOpen, photoItem }: IModalProps) => {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <img src={photoItem && photoItem.url} alt={photoItem && photoItem.title} />
      </Box>
    </Modal>
  );
};
