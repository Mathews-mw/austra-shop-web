'use client';

import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

interface INavItemProps extends LinkProps {
	icon: ElementType;
	href: string;
}

export function NavIconItem({ icon: Icon, href, ...rest }: INavItemProps) {
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
				'bg-secondary text-foreground flex items-start gap-4 rounded-lg p-2',
				'hover:text-primary',
				'data-[state=true]:bg-primary-foreground data-[state=true]:text-primary data-[state=true]:font-bold',
			])}
			{...rest}
		>
			<Icon className="h-5 w-5" />
		</Link>
	);
}
