import React, { useState, useEffect } from "react";
import { getPhotos, changeItems } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { PhotoType } from "../redux/types";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { PhotoItemList } from "../components/PhotoItemList";
import { ModalPhoto } from "../components/ModalPhoto";
import { SortPhotos } from "../components/SortPhotos";
import "./App.scss";

function App(): JSX.Element {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [openedItem, setOpenedItem] = useState({});
  const fetchedPhotos: Array<PhotoType> = useSelector((state: any) => state.photos.photos);
  const paginatedPhotos: Array<PhotoType[]> = useSelector((state: any) => state.photos.paginatedPhotos);
  const pageAmount: number = useSelector((state: any) => state.photos.pageAmount);

  const [open, setOpen] = useState(false);
  let photosPerPage = 24;

  const handleOpen = (item: PhotoType) => {
    setOpenedItem(item);
    setOpen(true);
  };

  useEffect(() => {
    dispatch(getPhotos(photosPerPage));
  }, []);

  const handleChange = (e: any) => {
    if (e.target.innerText) {
      setPage(+e.target.innerText);
      return;
    }
    switch (e.target.dataset.testid) {
      case "NavigateNextIcon":
        setPage(page + 1);
        return;

      case "NavigateBeforeIcon":
        setPage(page - 1);
    }
  };

  const deleteSelectedItem = (itemId: number) => {
    let newFetchedPhotos = [...fetchedPhotos];
    let itemIndex = newFetchedPhotos.findIndex((item) => item.id === itemId);
    newFetchedPhotos.splice(itemIndex, 1);
    let isDelete = true;
    dispatch(changeItems(newFetchedPhotos, photosPerPage, isDelete));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Photo App</h1>
      </header>
      <SortPhotos fetchedPhotos={fetchedPhotos} photosPerPage={photosPerPage} />
      <PhotoItemList
        paginatedPhotos={paginatedPhotos}
        page={page}
        handleOpen={handleOpen}
        deleteSelectedItem={deleteSelectedItem}
      />
      <ModalPhoto open={open} setOpen={setOpen} photoItem={openedItem} />
      <Stack spacing={2}>
        <Pagination count={pageAmount} page={page} onChange={(e) => handleChange(e)} color="primary" />
      </Stack>
    </div>
  );
}

export default App;
