function Header() {
	return (
		<nav class="navBar">
			<a href="./" class="logoName">COMATNET</a>
			<div class="menuContainer">
				<ul class="menuBox">
					<li class="menuItem"><a href="./dashboard">Dashboard</a></li>
					<li class="menuItem"><a href="./cryptoservice">Crypto Service</a></li>
					<li class="menuItem"><a href="./snmp">SNMP</a></li>
					<li class="menuItem"><a href="#!">Accounts</a></li>
					<li class="menuItem"><a href="#!">Monitoring 	&amp; Reports</a></li>
					<li class="menuItem"><a href="#!">Support Catalogue</a></li>
					<li class="menuItem"><a href="#!">Administration</a></li>
				</ul>
			</div>
			<button id="logoutBtn" class="logoutBtn" type="button">Logout</button>
		</nav>
	);
}

export default Header;