import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "../components/ExpandablePanel";
import Skeleton from "../components/Skeleton";
import Button from "../components/Button";

function AlbumList(user) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results ] = useAddAlbumMutation();

  let content;
  if (isLoading) {
    content = <Skeleton times={3} />
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      const header = <div>{album.title}</div>;

      return <ExpandablePanel key={album.id} header={header}>
        list of albmus
      </ExpandablePanel>
    });
  };
  
  const handlerAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div>
        {user.name}
        <Button onClick={handlerAddAlbum}>
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
