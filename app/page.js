import Link from "next/link";
import ProfilePic from '../public/image/profile.png';
import Ecommerce from '../public/image/ecommerce.jpg';
import Learning from '../public/image/learning.jpg';
import Sales from '../public/image/sales.jpg';

export default function Home() {
  return (
    <>
      {/* Main Content Wrapper */}
      <main
        className="relative flex flex-col items-center justify-end sm:justify-between min-h-screen bg-cover bg-top sm:bg-right"
        style={{
          backgroundImage: `url(${ProfilePic.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'right center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
        }}
      >

        {/* Content Container */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-end sm:justify-between sm:w-3/4 mx-auto h-full">
          {/* Left Side - Text */}
          <div className="text-center sm:text-left flex flex-col items-center justify-center sm:justify-end p-8 ">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Hey there! I&apos;m <span style={{ color: '#0a45a3' }}>Ashfaque</span>
            </h1>
            <p className="text-2xl sm:text-3xl mt-2 text-white">I&apos;m a web developer</p>
            <button className="relative overflow-hidden bg-gradient-to-b from-[#0a45a3] to-black text-white px-4 py-2 rounded group w-48 mt-3">
              <span className="relative z-10">Download CV</span>
              <span className="absolute inset-0 bg-gradient-to-b from-[#123061] to-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
            </button>
          </div>
        </div>
      </main>

      {/* Services Offered Section */}
      <section className="flex flex-col items-center justify-center mt-16 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">What I Bring to the Table</h1>
          <p className="text-lg text-gray-300 mt-2">
            Empowering Your Projects with Expertise and Innovation
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Service Cards */}
          <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Full-Stack Development</h3>
            <p className="text-gray-600">
              End-to-end development from frontend to backend, ensuring smooth functionality and performance.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Responsive Web Design</h3>
            <p className="text-gray-600">
              Create stunning and responsive websites that work perfectly on all devices, from mobile to desktop.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">API Integration</h3>
            <p className="text-gray-600">
              Seamless integration with third-party APIs to extend the functionality of your applications.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
            <p className="text-gray-600">
              Optimize your websites and applications for faster load times and better user experience.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">Custom API Development</h3>
            <p className="text-gray-600">
              Develop custom APIs tailored to the specific needs of your business or project.
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4">DevOps & CI/CD</h3>
            <p className="text-gray-600">
              Streamline your deployment process with automated pipelines for continuous integration and delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Showcase Section */}
      <section className="flex flex-col items-center justify-center mt-16 p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">Projects that Made an Impact</h1>
          <p className="text-lg text-gray-300 mt-2">
            Real-World Solutions Tailored to Client Needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-cover bg-center h-[400px] w-[300px] rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${Ecommerce.src})` }}
          >
            <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">E-Commerce Website</h3>
              <p className="text-white">
                Developed a full-featured e-commerce platform with secure payment processing, user accounts, and an admin dashboard for managing products and orders.
              </p>
            </div>
          </div>
          <div className="bg-cover bg-center h-[400px] w-[300px] rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${Learning.src})` }}
          >
            <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Learning Platform</h3>
              <p className="text-white">
                Created an interactive learning platform featuring courses, quizzes, and progress tracking. Designed with a focus on usability and student engagement.
              </p>
            </div>
          </div>
          <div className="bg-cover bg-center h-[400px] w-[300px] rounded-lg shadow-lg"
            style={{ backgroundImage: `url(${Sales.src})` }}
          >
            <div className="bg-black bg-opacity-50 h-full w-full flex flex-col justify-end p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Sales Management Website</h3>
              <p className="text-white">
                Built a website for shop owners to manage their sales, track inventory, and analyze sales data. Included features for order management and customer insights.
              </p>
            </div>
          </div>
        </div>
        <Link href="/component/portfolio">
          <button className="relative overflow-hidden bg-gradient-to-b from-[#0a45a3] to-black text-white px-6 py-3 rounded group mt-8">
            <span className="relative z-10">View More</span>
            <span className="absolute inset-0 bg-gradient-to-b from-[#123061] to-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
          </button>
        </Link>
      </section>
    </>
  );
}
