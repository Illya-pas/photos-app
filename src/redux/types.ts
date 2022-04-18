export type PhotoType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export type PhotosReducerState = {
    photos: Array<PhotoType>
    paginatedPhotos: Array<PhotoType[]>
    pageAmount: number
} | void

export type ChangeItemsType = (
    photos: Array<PhotoType>,
    photosPerPage: number,
    isDelete?: boolean
) => void

export type PaginatePhotosType = (
    photos: Array<PhotoType>,
    photosPerPage: number,
    sliceAmount: number
) => Array<PhotoType[]>