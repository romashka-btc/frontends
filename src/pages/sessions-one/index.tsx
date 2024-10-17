import { Container, Stack } from "@mui/material"

import Guidance from "./Guidance"
import Header from "./Header"
import SignatureRequestDialog from "./SignatureRequestDialog"
import TotalMarks from "./TotalMarks"

const Sessions = () => {
  return (
    <>
      <Header></Header>
      <Container
        sx={{
          maxWidth: ["100% !important", "100% !important", "1272px !important"],
        }}
      >
        <Stack
          sx={[
            { maxWidth: "88.4rem", mx: "auto", mt: "3.2rem", mb: "3.4rem" },
            theme => ({
              [theme.breakpoints.down("md")]: {
                "& > *:nth-of-type(n + 4)": {
                  marginTop: "2.4rem",
                },
              },
              [theme.breakpoints.down("sm")]: {
                "& > *:nth-of-type(n + 4)": {
                  marginTop: "1.6rem",
                },
              },
            }),
          ]}
        >
          <TotalMarks></TotalMarks>
          <Guidance />
          <SignatureRequestDialog />
        </Stack>
      </Container>
    </>
  )
}

export default Sessions
