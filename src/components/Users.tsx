import {
  Spinner,
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
import useUsers, { LIMIT } from "../hooks/useUsers";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Users() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useUsers(page);

  const navigate = useNavigate();

  if (isLoading) return <Spinner margin={5} />;

  if (error) throw error;

  const users = data.users ?? [];
  const total = data.total ?? 0;

  const totalPages = Math.ceil(total / LIMIT);

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
        <Button
          onClick={() => setPage((page) => Math.max(page - 1, 1))}
          isDisabled={page == 1}
        >
          Previous
        </Button>

        <Button
          onClick={() => setPage((page) => Math.min(page + 1, totalPages))}
          isDisabled={page == totalPages}
        >
          Next
        </Button>
      </HStack>
    </>
  );
}

export default Users;
