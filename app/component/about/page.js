import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const About = () => {
    return (
        <>
            <div className="relative flex flex-col items-center min-h-screen p-4 pt-8">
                {/* About Me Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white">About Me</h1>
                    {/* <p className="text-lg text-gray-300 mt-2">
                        Let&apos;s connect. Whether it&apos;s a query or collaboration, we&apos;re just a message away!
                    </p> */}
                </div>

                {/* Content Section */}
                <div className="flex flex-col sm:flex-row w-full max-w-6xl space-y-8 sm:space-y-0 sm:space-x-8 items-center mt-16">
                    {/* Left Section */}
                    <div className="w-full sm:w-3/5">
                        <p className="text-white text-lg">
                            I&apos;m a full-stack developer specializing in React.js, Next.js, Material-UI, Python, and FastAPI. I build dynamic UIs and scalable backend services while efficiently managing databases with SQLAlchemy and SQLite. I&apos;m passionate about delivering intuitive user experiences and optimizing performance.
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="w-full sm:w-2/5 flex items-center justify-center space-x-2">
                        <div>
                            <h1 className="text-8xl font-bold text-white">01</h1>
                        </div>
                        <div>
                            <p className="text-white text-lg font-bold text-center">
                                <span className="block">years of</span>
                                <span className="block">web development experience</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Education Section */}
            <div className="relative flex flex-col items-center justify-center p-4 pt-8">
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="mt-6 text-center">
                    <h3 className="text-xl text-white font-semibold">SDM College of Engineering and Technology, Dharwad, Karnataka</h3>
                    <p className="text-white text-lg">Bachelor of Engineering - Electronics and Communication Engineering</p>
                </div>
            </div>

            {/* Skills Section */}
            <div className="relative flex flex-col items-center justify-center p-4 pt-8 mb-2">
                <h2 className="text-3xl font-bold text-white">Skills</h2>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-8">
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-c" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">Python</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-code" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">C++</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-html5" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">HTML5</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-css3" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">CSS</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-js" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">JavaScript</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-react" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">React.js</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-react" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">Next.js</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-react" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">FastAPI</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-react" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">Django</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-react" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">Material-UI</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-bootstrap" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">Bootstrap</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-database" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">MySQL</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fab fa-git" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">Git/GitHub</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <i className="fas fa-file-word" style={{ fontSize: '2rem', color: 'white' }}></i>
                        <p className="text-white text-lg">MS Word</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
