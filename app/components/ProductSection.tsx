import React from 'react';
import Image from 'next/image';
import { ShoppingCart, ChevronRight } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice?: string;
    image: string;
    onSale: boolean;
}

const products: Product[] = [
    {
        id: 1,
        name: "Tire Car Wheel",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ...",
        price: "$237.99",
        image: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/shop_01-360x361.jpg",
        onSale: false,
    },
    {
        id: 2,
        name: "Aqualine Deisel Oil",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ...",
        price: "$168.39",
        originalPrice: "$178.99",
        image: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/shop_02-360x361.jpg",
        onSale: true,
    },
    {
        id: 3,
        name: "Car Brake System",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ...",
        price: "$1.99",
        image: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/shop_03-360x361.jpg",
        onSale: false,
    },
    {
        id: 4,
        name: "Canister For Liquids 5l",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem ...",
        price: "$249.99",
        image: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/shop_04-360x361.jpg",
        onSale: false,
    },
];

const ProductSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[#e41d25] font-barlow text-base font-bold tracking-[0.2em] uppercase">
                        Online Store
                    </span>
                    <h2 className="text-5xl md:text-6xl font-barlow font-bold text-[#1a1a1a] mt-3">
                        Popular Products
                    </h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white border border-gray-200 rounded-xl p-8 shadow-xl shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3"
                        >
                            {/* Sale Badge */}
                            {product.onSale && (
                                <div className="absolute top-5 right-5 z-10">
                                    <span className="bg-[#e41d25] text-white text-[11px] font-bold px-3 py-3 rounded-full uppercase leading-none inline-block shadow-lg">
                                        Sale
                                    </span>
                                </div>
                            )}

                            {/* Product Image */}
                            <div className="relative aspect-square mb-8 overflow-hidden flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={400}
                                    height={400}
                                    className="object-contain w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="text-center">
                                <h3 className="font-barlow text-2xl font-bold text-[#1a1a1a] mb-3 hover:text-[#e41d25] transition-colors cursor-pointer">
                                    {product.name}
                                </h3>
                                <p className="text-[#666666] text-base leading-relaxed mb-6 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-center gap-3 mb-8">
                                    {product.originalPrice && (
                                        <span className="text-[#999999] text-xl line-through font-medium">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                    <span className="text-[#1a1a1a] text-2xl font-bold font-barlow">
                                        {product.price}
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="btn-hover-slide-black inline-flex items-center justify-center gap-2 bg-[#e41d25] text-white px-5 py-2.5 rounded-full font-barlow text-sm font-bold transition-all duration-300 w-fit mx-auto shadow-md hover:shadow-lg">
                                    Add to cart
                                    <ShoppingCart size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Products Button */}
                <div className="flex justify-center">
                    <button className="btn-hover-slide-red flex items-center gap-4 bg-[#1a1a1a] text-white px-12 py-5 rounded-full font-barlow font-bold text-lg transition-all duration-300 group shadow-xl">
                        More Products
                        <div className="bg-white/10 rounded-full p-2 group-hover:bg-white/20 transition-colors">
                            <ChevronRight size={20} />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
