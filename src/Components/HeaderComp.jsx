import React, { useState, useEffect, useRef } from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import HeaderCategoryLi from "./HeaderCategoryLi";
import Categories from "./Categories";
import Languages from "./Languages";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

function HeaderComp() {
  const WhiteText = styled.div`
    color: #fff;
  `;
  const [isEmpty, setIsEmpty] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");
  console.log(userName);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    // You can also remove the user's name if needed
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const headerDivRef = useRef(null); // Create a ref for the header-div-1 element
  function handleChange(event) {
    if (event.target.value === "") {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  }

  useEffect(() => {
    function handleScroll() {
      if (headerDivRef.current) {
        // Check if the element exists before accessing its properties
        const headerDivHeight =
          headerDivRef.current.getBoundingClientRect().height;

        if (window.pageYOffset > headerDivHeight) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    }

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll); // Remove the event listener when the component unmounts
    };
  }, []);

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
          alt=""
          srcset=""
          style={{ width: "120px", marginTop: "-25px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ marginTop: "10px" }}>
        <Nav className="mr-auto">
          <NavDropdown
            title={<WhiteText>All</WhiteText>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">Movies</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">TV Show</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">WatchList</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="/" style={{ color: "#fff" }}>
            Live TV
          </Nav.Link>

          <NavDropdown
            title={<WhiteText>Categories</WhiteText>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="/">
              {Categories.map((listitem) => {
                return (
                  <HeaderCategoryLi key={listitem.id} name={listitem.name} />
                );
              })}
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<WhiteText>Genres</WhiteText>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              {Categories.map((listitem) => {
                return (
                  <HeaderCategoryLi key={listitem.id} name={listitem.name} />
                );
              })}
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<WhiteText>Languages</WhiteText>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              {Languages.map((listitem) => {
                return (
                  <HeaderCategoryLi key={listitem.id} name={listitem.name} />
                );
              })}
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title={<WhiteText>{userName ? userName : "Login"}</WhiteText>}
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item href="#action/3.1">
              <li className="header-nav-profileinfo-ul-li">
                <button onClick={handleLogout}>Sign Out</button>
              </li>
              <li className="header-nav-profileinfo-ul-li">
                <Link to="/login">Sign In</Link>
              </li>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderComp;
