import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Studio", href: "/studio" },
  { label: "Experiences", href: "/experiences" },
];

const navLinksRight = [
  { label: "Technologies", href: "/technologies" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

const cards = [
  {
    img: "/assets/carousel_watch_demo_1.png",
    type: "watch",
  },
  {
    img: "/assets/carousel_global_partners.png",
    type: "stat",
    stat: "32",
    statLabel: "Global Partners",
  },
  {
    img: "/assets/carousel_watch_demo_2.png",
    type: "watch",
  },
];

const features = [
  {
    title: "Exclusive Access",
    description: "Unlock locations unavailable to the public.",
    bgColor: "bg-[#F5C7C7]",
    textColor: "text-[#372626]",
    angle: 0,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(-30 31.0373 31.0373)" fill="#372626"/>
        <path d="M26.5608 31.1172C28.3654 30.0752 30.6731 30.6935 31.7151 32.4981L33.2255 35.1139C33.9036 36.2884 35.4055 36.6909 36.58 36.0129C37.7548 35.3348 38.1574 33.8327 37.4791 32.658L35.3998 29.0564C33.3159 25.4471 28.7008 24.2104 25.0914 26.2941L21.4894 28.3736C20.3147 29.0518 19.9122 30.5539 20.5904 31.7285C21.2686 32.9032 22.7707 33.3057 23.9453 32.6274L26.5608 31.1172Z" fill="#372626"/>
      </svg>
    ),
  },
  {
    title: "Nature Escapes",
    description: "Reconnect with untouched landscapes and silence.",
    bgColor: "bg-[#E2F5C7]",
    textColor: "text-[#313726]",
    angle: 15,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(-15 27.8273 27.8273)" fill="#313726"/>
        <path d="M23.4826 26.7459C25.4954 26.2064 27.5644 27.4009 28.1039 29.4137L28.8858 32.3313C29.2369 33.6413 30.5833 34.4188 31.8934 34.0679C33.2036 33.7169 33.9812 32.3702 33.6302 31.06L32.5538 27.0429C31.4751 23.0173 27.3373 20.6282 23.3117 21.7068L19.2941 22.7832C17.9839 23.1342 17.2063 24.4809 17.5574 25.7911C17.9085 27.1013 19.2552 27.8788 20.5654 27.5277L23.4826 26.7459Z" fill="#313726"/>
      </svg>
    ),
  },
  {
    title: "Private Retreats",
    description: "Discover secluded destinations far from crowded tourism.",
    bgColor: "bg-[#C7E9F5]",
    textColor: "text-[#263237]",
    angle: 30,
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="22.7209" cy="22.7209" r="22.7209" fill="#263237"/>
        <path d="M18.8043 20.5518C20.8881 20.5517 22.5775 22.241 22.5776 24.3248L22.5777 27.3454C22.5778 28.7017 23.6772 29.8011 25.0334 29.8012C26.3898 29.8013 27.4895 28.7017 27.4895 27.3453V23.1865C27.4895 19.0189 24.111 15.6403 19.9434 15.6402L15.7841 15.6401C14.4277 15.64 13.3281 16.7396 13.3281 18.096C13.3281 19.4524 14.4277 20.552 15.7842 20.552L18.8043 20.5518Z" fill="#263237"/>
      </svg>
    ),
  },
  {
    title: "Curated Adventures",
    description: "Experiences tailored to your lifestyle and preferences.",
    bgColor: "bg-[#F5EBC7]",
    textColor: "text-[#373326]",
    angle: 45,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(15 27.8273 27.8273)" fill="#373326"/>
        <path d="M24.6054 24.7184C26.6183 25.2577 27.8129 27.3266 27.2736 29.3395L26.492 32.2572C26.141 33.5672 26.9184 34.9137 28.2284 35.2648C29.5386 35.616 30.8853 34.8385 31.2364 33.5283L32.3128 29.5113C33.3914 25.4856 31.0025 21.3478 26.9769 20.269L22.9594 19.1924C21.6492 18.8413 20.3025 19.6188 19.9514 20.929C19.6004 22.2392 20.3779 23.5859 21.6882 23.9369L24.6054 24.7184Z" fill="#373326"/>
      </svg>
    ),
  },
  {
    title: "Luxury Concierge",
    description: "Dedicated support for every stage of your trip.",
    bgColor: "bg-[#CAC7F5]",
    textColor: "text-[#262637]",
    angle: 60,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(30 31.0373 31.0373)" fill="#262637"/>
        <path d="M28.7299 27.2005C30.5347 28.2423 31.1531 30.5499 30.1112 32.3547L28.6011 34.9706C27.923 36.1452 28.3254 37.647 29.4999 38.3252C30.6745 39.0036 32.1766 38.6011 32.8548 37.4264L34.9342 33.8248C37.018 30.2155 35.7815 25.6004 32.1723 23.5164L28.5703 21.4367C27.3956 20.7585 25.8935 21.1609 25.2153 22.3356C24.5371 23.5103 24.9396 25.0124 26.1144 25.6905L28.7299 27.2005Z" fill="#262637"/>
      </svg>
    ),
  },
  {
    title: "Hidden Gems",
    description: "Discover destinations only locals know about.",
    bgColor: "bg-[#F5C7E8]",
    textColor: "text-[#372638]",
    angle: 75,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(-15 27.8273 27.8273)" fill="#372638"/>
        <path d="M23.4826 26.7459C25.4954 26.2064 27.5644 27.4009 28.1039 29.4137L28.8858 32.3313C29.2369 33.6413 30.5833 34.4188 31.8934 34.0679C33.2036 33.7169 33.9812 32.3702 33.6302 31.06L32.5538 27.0429C31.4751 23.0173 27.3373 20.6282 23.3117 21.7068L19.2941 22.7832C17.9839 23.1342 17.2063 24.4809 17.5574 25.7911C17.9085 27.1013 19.2552 27.8788 20.5654 27.5277L23.4826 26.7459Z" fill="#372638"/>
      </svg>
    ),
  },
  {
    title: "Personal Guides",
    description: "Expert local knowledge and intimate experiences.",
    bgColor: "bg-[#C7F5E2]",
    textColor: "text-[#263726]",
    angle: 90,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(15 27.8273 27.8273)" fill="#263726"/>
        <path d="M24.6054 24.7184C26.6183 25.2577 27.8129 27.3266 27.2736 29.3395L26.492 32.2572C26.141 33.5672 26.9184 34.9137 28.2284 35.2648C29.5386 35.616 30.8853 34.8385 31.2364 33.5283L32.3128 29.5113C33.3914 25.4856 31.0025 21.3478 26.9769 20.269L22.9594 19.1924C21.6492 18.8413 20.3025 19.6188 19.9514 20.929C19.6004 22.2392 20.3779 23.5859 21.6882 23.9369L24.6054 24.7184Z" fill="#263726"/>
      </svg>
    ),
  },
  {
    title: "Wellness Retreats",
    description: "Rejuvenate mind, body, and soul in paradise.",
    bgColor: "bg-[#E8C7F5]",
    textColor: "text-[#372637]",
    angle: 105,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(30 31.0373 31.0373)" fill="#372637"/>
        <path d="M28.7299 27.2005C30.5347 28.2423 31.1531 30.5499 30.1112 32.3547L28.6011 34.9706C27.923 36.1452 28.3254 37.647 29.4999 38.3252C30.6745 39.0036 32.1766 38.6011 32.8548 37.4264L34.9342 33.8248C37.018 30.2155 35.7815 25.6004 32.1723 23.5164L28.5703 21.4367C27.3956 20.7585 25.8935 21.1609 25.2153 22.3356C24.5371 23.5103 24.9396 25.0124 26.1144 25.6905L28.7299 27.2005Z" fill="#372637"/>
      </svg>
    ),
  },
  {
    title: "Exclusive Access",
    description: "Unlock locations unavailable to the public.",
    bgColor: "bg-[#F5C7C7]",
    textColor: "text-[#372626]",
    angle: 120,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(-30 31.0373 31.0373)" fill="#372626"/>
        <path d="M26.5608 31.1172C28.3654 30.0752 30.6731 30.6935 31.7151 32.4981L33.2255 35.1139C33.9036 36.2884 35.4055 36.6909 36.58 36.0129C37.7548 35.3348 38.1574 33.8327 37.4791 32.658L35.3998 29.0564C33.3159 25.4471 28.7008 24.2104 25.0914 26.2941L21.4894 28.3736C20.3147 29.0518 19.9122 30.5539 20.5904 31.7285C21.2686 32.9032 22.7707 33.3057 23.9453 32.6274L26.5608 31.1172Z" fill="#372626"/>
      </svg>
    ),
  },
  {
    title: "Nature Escapes",
    description: "Reconnect with untouched landscapes and silence.",
    bgColor: "bg-[#E2F5C7]",
    textColor: "text-[#313726]",
    angle: 135,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(-15 27.8273 27.8273)" fill="#313726"/>
        <path d="M23.4826 26.7459C25.4954 26.2064 27.5644 27.4009 28.1039 29.4137L28.8858 32.3313C29.2369 33.6413 30.5833 34.4188 31.8934 34.0679C33.2036 33.7169 33.9812 32.3702 33.6302 31.06L32.5538 27.0429C31.4751 23.0173 27.3373 20.6282 23.3117 21.7068L19.2941 22.7832C17.9839 23.1342 17.2063 24.4809 17.5574 25.7911C17.9085 27.1013 19.2552 27.8788 20.5654 27.5277L23.4826 26.7459Z" fill="#313726"/>
      </svg>
    ),
  },
  {
    title: "Private Retreats",
    description: "Discover secluded destinations far from crowded tourism.",
    bgColor: "bg-[#C7E9F5]",
    textColor: "text-[#263237]",
    angle: 150,
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="22.7209" cy="22.7209" r="22.7209" fill="#263237"/>
        <path d="M18.8043 20.5518C20.8881 20.5517 22.5775 22.241 22.5776 24.3248L22.5777 27.3454C22.5778 28.7017 23.6772 29.8011 25.0334 29.8012C26.3898 29.8013 27.4895 28.7017 27.4895 27.3453V23.1865C27.4895 19.0189 24.111 15.6403 19.9434 15.6402L15.7841 15.6401C14.4277 15.64 13.3281 16.7396 13.3281 18.096C13.3281 19.4524 14.4277 20.552 15.7842 20.552L18.8043 20.5518Z" fill="#263237"/>
      </svg>
    ),
  },
  {
    title: "Curated Adventures",
    description: "Experiences tailored to your lifestyle and preferences.",
    bgColor: "bg-[#F5EBC7]",
    textColor: "text-[#373326]",
    angle: 165,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(15 27.8273 27.8273)" fill="#373326"/>
        <path d="M24.6054 24.7184C26.6183 25.2577 27.8129 27.3266 27.2736 29.3395L26.492 32.2572C26.141 33.5672 26.9184 34.9137 28.2284 35.2648C29.5386 35.616 30.8853 34.8385 31.2364 33.5283L32.3128 29.5113C33.3914 25.4856 31.0025 21.3478 26.9769 20.269L22.9594 19.1924C21.6492 18.8413 20.3025 19.6188 19.9514 20.929C19.6004 22.2392 20.3779 23.5859 21.6882 23.9369L24.6054 24.7184Z" fill="#373326"/>
      </svg>
    ),
  },
  {
    title: "Luxury Concierge",
    description: "Dedicated support for every stage of your trip.",
    bgColor: "bg-[#CAC7F5]",
    textColor: "text-[#262637]",
    angle: 180,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(30 31.0373 31.0373)" fill="#262637"/>
        <path d="M28.7299 27.2005C30.5347 28.2423 31.1531 30.5499 30.1112 32.3547L28.6011 34.9706C27.923 36.1452 28.3254 37.647 29.4999 38.3252C30.6745 39.0036 32.1766 38.6011 32.8548 37.4264L34.9342 33.8248C37.018 30.2155 35.7815 25.6004 32.1723 23.5164L28.5703 21.4367C27.3956 20.7585 25.8935 21.1609 25.2153 22.3356C24.5371 23.5103 24.9396 25.0124 26.1144 25.6905L28.7299 27.2005Z" fill="#262637"/>
      </svg>
    ),
  },
  {
    title: "Hidden Gems",
    description: "Discover destinations only locals know about.",
    bgColor: "bg-[#F5C7E8]",
    textColor: "text-[#372638]",
    angle: 195,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(-15 27.8273 27.8273)" fill="#372638"/>
        <path d="M23.4826 26.7459C25.4954 26.2064 27.5644 27.4009 28.1039 29.4137L28.8858 32.3313C29.2369 33.6413 30.5833 34.4188 31.8934 34.0679C33.2036 33.7169 33.9812 32.3702 33.6302 31.06L32.5538 27.0429C31.4751 23.0173 27.3373 20.6282 23.3117 21.7068L19.2941 22.7832C17.9839 23.1342 17.2063 24.4809 17.5574 25.7911C17.9085 27.1013 19.2552 27.8788 20.5654 27.5277L23.4826 26.7459Z" fill="#372638"/>
      </svg>
    ),
  },
  {
    title: "Personal Guides",
    description: "Expert local knowledge and intimate experiences.",
    bgColor: "bg-[#C7F5E2]",
    textColor: "text-[#263726]",
    angle: 210,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(15 27.8273 27.8273)" fill="#263726"/>
        <path d="M24.6054 24.7184C26.6183 25.2577 27.8129 27.3266 27.2736 29.3395L26.492 32.2572C26.141 33.5672 26.9184 34.9137 28.2284 35.2648C29.5386 35.616 30.8853 34.8385 31.2364 33.5283L32.3128 29.5113C33.3914 25.4856 31.0025 21.3478 26.9769 20.269L22.9594 19.1924C21.6492 18.8413 20.3025 19.6188 19.9514 20.929C19.6004 22.2392 20.3779 23.5859 21.6882 23.9369L24.6054 24.7184Z" fill="#263726"/>
      </svg>
    ),
  },
  {
    title: "Wellness Retreats",
    description: "Rejuvenate mind, body, and soul in paradise.",
    bgColor: "bg-[#E8C7F5]",
    textColor: "text-[#372637]",
    angle: 225,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(30 31.0373 31.0373)" fill="#372637"/>
        <path d="M28.7299 27.2005C30.5347 28.2423 31.1531 30.5499 30.1112 32.3547L28.6011 34.9706C27.923 36.1452 28.3254 37.647 29.4999 38.3252C30.6745 39.0036 32.1766 38.6011 32.8548 37.4264L34.9342 33.8248C37.018 30.2155 35.7815 25.6004 32.1723 23.5164L28.5703 21.4367C27.3956 20.7585 25.8935 21.1609 25.2153 22.3356C24.5371 23.5103 24.9396 25.0124 26.1144 25.6905L28.7299 27.2005Z" fill="#372637"/>
      </svg>
    ),
  },
  {
    title: "Exclusive Access",
    description: "Unlock locations unavailable to the public.",
    bgColor: "bg-[#F5C7C7]",
    textColor: "text-[#372626]",
    angle: 240,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(-30 31.0373 31.0373)" fill="#372626"/>
        <path d="M26.5608 31.1172C28.3654 30.0752 30.6731 30.6935 31.7151 32.4981L33.2255 35.1139C33.9036 36.2884 35.4055 36.6909 36.58 36.0129C37.7548 35.3348 38.1574 33.8327 37.4791 32.658L35.3998 29.0564C33.3159 25.4471 28.7008 24.2104 25.0914 26.2941L21.4894 28.3736C20.3147 29.0518 19.9122 30.5539 20.5904 31.7285C21.2686 32.9032 22.7707 33.3057 23.9453 32.6274L26.5608 31.1172Z" fill="#372626"/>
      </svg>
    ),
  },
  {
    title: "Nature Escapes",
    description: "Reconnect with untouched landscapes and silence.",
    bgColor: "bg-[#E2F5C7]",
    textColor: "text-[#313726]",
    angle: 255,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(-15 27.8273 27.8273)" fill="#313726"/>
        <path d="M23.4826 26.7459C25.4954 26.2064 27.5644 27.4009 28.1039 29.4137L28.8858 32.3313C29.2369 33.6413 30.5833 34.4188 31.8934 34.0679C33.2036 33.7169 33.9812 32.3702 33.6302 31.06L32.5538 27.0429C31.4751 23.0173 27.3373 20.6282 23.3117 21.7068L19.2941 22.7832C17.9839 23.1342 17.2063 24.4809 17.5574 25.7911C17.9085 27.1013 19.2552 27.8788 20.5654 27.5277L23.4826 26.7459Z" fill="#313726"/>
      </svg>
    ),
  },
  {
    title: "Private Retreats",
    description: "Discover secluded destinations far from crowded tourism.",
    bgColor: "bg-[#C7E9F5]",
    textColor: "text-[#263237]",
    angle: 270,
    icon: (
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="22.7209" cy="22.7209" r="22.7209" fill="#263237"/>
        <path d="M18.8043 20.5518C20.8881 20.5517 22.5775 22.241 22.5776 24.3248L22.5777 27.3454C22.5778 28.7017 23.6772 29.8011 25.0334 29.8012C26.3898 29.8013 27.4895 28.7017 27.4895 27.3453V23.1865C27.4895 19.0189 24.111 15.6403 19.9434 15.6402L15.7841 15.6401C14.4277 15.64 13.3281 16.7396 13.3281 18.096C13.3281 19.4524 14.4277 20.552 15.7842 20.552L18.8043 20.5518Z" fill="#263237"/>
      </svg>
    ),
  },
  {
    title: "Curated Adventures",
    description: "Experiences tailored to your lifestyle and preferences.",
    bgColor: "bg-[#F5EBC7]",
    textColor: "text-[#373326]",
    angle: 285,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(15 27.8273 27.8273)" fill="#373326"/>
        <path d="M24.6054 24.7184C26.6183 25.2577 27.8129 27.3266 27.2736 29.3395L26.492 32.2572C26.141 33.5672 26.9184 34.9137 28.2284 35.2648C29.5386 35.616 30.8853 34.8385 31.2364 33.5283L32.3128 29.5113C33.3914 25.4856 31.0025 21.3478 26.9769 20.269L22.9594 19.1924C21.6492 18.8413 20.3025 19.6188 19.9514 20.929C19.6004 22.2392 20.3779 23.5859 21.6882 23.9369L24.6054 24.7184Z" fill="#373326"/>
      </svg>
    ),
  },
  {
    title: "Luxury Concierge",
    description: "Dedicated support for every stage of your trip.",
    bgColor: "bg-[#CAC7F5]",
    textColor: "text-[#262637]",
    angle: 300,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(30 31.0373 31.0373)" fill="#262637"/>
        <path d="M28.7299 27.2005C30.5347 28.2423 31.1531 30.5499 30.1112 32.3547L28.6011 34.9706C27.923 36.1452 28.3254 37.647 29.4999 38.3252C30.6745 39.0036 32.1766 38.6011 32.8548 37.4264L34.9342 33.8248C37.018 30.2155 35.7815 25.6004 32.1723 23.5164L28.5703 21.4367C27.3956 20.7585 25.8935 21.1609 25.2153 22.3356C24.5371 23.5103 24.9396 25.0124 26.1144 25.6905L28.7299 27.2005Z" fill="#262637"/>
      </svg>
    ),
  },
  {
    title: "Hidden Gems",
    description: "Discover destinations only locals know about.",
    bgColor: "bg-[#F5C7E8]",
    textColor: "text-[#372638]",
    angle: 315,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(-15 27.8273 27.8273)" fill="#372638"/>
        <path d="M23.4826 26.7459C25.4954 26.2064 27.5644 27.4009 28.1039 29.4137L28.8858 32.3313C29.2369 33.6413 30.5833 34.4188 31.8934 34.0679C33.2036 33.7169 33.9812 32.3702 33.6302 31.06L32.5538 27.0429C31.4751 23.0173 27.3373 20.6282 23.3117 21.7068L19.2941 22.7832C17.9839 23.1342 17.2063 24.4809 17.5574 25.7911C17.9085 27.1013 19.2552 27.8788 20.5654 27.5277L23.4826 26.7459Z" fill="#372638"/>
      </svg>
    ),
  },
  {
    title: "Personal Guides",
    description: "Expert local knowledge and intimate experiences.",
    bgColor: "bg-[#C7F5E2]",
    textColor: "text-[#263726]",
    angle: 330,
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="27.8273" cy="27.8273" r="22.7209" transform="rotate(15 27.8273 27.8273)" fill="#263726"/>
        <path d="M24.6054 24.7184C26.6183 25.2577 27.8129 27.3266 27.2736 29.3395L26.492 32.2572C26.141 33.5672 26.9184 34.9137 28.2284 35.2648C29.5386 35.616 30.8853 34.8385 31.2364 33.5283L32.3128 29.5113C33.3914 25.4856 31.0025 21.3478 26.9769 20.269L22.9594 19.1924C21.6492 18.8413 20.3025 19.6188 19.9514 20.929C19.6004 22.2392 20.3779 23.5859 21.6882 23.9369L24.6054 24.7184Z" fill="#263726"/>
      </svg>
    ),
  },
  {
    title: "Wellness Retreats",
    description: "Rejuvenate mind, body, and soul in paradise.",
    bgColor: "bg-[#E8C7F5]",
    textColor: "text-[#372637]",
    angle: 345,
    icon: (
      <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.2" cx="31.0373" cy="31.0373" r="22.7209" transform="rotate(30 31.0373 31.0373)" fill="#372637"/>
        <path d="M28.7299 27.2005C30.5347 28.2423 31.1531 30.5499 30.1112 32.3547L28.6011 34.9706C27.923 36.1452 28.3254 37.647 29.4999 38.3252C30.6745 39.0036 32.1766 38.6011 32.8548 37.4264L34.9342 33.8248C37.018 30.2155 35.7815 25.6004 32.1723 23.5164L28.5703 21.4367C27.3956 20.7585 25.8935 21.1609 25.2153 22.3356C24.5371 23.5103 24.9396 25.0124 26.1144 25.6905L28.7299 27.2005Z" fill="#372637"/>
      </svg>
    ),
  },
];

