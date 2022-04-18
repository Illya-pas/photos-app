import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CloseIcon from "@mui/icons-material/Close";
import { PhotoType } from "../redux/types";

interface IItemListProps {
  paginatedPhotos: Array<PhotoType[]>;
  page: number;
  handleOpen: (item: PhotoType) => void;
  deleteSelectedItem: (itemId: number) => void;
}

export const PhotoItemList = ({ paginatedPhotos, page, handleOpen, deleteSelectedItem }: IItemListProps) => {
  return (
    <ImageList sx={{ width: 1200, height: 613, paddingTop: "20px" }} cols={8} rowHeight={150}>
      {paginatedPhotos[page] &&
        paginatedPhotos[page - 1].map((item) => (
          <ImageListItem className="app-item" key={item.id}>
            <h5 className="item-header">{item.id}</h5>
            <CloseIcon className="close-icon" onClick={() => deleteSelectedItem(item.id)} />
            <img
              onClick={() => handleOpen(item)}
              src={`${item.thumbnailUrl}?w=150&h=150&fit=crop&auto=format`}
              srcSet={`${item.thumbnailUrl}?w=150&h=150&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
    </ImageList>
  );
};
