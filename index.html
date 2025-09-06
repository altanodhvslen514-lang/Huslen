import { useState } from "react"; import { ShoppingCart, Search, Menu, X, Heart, User, ChevronRight, SlidersHorizontal } from "lucide-react"; import { motion, AnimatePresence } from "framer-motion";

// --- Dummy data (replace with your API later) --- const categories = [ { title: "Эрэгтэй", href: "#men" }, { title: "Эмэгтэй", href: "#women" }, { title: "Хүүхэд", href: "#kids" }, { title: "Шинээр ирсэн", href: "#new" }, { title: "Хямдрал", href: "#sale" }, ];

const products = [ { id: 1, name: "Nike Air Zoom Pegasus 41", price: 329000, tag: "Шинэ", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop", colors: ["Цагаан", "Хар", "Улаан"], }, { id: 2, name: "Nike Air Force 1 '07", price: 359000, tag: "Тренд", image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1600&auto=format&fit=crop", colors: ["Цагаан", "Хар"], }, { id: 3, name: "Nike Dunk Low Retro", price: 379000, tag: "Хязгаарлагдмал", image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop", colors: ["Хөх", "Шар", "Хар"], }, { id: 4, name: "Nike Invincible 3", price: 489000, tag: "Гүйлт", image: "https://images.unsplash.com/photo-1542291024-54cc07a1b3fa?q=80&w=1600&auto=format&fit=crop", colors: ["Саарал", "Цэнхэр"], }, ];

const formatPrice = (n: number) => new Intl.NumberFormat("mn-MN").format(n) + " ₮";

function Nav() { const [open, setOpen] = useState(false); return ( <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="h-16 flex items-center justify-between gap-3"> {/* Left */} <div className="flex items-center gap-2"> <button className="p-2 rounded-2xl hover:bg-gray-100 md:hidden" onClick={() => setOpen(true)} aria-label="Цэс нээх" > <Menu className="w-6 h-6" /> </button>

<a href="#" className="font-black tracking-tight text-2xl">
          NIKE
        </a>

        <nav className="hidden md:flex items-center gap-6 ml-6">
          {categories.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center flex-1 max-w-lg">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            className="w-full pl-9 pr-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Хайх: Air Force, Pegasus, Hoodie…"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-2xl hover:bg-gray-100">
          <Heart className="w-6 h-6" />
        </button>
        <button className="p-2 rounded-2xl hover:bg-gray-100">
          <User className="w-6 h-6" />
        </button>
        <CartToggle />
      </div>
    </div>
  </div>

  {/* Mobile drawer */}
  <AnimatePresence>
    {open && (
      <motion.aside
        initial={{ x: -320, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -320, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 30 }}
        className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl border-r p-4 flex flex-col"
      >
        <div className="flex items-center justify-between">
          <span className="font-black text-xl">NIKE</span>
          <button
            className="p-2 rounded-xl hover:bg-gray-100"
            onClick={() => setOpen(false)}
            aria-label="Хаах"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mt-4">
          {categories.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="flex items-center justify-between py-3 text-base border-b"
            >
              {c.title}
              <ChevronRight className="w-4 h-4" />
            </a>
          ))}
        </div>
        <div className="mt-4">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="w-full pl-9 pr-3 py-2 rounded-full border focus:outline-none"
              placeholder="Бүтээгдэхүүн хайх"
            />
          </div>
        </div>
      </motion.aside>
    )}
  </AnimatePresence>
</header>

); }

function CartToggle() { const [open, setOpen] = useState(false); return ( <> <button className="p-2 rounded-2xl hover:bg-gray-100 relative" onClick={() => setOpen(true)} aria-label="Сагс" > <ShoppingCart className="w-6 h-6" /> <span className="absolute -top-1 -right-1 text-[10px] bg-black text-white rounded-full w-5 h-5 grid place-content-center">2</span> </button> <AnimatePresence> {open && ( <motion.div className="fixed inset-0 z-[60]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} > <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} /> <motion.aside initial={{ x: 420 }} animate={{ x: 0 }} exit={{ x: 420 }} transition={{ type: "spring", stiffness: 260, damping: 30 }} className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6" > <div className="flex items-center justify-between"> <h3 className="text-xl font-semibold">Таны сагс</h3> <button className="p-2 rounded-xl hover:bg-gray-100" onClick={() => setOpen(false)} aria-label="Сагс хаах" > <X className="w-5 h-5" /> </button> </div> <div className="mt-4 space-y-4"> {products.slice(0, 2).map((p) => ( <div key={p.id} className="flex gap-3 border rounded-2xl p-3"> <img
src={p.image}
alt={p.name}
className="w-20 h-20 rounded-xl object-cover"
/> <div className="flex-1"> <div className="text-sm font-medium line-clamp-1">{p.name}</div> <div className="text-xs text-gray-500">Өнгө: {p.colors[0]} · Размер: 42</div> <div className="text-sm mt-1 font-semibold">{formatPrice(p.price)}</div> </div> </div> ))} </div> <div className="mt-6 border-t pt-4 space-y-2"> <div className="flex justify-between text-sm"> <span>Нийт</span> <span className="font-semibold">{formatPrice( products[0].price + products[1].price )}</span> </div> <button className="w-full py-3 rounded-2xl bg-black text-white font-semibold"> Төлбөр төлөх </button> </div> </motion.aside> </motion.div> )} </AnimatePresence> </> ); }

function Hero() { return ( <section className="relative overflow-hidden"> <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-10 md:py-16"> <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4" > <span className="inline-block text-xs tracking-widest uppercase">Шинэ цуглуулга</span> <h1 className="text-4xl md:text-6xl font-black leading-[1.1]"> Air багц — <span className="underline underline-offset-8 decoration-[8px]">Хөнгөн. Хурдан. Тогтвортой.</span> </h1> <p className="text-gray-600 max-w-xl"> Таны гүйлт, өдөр тутам, спортын амьдралд зориулагдсан Nike-ийн шинэ загварууд. Хөлд эвтэйхэн, гүйцэтгэл өндөр, стильтэй. </p> <div className="flex gap-3 pt-2"> <a href="#featured" className="px-5 py-3 rounded-2xl bg-black text-white font-semibold"> Одоо авах </a> <a href="#collections" className="px-5 py-3 rounded-2xl border font-semibold"> Цуглуулгууд харах </a> </div> </motion.div> <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative" > <img
src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop"
alt="Nike Hero"
className="w-full aspect-[4/3] md:aspect-[5/4] object-cover rounded-[2rem] shadow-2xl"
/> <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-2xl text-sm shadow"> Зураг: Unsplash </div> </motion.div> </div> </section> ); }

function Badge({ children }: { children: string }) { return ( <span className="absolute left-3 top-3 z-10 text-[11px] font-semibold bg-white px-2 py-1 rounded-full border"> {children} </span> ); }

function ProductCard({ p }: { p: (typeof products)[number] }) { const [hover, setHover] = useState(false); const [color, setColor] = useState(0); return ( <div className="group relative rounded-3xl border overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} > <Badge>{p.tag}</Badge> <div className="relative"> <img src={p.image} alt={p.name} className="w-full aspect-square object-cover" /> <button className="absolute right-3 top-3 p-2 rounded-full bg-white/90 hover:bg-white border"> <Heart className="w-4 h-4" /> </button> </div> <div className="p-4"> <div className="text-sm text-gray-500">Unisex гутал</div> <div className="font-medium line-clamp-1">{p.name}</div> <div className="mt-1 font-semibold">{formatPrice(p.price)}</div>

<div className="flex items-center gap-2 mt-3">
      {p.colors.map((c, i) => (
        <button
          key={c}
          onClick={() => setColor(i)}
          className={`px-2.5 py-1 rounded-full border text-xs ${
            color === i ? "bg-black text-white" : "bg-white"
          }`}
        >
          {c}
        </button>
      ))}
    </div>

    <div className="mt-4 flex gap-2">
      <button className="flex-1 py-2.5 rounded-xl bg-black text-white text-sm font-semibold">
        Сагсанд хийх
      </button>
      <button className="px-3 py-2.5 rounded-xl border text-sm font-medium">Дэлгэрэнгүй</button>
    </div>
  </div>
</div>

); }

function Featured() { return ( <section id="featured" className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="flex items-end justify-between gap-4"> <h2 className="text-2xl md:text-3xl font-black">Онцлох бүтээгдэхүүн</h2> <button className="flex items-center gap-2 text-sm font-semibold"> Бүгдийг харах <ChevronRight className="w-4 h-4" /> </button> </div> <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6"> {products.map((p) => ( <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} > <ProductCard p={p} /> </motion.div> ))} </div> </div> </section> ); }

function Collections() { return ( <section id="collections" className="py-10 md:py-16"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6"> <div className="flex items-center justify-between"> <h2 className="text-2xl md:text-3xl font-black">Цуглуулгууд</h2> <button className="flex items-center gap-2 text-sm font-semibold"> Шүүлтүүр <SlidersHorizontal className="w-4 h-4" /> </button> </div>

<div className="grid md:grid-cols-3 gap-6">
      {[
        {
          title: "Гүйлтийн багц",
          img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "LifeStyle кросс",
          img: "https://images.unsplash.com/photo-1542291024-54cc07a1b3fa?q=80&w=1600&auto=format&fit=crop",
        },
        {
          title: "Сагсан бөмбөг",
          img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop",
        },
      ].map((c) => (
        <a
          key={c.title}
          href="#"
          className="relative rounded-[2rem] overflow-hidden group block"
        >
          <img
            src={c.img}
            alt={c.title}
            className="w-full aspect-[16/10] object-cover group-hover:scale-[1.03] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="text-sm opacity-80">Nike</div>
            <div className="text-2xl font-black">{c.title}</div>
            <button className="mt-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold">
              Дэлгэрэнгүй
            </button>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

); }

function Promo() { return ( <section className="py-12"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="rounded-[2rem] border overflow-hidden grid md:grid-cols-2"> <div className="p-8 md:p-12 space-y-3 bg-white"> <div className="text-xs tracking-widest uppercase">Member only</div> <h3 className="text-2xl md:text-3xl font-black">Nike Membership</h3> <p className="text-gray-600 max-w-md"> Гишүүнчлэлд нэгдэн онцгой хямдрал, өмнө нь зарагдаагүй өнгө загвар, захиалгын уян хатан нөхцөл зэрэг давуу талуудыг аваарай. </p> <div className="flex gap-3 pt-2"> <a className="px-5 py-3 rounded-2xl bg-black text-white font-semibold" href="#"> Үнэгүй нэгдэх </a> <a className="px-5 py-3 rounded-2xl border font-semibold" href="#"> Нэвтрэх </a> </div> </div> <img
src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1800&auto=format&fit=crop"
alt="Membership"
className="w-full h-full object-cover"
/> </div> </div> </section> ); }

function Footer() { return ( <footer className="bg-black text-gray-300 pt-12 pb-8"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8"> <div> <div className="text-white font-black text-xl">NIKE</div> <p className="mt-3 text-sm text-gray-400 max-w-xs"> Спортын ирээдүйг хамтдаа бүтээе. Чиний урам зориг, бидний технологи. </p> </div> {[ { h: "Тусламж", l: ["Захиалга шалгах", "Хүргэлт", "Буцаалт", "Хэмжээний хүснэгт"] }, { h: "Компани", l: ["Бидний тухай", "Мэдээ", "Ажлын байр", "Хариуцлага"] }, { h: "Холбоо барих", l: ["support@nike.mn", "+976 7000-0000", "Facebook", "Instagram"] }, ].map((col) => ( <div key={col.h}> <div className="text-white font-semibold mb-3">{col.h}</div> <ul className="space-y-2 text-sm"> {col.l.map((x) => ( <li key={x}> <a href="#" className="hover:underline underline-offset-4"> {x} </a> </li> ))} </ul> </div> ))} </div> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500"> <div>© {new Date().getFullYear()} Nike — Сургалтын демо хуудсанд зориулав</div> <div className="flex items-center gap-4"> <a href="#" className="hover:underline">Нууцлал</a> <a href="#" className="hover:underline">Үйлчилгээний нөхцөл</a> <a href="#" className="hover:underline">Cookie тохиргоо</a> </div> </div> </footer> ); }

export default function NikeHome() { return ( <div className="min-h-screen bg-white text-gray-900"> <Announcement /> <Nav /> <Hero /> <Featured /> <Collections /> <Promo /> <Footer /> </div> ); }

function Announcement() { return ( <div className="bg-black text-white text-center text-xs py-2 px-4"> Хязгаарлагдмал хугацаанд хүргэлт ҮНЭГҮЙ — Купон: <b>MOVEFAST</b> </div> ); }

