import { GoTrash } from "react-icons/go";
import { useDeletePhotoMutation } from "../store";


function PhotosListItem ({ photo }) {

  const [ deletePhoto ] = useDeletePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };

  return (
    <div onClick={handleDeletePhoto} className="relative cursor-pointer m-2">
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-grey-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
};

export default PhotosListItem;
