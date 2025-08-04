import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Spinner */}
      <div id="spinner" className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar sticky top-0 bg-white shadow z-40">
        <div className="container mx-auto flex justify-between items-center px-4 py-2">
          <a href="/" className="flex items-center gap-2 text-xl font-bold">
            <img src="/img/icon.png" alt="Logo" className="h-12" />
            Secret<span className="text-orange-400">Coder</span>
          </a>
          <div className="hidden md:flex gap-4 items-center">
            <a href="/" className="text-orange-400 font-semibold">Home</a>
            <a href="/about" className="hover:text-orange-400">About</a>
            <a href="/courses" className="hover:text-orange-400">Courses</a>
            <div className="relative group">
              <button className="hover:text-orange-400">Pages ▾</button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 p-2">
                <a href="/team" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
                <a href="/testimonial" className="block px-4 py-2 hover:bg-gray-100">Testimonial</a>
              </div>
            </div>
            <a href="/contact" className="hover:text-orange-400">Contact</a>
            <a href="/login" className="text-lg"><i className="fas fa-user"></i></a>
            <div id="google_translate_element"></div>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="mb-10">
        <div className="relative">
          <img src="/img/carousel-1.jpg" className="w-full h-[600px] object-cover" alt="Slide 1" />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
            <div className="container mx-auto px-6">
              <h5 className="text-orange-400 text-xl mb-3 uppercase">Best E-learning platform</h5>
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
                Learn Job ready skills from free online courses with certificates
              </h1>
              <p className="text-white mb-6">Explore a wide range of courses designed to enhance your expertise in technology, business, arts, and more. Start learning today!</p>
              <a href="/about" className="bg-blue-600 text-white py-2 px-6 rounded mr-4">Read More</a>
              <a href="/signup" className="bg-white text-black py-2 px-6 rounded">Join Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl font-bold text-orange-400 mb-4">Invest in your professional goals with Secret Coder</h1>
        <p className="mb-10">Get unlimited access to over 90% of courses, Projects, Specializations, and Professional Certificates on Coursera, taught by top instructors.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "icon1.png",
              title: "Learn anything",
              desc: "Explore any interest or trending topic, take prerequisites, and advance your skills"
            },
            {
              icon: "icon2.png",
              title: "Save money",
              desc: "Spend less money on your learning if you plan to take multiple courses this year"
            },
            {
              icon: "icon3.png",
              title: "Flexible learning",
              desc: "Learn at your own pace, move between multiple courses, or switch to a different course"
            },
            {
              icon: "icon4.png",
              title: "Unlimited certificates",
              desc: "Earn a certificate for every learning program that you complete at no additional cost"
            }
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 shadow-lg text-center rounded-lg">
              <img src={`/img/${service.icon}`} alt="" className="mx-auto mb-4 w-14" />
              <h5 className="text-lg font-semibold mb-2">{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
          <div className="relative h-96">
            <img src="/img/about.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover rounded-md" />
          </div>
          <div>
            <h6 className="text-sm bg-white inline-block px-3 py-1 uppercase mb-2">About Us</h6>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">Welcome to Secret Coder</h2>
            <p className="mb-4">At Secret Coder, we believe in accessible, innovative learning experiences that adapt to your schedule and learning style. Join us in embracing the future of education and unlock your potential with our immersive online courses.</p>
            <p className="mb-4">Welcome to Secret Coder, your gateway to boundless learning opportunities. We're dedicated to democratizing education, offering a diverse range of courses taught by industry experts.</p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              {[
                "Expert Instructors",
                "Live Interactive Sessions",
                "Comprehensive Course Catalog",
                "Community Engagement",
                "Personalized Learning Paths",
                "Certification and Recognition"
              ].map((item, i) => (
                <p key={i}><i className="fa fa-arrow-right text-orange-400 mr-2"></i>{item}</p>
              ))}
            </div>
            <a href="/about" className="inline-block mt-6 bg-orange-400 text-white px-6 py-2 rounded hover:bg-orange-500">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
