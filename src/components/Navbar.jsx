function NavBar() {
  return (
    <nav>
      <p>Bilal Ahsan</p>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div>
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faWhatsapp} />
      </div>
    </nav>
  );
}

export default NavBar;
