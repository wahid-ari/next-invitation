import { Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import { MapPinIcon, PhotoIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function MobileNav() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 shadow-t">
      <div className="backdrop-blur-md py-2 mx-2 px-4 sm:px-6 flex sm:max-w-md sm:mx-auto justify-between items-center rounded-t-lg">
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="pattern"
            href="/#pattern"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("pattern");
            }}
            className={`
            ${activeLink === "pattern" ? "text-transparent font-semibold bg-clip-text bg-gradient-to-br from-sky-500 to-yellow-500" : "font-medium text-neutral-200"} 
            py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer`
            }
          >
            WELCOME
          </LinkScroll>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="title"
            href="/#title"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("title");
            }}
            className={`
            ${activeLink === "title" ? "text-transparent font-semibold bg-clip-text bg-gradient-to-br from-sky-500 to-yellow-500" : "font-medium text-neutral-200"} 
            py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer`
            }
          >
            LOKASI
          </LinkScroll>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="gridd"
            href="/#gridd"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("gridd");
            }}
            className={`
            ${activeLink === "gridd" ? "text-transparent font-semibold bg-clip-text bg-gradient-to-br from-sky-500 to-yellow-500" : "font-medium text-neutral-200"} 
            py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer`
            }
          >
            GALERI
          </LinkScroll>
        </motion.div>
      </div>
    </ nav>
  )
}