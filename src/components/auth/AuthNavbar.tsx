import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import logo_name from '../../assets/logo-light-text.svg'

export const AuthNavbar: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="ChatAndBuild Logo" className="h-8 w-8 mr-2" />
              <img src={logo_name} alt="ChatAndBuild Logo1" className="h-500 w-500 mr-2" />

              {/* <span className="text-xl font-bold text-indigo-600">ChatAndBuild</span> */}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AuthNavbar
