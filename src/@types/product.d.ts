interface IProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	averageRating?: number;
	reviewCount?: number;
}
