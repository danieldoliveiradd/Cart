import React, { Component } from "react";
import Menu from "./svg/bars.svg";
import Close from "./svg/times.svg";
import Cart from "./svg/cart.svg";
import {Link} from "react-router-dom";

export class Header extends Component {

    state = {
        toggle: false
    }

    menuToggle = () => {
        this.setState({toggle: !this.state.toggle})
    }

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <header>
          <div className="menu" onClick={this.menuToggle}>
            <img src={Menu} alt="" width="20" />
          </div>
          <div className="logo">
            <h1><Link to="/">Cart</Link></h1>
          </div>
          <nav>
            <ul className={toggle ? "toggle" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Login / Register</Link></li>
                <li className="close" onClick={this.menuToggle}>
                    <img src={Close} alt="" width="20" />
                </li>
            </ul>
            <div className="nav-cart">
                <span>0</span>
                <Link to="cart">
                    <img src={Cart} alt="" width="20"/>
                </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
