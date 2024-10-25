import { useRef } from "react"

import { Box, Container } from "@mui/material"

import Button from "@/components/Button"
import ScrollExpandedBg from "@/components/ScrollExpandedBg"
import SectionHeader from "@/components/SectionHeader"

import Carousel from "./Carousel"

const ExploreEcosystem = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  return (
    <ScrollExpandedBg sx={{ pt: 0 }} anchorEl={sectionRef} fastScrollIn>
      <Box ref={sectionRef} sx={{ py: ["5.6rem !important", "8rem !important", "calc((100vh - 6.5rem - 54rem) / 2) !important"] }}>
        <Container>
          <SectionHeader
            dark
            sx={{ mb: ["4rem", "12rem"] }}
            title="Explore the ecosystem"
            content="We’re part of an ecosystem with a greater purpose – permissionless, flexible, and dedicated to improving the future of Ethereum."
            action={
              <Button href="/ecosystem" color="primary">
                Explore projects
              </Button>
            }
          ></SectionHeader>
        </Container>
        <Carousel />
      </Box>
    </ScrollExpandedBg>
  )
}

export default ExploreEcosystem
