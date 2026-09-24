import { Heart, Sparkles, Flower2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import StoryCounter from "../StoryCounter";

const photos = [
  "/photos/ayu-1.JPG",
  "/photos/ayu-2.JPG",
  "/photos/ayu-3.JPG",
  "/photos/ayu-4.JPG",
  "/photos/ayu-5.jpg",
  "/photos/ayu-6.jpg",
  "/photos/ayu-7.JPG",
  "/photos/ayu-8.JPG",
];

const slides = [
  {
    letter: "A",
    title: "Ayu",
    text: "Seseorang yang aku kenal bukan hanya karena senyumnya, tapi karena ada banyak hal baik dalam dirimu yang membuatku semakin kagum.",
  },
  {
    letter: "Y",
    title: "Yang aku kagumi",
    text: "Aku suka akhlakmu, caramu memperlakukan orang lain, caramu peduli, dan bagaimana kamu tetap menjadi dirimu sendiri.",
  },
  {
    letter: "U",
    title: "Untuk kamu",
    text: "Semoga di usia 27 ini kamu semakin percaya pada dirimu sendiri, semakin dekat dengan hal-hal yang kamu impikan, dan selalu punya alasan untuk tersenyum.",
  },
  {
    letter: "M",
    title: "Manisnya kamu",
    text: "Kamu punya sisi manis yang mungkin sederhana, tapi justru hal-hal kecil seperti itu yang sering membuatku tersenyum sendiri.",
  },
  {
    letter: "E",
    title: "Entah kenapa",
    text: "Entah kenapa, semakin mengenalmu justru membuatku semakin menghargai banyak hal tentang kamu.",
  },
  {
    letter: "R",
    title: "Rasanya menyenangkan",
    text: "Bisa mengenal kamu, mendengar ceritamu, dan menjadi bagian dari beberapa hari dalam hidupmu adalah sesuatu yang aku syukuri.",
  },
  {
    letter: "L",
    title: "Lebih dari sekadar cantik",
    text: "Kamu memang cantik, tapi yang membuatku bertahan untuk terus mengenalmu adalah hal-hal baik yang ada di balik itu semua.",
  },
  {
    letter: "I",
    title: "Ingin melihatmu bahagia",
    text: "Di usia yang baru ini, aku cuma ingin melihat kamu menikmati hidup, mengejar impianmu, dan menjadi versi dirimu yang paling bahagia.",
  },
  {
    letter: "N",
    title: "Nggak harus sempurna",
    text: "Kamu nggak harus selalu terlihat kuat atau baik-baik saja. Tetap menjadi dirimu sendiri sudah lebih dari cukup.",
  },
  {
    letter: "A",
    title: "Ayu Merlina",
    text: "Selamat ulang tahun untuk kamu. Semoga usia 27 membawa banyak hal baik, ketenangan, kebahagiaan, dan cerita yang layak untuk kamu ingat.",
  },
];

function AboutSlide() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];
  const photo = photos[current % photos.length];

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-200 px-5 py-20 sm:px-8 lg:px-16">
      {/* Background */}

      <div className="absolute -left-40 top-10 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />

      {/* Decorative flower */}

      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-5 top-10 text-[#d9789a]/50"
      >
        <Flower2 size={100} strokeWidth={1} />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, -8, 8, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-5 bottom-10 text-[#8b5cf6]/30"
      >
        <Flower2 size={120} strokeWidth={1} />
      </motion.div>

      {/* Main */}

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1fr]">
        {/* ================= PHOTO ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Letter */}

          <motion.div
            key={slide.letter}
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: -4,
            }}
            transition={{
              duration: 0.6,
            }}
            className="absolute -left-7 -top-7 z-20 flex h-20 w-20 items-center justify-center rounded-full bg-[#211a2e] shadow-xl"
          >
            <span className="font-serif text-4xl text-[#e9a6c0]">
              {slide.letter}
            </span>
          </motion.div>

          {/* Photo card */}

          <div className="rounded-[2rem] bg-white p-4 shadow-2xl shadow-pink-300/20">
            <div className="relative h-[480px] overflow-hidden rounded-[1.5rem] bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.img
                  key={photo}
                  src={photo}
                  alt="Ayu Merlina"
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
                    duration: 0.9,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay */}

              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />

              {/* Small heart */}

              <div className="absolute bottom-5 right-5 rounded-full bg-white/90 p-3 shadow-lg">
                <Heart size={16} className="fill-[#d9789a] text-[#d9789a]" />
              </div>
            </div>

            {/* Name */}

            <div className="flex items-center justify-between px-2 pb-1 pt-5">
              <div>
                <p className="font-serif text-2xl text-[#211a2e]">
                  Ayu Merlina
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  seseorang yang istimewa
                </p>
              </div>

              <Sparkles size={20} className="text-[#8b5cf6]" />
            </div>
          </div>

          {/* Photo indicator */}

          <div className="mt-5 flex justify-center gap-1.5">
            {photos.map((_, index) => (
              <motion.span
                key={index}
                animate={{
                  width: index === current ? 20 : 5,
                  opacity: index === current ? 1 : 0.3,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="h-1 rounded-full bg-[#d9789a]"
              />
            ))}
          </div>
        </motion.div>

        {/* ================= TEXT ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Label */}

          <div className="flex items-center gap-3">
            <Sparkles size={15} className="text-[#8b5cf6]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5cf6]">
              Tentang Kamu
            </span>

            <Sparkles size={15} className="text-[#8b5cf6]" />
          </div>

          {/* Heading */}

          <h2 className="mt-7 font-serif text-5xl leading-[1] text-[#211a2e] sm:text-7xl">
            <AnimatePresence mode="wait">
              <motion.span
                key={slide.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="block"
              >
                {slide.title}
              </motion.span>
            </AnimatePresence>
          </h2>

          {/* Letter decoration */}

          <div className="mt-7 flex items-center gap-4">
            <div className="h-px w-14 bg-[#d9789a]" />

            <span className="font-serif text-3xl text-[#d9789a]">
              {slide.letter}
            </span>

            <div className="h-px w-14 bg-[#d9789a]" />
          </div>

          {/* Description */}

          <div className="mt-7 min-h-[170px] max-w-xl">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.text}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -15,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="text-base leading-8 text-gray-600 sm:text-lg"
              >
                {slide.text}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Personal message */}

          <div className="mt-3 max-w-xl rounded-2xl bg-white/70 p-6 shadow-sm">
            <p className="text-sm leading-7 text-gray-500">
              Aku mungkin tidak selalu pandai mengatakannya, tapi aku harap kamu
              tahu kalau ada banyak hal dari dirimu yang aku hargai.
            </p>
          </div>

          {/* Full name */}

          <div className="mt-9">
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
              Untuk
            </p>

            <div className="mt-2 flex items-center gap-3">
              <h3 className="font-serif text-4xl text-[#211a2e] sm:text-5xl">
                Ayu Merlina
              </h3>

              <Heart size={20} className="fill-[#d9789a] text-[#d9789a]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}

      <StoryCounter number={2} />
    </section>
  );
}

export default AboutSlide;
