import { useParams } from "react-router-dom";
import useUserDetail from "../hooks/useUserDetail";
import {
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  Td,
} from "@chakra-ui/react";

function UserDetailPage() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useUserDetail(Number(id));

  if (isLoading) return <Spinner margin={5} />;
  if (error) throw error;

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Full Name</Th>
            <Th>Age</Th>
            <Th>Gender</Th>
            <Th>Birth Date</Th>
            <Th>State</Th>
            <Th>City</Th>
            <Th>Job</Th>
            <Th>Username</Th>
            <Th>Height</Th>
            <Th>Weight</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              {user?.firstName} {user?.lastName}
            </Td>
            <Td>{user?.age}</Td>
            <Td>{user?.gender}</Td>
            <Td>{user?.birthDate}</Td>
            <Td>{user?.address.state}</Td>
            <Td>{user?.address.city}</Td>
            <Td>{user?.company.title}</Td>
            <Td>{user?.username}</Td>
            <Td>{user?.height.toFixed(0)} cm</Td>
            <Td>{user?.weight.toFixed(0)} kg</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default UserDetailPage;
