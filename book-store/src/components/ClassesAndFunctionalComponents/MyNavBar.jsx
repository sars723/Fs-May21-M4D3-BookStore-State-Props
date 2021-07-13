import { Navbar, Nav } from "react-bootstrap";
import "./css/MyNavBarStyles.css";
const MyNavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <Navbar.Brand href="#home">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0K2zTxBIc-_v9gmDHfFN6mNx3xJn2tBel-65HEvPmUF9_ssB2WRsNPj3Rf-ejRo4DTwM&usqp=CAU"
          alt=""
          style={{ width: "120px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Browse</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavBar;
