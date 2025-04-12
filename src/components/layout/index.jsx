import Navbar from '../navbar'; 
import Footer from '../Footer';
import SubHeader from '../navbar/subNavbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <SubHeader/>
      <main 
    //   className="min-h-[80vh]"
      >{children}</main>
      <Footer />
    </>
  );
}
