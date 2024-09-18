import Image from "next/image";
import React from "react";
import { TfiWrite } from "react-icons/tfi";
import { MdComputer } from "react-icons/md";
import { BsBriefcaseFill, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

import Link from "next/link";

export default function Home() {
  return (
    <React.Fragment>
      <header className="">
        <nav className="container mx-auto flex justify-between gap-4 items-center p-4">
          <div className="">
            <div className="font-bold text-xl flex items-center gap-4">
              <Image
                width={50}
                height={50}
                src="/assets/logo.png"
                alt="Download Cv"
                className="w-6 h-6 object-contain rounded-md border"
              />
              <span>TheWriterNextDoor</span>
            </div>
            <div className="text-gray-200 text-xs">Invest in the success of your content</div>
          </div>
          <ul className="hidden lg:flex items-center justify-center gap-4">
            <li>
              <Link href="#" className="text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-200">
                Service
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-200">
                Projects
              </Link>
            </li>
            <li>
              <a href="#contact" className="border-2 border-gray-200 text-gray-200 rounded-md py-1 px-4">
                Hire Me
              </a>
            </li>
          </ul>
          <div className="flex lg:hidden justify-end">
            <button className="lg:hidden"></button>
          </div>
        </nav>
      </header>
      <main>
        <section className="">
          <div className="container mx-auto p-4 min-h-screen max-h-[850px] flex justify-center items-center">
            <div>
              <div className="flex justify-center mb-5">
                <Image
                  width={300}
                  height={300}
                  src="/assets/thewriter.png"
                  alt="Loba Ridwan"
                  className="w-36 h-36 object-contain rounded-md"
                />
              </div>
              <div className="text-6xl mb-5 font-bold text-center font-serif">I&apos;m Loba Ridwan</div>
              <div className="text-xl text-center mb-5">
                A skilled ghostwriter, proofreader, and editor with a passion for crafting compelling narratives and
                polishing content to perfection.
              </div>
              <div className="flex justify-center items-center gap-4">
                <Link href="https://www.facebook.com/tukur.l.ridwan?mibextid=ZbWKwL" target="_blank">
                  <BsFacebook className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/tukur-loba-ridwan-651095167?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                >
                  <BsLinkedin className="w-6 h-6" />
                </Link>
                <Link href="https://x.com/Oreal2kur?t=fEPGZOR-w3VQsjcdWjXkww&s=08" target="_blank">
                  <BsTwitter className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.instagram.com/thewriternextdoor_ng?utm_source=qr&igsh=dXRsNW4ydnJpcWV4"
                  target="_blank"
                >
                  <BsInstagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto p-4">
          <hr className="h-2" />
        </div>
        <section className="py-20" id="about">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center">
                <div className="uppercase text-5xl mb-10 font-semibold font-serif">
                  Passionate writer with a flair for storytelling.
                </div>
                <div className="text-xl">
                  Loba Ridwan is a skilled ghostwriter, proofreader, editor. Easing the burden of students, job-seekers
                  and startups with research projects, excellent resumes and valuable web content constitute his
                  stronghold.
                </div>
              </div>
              <div className="flex justify-end">
                <div className="overflow-hidden rounded-tl-[68px] rounded-br-[68px]">
                  <Image
                    width={645}
                    height={872}
                    src="/assets/thewriter-1.png"
                    alt="Loba Ridwan"
                    className="w-full max-h-[550px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto p-4">
          <hr className="h-2" />
        </div>
        <section className="py-20" id="services">
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-5 font-semibold text-4xl font-serif uppercase">What I Do</div>
                <div className="text-lg mb-10">
                  I create clear, engaging, and SEO-friendly content that helps brands connect with their audience. From
                  blog posts to web copy and social media, I tailor each piece to fit your brand voice and achieve your
                  goals.
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-serif">250+</div>
                    <div className="text-lg font-bold">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-serif">79+</div>
                    <div className="text-lg font-bold">Happy Clients</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-5 rounded-md p-4 py-6 bg-gray-300 flex gap-4 items-center">
                  <div className="min-w-20 min-h-20 flex justify-center items-center bg-yellow-500 rounded-full">
                    <TfiWrite className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-3xl text-gray-900">Content Writing</div>
                    <div className="text-gray-900">
                      Use my writing service to create optimized resumes, business plans, and LinkedIn profiles
                    </div>
                  </div>
                </div>
                <div className="mb-5 rounded-md p-4 py-6 bg-gray-100 flex gap-4 items-center">
                  <div className="min-w-20 min-h-20 flex justify-center items-center bg-cyan-700 rounded-full">
                    <MdComputer className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-3xl text-gray-900">Technical Writing</div>
                    <div className="text-gray-900">
                      Simplify your tasks with clear, precise writing for user manuals, press releases, and white
                      papers.
                    </div>
                  </div>
                </div>
                <div className="mb-5 rounded-md p-4 py-6 bg-gray-300 flex gap-4 items-center">
                  <div className="min-w-20 min-h-20 flex justify-center items-center bg-orange-700 rounded-full">
                    <BsBriefcaseFill className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-3xl text-gray-900">Business Writing</div>
                    <div className="text-gray-900">
                      Creates compelling business plans and global market strategies for long-term growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mx-auto p-4">
          <hr className="h-2" />
        </div>
        <section className="py-20" id="contact">
          <div className="container mx-auto p-4">
            <div className="text-center mb-5 font-semibold text-4xl font-serif">Let&apos;s Start by saying Hi!</div>
            <div className="flex justify-center">
              <a
                href="mailto:"
                className="border-2 border-gray-200 text-gray-200 rounded-md py-1 px-4 flex items-center"
              >
                <CiMail className="w-6 h-6 mr-3" /> Email Me
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container mx-auto p-4">
          <ul className="flex items-center justify-center gap-8 mb-3">
            <li>
              <Link href="#" className="text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-200">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-200">
                Contact
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-200">
                Projects
              </Link>
            </li>
            <li>
              <div className="flex gap-4 items-center"></div>
            </li>
          </ul>
          <div className="text-center text-sm font-medium text-gray-200">
            &copy;<time id="year">{new Date().getFullYear()}</time> Loba Ridwan. All rights reserved
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
