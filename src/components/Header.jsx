import logo from "../assets/chef_claude_icon@2x.png";

export default function Header() {
  return (
    <header className="nav">
      <img src={logo} alt="Chef Claude Logo" className="nav__logo" />
      <span className="nav__text">Chef Claude</span>
    </header>
  );
}
