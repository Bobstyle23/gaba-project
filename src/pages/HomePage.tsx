import { Box, Grid, GridItem, Spinner } from "@chakra-ui/react";
import Users from "../components/Users";
import { useState } from "react";
import useUsers, { LIMIT } from "../hooks/useUsers";

function HomePage() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, error } = useUsers(page);

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
            <Users
              users={users}
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default HomePage;
