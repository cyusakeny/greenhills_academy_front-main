import React from "react";
import Nav from "./ui/molecules/nav";
import Footer from "./ui/molecules/footer";

const Layout = (props) => {
  return (
    <>
      <Nav />
      <main className='flex-grow'>
        {props.children}
      </main>
<<<<<<< HEAD

=======
>>>>>>> 0174d9e937e6172ebe2f0a62d01a14d4d17b720a
      <Footer />
    </>
  );
};

export default Layout;
