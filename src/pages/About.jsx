import React from 'react';

function AboutMission() {
  return (
    
    <div className=" max-w-7xl mx-auto pt-20 ml-20 mr-11">
      <div className=" min-h-screen grid md:grid-cols-2 gap-8">
       
        <div className="flex justify-center">
          <img 
            src="https://www.myhlblog.com/wp-content/uploads/2023/05/13-Ways-To-Volunteer-In-Your-Community-Image-1.jpg" 
            alt="Hands with red paint" 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

       
        <div className="flex flex-col justify-center">
        <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-600">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, non. Vero facere temporibus, impedit tempore incidunt nemo.
             Ipsam inventore voluptates itaque, sit exercitationem cumque quidem praesentium. Itaque fugiat maiores corrupti.            </p>
          </div>
          <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestias illo explicabo. Commodi, incidunt voluptatibus nesciunt
               eveniet dolorem eligendi sit quis, itaque facilis fuga numquam repellat necessitatibus iusto aspernatur exercitationem.            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Why Do We Do This</h2>
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea ipsam ullam sit, 
            et totam eos cupiditate sapiente quae eveniet nihil quos officiis nulla saepe sequi delectus facere, eligendi in?
            </p>
            <a href="/About" className="text-red-500 mt-4 inline-block">
              Check our mission &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMission;