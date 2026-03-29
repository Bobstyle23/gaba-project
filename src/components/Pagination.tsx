import { HStack, Button } from "@chakra-ui/react";
import useUsersStore from "../stores/userQueryStore";

interface Props {
  totalPages: number;
}

function Pagination({ totalPages }: Props) {
  const page = useUsersStore((selector) => selector.page);
  const prevPage = useUsersStore((selector) => selector.prevPage);
  const nextPage = useUsersStore((selector) => selector.nextPage);

  return (
    <HStack mt={4} justifyContent={"center"}>
      <Button onClick={prevPage} isDisabled={page == 1}>
        Previous
      </Button>

      <Button onClick={nextPage} isDisabled={page == totalPages}>
        Next
      </Button>
    </HStack>
  );
}

export default Pagination;
