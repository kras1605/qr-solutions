import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Header = () => {
  const router = useRouter();

  const { theme, setTheme } = useTheme();
  const [mode, setMode] = useState("light");
  useEffect(() => { if (theme) setMode(theme); }, [theme]);
  const themeModeToggle = () => {
    const newTheme = mode == "dark" ? "light" : "dark";
    setTheme(newTheme);
    setMode(newTheme);
  };

  return (
    <header className=" min-h-16 z-30 flex items-center pt-4 md:pt-0">
      <nav className="w-[100vw] max-w-[1500px] px-6 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
        <Link href="/">
          <div className="inline-block cursor-pointer text-2xl text-white font-bold">
            QR Solutions
          </div>
        </Link>

        <ul className="flex px-4 items-center justify-center my-4">
          {[
            {
              name: "Create",
              path: "/",
            },
            {
              name: "Scan",
              path: "/scan",
            },
          ].map(({ name, path }, index) => (
            <Link href={path} key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                className={`${router.pathname == path ? "bg-primary-main text-white" : "bg-background-main hover:bg-primary-main hover:text-white"
                  } mx-2  cursor-pointer font-semibold rounded-lg px-4 py-1.5 border-2 border-transparent hover:border-primary-light`}
              >
                {name}
              </motion.div>
            </Link>
          ))
          }
        </ul>

        <ul className="hidden md:flex items-center justify-center py-2">
          <li>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              onClick={themeModeToggle}
              className="text-xl xl:grid place-items-center border-2 hover:border-primary-light  border-outline bg-background-light hover:text-white hover:bg-primary-main rounded-full mx-1 p-2 cursor-pointer relative"
            >
              {mode == "dark" ? (
                <SunIcon className="w-6 h-6" />
              ) : (
                <MoonIcon className="w-6 h-6" />
              )}
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
