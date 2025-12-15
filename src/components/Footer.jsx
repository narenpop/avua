import React from 'react'

const footerLinks = [
  { id: 1, title: 'Energy', Icon: './energy.svg' },
  { id: 2, title: 'Construction', Icon: './construction.svg' },
  { id: 3, title: 'Life', Icon: './life.svg' },
  { id: 4, title: 'Healthcare', Icon: './health.svg' },
  { id: 5, title: 'Finance', Icon: './finance.svg' },
  { id: 6, title: 'IT & Technology', Icon: './It.svg' }
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#F9F2F6] via-[#FDF8F9] to-[#F5F4FB] text-gray-600 mt-10 mb-20 rounded-3xl 
      px-5 py-6 
      md:px-10 md:py-10 
      flex flex-col gap-6 shadow-md ">

      {/* About */}
      <p className="text-base md:text-[18px] font-bold text-black">
        About avua
      </p>

      <p className="text-sm md:text-[17px] leading-relaxed mb-6 text-black">
        avua is an AI-powered hiring platform connecting talented professionals
        with over 1 million active job opportunities worldwide. Our mission is
        to transform the recruitment experience by making it faster, smarter,
        and more personalized. We specialize in six key sectors.
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-[700px] mb-6">
        {footerLinks.map((link) => (
          <div
            key={link.id}
            className="flex items-center gap-3"
          >
            <img
              src={link.Icon}
              alt={link.title}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <p className="font-semibold text-black text-sm md:text-base">
              {link.title}
            </p>
          </div>
        ))}
      </div>

      {/* Description section */}
      <div className="flex flex-col sm:flex-row gap-4 items-start mb-6">
        <img
          src="./footdesign.svg"
          width={61}
          alt="footerdesign"
          className="shrink-0"
        />
        <p className="text-sm md:text-base text-black leading-relaxed">
          With avua, you’ll receive{' '}
          <span className="font-bold">
            personalized job recommendations tailored to your skills,
            experience, and career goals,
          </span>{' '}
          helping you find the right opportunity faster. Register today and
          take the next step in your career journey with avua!
        </p>
      </div>

      {/* CTA Button */}
      <button className="
        flex items-center justify-center gap-2
        px-5 py-3
        bg-[#EFE9FF] text-[#7C5CFF]
        font-medium rounded-full
        hover:bg-[#e3dbff] transition
        w-full sm:w-fit
      ">
        Sign Up to avua Today
        <img src="./signup.svg" alt="arrowup" />
      </button>

    </footer>
  )
}

