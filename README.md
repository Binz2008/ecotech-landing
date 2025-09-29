# EcoTech - Investment Landing Page

🌱 **Professional investment landing page for EcoTech's environmental services business in the UAE**

[![Live Website](https://img.shields.io/badge/Live-Website-green?style=for-the-badge)](https://ecotech-uae.netlify.app)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-cyan?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Raspberry Pi](https://img.shields.io/badge/Raspberry_Pi-Support-red?style=for-the-badge&logo=raspberrypi)](https://www.raspberrypi.org/)

## 🌟 **Live Website**

**🔗 [https://ecotech-uae.netlify.app](https://ecotech-uae.netlify.app)**

---

## 📋 **Project Overview**

EcoTech is a professional investment landing page designed to attract investors for a $100,000 investment opportunity in UAE's environmental services sector. The website showcases EcoTech's established business (since 2016) with 80+ active clients and proven revenue streams.

### **🎯 Key Features**

- 💼 **Investment-focused design** - Clear value proposition for investors
- 📱 **Mobile-optimized** - Perfect for TikTok marketing campaigns  
- 🚀 **High-performance** - Fast loading with optimized assets
- 🔒 **Production-ready** - Security headers and SEO optimization
- 📧 **Lead capture** - Working contact forms via Netlify Forms
- 💬 **WhatsApp integration** - Direct communication channel
- 🥧 **Raspberry Pi support** - Self-hosting option for local development

---

## 🛠 **Technology Stack**

### **Frontend**
- **React 19** - Latest React with modern features
- **Vite 6** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icon library

### **Deployment**
- **Netlify** - Static site hosting with forms
- **Raspberry Pi** - Self-hosting option for local development
- **Custom Domain Ready** - Professional branding
- **CDN Optimized** - Global content delivery
- **HTTPS Enabled** - Secure connections

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ 
- pnpm (recommended) or npm

### **Installation**

```bash
# Clone the repository
git clone https://github.com/Binz2008/ecotech-landing.git
cd ecotech-landing

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

### **Available Scripts**

```bash
# Development server
pnpm run dev

# Production build
pnpm run build

# Preview production build
pnpm run preview

# Lint code
pnpm run lint

# Deploy to Raspberry Pi
./deploy-to-raspberry.sh [IP-ADDRESS] [USERNAME]
```

---

## 📁 **Project Structure**

```
ecotech-landing/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── src/
│   ├── assets/            # Images and media
│   ├── components/        # Reusable UI components
│   │   └── ui/           # Shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   ├── index.css         # Base styles
│   └── main.jsx          # Application entry point
├── dist/                 # Production build output
├── RASPBERRY_PI_DEPLOYMENT.md  # Raspberry Pi setup guide
├── deploy-to-raspberry.sh      # Deployment script
├── nginx-ecotech.conf          # Nginx configuration
├── ecotech.service             # Systemd service file
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

---

## 🎨 **Design Features**

### **🌿 Environmental Theme**
- Green color palette representing sustainability
- Professional typography and spacing
- High-quality environmental imagery
- Clean, modern layout design

### **📊 Business Presentation**
- **Company Statistics** - Founded 2016, 80+ clients
- **Service Showcase** - 4 core environmental services
- **Investment Details** - $100K opportunity with clear terms
- **Revenue Model** - Subscription-based recurring income
- **Market Analysis** - UAE's growing green economy

### **📱 Mobile Experience**
- Responsive design for all screen sizes
- Touch-friendly interface elements
- Optimized for TikTok traffic
- Fast loading on mobile networks

---

## 💼 **Business Information**

### **Company Details**
- **Name**: EcoTech Environmental Solutions
- **Founded**: 2016
- **Location**: United Arab Emirates
- **Clients**: 80+ active commercial clients
- **Contact**: robenedwan@ecotech.ae
- **Phone**: +971522233989

### **Services Offered**
1. **Grease Trap Maintenance** - Regulatory compliance for commercial kitchens
2. **Used Cooking Oil Recycling** - Sustainable waste-to-resource conversion
3. **Bioremediation with GES System** - Advanced biological treatment
4. **High-Pressure Cleaning** - Commercial kitchen deep cleaning

### **Investment Opportunity**
- **Amount**: $100,000
- **Sector**: Environmental services
- **Market**: UAE F&B industry
- **Revenue Model**: Subscription-based recurring contracts
- **Growth Plan**: Expansion across all Emirates

---

## 🔧 **Development**

### **Component Architecture**
- **Modular Design** - Reusable components
- **Shadcn/ui Integration** - Consistent design system
- **Custom Hooks** - Shared logic extraction
- **Responsive Utilities** - Mobile-first approach

### **Performance Optimizations**
- **Image Optimization** - Compressed and optimized assets
- **Code Splitting** - Efficient bundle loading
- **Lazy Loading** - On-demand resource loading
- **CDN Integration** - Global content delivery

### **SEO & Analytics**
- **Meta Tags** - Complete social media optimization
- **Structured Data** - Rich snippets for search engines
- **Sitemap** - Search engine indexing
- **Analytics Ready** - Plausible integration

---

## 🚀 **Deployment**

### **Netlify Deployment (Recommended)**

1. **Build the project**:
   ```bash
   pnpm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `dist/` folder to Netlify
   - Or connect GitHub repository for automatic deployments

3. **Configure custom domain** (optional):
   - Add custom domain in Netlify settings
   - Update DNS records at your domain provider

### **Raspberry Pi Deployment**

1. **Prerequisites**:
   - Raspberry Pi with Raspberry Pi OS installed
   - Node.js and npm installed
   - Nginx installed

2. **Deploy using script**:
   ```bash
   ./deploy-to-raspberry.sh 192.168.1.100 pi
   ```

3. **Manual setup**:
   - See [RASPBERRY_PI_DEPLOYMENT.md](./RASPBERRY_PI_DEPLOYMENT.md) for detailed instructions

### **Other Deployment Options**
- **Vercel** - Zero-config deployment
- **GitHub Pages** - Free static hosting
- **Traditional Hosting** - Upload `dist/` folder contents

---

## 📈 **Marketing Integration**

### **TikTok Campaign Ready**
- Mobile-optimized design for TikTok traffic
- Fast loading to reduce bounce rates
- Professional appearance builds trust
- Clear call-to-action for lead generation

### **Lead Generation**
- **Contact Forms** - Netlify Forms integration
- **WhatsApp Button** - Direct communication
- **Email Collection** - Investor prospectus requests
- **Analytics Tracking** - Campaign performance monitoring

---

## 🔒 **Security & Performance**

### **Security Headers**
- Content Security Policy (CSP)
- X-Frame-Options protection
- Referrer Policy configuration
- Permissions Policy restrictions

### **Performance Metrics**
- **Lighthouse Score**: 95+ (Excellent)
- **Mobile Usability**: 100/100
- **Page Load Speed**: <2 seconds
- **SEO Score**: 95+

---

## 📞 **Contact & Support**

### **Business Contact**
- **Email**: robenedwan@ecotech.ae
- **Phone**: +971522233989
- **WhatsApp**: Available via website
- **Location**: United Arab Emirates

### **Technical Support**
- **Repository Issues**: Use GitHub Issues for bug reports
- **Documentation**: Complete guides included
- **Community**: Professional development standards

---

## 📄 **License**

This project is proprietary and confidential. All rights reserved.

---

## 🌟 **Acknowledgments**

- **Design Inspiration**: Modern environmental and investment websites
- **Technology Stack**: React, Vite, Tailwind CSS, and modern web standards
- **Deployment**: Netlify for reliable hosting and forms
- **Performance**: Optimized for speed and user experience

---

**Built with ❤️ for sustainable business growth in the UAE** 🇦🇪
