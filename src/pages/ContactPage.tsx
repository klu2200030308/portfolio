import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { AnimatedSection } from '../components/AnimatedSection';
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle, MapPin, Clock, MessageSquare } from 'lucide-react';
import { ContactForm } from '../types/portfolio';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key
      emailjs.init("krZ05bzqriIKGtCaA"); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Desala Mourya Phani Chandra',
      };

      await emailjs.send(
        'service_9vxikvn', // Replace with your EmailJS service ID
        'template_6r9hbkr', // Replace with your EmailJS template ID
        templateParams
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'mourya.phani@gmail.com',
      href: 'mailto:mourya.phani@gmail.com',
      color: 'from-primary-500 to-secondary-500',
      description: 'Send me an email for professional inquiries'
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+91-9121037480',
      href: 'tel:+919121037480',
      color: 'from-secondary-500 to-accent-500',
      description: 'Call me for urgent matters or discussions'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn Profile',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/desala-mourya-phani-chandra-309903259/',
      color: 'from-accent-500 to-warning-500',
      description: 'Let\'s connect on LinkedIn for networking'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'from-warning-500 to-error-500',
      description: 'Available for remote work opportunities'
    }
  ];

  const responseTime = [
    { icon: MessageSquare, label: 'Email Response', time: '24 hours', color: 'text-primary-600' },
    { icon: Phone, label: 'Phone Response', time: '2-4 hours', color: 'text-secondary-600' },
    { icon: Linkedin, label: 'LinkedIn Response', time: '12 hours', color: 'text-accent-600' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-primary-900/20 dark:to-accent-900/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <motion.h1 
                className="text-5xl md:text-6xl font-bold font-display mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Get In Touch
              </motion.h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.p 
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm always open to discussing new opportunities, collaborations, or just having a chat 
                about technology and innovation. Let's connect and explore how we can work together.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Available for freelance and full-time opportunities</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
              Contact Information
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {contactInfo.map((contact, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold font-display text-gray-800 dark:text-white mb-2">
                    {contact.label}
                  </h3>
                  
                  <motion.a
                    href={contact.href}
                    className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 font-semibold transition-colors duration-300 block mb-3"
                    whileHover={{ scale: 1.05 }}
                    target='_blank'
                  >
                    {contact.value}
                  </motion.a>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {contact.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h3 className="text-2xl font-semibold font-display text-center mb-8 text-gray-800 dark:text-white">
              Expected Response Times
            </h3>
          </AnimatedSection>

          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {responseTime.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="flex items-center space-x-3 bg-white dark:bg-gray-900 px-6 py-4 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <div>
                    <div className="font-medium text-gray-800 dark:text-white text-sm">
                      {item.label}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Within {item.time}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <h2 className="text-4xl font-bold font-display text-center mb-16 text-gray-800 dark:text-white">
                Send Me a Message
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Description */}
              <AnimatedSection>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold font-display text-gray-800 dark:text-white mb-4">
                      Let's Start a Conversation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Whether you have a project in mind, want to discuss potential collaborations, 
                      or simply want to connect, I'd love to hear from you. Fill out the form and 
                      I'll get back to you as soon as possible.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                      What I can help you with:
                    </h4>
                    <ul className="space-y-3">
                      {[
                        'Data Science and Machine Learning projects',
                        'Full-stack web application development',
                        'Cloud architecture and deployment',
                        'Technical consulting and code reviews',
                        'Freelance development opportunities',
                        'Collaboration on open-source projects'
                      ].map((service, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{service}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.2}>
                <motion.div
                  className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address' },
                      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?' }
                    ].map((field, index) => (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-display">
                          {field.label}
                        </label>
                        <motion.input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name as keyof ContactForm]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300"
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 font-display">
                        Message
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full px-6 py-4 rounded-xl font-semibold shadow-2xl flex items-center justify-center space-x-2 transition-all duration-300 ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : submitStatus === 'success'
                          ? 'bg-gradient-to-r from-success-500 to-success-600'
                          : submitStatus === 'error'
                          ? 'bg-gradient-to-r from-error-500 to-error-600'
                          : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700'
                      } text-white`}
                      whileHover={!isSubmitting ? { 
                        scale: 1.02, 
                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                        y: -2
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : submitStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : submitStatus === 'error' ? (
                        <AlertCircle className="w-5 h-5" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )}
                      <span>
                        {isSubmitting ? 'Sending Message...' : 
                         submitStatus === 'success' ? 'Message Sent Successfully!' :
                         submitStatus === 'error' ? 'Failed to Send Message' :
                         'Send Message'}
                      </span>
                    </motion.button>
                  </form>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};