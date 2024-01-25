"use client";
import { Button, Navbar, TextInput } from "flowbite-react";
import Link from "next/link";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import SearchIcon from "@mui/icons-material/Search";
import { FaMoon } from "react-icons/fa6";

export default function Header() {
  const pages = ["/", "signIn", "projects"];
  return (
    <>
      <Navbar fluid rounded>
        <Link
          href="/"
          className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white dark:bg-black bg-white text-black"
        >
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Fluid
          </span>
          Space
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={SearchAlt}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray">
          <SearchIcon />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline self-center"
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
          <Link href="/signIn">
            <Button gradientDuoTone="purpleToBlue" pill>
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/projects">Projects</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
