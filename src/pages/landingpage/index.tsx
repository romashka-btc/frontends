import { Box } from "@mui/material"
import { styled } from "@mui/system"

import Blog from "./Blog"
import Feature from "./Feature"
import GetStart from "./GetStart"
import Header from "./Header"
import Partners from "./Partners"
import StartBuilding from "./StartBuilding"

const Container = styled(Box)(({ theme }) => ({
  overflow: "hidden",
}))

const LandingPage = () => {
  return (
    <Container>
      <Header />
      <Feature />
      <GetStart />
      <Partners />
      <Blog />
      <StartBuilding />
    </Container>
  )
}

export default LandingPage
