"use client"
import { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setSnackbarMessage('Please fill in all fields');
            setSnackbarSeverity('error');
            setSnackbarOpen(true)
            return;
        }

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                setSnackbarMessage('Email sent successfully');
                setSnackbarSeverity('success');
            } else {
                setSnackbarMessage('Failed to send email');
                setSnackbarSeverity('error');
            }
        } catch (error) {
            setSnackbarMessage('An error occurred');
            setSnackbarSeverity('error');
        }
        setSnackbarOpen(true);
    };
    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 pt-32">
            <div className="absolute top-8 left-8">
                <h1 className="text-4xl font-bold text-white">Contact Me</h1>
                <p className="text-lg text-gray-300 mt-2">
                    Let&apos;s connect. Whether it&apos;s a query or collaboration, we&apos;re just a message away!
                </p>
            </div>

            {/* Content Container */}
            <div className="flex flex-col-reverse md:flex-row w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8 mt-16">
                {/* Form Container */}
                <div className="md:w-3/4 w-full flex flex-col space-y-6 item-center justify-center">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name and Email Inputs */}
                        <div className="flex flex-wrap gap-4">
                            <div className="w-full md:flex-1">
                                <label htmlFor="name" className="block text-lg font-medium text-white mb-2">Enter Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="w-full md:flex-1">
                                <label htmlFor="email" className="block text-lg font-medium text-white mb-2">Enter Your Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
                                    placeholder="john.doe@example.com"
                                />
                            </div>
                        </div>

                        {/* Subject Input */}
                        <div>
                            <label htmlFor="subject" className="block text-lg font-medium text-white mb-2">Enter Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
                                placeholder="Subject"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-white mb-2">Enter Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400"
                                placeholder="Your message here..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full border border-[#0a45a3] text-[#0a45a3] px-6 py-3 rounded-md hover:bg-gradient-to-b from-[#0a45a3] to-black hover:text-white transition-colors duration-300"
                        >
                            Send
                        </button>
                    </form>
                </div>

                {/* Information Container */}
                <div className="md:w-1/4 w-full flex flex-col items-center justify-center space-y-6 text-white">
                    <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-home"></i>
                            <span>Lucknow, India</span>
                        </div>
                        <p className="text-sm text-gray-400">Indira Nagar, Lucknow</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-mobile"></i>
                            <span>+91 9125794356</span>
                        </div>
                        <p className="text-sm text-gray-400">Mon to Fri 9am to 6pm</p>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-envelope"></i>
                            <span>ashfaquealam154@gmail.com</span>
                        </div>
                        <p className="text-sm text-gray-400">Send us your query anytime!</p>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="w-full h-[450px] mt-16 mb-32 px-4"> {/* Reduced margin-top to mt-16 */}
                <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31113.519926899844!2d77.6206220101186!3d12.895501624933344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14bc1f875dd5%3A0x2b126387f21954a7!2sGarvebhavi%20Palya%2C%20Bengaluru%2C%20Karnataka%20560068!5e0!3m2!1sen!2sin!4v1700231426045!5m2!1sen!2sin"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            {/* Snackbar */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Contact;
