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

      <Footer />
    </>
  );
};

export default Layout;
