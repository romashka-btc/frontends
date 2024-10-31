import Blog from "./Blog"
import BuildWithScroll from "./BuildWithScroll"
import ExploreEcosystem from "./ExploreEcosystem"
import Header from "./Header"
import StartBuilding from "./StartBuilding"

const LandingPage = () => {
  return (
    <>
      <Header />
      <BuildWithScroll />
      <ExploreEcosystem />
      <Blog />
      <StartBuilding />
    </>
  )
}

export default LandingPage
