import {
  Table,
  TableContainer,
  Th,
  Thead,
  Tbody,
  Tr,
  Td,
  HStack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import useUsersStore from "../stores/userQueryStore";
import type { User } from "../entities/User";

interface Props {
  users: User[];
  totalPages: number;
}

function Users({ users, totalPages }: Props) {
  const navigate = useNavigate();

  const page = useUsersStore((selector) => selector.page);
  const nextPage = useUsersStore((selector) => selector.nextPage);
  const prevPage = useUsersStore((selector) => selector.prevPage);

  return (
    <>
      <TableContainer overflowX="auto">
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th display={{ base: "none", md: "table-cell" }}>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th display={{ base: "none", md: "table-cell" }}>Email</Th>
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
                <Td display={{ base: "none", md: "table-cell" }}>{user.id}</Td>
                <Td>{user.firstName}</Td>
                <Td>{user.lastName}</Td>
                <Td display={{ base: "none", md: "table-cell" }}>
                  {user.email}
                </Td>
                <Td>{user.phone}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack mt={4} justifyContent={"center"}>
        <Button onClick={prevPage} isDisabled={page == 1}>
          Previous
        </Button>

        <Button onClick={nextPage} isDisabled={page == totalPages}>
          Next
        </Button>
      </HStack>
    </>
  );
}

export default Users;
