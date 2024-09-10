import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

import { FadeInUp } from "@/components/Animation"
import Button from "@/components/Button"
import useCheckViewport from "@/hooks/useCheckViewport"

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "4.8%",
  height: "calc(100vh - 6.5rem)",
  gap: "3.2rem",
  background: "url(/imgs/homepage/landing-bg.webp) center / cover no-repeat",
  [theme.breakpoints.down("md")]: {
    height: "100vw",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "7.2rem",
    background: "none",
    gap: "2.4rem",
    height: "auto",
  },
}))

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "6.4rem",
  lineHeight: "8.8rem",
  fontWeight: 600,
  width: "61rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "4rem",
    lineHeight: "5.6rem",
    marginBottom: "0.4rem",
  },
}))

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "3rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "2rem",
  },
}))

const Header = () => {
  const { isMobile } = useCheckViewport()
  return (
    <>
      <Container>
        <FadeInUp duration={700} sx={{ display: "flex" }}>
          <Title data-aos="fade-up">
            {isMobile ? (
              <>
                Homepage of the<br></br> Multichain World
              </>
            ) : (
              <>
                The Homepage of the<br></br> Multichain World
              </>
            )}
          </Title>
          <ButtonContainer>
            <Button sx={{ backgroundColor: "#FFF8F3 !important" }} href="/bridge" color="primary">
              Bridge into Scroll
            </Button>
            <Button sx={{ backgroundColor: "#FFF8F3 !important" }} target="_blank" href="https://docs.scroll.io/en/home/">
              Start building
            </Button>
          </ButtonContainer>
        </FadeInUp>
      </Container>
      {isMobile && (
        <Box sx={{ width: "100%", height: "27.8rem", background: "url(/imgs/homepage/landing-bg-mobile.webp) center / cover no-repeat" }}></Box>
      )}
    </>
  )
}

export default Header
