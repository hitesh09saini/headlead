import React from 'react';

const projects = [
  [
    { title: 'Creative landing page', category: 'Website', box: true },
    { title: 'Automation. Advanced Level', category: 'Development' },
    { title: 'Why We Collect User’s Data', category: 'Digital Marketing' },
  ],
  [
    { title: 'Creative Branding', category: 'Branding' },
    { title: 'Creative landing page', category: 'User Testing', box: true },
    { title: 'How We Optimized Our SEO', category: 'SEO' },
  ],
];

const WorkShowcase = () => {
  return (
    <section className="bg-[#110f0f] md:flex  gap-8 text-white p-[50px]">
      <div className='md:w-[370px] my-4'>
        <h2 className="text-[40px] font-bold mb-4">Some pieces of our work</h2>
        <p className="text-gray-400 mb-8">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt. </p>
        <button className="border cursor-pointer border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-semibold hover:text-black hover:bg-yellow-600 transition-all">Show More</button>
      </div>
      <div className="flex max-md:flex-col  gap-4">
        {projects.map((pro, proIndex) => (
          <div key={proIndex} className='flex flex-col  gap-4'>
            {pro.map((project, index) => (
              <div key={index} className="border w-[400px] h-fit flex flex-col gap-4 border-white p-4 rounded-lg relative">
                {project.box && <div className='w-full min-h-[150px] rounded bg-purple-600'></div>}
                <span className='text-xs w-fit text-black py-1 px-3 rounded-full bg-yellow-600'>
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold ">{project.title}</h3>
                <a href="#" className="text-yellow-400 text-sm inline-block">Read more →</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkShowcase;