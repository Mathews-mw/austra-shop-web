import { NavItem } from './nav-item';

export function NavLink() {
	return (
		<nav className="hidden flex-row items-center lg:flex">
			<NavItem title="Home" href="/" />
			<NavItem title="Produtos" href="/products" />
			<NavItem title="Promoções" href="/promotions" />
			<NavItem title="Novidades" href="/news" />
		</nav>
	);
}