function PlayButton() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center flex-shrink-0">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
          <path
            d="M13.1196 6.5472C14.3399 7.3794 14.3399 9.1788 13.1196 10.011L7.0292 14.1644C5.6376 15.1134 3.7518 14.1168 3.7518 12.4325L3.7518 4.1257C3.7518 2.4414 5.6377 1.4448 7.0292 2.3938L13.1196 6.5472Z"
            fill="#F69070"
          />
        </svg>
      </div>
    </div>
  );
}

function WatchDemoCard({ img }: { img: string }) {
  return (
    <div className="relative rounded-[40px] overflow-hidden bg-[#160E05] flex-shrink-0 w-[184px] h-[193px] select-none">
      <img
        src={img}
        alt="Demo preview"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[90px] flex items-center gap-4 px-5 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.36) 100%)",
          backdropFilter: "blur(15px)",
        }}
      >
        <PlayButton />
        <span
          className="text-white leading-[1.2] text-[19px]"
          style={{ fontFamily: "Imprima, sans-serif" }}
        >
          Watch <br /> Demo
        </span>
      </div>
    </div>
  );
}

function StatCard({
  img,
  stat,
  statLabel,
}: {
  img: string;
  stat: string;
  statLabel: string;
}) {
  return (
    <div className="relative rounded-[40px] overflow-hidden bg-[#160E05] flex-shrink-0 w-[184px] h-[193px] select-none">
      <img
        src={img}
        alt={statLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[90px] flex items-center px-5 gap-4 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.36) 100%)",
          backdropFilter: "blur(15px)",
        }}
      >
        <span
          className="text-white text-[40px] leading-[0.94] uppercase flex-shrink-0"
          style={{ fontFamily: "'Viaoda Libre', serif" }}
        >
          {stat}
        </span>
        <span
          className="text-white text-[19px] leading-[1.2] w-[88px]"
          style={{ fontFamily: "Imprima, sans-serif" }}
        >
          {statLabel}
        </span>
      </div>
    </div>
  );
}

