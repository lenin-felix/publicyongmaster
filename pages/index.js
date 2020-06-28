import Nav from '../components/Nav'
import { ArgonLeftSidebar } from '../components/ArgonSidebar'
import { ArgonPopup } from '../components/ArgonPopup'

const IndexPage = () => (
  <>
    <Nav />
    <ArgonLeftSidebar />
    <p>Hello, I'm the index page</p>
    <ArgonPopup/>
  </>
)

export default IndexPage
