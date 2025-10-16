import { ArrowRight, Leaf, Droplets, Recycle, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import sustainableHeroBg from '../assets/sustainable-hero-bg.jpg'

const HeroSectionSustainable = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(45, 80, 22, 0.9) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(107, 144, 128, 0.9) 100%), url(${sustainableHeroBg}) center/cover`
      }}
    >
      {/* Floating Environmental Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <Leaf className="h-8 w-8 text-green-300 opacity-70" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse">
          <Droplets className="h-6 w-6 text-blue-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-1000">
          <Recycle className="h-7 w-7 text-green-400 opacity-80" />
        </div>
        <div className="absolute top-60 right-10 animate-pulse delay-500">
          <Shield className="h-5 w-5 text-blue-400 opacity-70" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Environmental Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <Leaf className="h-5 w-5 text-green-300" />
            <span className="text-white font-medium">حماية البيئة • Environmental Protection</span>
            <Leaf className="h-5 w-5 text-green-300" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="block bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
              مستقبل مستدام
            </span>
            <span className="block mt-2">
              Sustainable Future
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-green-200">
              للمنشآت الغذائية
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            نحمي أعمالكم ونحمي كوكبنا من خلال حلول بيئية مبتكرة ومستدامة
            <br />
            <span className="text-green-200 font-medium">
              Protecting Your Business. Protecting Our Planet.
            </span>
          </p>

          {/* Environmental Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Droplets className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white">50,000+</div>
              <div className="text-sm text-green-200">لتر محمي يومياً</div>
              <div className="text-xs text-white/70">Liters Protected Daily</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Recycle className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-2xl font-bold text-white">10,000+</div>
              <div className="text-sm text-green-200">لتر معاد تدويره</div>
              <div className="text-xs text-white/70">Liters Recycled Monthly</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Leaf className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-2xl font-bold text-white">25%</div>
              <div className="text-sm text-green-200">تقليل الكربون</div>
              <div className="text-xs text-white/70">Carbon Reduction</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-green-200">امتثال بيئي</div>
              <div className="text-xs text-white/70">Environmental Compliance</div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mt-12">
            <Button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>احصل على استشارة مجانية</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              اكتشف حلولنا البيئية
            </Button>
          </div>

          {/* Environmental Certifications */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Leaf className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-white font-semibold">ISO 14001</div>
              <div className="text-green-200 text-sm">إدارة بيئية</div>
              <div className="text-white/70 text-xs">Environmental Management</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Shield className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-white font-semibold">معتمد البلدية</div>
              <div className="text-green-200 text-sm">Municipality Approved</div>
              <div className="text-white/70 text-xs">Ajman Certified</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Recycle className="h-8 w-8 text-green-300" />
              </div>
              <div className="text-white font-semibold">اقتصاد دائري</div>
              <div className="text-green-200 text-sm">Circular Economy</div>
              <div className="text-white/70 text-xs">Zero Waste Initiative</div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 border border-white/20">
                <Droplets className="h-8 w-8 text-blue-300" />
              </div>
              <div className="text-white font-semibold">حماية المياه</div>
              <div className="text-green-200 text-sm">Water Protection</div>
              <div className="text-white/70 text-xs">Marine Conservation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionSustainable
