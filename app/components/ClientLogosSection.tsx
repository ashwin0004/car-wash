import React from 'react';
import Image from 'next/image';

// Data for the partners
const partnerImages = [
    { src: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/partners-hs-01.png", alt: "Partner 1" },
    { src: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/partners-hs-02.png", alt: "Partner 2" },
    { src: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/partners-hs-03.png", alt: "Partner 3" },
    { src: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/partners-hs-04.png", alt: "Partner 4" },
    { src: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/partners-hs-05.png", alt: "Partner 5" },
    { src: "https://aqualine.like-themes.com/wp-content/uploads/2018/02/partners-hs-06.png", alt: "Partner 6" }
];

const ClientLogosSection: React.FC = () => {
    return (
        <section className="client-logos-section">
            <div className="client-logos-container">
                <div className="logos-grid">
                    {partnerImages.map((partner, index) => (
                        <div key={index} className="logo-item">
                            <a href="#" className="logo-link">
                                <Image
                                    src={partner.src}
                                    alt={partner.alt}
                                    width={130}
                                    height={100}
                                    className="logo-img object-contain"
                                />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogosSection;
