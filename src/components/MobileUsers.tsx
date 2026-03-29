import { Avatar, Box, useColorModeValue, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import type { User } from "../entities/User";
import useUsersStore from "../stores/userQueryStore";
import EmptyState from "./EmptyState";

interface Props {
  users: User[];
}

function MobileUsers({ users }: Props) {
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const search = useUsersStore((selector) => selector.search);

  const isEmpty = users.length === 0;

  return (
    <VStack spacing={3} align={"stretch"}>
      {isEmpty ? (
        <Box p={4} borderRadius="lg" shadow="sm" borderWidth="1px">
          <EmptyState search={search} />
        </Box>
      ) : (
        users.map((user) => (
          <Box
            key={user.id}
            p={4}
            borderRadius="lg"
            bg={bg}
            shadow="sm"
            borderWidth="1px"
            onClick={() => navigate(`/users/${user.id}`)}
            _hover={{ cursor: "pointer" }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar name={user.firstName} mr={3} src={user.image} />
              <Box>
                <Text fontWeight="bold">
                  {user.firstName} {user.lastName}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  ID: {user.id}
                </Text>
              </Box>
            </Box>
            <Text fontSize="sm">{user.email}</Text>
            <Text fontSize="sm" color="gray.500">
              {user.phone}
            </Text>
          </Box>
        ))
      )}
    </VStack>
  );
}

export default MobileUsers;
