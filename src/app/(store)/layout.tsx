import { ReactNode } from 'react';

import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/headers/header';

export default function StoreLayout({ children }: { children: ReactNode }) {
	return (
		<div className="bg-secondary relative flex min-h-screen flex-col">
			<Header />

			<main className="mx-auto mt-8 mb-0 w-full max-w-screen-2xl flex-grow px-4 py-0 lg:px-20">{children}</main>

			<Footer />
		</div>
	);
}
