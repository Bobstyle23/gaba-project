import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Users from "../components/Users";
import useUsers, { LIMIT } from "../hooks/useUsers";
import useUsersStore from "../stores/userQueryStore";

function HomePage() {
  const { page, search } = useUsersStore();
  // const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useUsers(page, search);

  if (isLoading) return <Spinner margin={5} />;
  if (error) throw error;

  const users = data?.users ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / LIMIT);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"main"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="main">
          <Box padding={2}>
            <Users users={users} totalPages={totalPages} />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
