function Header() {
	return (
		<nav className="navBar">
			<a href="/" className="logoName">COMATNET</a>
			<div className="menuContainer">
				<ul className="menuBox">
					<li className="menuItem"><a href="/dashboard">Dashboard</a></li>
					<li className="menuItem"><a href="/cryptoservice">Crypto Service</a></li>
					<li className="menuItem"><a href="./snmp">SNMP</a></li>
					<li className="menuItem"><a href="#!">Accounts</a></li>
					<li className="menuItem"><a href="#!">Monitoring 	&amp; Reports</a></li>
					<li className="menuItem"><a href="#!">Support Catalogue</a></li>
					<li className="menuItem"><a href="#!">Administration</a></li>
				</ul>
			</div>
			<button id="logoutBtn" className="logoutBtn" type="button">Logout</button>
		</nav>
	);
}

export default Header;