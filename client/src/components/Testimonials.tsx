import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { testimonials } from "../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";


/**
 * Testimonials Section
 * Client testimonials with glass cards and ratings
 */
export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });



  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-20 px-4 bg-linear-to-b from-transparent via-pink-500/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Client{" "}
            <span className="text-transparent bg-linear-to-r from-pink-400 to-red-400 bg-clip-text">
              Testimonials
            </span>
          </h2>
          <p className="text-center text-gray-400 mt-4">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper gird"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide
              key={i}
              className="glass-card p-8 rounded-xl hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({
                  length: Math.max(
                    0,
                    Math.min(5, Math.round(testimonial.rating)),
                  ),
                }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {testimonial.platform}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
