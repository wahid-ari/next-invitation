import { Link as LinkScroll } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";

function Heart({ className }) {
  return (
    <svg className={className} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7484 18.8538C8.46358 17.5179 6.33801 15.9456 4.40978 14.1652C3.05414 12.8829 2.02211 11.3198 1.39273 9.59539C0.260151 6.25031 1.58308 2.42083 5.28539 1.28752C7.23117 0.692435 9.35626 1.03255 10.9959 2.20148C12.6361 1.03398 14.7605 0.693978 16.7064 1.28752C20.4087 2.42083 21.7411 6.25031 20.6086 9.59539C19.9792 11.3198 18.9471 12.8829 17.5915 14.1652C15.6633 15.9456 13.5377 17.5179 11.2529 18.8538L11.0054 19L10.7484 18.8538Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" d="M14.9362 5.05273C16.0575 5.39303 16.8543 6.34944 16.9539 7.47472" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.7484 18.8538C8.46358 17.5179 6.33801 15.9456 4.40978 14.1652C3.05414 12.8829 2.02211 11.3198 1.39273 9.59539C0.260151 6.25031 1.58308 2.42083 5.28539 1.28752C7.23117 0.692435 9.35626 1.03255 10.9959 2.20148C12.6361 1.03398 14.7605 0.693978 16.7064 1.28752C20.4087 2.42083 21.7411 6.25031 20.6086 9.59539C19.9792 11.3198 18.9471 12.8829 17.5915 14.1652C15.6633 15.9456 13.5377 17.5179 11.2529 18.8538L11.0054 19L10.7484 18.8538Z" stroke="url(#paint0_linear_138_9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <g opacity="0.4">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.9362 5.05273C16.0575 5.39303 16.8543 6.34944 16.9539 7.47472Z" fill="url(#paint1_linear_138_9)" />
        <path d="M14.9362 5.05273C16.0575 5.39303 16.8543 6.34944 16.9539 7.47472" stroke="url(#paint2_linear_138_9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_138_9" x1="11" y1="1" x2="11" y2="19" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="0.505208" stopColor="#10710B" />
          <stop offset="1" stopColor="#014576" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_9" x1="15.945" y1="5.05273" x2="15.945" y2="7.47472" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B59A02" />
          <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint2_linear_138_9" x1="15.945" y1="5.05273" x2="15.945" y2="7.47472" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B89B02" />
          <stop offset="1" stopColor="#034B69" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Gallery({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.3034 0.750488H5.65443C2.63943 0.750488 0.750427 2.88449 0.750427 5.90449V14.0535C0.750427 17.0735 2.63143 19.2075 5.65443 19.2075H14.3024C17.3264 19.2075 19.2074 17.0735 19.2074 14.0535V5.90449C19.2074 2.88449 17.3264 0.750488 14.3034 0.750488Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M8.70333 6.78545C8.70333 7.80445 7.87633 8.63145 6.85733 8.63145C5.83933 8.63145 5.01233 7.80445 5.01233 6.78545C5.01233 5.76645 5.83933 4.93945 6.85733 4.93945C7.87633 4.93945 8.70333 5.76645 8.70333 6.78545Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" d="M19.2068 12.9505C18.2128 12.0855 17.3478 11.0445 16.2078 10.3575C15.0658 9.67054 13.8388 10.0945 13.0468 11.1195C12.2818 12.1105 11.8038 13.4435 10.6488 14.0685C9.22576 14.8395 8.38976 13.5965 7.20276 13.0985C5.87776 12.5435 4.87176 13.5415 4.09776 14.5005C3.32276 15.4605 2.53776 16.4105 1.74976 17.3605" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
function GalleryIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.3034 0.750488H5.65443C2.63943 0.750488 0.750427 2.88449 0.750427 5.90449V14.0535C0.750427 17.0735 2.63143 19.2075 5.65443 19.2075H14.3024C17.3264 19.2075 19.2074 17.0735 19.2074 14.0535V5.90449C19.2074 2.88449 17.3264 0.750488 14.3034 0.750488Z" stroke="url(#paint0_linear_138_4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M8.70333 6.78545C8.70333 7.80445 7.87633 8.63145 6.85733 8.63145C5.83933 8.63145 5.01233 7.80445 5.01233 6.78545C5.01233 5.76645 5.83933 4.93945 6.85733 4.93945C7.87633 4.93945 8.70333 5.76645 8.70333 6.78545Z" stroke="url(#paint1_linear_138_4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" d="M19.2068 12.9505C18.2128 12.0855 17.3478 11.0445 16.2078 10.3575C15.0658 9.67054 13.8388 10.0945 13.0468 11.1195C12.2818 12.1105 11.8038 13.4435 10.6488 14.0685C9.22576 14.8395 8.38976 13.5965 7.20276 13.0985C5.87776 12.5435 4.87176 13.5415 4.09776 14.5005C3.32276 15.4605 2.53776 16.4105 1.74976 17.3605" stroke="url(#paint2_linear_138_4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_138_4" x1="9.97893" y1="0.750488" x2="9.97893" y2="19.2075" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9E00" />
          <stop offset="0.526042" stopColor="#006D0B" />
          <stop offset="1" stopColor="#004476" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_4" x1="6.85783" y1="4.93945" x2="6.85783" y2="8.63145" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9E00" />
          <stop offset="0.526042" stopColor="#006D0B" />
          <stop offset="1" stopColor="#004476" />
        </linearGradient>
        <linearGradient id="paint2_linear_138_4" x1="10.4783" y1="10.022" x2="10.4783" y2="17.3605" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9E00" />
          <stop offset="0.526042" stopColor="#006D0B" />
          <stop offset="1" stopColor="#004476" />
        </linearGradient>
      </defs>
    </svg>

  )
}

function Calendar({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M1.09265 8.40445H18.9166" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M4.80786 12.3096C4.80786 11.8954 5.14365 11.5596 5.55786 11.5596H5.56713C5.98134 11.5596 6.31713 11.8954 6.31713 12.3096C6.31713 12.7238 5.98134 13.0596 5.56713 13.0596H5.55786C5.14365 13.0596 4.80786 12.7238 4.80786 12.3096ZM10.0046 11.5596C9.59037 11.5596 9.25459 11.8954 9.25459 12.3096C9.25459 12.7238 9.59037 13.0596 10.0046 13.0596H10.0138C10.4281 13.0596 10.7638 12.7238 10.7638 12.3096C10.7638 11.8954 10.4281 11.5596 10.0138 11.5596H10.0046ZM14.442 11.5596C14.0278 11.5596 13.692 11.8954 13.692 12.3096C13.692 12.7238 14.0278 13.0596 14.442 13.0596H14.4513C14.8655 13.0596 15.2013 12.7238 15.2013 12.3096C15.2013 11.8954 14.8655 11.5596 14.4513 11.5596H14.442ZM14.442 15.446C14.0278 15.446 13.692 15.7818 13.692 16.196C13.692 16.6103 14.0278 16.946 14.442 16.946H14.4513C14.8655 16.946 15.2013 16.6103 15.2013 16.196C15.2013 15.7818 14.8655 15.446 14.4513 15.446H14.442ZM9.25459 16.196C9.25459 15.7818 9.59037 15.446 10.0046 15.446H10.0138C10.4281 15.446 10.7638 15.7818 10.7638 16.196C10.7638 16.6103 10.4281 16.946 10.0138 16.946H10.0046C9.59037 16.946 9.25459 16.6103 9.25459 16.196ZM5.55786 15.446C5.14365 15.446 4.80786 15.7818 4.80786 16.196C4.80786 16.6103 5.14365 16.946 5.55786 16.946H5.56713C5.98134 16.946 6.31713 16.6103 6.31713 16.196C6.31713 15.7818 5.98134 15.446 5.56713 15.446H5.55786Z" fill="#BABABA" />
      <path d="M14.0437 1V4.29078" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.96552 1V4.29078" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.2383 2.5791H5.77096C2.83427 2.5791 1 4.21504 1 7.22213V16.2718C1 19.3261 2.83427 20.9999 5.77096 20.9999H14.229C17.175 20.9999 19 19.3545 19 16.3474V7.22213C19.0092 4.21504 17.1842 2.5791 14.2383 2.5791Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" d="M1.09265 8.40445H18.9166" stroke="url(#paint0_linear_138_13)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M4.80786 12.3096C4.80786 11.8954 5.14365 11.5596 5.55786 11.5596H5.56713C5.98134 11.5596 6.31713 11.8954 6.31713 12.3096C6.31713 12.7238 5.98134 13.0596 5.56713 13.0596H5.55786C5.14365 13.0596 4.80786 12.7238 4.80786 12.3096ZM10.0046 11.5596C9.59037 11.5596 9.25459 11.8954 9.25459 12.3096C9.25459 12.7238 9.59037 13.0596 10.0046 13.0596H10.0138C10.4281 13.0596 10.7638 12.7238 10.7638 12.3096C10.7638 11.8954 10.4281 11.5596 10.0138 11.5596H10.0046ZM14.442 11.5596C14.0278 11.5596 13.692 11.8954 13.692 12.3096C13.692 12.7238 14.0278 13.0596 14.442 13.0596H14.4513C14.8655 13.0596 15.2013 12.7238 15.2013 12.3096C15.2013 11.8954 14.8655 11.5596 14.4513 11.5596H14.442ZM14.442 15.446C14.0278 15.446 13.692 15.7818 13.692 16.196C13.692 16.6103 14.0278 16.946 14.442 16.946H14.4513C14.8655 16.946 15.2013 16.6103 15.2013 16.196C15.2013 15.7818 14.8655 15.446 14.4513 15.446H14.442ZM9.25459 16.196C9.25459 15.7818 9.59037 15.446 10.0046 15.446H10.0138C10.4281 15.446 10.7638 15.7818 10.7638 16.196C10.7638 16.6103 10.4281 16.946 10.0138 16.946H10.0046C9.59037 16.946 9.25459 16.6103 9.25459 16.196ZM5.55786 15.446C5.14365 15.446 4.80786 15.7818 4.80786 16.196C4.80786 16.6103 5.14365 16.946 5.55786 16.946H5.56713C5.98134 16.946 6.31713 16.6103 6.31713 16.196C6.31713 15.7818 5.98134 15.446 5.56713 15.446H5.55786Z" fill="url(#paint1_linear_138_13)" />
      <path d="M14.0437 1V4.29078" stroke="url(#paint2_linear_138_13)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.96552 1V4.29078" stroke="url(#paint3_linear_138_13)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.2383 2.5791H5.77096C2.83427 2.5791 1 4.21504 1 7.22213V16.2718C1 19.3261 2.83427 20.9999 5.77096 20.9999H14.229C17.175 20.9999 19 19.3545 19 16.3474V7.22213C19.0092 4.21504 17.1842 2.5791 14.2383 2.5791Z" stroke="url(#paint4_linear_138_13)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_138_13" x1="13" y1="8.00024" x2="6.5" y2="9.50024" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C39D02" />
          <stop offset="1" stopColor="#014576" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_13" x1="10.0046" y1="11.5596" x2="10.0046" y2="16.946" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BC9C02" />
          <stop offset="1" stopColor="#014576" />
        </linearGradient>
        <linearGradient id="paint2_linear_138_13" x1="14.5437" y1="1" x2="14.5437" y2="4.29078" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="1" stopColor="#014576" />
        </linearGradient>
        <linearGradient id="paint3_linear_138_13" x1="5.96552" y1="1" x2="5.96552" y2="4.29078" gradientUnits="userSpaceOnUse">
          <stop stopColor="#014576" />
          <stop offset="1" stopColor="#CB9F01" />
        </linearGradient>
        <linearGradient id="paint4_linear_138_13" x1="10" y1="2.5791" x2="10" y2="20.9999" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="0.520833" stopColor="#10710A" />
          <stop offset="1" stopColor="#014576" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Navigation({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7.27002 13.9519L8.8627 8.8627L13.9519 7.27002L12.3593 12.3593L7.27002 13.9519Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.611" cy="10.611" r="9.61098" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function NavigationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M7.27002 13.9519L8.8627 8.8627L13.9519 7.27002L12.3593 12.3593L7.27002 13.9519Z" stroke="url(#paint0_linear_138_30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10.611" cy="10.611" r="9.61098" stroke="url(#paint1_linear_138_30)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_138_30" x1="10.611" y1="7.27002" x2="10.611" y2="13.9519" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="0.510417" stopColor="#20750A" />
          <stop offset="1" stopColor="#03496D" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_30" x1="10.611" y1="1" x2="10.611" y2="20.222" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="0.510417" stopColor="#20750A" />
          <stop offset="1" stopColor="#03496D" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Play({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M14.0501 11.4668C13.3211 12.2528 11.3371 13.5828 10.3221 14.0098C10.1601 14.0778 9.74709 14.2218 9.65809 14.2238C9.46909 14.2298 9.28709 14.1238 9.19909 13.9538C9.16509 13.8878 9.06509 13.4568 9.03309 13.2648C8.93809 12.6808 8.88909 11.7738 8.89009 10.8618C8.88909 9.90483 8.94209 8.95483 9.04809 8.37683C9.07609 8.22083 9.15809 7.86183 9.18209 7.80383C9.22709 7.69583 9.30909 7.61083 9.40809 7.55783C9.48409 7.51683 9.57109 7.49483 9.65809 7.49783C9.74709 7.49983 10.1091 7.62683 10.2331 7.67583C11.2111 8.05583 13.2801 9.43383 14.0401 10.2438C14.1081 10.3168 14.2951 10.5128 14.3261 10.5528C14.3971 10.6428 14.4321 10.7518 14.4321 10.8618C14.4321 10.9638 14.4011 11.0678 14.3371 11.1548C14.3041 11.1998 14.1131 11.3998 14.0501 11.4668Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function PlayIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke="url(#paint0_linear_138_38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4632 9V12.2908" stroke="url(#paint1_linear_138_38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9V12.2908" stroke="url(#paint2_linear_138_38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_138_38" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="0.526042" stopColor="#20740D" />
          <stop offset="1" stopColor="#044A6C" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_38" x1="12.4632" y1="9" x2="12.4632" y2="12.2908" gradientUnits="userSpaceOnUse">
          <stop stopColor="#014576" stopOpacity="0.5" />
          <stop offset="1" stopColor="#CB9F01" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="paint2_linear_138_38" x1="10.5" y1="9" x2="10.5" y2="12.2908" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" stopOpacity="0.5" />
          <stop offset="1" stopColor="#014576" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Pause({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4632 9V12.2908" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9V12.2908" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function PauseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke="url(#paint0_linear_138_38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.4632 9V12.2908" stroke="url(#paint1_linear_138_38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9V12.2908" stroke="url(#paint2_linear_138_38)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_138_38" x1="11" y1="1" x2="11" y2="21" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="0.526042" stopColor="#20740D" />
          <stop offset="1" stopColor="#044A6C" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_38" x1="12.4632" y1="9" x2="12.4632" y2="12.2908" gradientUnits="userSpaceOnUse">
          <stop stopColor="#014576" />
          <stop offset="1" stopColor="#CB9F01" />
        </linearGradient>
        <linearGradient id="paint2_linear_138_38" x1="10.5" y1="9" x2="10.5" y2="12.2908" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CB9F01" />
          <stop offset="1" stopColor="#014576" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Map({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.23914 9.39148C1.25354 5.15089 4.7029 1.7249 8.94348 1.7393C13.1841 1.75371 16.6101 5.20306 16.5957 9.44365V9.53061C16.5435 12.2871 15.0044 14.835 13.1174 16.8263C12.0382 17.9469 10.8331 18.939 9.52609 19.7828C9.1766 20.0851 8.6582 20.0851 8.3087 19.7828C6.3602 18.5145 4.65007 16.9133 3.25653 15.0523C2.01449 13.4296 1.3093 11.4599 1.23914 9.41756L1.23914 9.39148Z" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle opacity="0.4" cx="8.91741" cy="9.53948" r="2.46087" stroke="#BABABA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function MapIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.23914 9.39148C1.25354 5.15089 4.7029 1.7249 8.94348 1.7393C13.1841 1.75371 16.6101 5.20306 16.5957 9.44365V9.53061C16.5435 12.2871 15.0044 14.835 13.1174 16.8263C12.0382 17.9469 10.8331 18.939 9.52609 19.7828C9.1766 20.0851 8.6582 20.0851 8.3087 19.7828C6.3602 18.5145 4.65007 16.9133 3.25653 15.0523C2.01449 13.4296 1.3093 11.4599 1.23914 9.41756L1.23914 9.39148Z" stroke="url(#paint0_linear_138_26)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle opacity="0.4" cx="8.91741" cy="9.53948" r="2.46087" stroke="url(#paint1_linear_138_26)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_138_26" x1="8.91742" y1="1.73926" x2="8.91742" y2="20.0095" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C89F01" />
          <stop offset="0.515625" stopColor="#29770D" />
          <stop offset="1" stopColor="#044A6C" />
        </linearGradient>
        <linearGradient id="paint1_linear_138_26" x1="8.91741" y1="7.07861" x2="8.91741" y2="12.0004" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C89F01" />
          <stop offset="0.515625" stopColor="#29770D" />
          <stop offset="1" stopColor="#044A6C" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function MobileNav() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 shadow-t">
      <div className="bg-black/90 backdrop-blur pb-3 pt-2 mx-2 px-4 flex space-x-3 sm:max-w-md sm:mx-auto justify-between items-center rounded-t-lg overflow-auto scrollbar scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-neutral-900">

        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="pattern"
            href="/#pattern"
            spy={true}
            smooth={true}
            aria-label="Welcome"
            duration={1000}
            onSetActive={() => {
              setActiveLink("pattern");
            }}
            className={`animation-hover 
            ${activeLink === "pattern" ? "animation-active text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-yellow-500" : "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]"} 
            font-bold py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer`
            }
          >
            <span className="hidden xs:block">WELCOME</span>
            {activeLink === "pattern" ?
              <HeartIcon className="block xs:hidden w-6 h-6 pb-1" />
              :
              <Heart className="block xs:hidden w-6 h-6 pb-1" />
            }
          </LinkScroll>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="title"
            href="/#title"
            spy={true}
            smooth={true}
            aria-label="Location"
            duration={1000}
            onSetActive={() => {
              setActiveLink("title");
            }}
            className={`animation-hover 
            ${activeLink === "title" ? " animation-active text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-yellow-500" : "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]"} 
            font-bold py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer`
            }
          >
            <span className="hidden xs:block">LOCATION</span>
            {activeLink === "title" ?
              <MapIcon className="block xs:hidden w-6 h-6 pb-1" />
              :
              <Map className="block xs:hidden w-6 h-6 pb-1" />
            }
          </LinkScroll>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <LinkScroll
            activeClass="active"
            to="gridd"
            href="/#gridd"
            spy={true}
            smooth={true}
            duration={1000}
            aria-label="Gallery"
            onSetActive={() => {
              setActiveLink("gridd");
            }}
            className={`animation-hover 
            ${activeLink === "gridd" ? "animation-active text-transparent bg-clip-text bg-gradient-to-br from-sky-500 to-yellow-500" : "bg-clip-text text-transparent bg-gradient-to-b from-white to-[#AAAAAA]"} 
            font-bold py-1 flex flex-col gap-1 items-center text-sm transition-all cursor-pointer`
            }
          >
            <span className="hidden xs:block">GALLERY</span>
            {activeLink === "gridd" ?
              <GalleryIcon className="block xs:hidden w-6 h-6 pb-1" />
              :
              <Gallery className="block xs:hidden w-6 h-6 pb-1" />
            }
          </LinkScroll>
        </motion.div>
      </div>
    </ nav>
  )
}