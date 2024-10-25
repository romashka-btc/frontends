import { useRef } from "react"

import { Box, Container } from "@mui/material"

import Button from "@/components/Button"
import ScrollExpandedBg from "@/components/ScrollExpandedBg"
import SectionHeader from "@/components/SectionHeader"

import Carousel from "./Carousel"

const ExploreEcosystem = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  return (
    <ScrollExpandedBg anchorEl={sectionRef} fastScrollIn>
      <Box ref={sectionRef} sx={{ pt: ["0.2rem", "2.2rem"], pb: ["4.8rem", "11.2rem"] }}>
        <Container>
          <SectionHeader
            dark
            sx={{ mb: ["4rem", "10rem"] }}
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
