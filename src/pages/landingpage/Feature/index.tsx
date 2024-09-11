import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

import FeatureImage1 from "@/assets/images/home/feature-img-1.webp"
import FeatureImage2 from "@/assets/images/home/feature-img-2.webp"
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/Animation"
import SectionWrapper from "@/components/SectionWrapper"
import WebpImage from "@/components/WebpImage"
import useCheckViewport from "@/hooks/useCheckViewport"

const FEATURES = [
  {
    icon: FeatureImage1,
    title: "Build",
    description: "EVM compatibility enables builders to smoothly deploy their existing application on Scroll using their favorite tools.",
  },
  {
    icon: FeatureImage2,
    title: "Expand",
    description: "Scroll SDK makes the process of launching Satellite Chain seamless. Own your blockspace, we’ll take care of the rest.",
  },
]

const FeatureBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12rem",
  paddingTop: "6.4rem",
  "&:nth-of-type(even)": {
    flexDirection: "row-reverse",
  },
  "&>*": {
    // flex: 1,
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse !important",
    alignItems: "flex-start",
    paddingTop: "3.2rem",
    gap: "0.8rem",
    "&:nth-of-type(odd)": {
      textAlign: "right",
      alignItems: "flex-end",
    },
  },

  [theme.breakpoints.up("xl")]: {
    paddingBottom: "20rem",
    gap: "20rem",
  },
}))

const FeatureImg = styled(WebpImage)(({ theme }) => ({
  width: "100%",
  display: "inline-block",
  [theme.breakpoints.up("md")]: {
    maxWidth: "52rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "32rem",
  },
}))

const FeatureTitle = styled(Typography)(({ theme }) => ({
  // textAlign: "left",
  marginBottom: "2.4rem",
  [theme.breakpoints.down("md")]: {
    marginBottom: "0.8rem",
    // textAlign: "center",
  },
}))

const FeatureTextBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    maxWidth: "47.4rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    // textAlign: "center",
  },
  [theme.breakpoints.down("sm")]: {
    width: "32rem",
  },
}))

const FeatureDescription = styled(Typography)(({ theme }) => ({
  // textAlign: "left",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
  },
}))

const Feature = () => {
  const { isPortrait, isMobile } = useCheckViewport()

  const ComponentToRender = (featureIdx, elementIdx, children) => {
    if (isPortrait) {
      return <FadeInUp>{children}</FadeInUp>
    }

    const isEven = featureIdx % 2 === 0

    if (elementIdx === 0) {
      return isEven ? <SlideInLeft triggerOnce>{children}</SlideInLeft> : <SlideInRight triggerOnce>{children}</SlideInRight>
    } else {
      return isEven ? <SlideInRight triggerOnce>{children}</SlideInRight> : <SlideInLeft triggerOnce>{children}</SlideInLeft>
    }
  }

  const renderFeatures = () => {
    return FEATURES.map((feature, featureIdx) => {
      return (
        <FeatureBox key={featureIdx}>
          {ComponentToRender(
            featureIdx,
            1,
            <FeatureTextBox>
              <FeatureTitle variant="H4">{feature.title}</FeatureTitle>
              <FeatureDescription variant="Body3">{feature.description}</FeatureDescription>
            </FeatureTextBox>,
          )}
          {ComponentToRender(featureIdx, 0, <FeatureImg src={feature.icon} />)}
        </FeatureBox>
      )
    })
  }

  return (
    <SectionWrapper sx={{ py: ["4.4rem", "8.5rem"] }}>
      <FadeInUp>
        <Typography
          sx={{
            fontSize: ["2rem", "3.2rem"],
            lineHeight: ["3.2rem", "4.8rem"],
            textAlign: "center",
          }}
        >
          Scroll is the leading zero-knowledge rollup. {!isMobile && <br></br>}
          Scaling Ethereum for good.
        </Typography>
      </FadeInUp>
      {renderFeatures()}
    </SectionWrapper>
  )
}

export default Feature
