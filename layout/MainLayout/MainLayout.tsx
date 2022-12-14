import MainHeader from "./MainHeader/MainHeader";
import MainFooter from "./MainFooter/MainFooter";

const MainLayout = ({ children }) => {
  return (
    <div>
      <MainHeader />
      <main>
        {children}
      </main>
      <MainFooter />
    </div>
  )
}

export default MainLayout
