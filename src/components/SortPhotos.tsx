import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { PhotoType } from "../redux/types";
import { changeItems } from "../redux/actions";

interface ISortProps {
  fetchedPhotos: Array<PhotoType>;
  photosPerPage: number;
}

export const SortPhotos = ({ fetchedPhotos, photosPerPage }: ISortProps) => {
  const [sortDirection, setSortDirection] = useState("none");
  const dispatch = useDispatch();

  const handleSort = () => {
    let newFetchedPhotos = [...fetchedPhotos];

    switch (sortDirection) {
      case "none":
        setSortDirection("up");
        newFetchedPhotos.sort((a, b) => a.albumId - b.albumId);
        console.log("up", newFetchedPhotos);
        dispatch(changeItems(newFetchedPhotos, photosPerPage));
        return;
      case "up":
        setSortDirection("down");
        newFetchedPhotos.sort((a, b) => b.albumId - a.albumId);
        console.log("down", newFetchedPhotos);
        dispatch(changeItems(newFetchedPhotos, photosPerPage));
        return;
      case "down":
        setSortDirection("none");
        newFetchedPhotos.sort((a, b) => a.id - b.id);
        console.log("none", newFetchedPhotos);
        dispatch(changeItems(newFetchedPhotos, photosPerPage));
    }
  };

  return (
    <div onClick={handleSort} className={`sort-photos sort-${sortDirection}`}>
      <h3>Album ID</h3>
      <ArrowUpwardIcon />
    </div>
  );
};