function LogoIcon() {
  return (
    <svg
      width="25"
      height="17"
      viewBox="0 0 25 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.73767 11.1974C11.1862 9.74869 13.5349 9.74858 14.9835 11.1971L18.2907 14.504C19.4746 15.6877 21.3938 15.6878 22.5777 14.5041C23.7618 13.3202 23.7618 11.4006 22.5779 10.2167L17.6069 5.2457C14.7098 2.34856 10.0126 2.34848 7.11535 5.24554L2.1438 10.2168C0.959822 11.4007 0.959796 13.3203 2.14374 14.5042C3.3277 15.6882 5.24729 15.6881 6.43119 14.5041L9.73767 11.1974Z"
        fill="#F3CEB9"
      />
    </svg>
  );
}

function EnterExperienceCircle({ onClick }: { onClick: () => void }) {
  return (
    <div 
      className="flex flex-col items-center gap-1 select-none cursor-pointer active:scale-95 transition-transform"
      onClick={onClick}
    >
      <div className="relative w-[123px] h-[123px]">
        <img
          src="/assets/scroll_down_circle.png"
          alt="Enter Experience"
          className="w-full h-full opacity-60 animate-[spin_12s_linear_infinite]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="28"
            height="40"
            viewBox="0 0 28 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="animate-bounce"
          >
            <path
              d="M9.54439 21.2417C11.0180 19.7683 11.0181 17.3792 9.54463 15.9057L6.18085 12.5416C4.97676 11.3374 4.97672 9.38511 6.18076 8.18086C7.38499 6.97644 9.33761 6.97635 10.5419 8.18068L15.5984 13.2372C18.5454 16.1841 18.5455 20.9621 15.5986 23.9091L10.5418 28.9662C9.33753 30.1705 7.38495 30.1706 6.18065 28.9663C4.97632 27.7619 4.97637 25.8093 6.18074 24.6051L9.54439 21.2417Z"
              fill="white"
              opacity="0.9"
            />
            <path
              d="M18.54439 21.2417C20.0180 19.7683 20.0181 17.3792 18.54463 15.9057L15.18085 12.5416C13.97676 11.3374 13.97672 9.38511 15.18076 8.18086C16.38499 6.97644 18.33761 6.97635 19.5419 8.18068L24.5984 13.2372C27.5454 16.1841 27.5455 20.9621 24.5986 23.9091L19.5418 28.9662C18.33753 30.1705 16.38495 30.1706 15.18065 28.9663C13.97632 27.7619 13.97637 25.8093 15.18074 24.6051L18.54439 21.2417Z"
              fill="white"
              opacity="0.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);

  // Layer Refs
  const skyRef = useRef<HTMLImageElement>(null);
  const forestCenterRef = useRef<HTMLImageElement>(null);
  const forestLeftRef = useRef<HTMLImageElement>(null);
  const forestRightRef = useRef<HTMLImageElement>(null);

  // Content Refs
  const heroContentRef = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const circularContainerRef = useRef<HTMLDivElement>(null);
  const globalNavRef = useRef<HTMLElement>(null);

  // Drag Constraint states
  const heroCarouselRef = useRef<HTMLDivElement>(null);
  const [heroConstraints, setHeroConstraints] = useState({ left: 0, right: 0 });

  const sec2CarouselRef = useRef<HTMLDivElement>(null);
  const [sec2Constraints, setSec2Constraints] = useState({ left: 0, right: 0 });

  // Circular rotation state
  const [circularRotation, setCircularRotation] = useState(0);

  // Update drag constraints based on scrollWidth and offsetWidth
  useEffect(() => {
    const updateConstraints = () => {
      if (heroCarouselRef.current) {
        const trackWidth = heroCarouselRef.current.scrollWidth;
        const containerWidth = heroCarouselRef.current.offsetWidth;
        setHeroConstraints({
          left: Math.min(0, -(trackWidth - containerWidth) - 20),
          right: 0,
        });
      }
      if (sec2CarouselRef.current) {
        const trackWidth = sec2CarouselRef.current.scrollWidth;
        const containerWidth = sec2CarouselRef.current.offsetWidth;
        setSec2Constraints({
          left: Math.min(0, -(trackWidth - containerWidth) - 40),
          right: 0,
        });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    // Double check constraints after dynamic loading
    const timer = setTimeout(updateConstraints, 500);

    return () => {
      window.removeEventListener("resize", updateConstraints);
      clearTimeout(timer);
    };
  }, []);

  // GSAP Animations
  useEffect(() => {
    // 1. Initial load animation (fade-in & slight scale down of layers to build depth)
    const loadTl = gsap.timeline();
    
    // Set starting states
    gsap.set([skyRef.current, forestCenterRef.current, forestLeftRef.current, forestRightRef.current], {
      opacity: 0,
    });
    gsap.set(".initial-hide", { opacity: 0 });

    loadTl.fromTo(skyRef.current,
      { scale: 1.08, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" }
    );

    loadTl.fromTo([forestCenterRef.current, forestLeftRef.current, forestRightRef.current],
      { scale: 1.05, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" },
      "-=1.2"
    );

    loadTl.fromTo(".initial-hide",
      { y: 35, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 1.2, ease: "power3.out" },
      "-=0.9"
    );

    // 2. ScrollTrigger Deep Z-Axis Portal Zoom Transition
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        invalidateOnRefresh: true,
      },
    });

    // Fade out Section 1 content as zoom starts
    scrollTl.to(heroContentRef.current, {
      opacity: 0,
      scale: 0.9,
      y: -60,
      pointerEvents: "none",
      duration: 0.35,
    }, 0);

    // Scale up forest center MASSIVELY (flying through forest effect)
    scrollTl.to(forestCenterRef.current, {
      scale: 25,
      opacity: 0,
      yPercent: -20,
      ease: "power1.in",
      duration: 0.35,
    }, 0);

    // Fly left decorative layer out to the left
    scrollTl.to(forestLeftRef.current, {
      scale: 8,
      xPercent: -500,
      yPercent: -20,
      opacity: 0,
      ease: "power1.in",
      duration: 0.35,
    }, 0);

    // Fly right decorative layer out to the right
    scrollTl.to(forestRightRef.current, {
      scale: 8,
      xPercent: 500,
      yPercent: -20,
      opacity: 0,
      ease: "power1.in",
      duration: 0.35,
    }, 0);

    // Sky backgrounds scale slightly for speed differences (parallax depth)
    scrollTl.to(skyRef.current, {
      scale: 1.25,
      opacity: 0.3,
      duration: 1,
    }, 0);

    // Dynamic Header active page transition during scroll trigger
    scrollTl.to(".nav-link-home", { opacity: 0.6, duration: 0.3 }, 0.2);
    scrollTl.to(".nav-link-experiences", { opacity: 1, duration: 0.3 }, 0.4);

    // Fade and slide in Section Two content as portal completes
    scrollTl.fromTo(section2Ref.current,
      { opacity: 0, scale: 0.9, y: 120, pointerEvents: "none" },
      { opacity: 1, scale: 1, y: 0, pointerEvents: "auto", duration: 0.75 },
      0.35
    );

    // Zoom out Object.png from bottom to fit in the frame
    scrollTl.fromTo(objectRef.current,
      { opacity: 0, scale: 1.25, y: 150 },
      { opacity: 1, scale: 1, y: 30, duration: 0.75 },
      0.35
    );

    // Stagger entry of tilted cards in Section Two
    scrollTl.fromTo(".sec2-card-anim",
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, stagger: 0.08, duration: 0.6, ease: "power2.out" },
      0.5
    );

    // Animate circular rotation for cards (cards stay upright, only position changes)
    const rotationObj = { rotation: 0 };
    scrollTl.to(rotationObj, {
      rotation: 360,
      ease: "none",
      duration: 2,
      onUpdate: () => {
        setCircularRotation(rotationObj.rotation);
      },
    }, 0.5);

    return () => {
      // Clean up GSAP timelines & triggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleArrowClick = () => {
    if (scrollContainerRef.current) {
      const scrollHeight = scrollContainerRef.current.offsetHeight;
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={scrollContainerRef} className="relative w-full h-[250vh] bg-[#0c0a1f] overflow-x-hidden">
      {/* Pinned Viewport layer container */}
      <div ref={pinnedContainerRef} className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-10">
        
        {/* ============================================================== */}
        {/* SECTION 1: 3D Image layers */}
        {/* ============================================================== */}
        
        {/* Background Sky & Clouds */}
        <img
          ref={skyRef}
          src="/assets/hero_sky.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0 select-none opacity-0 will-change-parallax"
          aria-hidden
        />
        
        {/* Center Foreground Forest/Portal */}
        <img
          ref={forestCenterRef}
          src="/assets/hero_forest_center.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-20 select-none opacity-0 will-change-parallax"
          aria-hidden
        />

        {/* Left Decorative Flowers/Trees */}
        <img
          ref={forestLeftRef}
          src="/assets/hero_forest_left.png"
          alt=""
          className="absolute top-0 left-0 h-full w-auto object-cover pointer-events-none z-30 select-none opacity-0 will-change-parallax"
          style={{ maxWidth: "none", width: "auto" }}
          aria-hidden
        />

        {/* Right Decorative Flowers/Trees */}
        <img
          ref={forestRightRef}
          src="/assets/hero_forest_right.png"
          alt=""
          className="absolute top-0 right-0 h-full w-auto object-cover pointer-events-none z-30 select-none opacity-0 will-change-parallax"
          style={{ maxWidth: "none", width: "auto" }}
          aria-hidden
        />

        {/* Bottom soft gradient overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[40%] pointer-events-none z-30"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #000 100%)",
            opacity: 0.6,
          }}
          aria-hidden
        />

        {/* ============================================================== */}
        {/* SECTION 2: Atmospheric backdrops */}
        {/* ============================================================== */}
        
        {/* Drifting Clouds (Ambient Floating) */}
        <img
          src="/assets/sec2_clouds.png"
          alt="Drifting clouds backdrop"
          className="absolute top-0 left-0 w-full h-auto object-cover pointer-events-none opacity-85 z-[5] animate-float-clouds"
        />
        
        {/* Suspended Ground Layer (Subtle floating) */}
        <img
          src="/assets/sec2_ground.png"
          alt="Ground silhouette backdrop"
          className="absolute bottom-0 left-0 w-full h-auto object-cover pointer-events-none opacity-90 z-[5] animate-float-ground"
        />

        {/* Dark cosmic blue overlay */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-[#0C0A1F]/20 via-[#0C0A1F]/70 to-[#0C0A1F] opacity-75 pointer-events-none z-[6]" 
          aria-hidden 
        />

        {/* ============================================================== */}
        {/* PERSISTENT GLOBAL NAVIGATION */}
        {/* ============================================================== */}
        <nav 
          ref={globalNavRef}
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-10 pt-4 pb-2 z-50 pointer-events-auto initial-hide"
        >
          {/* Left nav links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-white text-[13px] leading-[1.2] transition-opacity font-imprima ${
                  link.active ? "nav-link-home" : `nav-link-${link.label.toLowerCase()}`
                }`}
                style={{
                  opacity: link.active ? 1 : 0.6,
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-white block" />
            <span className="w-6 h-0.5 bg-white block" />
            <span className="w-6 h-0.5 bg-white block" />
          </button>

          {/* Center logo icon */}
          <div className="flex items-center justify-center w-12 h-12">
            <LogoIcon />
          </div>

          {/* Right nav links */}
          <div className="hidden md:flex items-center gap-8 lg:gap-16">
            {navLinksRight.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-white text-[13px] leading-[1.2] transition-opacity font-imprima nav-link-${link.label.toLowerCase()}`}
                style={{ opacity: 0.6 }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* ============================================================== */}
        {/* SECTION 1 CONTENT LAYER */}
        {/* ============================================================== */}
        <div 
          ref={heroContentRef} 
          className="absolute inset-0 z-40 flex flex-col justify-between px-6 md:px-12 lg:px-20 pt-28 pb-8 pointer-events-auto h-full"
        >
          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-4">
            
            {/* Headline and descriptive text */}
            <div className="flex flex-col max-w-[400px] select-none">
              
              {/* "STEP ▶ INTO" line */}
              <div className="flex items-baseline gap-4 flex-wrap initial-hide">
                <span
                  className="text-white uppercase leading-[0.94] text-[52px] sm:text-[60px] font-viaoda"
                >
                  Step
                </span>
                <svg
                  width="17"
                  height="26"
                  viewBox="0 0 17 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-1 flex-shrink-0"
                >
                  <path
                    d="M5.54439 15.2417C7.01797 13.7683 7.01808 11.3792 5.54463 9.90565L2.18085 6.54157C0.976763 5.33737 0.976723 3.38511 2.18076 2.18086C3.38499 0.976435 5.33761 0.976353 6.54194 2.18068L11.5984 7.23715C14.5454 10.1841 14.5455 14.9621 11.5986 17.9091L6.5418 22.9662C5.33753 24.1705 3.38495 24.1706 2.18065 22.9663C0.976324 21.7619 0.976368 19.8093 2.18074 18.6051L5.54439 15.2417Z"
                    fill="#F3CEB9"
                  />
                </svg>
                <span
                  className="text-white uppercase leading-[0.94] text-[52px] sm:text-[60px] font-viaoda"
                >
                  Into
                </span>
              </div>

              {/* "WONDER" line */}
              <div className="-mt-2 initial-hide">
                <span
                  className="text-white uppercase leading-[0.94] text-[66px] sm:text-[77px] font-viaoda"
                >
                  Wonder
                </span>
              </div>

              {/* Subtitle description */}
              <p
                className="text-white/80 text-[16px] leading-[1.2] mt-6 max-w-[200px] font-imprima initial-hide"
              >
                Designing immersive digital experiences that blur the line between
                imagination, AI, and reality.
              </p>
            </div>

            {/* Draggable Hero Card Carousel */}
            <div className="flex flex-col items-start md:items-end gap-5 w-full md:w-auto initial-hide">
              <div 
                ref={heroCarouselRef} 
                className="overflow-hidden w-full max-w-[580px] cursor-grab active:cursor-grabbing no-scrollbar py-2"
              >
                <motion.div
                  drag="x"
                  dragConstraints={heroConstraints}
                  dragElastic={0.1}
                  dragTransition={{ bounceStiffness: 400, bounceDamping: 22 }}
                  className="flex gap-3 w-max pr-8"
                >
                  {cards.map((card, i) =>
                    card.type === "watch" ? (
                      <WatchDemoCard key={i} img={card.img} />
                    ) : (
                      <StatCard
                        key={i}
                        img={card.img}
                        stat={card.stat!}
                        statLabel={card.statLabel!}
                      />
                    )
                  )}
                </motion.div>
              </div>

              {/* Pagination Dots indicator */}
              <div className="flex items-center gap-[17px] pl-[29px] select-none">
                {[1, 0.4, 0.3, 0.2].map((opacity, i) => (
                  <div
                    key={i}
                    className="w-[18px] h-2 rounded-full bg-white transition-opacity duration-300"
                    style={{ opacity }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Downward Navigation Indicator (Enter Experience) */}
          <div className="flex justify-center items-center pb-4 pt-2 initial-hide">
            <EnterExperienceCircle onClick={handleArrowClick} />
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 2 CONTENT LAYER */}
        {/* ============================================================== */}
        <div
          ref={section2Ref}
          className="absolute inset-0 z-40 flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-28 pb-10 h-full opacity-0 pointer-events-none"
        >
          {/* Headline Description */}
          <div className="flex flex-col items-center justify-start text-center max-w-4xl mx-auto select-none mt-2">
            <h1 className="font-viaoda text-4xl sm:text-5xl lg:text-[77px] leading-[94%] text-white uppercase whitespace-nowrap mb-6">
              Create Beyond Reality
            </h1>
            <p className="font-imprima text-[15px] sm:text-[18px] lg:text-[22px] leading-[1.3] text-white/80 max-w-[700px]">
              Exclusive journeys to breathtaking destinations curated for travelers seeking rare and unforgettable experiences.
            </p>
          </div>

          {/* Draggable Cards Carousel in Arc Bridge Layout */}
          <div className="relative w-full flex-1 flex items-end justify-center pb-2 px-4 select-none">
            <div 
              ref={sec2CarouselRef}
              className="overflow-visible w-full max-w-7xl cursor-grab active:cursor-grabbing no-scrollbar py-6 z-20 pointer-events-auto"
            >
              <motion.div
                drag="x"
                dragConstraints={sec2Constraints}
                dragElastic={0.15}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                className="relative w-[1200px] h-[380px] mx-auto select-none"
              >
                {/* Background Arc Circle Overlay, matching the Figma prototype */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-0">
                  <svg
                    className="w-full h-full max-w-5xl"
                    viewBox="0 0 1538 1538"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="769" cy="769" r="768" stroke="#FFFFFF" strokeWidth="1" />
                  </svg>
                </div>

                <div ref={circularContainerRef} className="absolute inset-0">
                  {features.map((feature, index) => {
                    // Calculate circular positioning with 3x larger radius
                    const radius = 840; // Distance from center (3x larger)
                    const angleRad = ((feature.angle + circularRotation) * Math.PI) / 180;
                    const centerX = 600; // 1200px / 2
                    const centerY = 850; // Moved to bottom
                    const x = centerX + radius * Math.cos(angleRad);
                    const y = centerY + radius * Math.sin(angleRad);

                    return (
                      <div
                        key={index}
                        className="sec2-card-anim absolute flex-shrink-0 z-10"
                        style={{
                          left: `${x}px`,
                          top: `${y}px`,
                          transform: `translate(-50%, -50%)`,
                        }}
                      >
                        {/* Nested Wrapper for compositor-accelerated CSS keyframe oscillation, isolating drag */}
                        <div className={`w-[200px] h-[216px] rounded-[40px] shadow-2xl relative p-6 flex flex-col ${feature.bgColor} float-card-${index}`}>
                          
                          {/* SVG Icon top right */}
                          <div className="absolute top-4 right-4">
                            {feature.icon}
                          </div>

                          {/* Title & description absolute base */}
                          <div className="mt-auto flex flex-col gap-2">
                            <h3 className={`font-viaoda text-[28px] font-normal leading-[94%] ${feature.textColor}`}>
                              {feature.title}
                            </h3>
                            <p className={`font-imprima text-[13px] font-normal leading-[120%] opacity-60 ${feature.textColor}`}>
                              {feature.description}
                            </p>
                          </div>

                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

        </div>

        {/* Foreground dense cloud layer covering only the bottom part of the cards, aligned 100% with the background */}
        <div
          ref={objectRef}
          className="absolute inset-0 w-full h-full pointer-events-none z-[45] opacity-0 will-change-parallax"
        >
          <img
            src="/assets/Object.png"
            alt=""
            className="w-full h-full object-cover animate-float-ground"
            style={{ 
              mixBlendMode: "normal",
              maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 42%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(0,0,0,0) 42%, rgba(0,0,0,0) 100%)"
            }}
          />
        </div>

      </div>
    </div>
  );
}
