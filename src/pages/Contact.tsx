import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send('service_8wn23rc', 'template_3frzs8r', {
      to_name: 'Ujjwal Baranwal',
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    }, 'hKoJ-DF4Qlu6GYA-O')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatusMessage('Message sent successfully!');
        // Clear form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Remove success message after 5 seconds
        setTimeout(() => {
          setStatusMessage('');
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setStatusMessage('Failed to send message.');
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/your-calendly-link', '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-gray-400 mb-8">
              Feel free to reach out! I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of your visions.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <button 
                  onClick={() => window.location.href = "mailto:ujjwalb.official@gmail.com"} 
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  ujjwalb.official@gmail.com
                </button>

              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Calendar className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Schedule a Meeting</h3>
                <button 
                  onClick={handleScheduleMeeting}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Book a time slot
                </button>
              </div>
            </div>


            <div className="flex items-center space-x-4">
              <Phone className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                {/*<p className="text-gray-400">+1 (602) 775-7995</p>*/}
                <button 
                  onClick={() => window.location.href = "sms:+16027757995"} 
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  +1 (602) 775-7995
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-purple-400" size={24} />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-400">Tempe, AZ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>Send Message</span>
            <Send size={20} />
          </button>

          {statusMessage && (
            <p className="text-center mt-4 text-sm text-gray-400">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
