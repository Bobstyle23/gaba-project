import { useBreakpointValue } from "@chakra-ui/react";
import type { User } from "../entities/User";
import MobileUsers from "./MobileUsers";
import DesktopTable from "./DesktopTable";
import Pagination from "./Pagination";

interface Props {
  users: User[];
  totalPages: number;
}

function Users({ users, totalPages }: Props) {
  const isEmpty = users.length === 0;
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

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
