const WeOffer = () => {
    const offers = [
      { title: 'Branding', description: 'Etiam facilisis nunc proin amet tellus tincidunt lacus consequat.', icon: '🎨' },
      { title: 'Web development', description: 'Integer ante non nunc, eget est justo vel semper nunc lacus.', icon: '💻' },
      { title: 'Digital marketing', description: 'Sed faucibus faucibus egestas volutpat.', icon: '📊' },
      { title: 'Mobile App', description: 'Etiam facilisis nunc proin amet tellus tincidunt lacus consequat.', icon: '📱' },
      { title: 'SEO', description: 'Integer ante non nunc, eget est justo vel semper nunc lacus.', icon: '⚙️' },
      { title: 'User testing', description: 'Sed faucibus faucibus egestas volutpat.', icon: '🧪' },
    ];
  
    return (
      <div className="bg-[#110f0f] text-white py-20">
        <h2 className="text-4xl font-bold text-center mb-6">We Offer</h2>
        <p className="text-center  text-[#919090] max-w-lg mx-auto mb-12">
          Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.
        </p>
  
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {offers.map((offer, index) => (
            <div key={index} className="border border-white p-6 rounded-lg shadow-lg">
              <span className="text-4xl">{offer.icon}</span>
              <h3 className="text-xl font-semibold mt-4">{offer.title}</h3>
              <p className="text-[#919090]  mt-2">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default WeOffer;
  