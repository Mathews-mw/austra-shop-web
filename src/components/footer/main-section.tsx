import Image from 'next/image';
import { Barcode } from 'lucide-react';

export function MainSection() {
	return (
		<div className="col-span-2 flex flex-col gap-8">
			<div className="flex items-center">
				<Image src="/logo.png" alt="logo" width={120} height={120} className="h-[64px] w-[64px]" />
				<div className="flex gap-1 text-xl leading-none font-bold">
					<span className="text-[#ffa42c]">Austra</span>
					<span className="text-[#414143]">Shop</span>
				</div>
			</div>

			<p className="text-justify text-sm">
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim
				velit mollit.
			</p>

			<div className="flex flex-col gap-2.5">
				<span className="text-muted-foreground text-sm font-bold">Tipos de pagamentos</span>

				<div className="flex flex-col gap-2">
					<div className="flex gap-2">
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image src="/pix.png" alt="stripe" width={120} height={120} className="h-[24] w-[42] object-contain" />
						</div>
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image src="/visa.png" alt="stripe" width={120} height={120} className="h-[24] w-[42] object-cover" />
						</div>
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image
								src="/mastercard.png"
								alt="stripe"
								width={120}
								height={120}
								className="h-[24] w-[42] object-cover"
							/>
						</div>
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image src="/paypal.png" alt="stripe" width={120} height={120} className="h-[24] w-[42] object-contain" />
						</div>
					</div>

					<div className="flex gap-2">
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image
								src="/google-pay.png"
								alt="stripe"
								width={120}
								height={120}
								className="h-[24] w-[42] object-contain"
							/>
						</div>
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image
								src="/apple-pay.png"
								alt="stripe"
								width={120}
								height={120}
								className="h-[24] w-[42] object-cover"
							/>
						</div>
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Image src="/stripe.png" alt="stripe" width={120} height={120} className="h-[24] w-[42] object-contain" />
						</div>
						<div className="flex items-center justify-center rounded-md border px-1 py-2">
							<Barcode className="h-[24] w-[42]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
