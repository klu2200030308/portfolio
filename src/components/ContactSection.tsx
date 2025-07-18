import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { AnimatedSection } from './AnimatedSection';
import { Mail, Phone, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ContactForm } from '../types/portfolio';

export const ContactSection: React.FC = () => {
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
      emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Desala Mourya Phani Chandra',
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-gray-900 dark:via-primary-900/20 dark:to-accent-900/20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <motion.h2 
            className="text-5xl font-bold font-display text-center mb-16 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent"
            whileInView={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Get In Touch
          </motion.h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <motion.h3 
                  className="text-3xl font-semibold font-display bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Let's Connect
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
                </motion.p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'mourya.phani@gmail.com', href: 'mailto:mourya.phani@gmail.com', color: 'from-primary-500 to-secondary-500' },
                  { icon: Phone, label: 'Phone', value: '+91-9121037480', href: 'tel:+919121037480', color: 'from-secondary-500 to-accent-500' },
                  { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: '#', color: 'from-accent-500 to-warning-500' }
                ].map((contact, index) => (
                  <motion.div 
                    key={contact.label}
                    className="flex items-center space-x-4 group"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <contact.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{contact.label}</p>
                      <motion.a 
                        href={contact.href}
                        className="text-primary-600 dark:text-primary-400 hover:text-secondary-600 dark:hover:text-secondary-400 font-semibold transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                      >
                        {contact.value}
                      </motion.a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <motion.div
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: 'name', label: 'Name', type: 'text' },
                  { name: 'email', label: 'Email', type: 'email' },
                  { name: 'subject', label: 'Subject', type: 'text' }
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
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm"
                      whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
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
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none backdrop-blur-sm"
                    whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
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
                    {isSubmitting ? 'Sending...' : 
                     submitStatus === 'success' ? 'Message Sent!' :
                     submitStatus === 'error' ? 'Failed to Send' :
                     'Send Message'}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};