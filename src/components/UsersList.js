import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UsersListItem from "./UsersListItem";

function UserList() {
  const [ doFetchUsers, isLoadingUsers, loadingUsersError ] = useThunk(fetchUsers);
  const [ doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  },[doFetchUsers]);

  const handleAddUser = () => {
    doCreateUser();
  };

  let content;
    // times={6} : number of gray color bars loading
    if (isLoadingUsers) {
      content = <Skeleton times={6} className='h-10 w-full' />
    } else if (loadingUsersError) {
      content = <div>Error fetching data...</div>;
    } else {
      content = data.map((user) => {
        return <UsersListItem key={ user.id } user={ user } />
      });
    }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
          <Button 
            onClick={ handleAddUser } 
            loading={isCreatingUser}>
              + Add User
          </Button>
        {creatingUserError && 'Error creating User...'}
      </div>
      { content }
    </div>
  )
};

export default UserList;
