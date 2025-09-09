import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { 
  Leaf, 
  Recycle, 
  Droplets, 
  TrendingUp, 
  Shield, 
  Users, 
  DollarSign, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Star,
  Building,
  Zap,
  Target,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import assets
import heroBg from './assets/hero-bg.jpg'
import greenTech from './assets/green-tech.jpg'
import kitchenCleaning from './assets/kitchen-cleaning.jpg'
import dubaiSkyline from './assets/dubai-skyline.jpg'
import growthChart from './assets/growth-chart.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Grease Trap Maintenance",
      description: "Professional cleaning services ensuring regulatory compliance for commercial kitchens",
      features: ["Regular maintenance schedules", "Compliance documentation", "Emergency services"]
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Used Cooking Oil Recycling",
      description: "Sustainable disposal and recycling solutions turning waste into valuable resources",
      features: ["Eco-friendly collection", "Certified recycling process", "Revenue sharing program"]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Bioremediation with GES System",
      description: "Certified biological treatment for comprehensive waste management solutions",
      features: ["Advanced biotechnology", "Environmental restoration", "Long-term sustainability"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High-Pressure Cleaning",
      description: "Advanced hot water cleaning technology for commercial kitchen deep cleaning",
      features: ["State-of-the-art equipment", "Thorough sanitization", "Quick turnaround"]
    }
  ]

  const stats = [
    { number: "2016", label: "Founded", icon: <Building className="w-6 h-6" /> },
    { number: "80+", label: "Active Clients", icon: <Users className="w-6 h-6" /> },
    { number: "25+", label: "Prepaid Contracts", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "$100K", label: "Investment Seeking", icon: <DollarSign className="w-6 h-6" /> }
  ]

  const investmentHighlights = [
    {
      title: "Proven Business Model",
      description: "Established client base with recurring revenue streams in the growing UAE F&B sector",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Regulatory Compliance",
      description: "Officially licensed and accredited by UAE municipal authorities",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Market Opportunity",
      description: "UAE's commitment to sustainability creates expanding market demand",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Scalable Operations",
      description: "Infrastructure in place for rapid growth across all Emirates",
      icon: <ArrowRight className="w-6 h-6" />
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-foreground">EcoTech</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#investment" className="text-muted-foreground hover:text-foreground transition-colors">Investment</a>
            <a href="#market" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-green-600/20 text-green-400 border-green-600">
            Investment Opportunity
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Invest in Green
            <span className="block text-green-400">Innovation</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 px-4">
            Join EcoTech's exclusive business opportunity in UAE's growing environmental services sector. 
            Sustainable solutions generating sustainable profits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4"
              onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <DollarSign className="w-5 h-5 mr-2" />
              View Investment Details
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-black text-lg px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Our Services</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Advanced Environmental Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive environmental services for the UAE F&B industry, ensuring compliance 
              and sustainability while generating consistent revenue streams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="text-green-600 mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity Section */}
      <section id="investment" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Investment Opportunity</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Gateway to Sustainable Profits
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                EcoTech offers a strategic investment opportunity in UAE's growing environmental 
                services sector with proven results and solid expansion plans.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {investmentHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-green-600 mt-1">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-2xl font-bold mb-4 text-green-600">$100,000 Investment</h3>
                <p className="text-muted-foreground mb-4">
                  Strategic capital allocation for operations, equipment, digital platform, 
                  marketing, and working capital to maximize growth potential.
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 text-yellow-500 mr-2" />
                  Negotiable equity terms available
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <img 
                src={dubaiSkyline} 
                alt="Dubai Business Skyline" 
                className="rounded-lg shadow-lg w-full"
              />
              <img 
                src={growthChart} 
                alt="Sustainable Growth Chart" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Model Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Revenue Model</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable Revenue Streams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Renewable Contracts</CardTitle>
                <CardDescription>
                  Subscription-based model ensuring consistent cash flow
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Flexible Service Plans</CardTitle>
                <CardDescription>
                  Customized schedules (2-4 times monthly) based on client needs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle>Prepaid Contracts</CardTitle>
                <CardDescription>
                  25+ clients with annual prepaid agreements for enhanced liquidity
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>Digital Tracking</CardTitle>
                <CardDescription>
                  Complete documentation with digital monitoring and detailed reports
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={kitchenCleaning} 
                alt="Commercial Kitchen Cleaning" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800">Market Opportunity</Badge>
              <h2 className="text-4xl font-bold mb-6">
                Thriving in UAE's Green Economy
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Growing Green Economy</h3>
                    <p className="text-muted-foreground">
                      UAE's commitment to sustainability creates expanding market demand for environmental services.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Regulatory Compliance</h3>
                    <p className="text-muted-foreground">
                      Increasing environmental regulations driving service needs across the F&B sector.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Building className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Booming F&B Sector</h3>
                    <p className="text-muted-foreground">
                      Rapid growth in restaurants and hotels across the Emirates creates expanding client base.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Get In Touch</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the Green Economy Revolution?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact Robin Nihad today to request our detailed investment prospectus and 
              discover how you can be part of UAE's sustainable future.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">robenedwan@ecotech.ae</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">+971522233989</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Investment Highlights</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Officially licensed and accredited
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Established client base since 2016
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Proven revenue model with recurring contracts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Ready for rapid expansion across Emirates
                  </li>
                </ul>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Request Investment Prospectus</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll send you detailed information about this investment opportunity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form 
                  name="investor-contact" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="investor-contact" />
                  <p hidden>
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your investment interests..."
                      rows={4}
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Investment Inquiry
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => window.open('https://wa.me/971522233989', '_blank')}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold">EcoTech</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground mb-2">
                Sustainable Environmental Solutions for the UAE F&B Industry
              </p>
              <p className="text-sm text-muted-foreground">
                © 2024 EcoTech. All rights reserved. Licensed and accredited by UAE municipal authorities.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

