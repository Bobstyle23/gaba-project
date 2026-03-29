import { useNavigate } from "react-router-dom";
import type { User } from "../entities/User";
import {
  Table,
  TableContainer,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  Avatar,
} from "@chakra-ui/react";

interface Props {
  users: User[];
}

function DesktopTable({ users }: Props) {
  const navigate = useNavigate();
  return (
    <TableContainer overflowX="auto">
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Avatar</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Phone</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr
              key={user.id}
              onClick={() => navigate(`/users/${user.id}`)}
              _hover={{ cursor: "pointer" }}
            >
              <Td>{user.id}</Td>
              <Td>
                <Avatar name={user.firstName} src={user.image} />
              </Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.email}</Td>
              <Td>{user.phone}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DesktopTable;
