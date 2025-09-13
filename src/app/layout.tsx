import './globals.css';

import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';

import type { Metadata } from 'next';
import { Mona_Sans, Roboto_Mono } from 'next/font/google';

dayjs.locale('pt-br');
dayjs.extend(utc);
dayjs.extend(relativeTime);

const monaSans = Mona_Sans({
	subsets: ['latin'],
	variable: '--font-mona-sans',
	display: 'swap',
	weight: ['300', '400', '500', '600', '700', '900'],
});

const robotoMono = Roboto_Mono({
	variable: '--font-roboto-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Autra Shop',
	description: 'Autra Shop web application',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
			</head>

			<body className={`${monaSans.className} h-screen font-sans antialiased`}>{children}</body>
		</html>
	);
}
