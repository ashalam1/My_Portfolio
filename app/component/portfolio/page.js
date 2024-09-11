import Link from "next/link";
import Ecommerce from '../../../public/image/ecommerce.jpg';
import Learning from '../../../public/image/learning.jpg';
import Sales from '../../../public/image/sales.jpg';
import Usability from '../../../public/image/usability.jpg';
import TravelPlanner from '../../../public/image/TravelPlanner.png';

const Portfolio = () => {
    return (
        <>
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
            </section>
            <section className="flex flex-col items-center justify-center mt-16 p-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">Personal Projects</h1>
                    {/* <p className="text-lg text-gray-300 mt-2">
            Empowering Your Projects with Expertise and Innovation
          </p> */}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h4 className="text-lg font-medium mb-2">HTML, CSS, JavaScript, Node.js, Express.js, MongoDB</h4>
                        <h3 className="text-xl font-semibold mb-4">TRAVEL PLANNER</h3>
                        <p className="text-gray-600">
                            Developed a web-based travel planning platform offering budget-friendly trip itineraries to unexplored local tourist destinations through crowd-sourced information. The platform enables reservations for transportation, day tours, accommodation, and ticketing..
                        </p>
                    </div>
                    <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h4 className="text-lg font-medium mb-2">Reactjs, Bootstraps,API</h4>
                        <h3 className="text-xl font-semibold mb-4">NewsSphere-A News App</h3>
                        <p className="text-gray-600">
                            NewsSphere - News and Updates Webpage, utilizing external news APIs to fetch and display up-to-date news data. Implemented features to filter and sort news articles based on user preferences, enhancing usability and customization. Integrated a search functionality, enabling users to search for specific news topics or articles of interest
                        </p>
                    </div>
                    <div className="bg-gradient-to-b from-[#123061] to-black text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <h4 className="text-lg font-medium mb-2">HTML, CSS, Bootstraps</h4>
                        <h3 className="text-xl font-semibold mb-4">WEBSITE CLONE: USABILITYHUB-CLONE</h3>
                        <p className="text-gray-600">
                            Developed a clone website of usabilityhub which is a remote user research platform that takes the guesswork out of design decisions by validating them with real users..
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Portfolio;