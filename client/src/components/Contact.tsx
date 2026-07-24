import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { toast } from 'sonner';
import { contactInfo } from "../data/contactInfo";
import { socialLinks } from "../data/socialLinks";

/**
 * Contact Section
 * Modern contact form and contact information
 */
export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);





  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Let's Grow<span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Your Business</span>
          </h2>
          <p className="text-center text-gray-400 mt-4">Ready to improve your Google Maps rankings and attract more local customers? Let's discuss how Local SEO and Google Business Profile optimization can help your business grow.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
              <p className="text-gray-400 mb-8">
                Whether you're an auto repair shop, mechanic, detailing studio, dealership, or automotive business, I'm here to help you improve your Google Business Profile, increase Google Maps visibility, and generate more local leads through proven SEO strategies.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link || '#'}
                    className="glass-card p-4 rounded-lg flex items-center gap-4 hover:border-cyan-500/50 transition-all group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon className={`w-6 h-6 ${info.color} flex-shrink-0`} />
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-400 mb-4">Connect With Me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => {
  const Icon = social.icon;

  return social.label === "Fiverr" ? (
    <motion.a
      key={i}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 glass-card rounded-lg flex items-center justify-center text-gray-400 transition-all ${social.color}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 192 192"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path d="M0 0h192v192H0z" fill="none" />
        <path
          d="M121.1 170h34.75V67.04H90.21v-7.72s0-9.01 9.01-9.01h21.88V22H99.22s-43.76 0-43.76 37.32v7.72h-19.3v28.31h19.3v74.64h34.75V95.36h30.89V170Z"
          stroke="currentColor"
          strokeWidth={12}
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </motion.a>
  ) : (
    <motion.a
      key={i}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 glass-card rounded-lg flex items-center justify-center text-gray-400 transition-all ${social.color}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={20} />
    </motion.a>
  );
})}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                whileHover={isSubmitting ? undefined : { scale: 1.02 }}
                whileTap={isSubmitting ? undefined : { scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
