import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/thunks/fetchUsers";
import Skeleton from "./Skeleton";

function UserList () {
  const dispatch = useDispatch();
  const { isLoading, data, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // times={6} : number of gray color bars loading
  if (isLoading) {
    return <Skeleton times={6} className='h-10 w-full' />
  };
  if (error) {
    return <div>Error fetching data...</div>;
  };

  return (
    <div>
      {data.lenght}
    </div>
  )
};

export default UserList;
