import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useDeleteAlbumMutation } from "../store";

function AlbumListItem ({ album }) {
  const [ removeAlbum, results] = useDeleteAlbumMutation();

  const handleDeleteAlbum = () => {
    removeAlbum(album);
  };

  const header = <>
    <Button className="m-2" loading={results.isLoading} onClick={handleDeleteAlbum}>
      <GoTrash />
    </Button>
    {album.title}
    </>;

  return <ExpandablePanel key={album.id} header={header}>
    list of photos in the albmu
  </ExpandablePanel>
};

export default AlbumListItem;
