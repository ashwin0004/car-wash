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
        <section className="py-20 bg-white">
            <div className="max-w-[1240px] mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-[#e41d25] font-barlow text-sm font-bold tracking-[0.2em] uppercase">
                        Online Store
                    </span>
                    <h2 className="text-4xl md:text-5xl font-barlow font-bold text-[#1a1a1a] mt-2">
                        Popular Products
                    </h2>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group relative bg-white border border-gray-50 rounded-lg p-6 shadow-lg shadow-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Sale Badge */}
                            {product.onSale && (
                                <div className="absolute top-4 right-4 z-10">
                                    <span className="bg-[#e41d25] text-white text-[10px] font-bold px-2.5 py-2.5 rounded-full uppercase leading-none inline-block">
                                        Sale
                                    </span>
                                </div>
                            )}

                            {/* Product Image */}
                            <div className="relative aspect-square mb-6 overflow-hidden flex items-center justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="object-contain w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Product Info */}
                            <div className="text-center">
                                <h3 className="font-barlow text-xl font-bold text-[#1a1a1a] mb-2 hover:text-[#e41d25] transition-colors cursor-pointer">
                                    {product.name}
                                </h3>
                                <p className="text-[#666666] text-sm leading-relaxed mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <div className="flex items-center justify-center gap-2 mb-6">
                                    {product.originalPrice && (
                                        <span className="text-[#999999] text-lg line-through font-medium">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                    <span className="text-[#1a1a1a] text-xl font-bold font-barlow">
                                        {product.price}
                                    </span>
                                </div>

                                {/* Add to Cart Button */}
                                <button className="inline-flex items-center justify-center gap-2 bg-[#e41d25] text-white px-6 py-3 rounded-full font-barlow text-sm font-bold hover:bg-[#1a1a1a] transition-all duration-300 w-fit mx-auto">
                                    Add to cart
                                    <ShoppingCart size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Products Button */}
                <div className="flex justify-center">
                    <button className="flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-4 rounded-full font-barlow font-bold hover:bg-[#e41d25] transition-all duration-300 group">
                        More Products
                        <div className="bg-white/10 rounded-full p-1 group-hover:bg-white/20 transition-colors">
                            <ChevronRight size={20} />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
