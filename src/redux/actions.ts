import {get} from "./apiCalls"
import {PHOTOS_FETCH, PHOTOS_PAGE_AMOUNT, PHOTOS_PAGINATE} from "./actionTypes"
import {PhotoType, ChangeItemsType, PaginatePhotosType} from "./types"

const paginatePhotos: PaginatePhotosType = (photos, photosPerPage, sliceAmount) => {
	let newPhotosArray = []
	let sliceCount = 0
	for (let i = 0; i < sliceAmount; i++){
		let slicedArray = photos.slice(sliceCount, sliceCount + photosPerPage)
		newPhotosArray.push(slicedArray)
		sliceCount += photosPerPage
	}
	return newPhotosArray
};

export const getPhotos = (photosPerPage: number) => {
	return async (dispatch: any) => {
    let photos: Array<PhotoType> = await get("photos")
		let sliceAmount = Math.ceil(photos.length/photosPerPage)
		let paginatedPhotos = await paginatePhotos(photos, photosPerPage, sliceAmount)
		dispatch({ type: PHOTOS_PAGE_AMOUNT, payload: sliceAmount });
		dispatch({ type: PHOTOS_FETCH, payload: photos });
		dispatch({ type: PHOTOS_PAGINATE, payload: paginatedPhotos });
	};
};

export const changeItems: ChangeItemsType = (photos, photosPerPage, isDelete) => {
	return async (dispatch: any) => {
		let sliceAmount = Math.ceil(photos.length/photosPerPage)
		let paginatedPhotos = await paginatePhotos(photos, photosPerPage, sliceAmount)
		if (isDelete) {
			dispatch({ type: PHOTOS_PAGE_AMOUNT, payload: sliceAmount });
		}
		dispatch({ type: PHOTOS_PAGINATE, payload: paginatedPhotos });
		dispatch({ type: PHOTOS_FETCH, payload: photos });
	}
}