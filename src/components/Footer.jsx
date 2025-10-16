import { Phone, Mail, MapPin, Shield, Award, Eye } from 'lucide-react'
import { useState, useEffect } from 'react'
import logo from '../assets/logo_concept_1.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Get visitor count from localStorage
    const storedCount = localStorage.getItem('ecotech_visitor_count')
    const lastVisit = localStorage.getItem('ecotech_last_visit')
    const today = new Date().toDateString()
    
    if (lastVisit !== today) {
      // New visit - increment counter
      const newCount = storedCount ? parseInt(storedCount) + 1 : 1
      localStorage.setItem('ecotech_visitor_count', newCount.toString())
      localStorage.setItem('ecotech_last_visit', today)
      setVisitorCount(newCount)
    } else {
      // Same day visit - just display count
      setVisitorCount(storedCount ? parseInt(storedCount) : 0)
    }
  }, [])

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Grease Trap Solutions',
    'GES Biological Treatment',
    'High-Pressure Cleaning',
    'Used Oil Recycling',
    'Emergency Services',
    'Consultation'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Eco Technology" className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading environmental protection services in UAE. Professional grease trap solutions, 
              biological treatment systems, and sustainable waste management for commercial kitchens.
            </p>
            
            {/* Certifications */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-400" />
                <span className="text-sm text-gray-300">Municipality Approved</span>
              </div>
            </div>

            {/* LinkedIn Badge */}
            <div className="mt-6">
              <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="robin-edwan-040052230" data-version="v1">
                <a className="badge-base__link LI-simple-link" href="https://ae.linkedin.com/in/robin-edwan-040052230?trk=profile-badge">Robin Edwan</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">Sales & Support</p>
                  <a 
                    href="tel:+971522233989" 
                    className="text-white hover:text-green-400 transition-colors duration-200"
                  >
                    +971 52 223 3989
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a 
                    href="mailto:robenedwan@gmail.com" 
                    className="text-white hover:text-green-400 transition-colors duration-200"
                  >
                    robenedwan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">Ajman, UAE</p>
                  <p className="text-gray-400 text-xs">Serving all Emirates</p>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6 p-4 bg-red-900 bg-opacity-50 rounded-lg border border-red-700">
              <p className="text-red-200 text-sm font-medium">24/7 Emergency Services</p>
              <p className="text-red-300 text-xs">For urgent grease trap issues</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Eco Technology Environmental Protection Services LLC. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>ISO Certified</span>
              <span>•</span>
              <span>Municipality Approved</span>
              <span>•</span>
              <span>UAE Licensed</span>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-medium">{visitorCount.toLocaleString()} Visitors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

