import Navigation from "./navigation"

const Layout = ({ children, categories, seo }) => (
  <>
    <Navigation categories={categories} />
    {children}
  </>
)

export default Layout
