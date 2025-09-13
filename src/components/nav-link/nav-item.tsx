'use client';

import { twMerge } from 'tailwind-merge';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface INavItemProps extends LinkProps {
	title: string;
	href: string;
}

export function NavItem({ title, href, ...rest }: INavItemProps) {
	const pathname = usePathname();

	let isActive = false;

	if (pathname === href || pathname === rest.as) {
		isActive = true;
	}

	return (
		<Link
			href={href}
			data-state={isActive}
			className={twMerge([
				'text-foreground flex items-start gap-4 p-2',
				'hover:text-primary',
				'data-[state=true]:text-primary data-[state=true]:font-bold',
			])}
			{...rest}
		>
			<span>{title}</span>
		</Link>
	);
}
