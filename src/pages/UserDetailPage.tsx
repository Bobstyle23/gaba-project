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
  useBreakpointValue,
  Box,
  Avatar,
  Text,
  useColorModeValue,
  VStack,
  Divider,
  HStack,
} from "@chakra-ui/react";

function UserDetailPage() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useUserDetail(Number(id));

  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const bg = useColorModeValue("white", "gray.800");
  const labelColor = useColorModeValue("gray.500", "gray.400");

  if (isLoading) return <Spinner margin={5} />;
  if (error) throw error;

  return isMobile ? (
    <Box p={4} borderRadius="xl" bg={bg} shadow="md" borderWidth="1px">
      <VStack align="stretch" spacing={4}>
        <HStack spacing={4}>
          <Avatar name={user?.firstName} src={user?.image} size="lg" />
          <Box>
            <Text fontWeight="bold" fontSize="lg">
              {user?.firstName} {user?.lastName}
            </Text>
            <Text fontSize="sm" color={labelColor}>
              @{user?.username}
            </Text>
          </Box>
        </HStack>

        <Divider />

        <Box>
          <Text fontWeight="semibold" mb={1}>
            Personal Info
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              Age:
            </Text>{" "}
            {user?.age}
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              Gender:
            </Text>{" "}
            {user?.gender}
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              Birth Date:
            </Text>{" "}
            {user?.birthDate}
          </Text>
        </Box>

        <Divider />

        <Box>
          <Text fontWeight="semibold" mb={1}>
            Location
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              City:
            </Text>{" "}
            {user?.address.city}
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              State:
            </Text>{" "}
            {user?.address.state}
          </Text>
        </Box>

        <Divider />

        <Box>
          <Text fontWeight="semibold" mb={1}>
            Work
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              Job:
            </Text>{" "}
            {user?.company.title}
          </Text>
        </Box>

        <Divider />

        <Box>
          <Text fontWeight="semibold" mb={1}>
            Physical
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              Height:
            </Text>{" "}
            {user?.height.toFixed(0)} cm
          </Text>
          <Text fontSize="sm">
            <Text as="span" color={labelColor}>
              Weight:
            </Text>{" "}
            {user?.weight.toFixed(0)} kg
          </Text>
        </Box>
      </VStack>
    </Box>
  ) : (
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
