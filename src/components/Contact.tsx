import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Access environment variables
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Get form data
      const formData = {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value,
      };

      await emailjs.send(
        serviceId,
        templateId,
        formData,  // Send the form data object instead of the form element
        publicKey
      );
      
      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent successfully. I will get back to you soon.');
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setStatusMessage('Oops! Something went wrong. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const statusVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto px-4 py-8 max-w-6xl"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Header */}
      <motion.div variants={itemVariants} className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
          Get in Touch
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="space-y-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-100"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-2 ${
                isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white rounded-lg transition-colors flex items-center justify-center gap-2`}
            >
              {isSubmitting && (
                <Loader2 className="w-4 h-4 animate-spin" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Enhanced Status Messages */}
            <AnimatePresence mode="wait">
              {submitStatus !== 'idle' && (
                <motion.div
                  key={submitStatus}
                  variants={statusVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`mt-4 p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className={`text-sm ${
                    submitStatus === 'success' ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {statusMessage}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-8">
          {/* Contact Details */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-200">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>nimely.solutions@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+231-773-842-419 / +231-888-021-597</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Monrovia, Liberia</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-200">Connect With Me</h2>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors"
              >
                <Twitter className="w-6 h-6 text-gray-300" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}; 