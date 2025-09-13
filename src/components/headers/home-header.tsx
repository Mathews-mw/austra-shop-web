import Image from 'next/image';
import { Input } from '../ui/input';
import { Search, ShoppingBag, ShoppingCart, User } from 'lucide-react';
import { SearchInput } from '../search-input';

export function HomeHeader() {
	return (
		<header className="mx-auto flex w-full max-w-[1440px] items-center justify-between p-4">
			<div className="flex items-center">
				<Image src="/logo.png" alt="logo" width={84} height={84} />
				<div className="flex flex-col text-xl leading-none font-bold">
					<span className="text-[#ffa42c]">Austra</span>
					<span className="text-[#414143]">Shop</span>
				</div>
			</div>

			<nav className="space-x-4">
				<span>Categoria</span>
				<span>Promoções</span>
				<span>Novidades</span>
			</nav>

			<SearchInput />

			<nav className="flex gap-4">
				<div className="flex items-center gap-1.5">
					<User />
					<span className="text-sm font-semibold">Conta</span>
				</div>

				<div className="flex items-center gap-1.5">
					<ShoppingCart />
					<span className="text-sm font-semibold">Carrinho</span>
				</div>
			</nav>
		</header>
	);
}
