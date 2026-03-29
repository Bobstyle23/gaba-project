import type { User } from "../entities/User";
import MobileUsers from "./MobileUsers";
import DesktopTable from "./DesktopTable";
import Pagination from "./Pagination";
import useMobile from "../hooks/useMobile";

interface Props {
  users: User[];
  totalPages: number;
}

function Users({ users, totalPages }: Props) {
  const isMobile = useMobile();

  return (
    <>
      {isMobile ? (
        <MobileUsers users={users} />
      ) : (
        <DesktopTable users={users} />
      )}

      <Pagination totalPages={totalPages} />
    </>
  );
}

export default Users;
