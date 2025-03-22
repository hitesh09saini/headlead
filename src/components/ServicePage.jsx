import React from 'react'
import Footer from './Footer';
import Header from './Header';

const ServicePage = () => {
    const data = [
        { title: 'Creative landing page', link: '#' },
        { title: 'Creative landing page', link: '#' },
        { title: 'Creative landing page', link: '#' },
    ];

    const services = [
        {
            icon: <img src="" alt="" />,
            title: 'Mobile App',
            description: 'Etiam tellus nunc, proin amet tellus tristique lacus consequat. Ultrices.',
        },
        {
            icon: <img src="" alt="" />,
            title: 'SEO',
            description: 'Integer ante non nunc, eget est justo vel semper nunc. Luctus.',
        },
        {
            icon: <img src="" alt="" />,
            title: 'User testing',
            description: 'Sed faucibus feugiat augue volutpat, accumsan adipiscing egestas est.',
        },
    ];



    return (
        <>
            <Header />
            <div className="bg-[#100f0f] overflow-hidden  min-h-screen flex items-center p-12 relative">
            <div className="absolute inset-0 grid grid-cols-16 gap-0">
                {[...Array(144)].map((_, i) => (
                    <div key={i} className="w-full h-full border border-gray-700 opacity-10"></div>
                ))}
            </div>
                {/* Content Section */}
                <div className="max-w-lg z-[100]">
                    <h3 className="text-[#E9A734] text-lg font-semibold mb-2">Branding</h3>
                    <h1 className="text-white text-5xl font-bold mb-6">Find your niche</h1>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
                        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo
                        id odio turpis pharetra elementum. Pulvinar porta porta feugiat
                        scelerisque in elit. Morbi rhoncus, tellus, eros
                    </p>
                    <button className="bg-[#E9A734] text-black px-6 py-3 rounded-xl font-medium hover:bg-[#d88b25] transition">
                        CONTACT
                    </button>
                </div>

                {/* Background Design */}
                <div className="absolute z-[10] inset-0">
                    <div style={{ borderRadius: "37% 63% 98% 2% / 8% 47% 53% 92% " }} className="absolute left-[-100px] bottom-[-230px] w-96 h-96 bg-[#ef9364] rounded-full blur-3xl " />
                    <div style={{ borderRadius: "80% 20% 43% 57% / 30% 73% 27% 70% " }} className="absolute right-[-100px] top-[-30px] w-96 h-[400px] bg-[#8879cb] rounded-full blur-3xl " />
                </div>
            </div>
            <div className="bg-[#110f0f]  text-white p-12">
                <section className="mb-16">
                    <h2 className="text-4xl font-bold mb-4">Process</h2>
                    <p className="text-gray-400 leading-relaxed">
                        Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at.
                        Nisl sem ut sed sed faucibus eu ut elit. Morbi aliquam porttitor mattis consequat neque,
                        tellus blandit.
                    </p>
                </section>
            </div>
            <div className="bg-[#110f0f] text-white p-12">
                <h2 className="text-2xl font-bold mb-8">Branding Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="border border-gray-700 p-4 rounded-lg">
                            <div className="h-40 bg-purple-500 rounded-lg mb-4"></div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <a href={item.link} className="text-gray-400 mt-2 inline-block">
                                Read more →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-[#110f0f] text-white p-12">
                <h2 className="text-2xl font-bold mb-8">Other services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="border border-gray-700 p-6 rounded-lg">
                            {service.icon}
                            <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
                            <p className="text-gray-400 mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-8 bg-transparent border border-yellow-500 text-yellow-500 px-6 py-3 rounded-xl font-medium hover:bg-yellow-500 hover:text-black transition">
                    GO TO HOME
                </button>
            </div>


            <Footer />

        </>
    )
}

export default ServicePage