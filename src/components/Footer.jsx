import React from 'react'

const Footer = () => {
  return (
     <footer className="border-t border-gray-300 mt-12 px-20 font-com">
      <div className="container py-8 text-sm" style={{ color: "var(--muted)" }}>
        <div className="flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} Sneakers. All rights reserved.</p>
          <p className="mt-3 md:mt-0 hover:font-bold cursor-pointer">
            Built by Donrealex • Challenge from Frontend Mentor
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer