import { Heart, Sparkles, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import StoryCounter from "../StoryCounter";

const flowers = [
  { top: "8%", left: "6%", size: 28, rotate: -15 },
  { top: "18%", right: "7%", size: 22, rotate: 20 },
  { top: "42%", left: "2%", size: 20, rotate: 35 },
  { top: "70%", right: "4%", size: 30, rotate: -20 },
  { top: "88%", left: "10%", size: 22, rotate: 15 },
  { top: "82%", right: "14%", size: 18, rotate: -30 },
];

function HarapanSlide() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f1e8ee] via-gray-200 to-[#e8e1f0] px-5 py-16 sm:px-8">
      {/* Soft background glow */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-white/30 blur-3xl" />

      {/* Decorative flowers */}
      {flowers.map((flower, index) => (
        <motion.div
          key={index}
          className="absolute text-[#d9789a]/40"
          style={{
            top: flower.top,
            left: flower.left,
            right: flower.right,
          }}
          animate={{
            y: [0, -8, 0],
            rotate: [flower.rotate, flower.rotate + 5, flower.rotate],
          }}
          transition={{
            duration: 4 + index * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Flower2 size={flower.size} strokeWidth={1} />
        </motion.div>
      ))}

      {/* Floating sparkles */}
      <motion.div
        className="absolute left-[18%] top-[12%] text-purple-400/40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.div
        className="absolute right-[20%] bottom-[15%] text-pink-400/40"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
        }}
      >
        <Sparkles size={18} />
      </motion.div>

      {/* Decorative petals */}
      <div className="absolute left-[12%] top-[35%] h-3 w-3 rotate-45 rounded-full bg-[#d9789a]/30" />
      <div className="absolute right-[12%] top-[58%] h-2.5 w-2.5 rotate-45 rounded-full bg-purple-400/30" />
      <div className="absolute left-[20%] bottom-[20%] h-2 w-2 rotate-45 rounded-full bg-[#d9789a]/30" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Counter */}
          <div className="mb-6">
            <StoryCounter number={3} />
          </div>

          {/* Main card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/65 p-6 shadow-2xl shadow-[#211a2e]/10 backdrop-blur-xl sm:p-9 md:p-11">
            {/* Card decorative blobs */}
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-pink-200/40 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-purple-200/40 blur-2xl" />

            {/* Small flower in card */}
            <motion.div
              className="absolute right-7 top-7 text-[#d9789a]/50"
              animate={{
                rotate: [0, 8, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Flower2 size={34} strokeWidth={1} />
            </motion.div>

            <div className="relative z-10">
              {/* Label */}
              <div className="mb-5 flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-[#d9789a] uppercase">
                <span className="h-px w-8 bg-[#d9789a]" />
                Untuk kamu
              </div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="font-serif text-4xl leading-tight text-[#211a2e] sm:text-5xl"
              >
                Untuk Usia
                <br />
                <span className="text-[#d9789a]">27-mu.</span>
              </motion.h2>

              <div className="my-6 h-px bg-[#211a2e]/10" />

              {/* Content */}
              <div className="space-y-4 text-[14px] leading-7 text-[#211a2e]/70 sm:text-[15px]">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Terima kasih yaa Ayuuu karena sudah mau menjalin hubungan yang
                  serius sama aku.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Aku tahu, mungkin selama ini aku belum menjadi laki-laki yang
                  selalu peka. Aku juga bukan orang yang romantis, selalu spam
                  chat ke ayu dan masih banyak hal yang mungkin belum bisa aku
                  lakukan untuk Ayuu.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  Apalagi kita harus menjalani hubungan jarak jauh. Aku nggak
                  bisa selalu ada di samping Ayuu, nggak bisa setiap minggu
                  ketemuan sama Ayuu, atau sekadar mengajak Ayuu jalan dan
                  menghabiskan waktu bersama.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  Maaf kalau terkadang aku masih kurang menunjukkan rasa
                  sayangku dengan cara yang Ayuu harapkan.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  Tapi satu hal yang ingin kamu tahu, aku menghargai hubungan
                  ini dan aku serius menjalaninya sama Ayuu.
                </motion.p>
              </div>

              {/* Highlight */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="my-7 rounded-2xl bg-gradient-to-r from-[#211a2e] to-[#33253f] p-6 text-center shadow-xl"
              >
                <Heart
                  size={20}
                  className="mx-auto mb-3 text-[#e9a6c0]"
                  fill="currentColor"
                />

                <p className="font-serif text-lg leading-7 text-white sm:text-xl">
                  “Terima kasih, sayang, sudah memilih untuk tetap menghargai
                  dan menjalani hubungan ini bersamaku. Aku tahu hubungan kita
                  mungkin nggak selalu mudah, apalagi dengan jarak dan segala
                  keterbatasan yang ada. Tapi aku berharap kita selalu bisa
                  saling memahami, saling mendukung, dan terus belajar menjadi
                  lebih baik untuk satu sama lain. Aku mungkin belum selalu bisa
                  menjadi pasangan yang sempurna. Masih ada banyak hal yang
                  perlu aku perbaiki, terutama dalam menunjukkan rasa sayang dan
                  perhatian kepadamu. Tapi aku ingin kamu tahu bahwa aku serius
                  dengan hubungan ini dan akan selalu berusaha menjaganya sebaik
                  yang aku bisa. Aku sayang sama kamu, Ayu. Dan kalau kamu masih
                  memberi aku kesempatan, aku ingin terus berjalan bersamamu,
                  melewati banyak hal, sampai suatu hari nanti kita bisa melihat
                  kembali perjalanan ini dan tersenyum karena pernah memilih
                  satu sama lain.”
                </p>
              </motion.div>

              {/* Birthday wish */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <p className="text-sm leading-6 text-[#211a2e]/60">
                  Semoga di usia 27 ini kamu semakin bahagia, semakin dekat
                  dengan semua yang kamu impikan, dan selalu dikelilingi hal-hal
                  baik.
                </p>

                <div className="mt-6">
                  <p className="font-serif text-2xl text-[#211a2e]">
                    Selamat ulang tahun, Ayu.
                  </p>

                  <p className="mt-2 text-xs tracking-[0.2em] text-[#d9789a] uppercase">
                    26 September 2026
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-[#d9789a]/40" />

            <Heart
              size={13}
              className="text-[#d9789a]/60"
              fill="currentColor"
            />

            <p className="text-[10px] tracking-[0.25em] text-[#211a2e]/40 uppercase">
              Dari aku, untuk kamu
            </p>

            <Heart
              size={13}
              className="text-[#d9789a]/60"
              fill="currentColor"
            />

            <span className="h-px w-8 bg-[#d9789a]/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HarapanSlide;
