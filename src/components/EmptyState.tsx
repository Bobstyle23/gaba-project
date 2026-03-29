import { Text } from "@chakra-ui/react";

function EmptyState({ search }: { search: string }) {
  return search ? (
    <Text>No results for "{search}"</Text>
  ) : (
    <Text>No users available</Text>
  );
}

export default EmptyState;
