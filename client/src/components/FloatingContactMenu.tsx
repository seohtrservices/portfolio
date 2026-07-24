import { AnimatePresence, motion } from 'framer-motion';
import { Github, Linkedin, MessageCircleMore, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

function FiverrIcon({ size = 18, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
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
  );
}

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      label: 'WhatsApp',
      link: 'https://wa.me/923056529811',
      icon: MessageCircle,
      color: 'text-green-400',
      glow: 'hover:border-green-400/50 hover:shadow-green-500/20',
    },
    {
      label: 'Fiverr',
      link: 'https://www.fiverr.com/zaroonchishti/',
      icon: FiverrIcon,
      color: 'text-emerald-400',
      glow: 'hover:border-emerald-400/50 hover:shadow-emerald-500/20',
    },
    {
      label: 'GitHub',
      link: 'https://github.com/SyedZaroon',
      icon: Github,
      color: 'text-gray-300',
      glow: 'hover:border-gray-300/50 hover:shadow-gray-500/20',
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/zaroon-ali/',
      icon: Linkedin,
      color: 'text-blue-400',
      glow: 'hover:border-blue-400/50 hover:shadow-blue-500/20',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="mb-3 flex flex-col items-end gap-3"
            >
              {contactOptions.map((option, index) => {
                const Icon = option.icon;

                return (
                  <motion.a
                    key={option.label}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{
                      delay: index === 0 ? 0.12 : index * 0.08,
                      duration: 0.32,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`glass-card flex items-center justify-center rounded-full border border-white/10 p-2 text-gray-100 shadow-[0_10px_30px_rgba(2,8,23,0.24)] transition-all hover:scale-105 hover:shadow-[0_16px_40px_rgba(6,182,212,0.18)] ${option.glow}`}
                  >
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/20 ${option.color}`}
                    >
                      <Icon size={18} />
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-900/80 text-cyan-400 shadow-[0_12px_45px_rgba(6,182,212,0.25)] backdrop-blur-xl transition-all hover:border-cyan-400/40"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 16px 45px rgba(6, 182, 212, 0.24)",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.02 : 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
        >
          <motion.span
            key={isOpen ? "close" : "message"}
            initial={{ rotate: 0, opacity: 0.7 }}
            animate={{ rotate: isOpen ? 45 : 0, opacity: 1 }}
            exit={{ rotate: 0, opacity: 0.7 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {isOpen ?
              <X size={24} />
            : <MessageCircleMore size={24} />}
          </motion.span>
        </motion.button>
      </div>
    </div>
  );
}
