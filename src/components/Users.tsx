import {
  Spinner,
  Table,
  TableContainer,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";
import useUsers from "../hooks/useUsers";
import { Link } from "react-router-dom";

function Users() {
  const { data, isLoading, error, hasNextPage, fetchNextPage } = useUsers();

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const users = data.pages.flatMap((page) => page.users) ?? [];

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Link to={`/users/${user.id}`}>
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td>{user.email}</Td>
                <Td>{user.phone}</Td>
              </Tr>
            </Link>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default Users;
