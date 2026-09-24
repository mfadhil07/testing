import { ArrowDown, Flower2, Heart, Sparkles, Stars } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import StoryCounter from "../StoryCounter";

const photos = ["/photos/a.jpg"];

const petals = [{ left: "8%", top: "15%", rotate: 20, delay: 0 }];

function HeroSlide() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-200 px-5 py-20 sm:px-8 lg:px-16">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />

      {/* ================= FLOATING PETALS ================= */}

      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute z-0 text-[#d9789a]/50"
          style={{
            left: petal.left,
            top: petal.top,
          }}
          animate={{
            y: [0, -20, 5, 0],
            rotate: [
              petal.rotate,
              petal.rotate + 15,
              petal.rotate - 10,
              petal.rotate,
            ],
            opacity: [0.35, 0.8, 0.5, 0.35],
          }}
          transition={{
            duration: 5,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-2xl">🌸</span>
        </motion.div>
      ))}

      {/* ================= FLOWER TOP LEFT ================= */}

      <motion.div
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-5 -top-5 z-10 text-[#d9789a]/60"
      >
        <Flower2 size={110} strokeWidth={1} />
      </motion.div>

      {/* ================= FLOWER TOP RIGHT ================= */}

      <motion.div
        animate={{
          rotate: [0, -6, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-8 top-5 z-10 text-[#8b5cf6]/40"
      >
        <Flower2 size={130} strokeWidth={1} />
      </motion.div>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-20 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        {/* ================= LEFT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Date */}

          <div className="flex items-center gap-3">
            <Heart size={13} className="fill-[#d9789a] text-[#d9789a]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b5cf6]">
              26 September 2026
            </span>

            <Heart size={13} className="fill-[#d9789a] text-[#d9789a]" />
          </div>

          {/* Heading */}

          <h1 className="mt-7 font-serif text-5xl leading-[0.9] text-[#211a2e] sm:text-7xl lg:text-[7.5rem]">
            Selamat
            <br />
            <span className="relative text-[#d9789a]">
              Ulang
              <motion.span
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 8, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute -right-7 -top-4 text-2xl text-[#8b5cf6]"
              >
                ♥
              </motion.span>
            </span>
            <br />
            <span className="relative">Tahun.</span>
          </h1>

          {/* Subtitle */}

          <div className="mt-7 flex items-center gap-3">
            <span className="h-px w-10 bg-[#d9789a]" />

            <p className="font-serif text-3xl italic text-[#8b5cf6] sm:text-4xl">
              Sayang.
            </p>

            <Sparkles size={17} className="text-[#d9789a]" />
          </div>

          {/* Name */}

          <div className="mt-6 flex items-center gap-3">
            <Flower2 size={18} className="text-[#d9789a]" />

            <p className="font-serif text-xl text-[#211a2e]">Ayu Merlina</p>

            <Flower2 size={18} className="text-[#d9789a]" />
          </div>

          {/* Main Message */}

          <p className="mt-6 max-w-xl text-sm leading-8 text-gray-600">
            Hari ini adalah tentang kamu. Tentang satu tahun yang sudah kamu
            lewati, semua hal yang sudah kamu jalani, dan cerita baru yang akan
            kamu mulai di usia 27.
          </p>

          <p className="mt-3 max-w-xl text-sm leading-8 text-gray-600">
            Semoga tahun ini membawa lebih banyak hal baik, lebih banyak senyum,
            dan lebih banyak alasan untuk merasa bangga dengan dirimu sendiri.
          </p>

          {/* Romantic Signature */}

          <div className="mt-8 flex items-center gap-3">
            <Heart size={16} className="fill-[#d9789a] text-[#d9789a]" />

            <p className="font-serif text-lg italic text-[#d9789a]">
              Semoga kamu selalu punya alasan untuk bahagia.
            </p>
          </div>
        </motion.div>

        {/* ================= RIGHT PHOTO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            rotate: 3,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 2,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Floating Heart */}

          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-6 top-20 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl"
          >
            <Heart size={20} className="fill-[#d9789a] text-[#d9789a]" />
          </motion.div>

          {/* 27 Badge */}

          <div className="absolute -right-5 -top-5 z-20 rounded-full bg-[#211a2e] px-6 py-4 text-center text-white shadow-xl">
            <p className="font-serif text-2xl text-[#e9a6c0]">27</p>

            <p className="text-[9px] uppercase tracking-widest text-white/60">
              tahun
            </p>
          </div>

          {/* Flower */}

          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -bottom-8 -left-10 z-20 text-[#d9789a]"
          >
            <Flower2 size={80} strokeWidth={1.2} />
          </motion.div>

          {/* ================= PHOTO CARD ================= */}

          <div className="relative rounded-[2rem] bg-white p-4 shadow-2xl shadow-pink-300/30">
            {/* Sparkle */}

            <div className="absolute left-8 top-8 z-30 rounded-full bg-white/90 p-3 shadow-lg">
              <Sparkles size={15} className="text-[#8b5cf6]" />
            </div>

            {/* Slideshow */}

            <div className="relative h-[500px] w-full overflow-hidden rounded-[1.5rem] bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhoto}
                  src={photos[currentPhoto]}
                  alt={`Ayu Merlina ${currentPhoto + 1}`}
                  initial={{
                    opacity: 0,
                    scale: 1.06,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient */}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Photo Bottom */}

            <div className="flex items-end justify-between px-2 pb-2 pt-5">
              <div>
                <p className="font-serif text-2xl text-[#211a2e]">Untuk Ayu.</p>

                <div className="mt-2 flex items-center gap-2">
                  <Heart size={11} className="fill-[#d9789a] text-[#d9789a]" />

                  <p className="text-xs text-gray-400">26.09.2026</p>
                </div>
              </div>

              <p className="font-serif text-5xl text-[#e9a6c0]">27</p>
            </div>

            {/* ================= DOT INDICATOR ================= */}

            <div className="mt-1 flex justify-center gap-1.5 pb-1">
              {photos.map((_, index) => (
                <motion.span
                  key={index}
                  animate={{
                    width: index === currentPhoto ? 18 : 5,
                    opacity: index === currentPhoto ? 1 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-1 rounded-full bg-[#d9789a]"
                />
              ))}
            </div>
          </div>

          {/* Small Note */}

          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [4, 6, 4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -bottom-7 -right-6 z-30 max-w-[180px] rounded-xl bg-[#fff7fa] px-5 py-4 shadow-xl"
          >
            <p className="font-serif text-sm italic leading-6 text-[#211a2e]">
              "Semoga tahun ini menjadi tahun yang baik untukmu."
            </p>

            <div className="mt-2 flex justify-end">
              <Heart size={13} className="fill-[#d9789a] text-[#d9789a]" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= BOTTOM SCROLL ================= */}

      <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex items-center gap-1 text-[#d9789a]">
          <Heart size={8} className="fill-current" />

          <Heart size={11} className="fill-current" />

          <Heart size={8} className="fill-current" />
        </div>
      </div>

      {/* Small Star */}

      <Stars
        size={22}
        className="absolute bottom-24 left-[12%] text-[#8b5cf6]/30"
      />

      <StoryCounter number={1} />
    </section>
  );
}

export default HeroSlide;
