import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "../components/ExpandablePanel";
import Skeleton from "../components/Skeleton";
import Button from "../components/Button";
import AlbumListItem from "./AlbumListItem";

function AlbumList(user) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results ] = useAddAlbumMutation();

  let content;
  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      return <AlbumListItem key={album.id} album={album} />
    });
  };
  
  const handlerAddAlbum = () => {
    addAlbum(user.id);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold"> Albums for {user.name} </h3>
        <Button loading={isLoading} onClick={handlerAddAlbum}>
          + Add Albmu
        </Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  )
};

export default AlbumList;
