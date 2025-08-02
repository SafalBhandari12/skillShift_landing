"use client";

import {
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  Users,
  Target,
  TrendingUp,
  Award,
  CheckCircle,
  Sparkles,
  Star,
  Zap,
  Globe,
  Shield,
  Heart,
  Play,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollTop = window.scrollY;
        setIsScrolled(scrollTop > 30);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='min-h-screen bg-gradient-dark font-montserrat'>
      {/* Animated Background Elements */}
      <div className='fixed inset-0 bg-pattern opacity-30'></div>
      <div className='absolute top-20 left-10 w-72 h-72 bg-premium-blue/10 rounded-full blur-3xl floating'></div>
      <div className='absolute top-40 right-20 w-96 h-96 bg-premium-cyan/10 rounded-full blur-3xl floating-delayed'></div>
      <div className='absolute bottom-20 left-1/4 w-80 h-80 bg-premium-indigo/10 rounded-full blur-3xl floating-slow'></div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-[rgba(59,130,246,0.05)] backdrop-blur-[25px] shadow-lg mt-4 mx-4 rounded-2xl"
            : "bg-transparent mt-0 mx-0"
        }`}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <div className='flex items-center'>
              <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center glow-premium'>
                  <Sparkles className='h-6 w-6 text-white' />
                </div>
                <h1 className='text-3xl font-bold text-gradient-premium'>
                  SkillShift
                </h1>
              </div>
            </div>
            <div className='hidden md:flex items-center space-x-8'>
              <a
                href='#home'
                className='text-white hover:text-premium-blue transition-all duration-300 font-medium animate-fade-in group'
              >
                <span className='relative'>
                  Home
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full'></span>
                </span>
              </a>

              <a
                href='/about'
                className='text-white hover:text-premium-blue transition-all duration-300 font-medium animate-fade-in group'
              >
                <span className='relative'>
                  About
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full'></span>
                </span>
              </a>
              <a
                href='/contact'
                className='text-white hover:text-premium-blue transition-all duration-300 font-medium animate-fade-in group'
              >
                <span className='relative'>
                  Contact
                  <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full'></span>
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='text-white hover:text-premium-blue transition-colors'
              >
                {isMobileMenuOpen ? (
                  <X className='h-6 w-6' />
                ) : (
                  <Menu className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className='md:hidden absolute top-full left-0 right-0 bg-[rgba(59,130,246,0.95)] backdrop-blur-[25px] mt-4 rounded-2xl p-6 animate-fade-in'>
              <div className='flex flex-col space-y-4'>
                <a
                  href='#home'
                  className='text-white hover:text-premium-blue transition-all duration-300 font-medium'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href='/about'
                  className='text-white hover:text-premium-blue transition-all duration-300 font-medium'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href='/contact'
                  className='text-white hover:text-premium-blue transition-all duration-300 font-medium'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full'>
          <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Text Content */}
            <div className='text-center lg:text-left animate-slide-up mt-8 lg:mt-16'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>
                We Refine
                <br />
                <span className='text-blue-400 drop-shadow-2xl'>Talents</span>
              </h1>
              <p className='text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-open-sans leading-relaxed'>
                Our high-impact training interventions, designed to boost
                productivity, increase efficiency and turn &quot;work&quot; into
                a super-powered adventure with cutting-edge methodologies.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start'>
                <a href='/contact' className='inline-block'>
                  <button className='w-full sm:w-auto bg-gradient-primary text-white px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold hover:glow-premium-hover transition-all duration-300 flex items-center justify-center btn-animate group'>
                    <span className='flex items-center'>
                      Start Your Journey
                      <ArrowRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
                    </span>
                  </button>
                </a>
                <button className='w-full sm:w-auto glass-premium border-2 border-blue-400 text-blue-400 px-6 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 btn-animate group'>
                  <span className='flex items-center justify-center'>
                    <Play className='mr-2 h-4 w-4' />
                    Watch Demo
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className='grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0'>
                <div className='glass-card p-3 sm:p-4 rounded-xl card-hover'>
                  <div className='flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-cyan rounded-lg mb-2 mx-auto'>
                    <Users className='h-3 w-3 sm:h-4 sm:w-4 text-white' />
                  </div>
                  <h3 className='text-sm sm:text-lg font-bold text-white mb-1'>
                    500+
                  </h3>
                  <p className='text-gray-400 text-xs'>Happy Clients</p>
                </div>
                <div className='glass-card p-3 sm:p-4 rounded-xl card-hover'>
                  <div className='flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-indigo rounded-lg mb-2 mx-auto'>
                    <Award className='h-3 w-3 sm:h-4 sm:w-4 text-white' />
                  </div>
                  <h3 className='text-sm sm:text-lg font-bold text-white mb-1'>
                    95%
                  </h3>
                  <p className='text-gray-400 text-xs'>Success Rate</p>
                </div>
                <div className='glass-card p-3 sm:p-4 rounded-xl card-hover'>
                  <div className='flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-primary rounded-lg mb-2 mx-auto'>
                    <Zap className='h-3 w-3 sm:h-4 sm:w-4 text-white' />
                  </div>
                  <h3 className='text-sm sm:text-lg font-bold text-white mb-1'>
                    24/7
                  </h3>
                  <p className='text-gray-400 text-xs'>Support</p>
                </div>
              </div>
            </div>

            {/* Hero Image - Hidden on mobile */}
            <div className='hidden lg:flex justify-center lg:justify-end animate-fade-in'>
              <img
                src='/hero_image.png'
                alt='3D Hero Component'
                className='w-full max-w-lg lg:max-w-xl h-auto object-contain'
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className='py-12 sm:py-16 lg:py-24 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20 animate-slide-up'>
            <div className='inline-flex items-center space-x-2 bg-glass-premium px-6 py-3 rounded-full mb-6'>
              <Target className='h-5 w-5 text-premium-blue' />
              <span className='text-white font-medium'>Our Focus</span>
            </div>
            <h2 className='text-5xl font-bold text-white mb-8'>
              Target Audience
            </h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto font-open-sans'>
              We work with diverse organizations and individuals to provide
              comprehensive training solutions tailored to your needs
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 glow-premium group-hover:glow-premium-hover transition-all duration-300'>
                <Target className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                Target Colleges
              </h3>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                Partnering with educational institutions to provide
                comprehensive training programs that bridge the gap between
                academia and industry.
              </p>
            </div>
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-cyan rounded-2xl mb-6 glow-cyan group-hover:glow-cyan-hover transition-all duration-300'>
                <Users className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                Recent Graduates
              </h3>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                Supporting fresh graduates transitioning from school to
                professional life with personalized mentorship and skill
                development.
              </p>
            </div>
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-indigo rounded-2xl mb-6 glow-indigo group-hover:glow-indigo-hover transition-all duration-300'>
                <TrendingUp className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                Corporate Teams
              </h3>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                Enhancing team performance through targeted soft skills training
                and leadership development programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id='services'
        className='py-12 sm:py-16 lg:py-24 bg-gradient-dark relative'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20 animate-slide-up'>
            <div className='inline-flex items-center space-x-2 bg-glass-premium px-6 py-3 rounded-full mb-6'>
              <Sparkles className='h-5 w-5 text-premium-blue' />
              <span className='text-white font-medium'>Our Services</span>
            </div>
            <h2 className='text-5xl font-bold text-white mb-8'>
              What We Offer
            </h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto font-open-sans'>
              Currently working with 4-5 businesses and growing. We provide
              comprehensive solutions for your professional development needs.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* B2B Services */}
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-semibold text-white'>
                  B2B Services
                </h3>
                <span className='text-sm bg-premium-blue/20 text-premium-blue px-4 py-2 rounded-full font-medium glass'>
                  Active
                </span>
              </div>
              <ul className='space-y-4 text-gray-300 font-open-sans'>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-blue/20 rounded-full mr-3 group-hover/item:bg-premium-blue transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-blue group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Soft Skills Training</span>
                </li>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-blue/20 rounded-full mr-3 group-hover/item:bg-premium-blue transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-blue group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Corporate Training Programs</span>
                </li>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-blue/20 rounded-full mr-3 group-hover/item:bg-premium-blue transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-blue group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Team Building Workshops</span>
                </li>
              </ul>
            </div>

            {/* B2C Services */}
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-semibold text-white'>
                  B2C Services
                </h3>
                <span className='text-sm bg-premium-cyan/20 text-premium-cyan px-4 py-2 rounded-full font-medium glass'>
                  Coming Soon
                </span>
              </div>
              <ul className='space-y-4 text-gray-300 font-open-sans'>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-cyan/20 rounded-full mr-3 group-hover/item:bg-premium-cyan transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-cyan group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Individual Mentorship</span>
                </li>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-cyan/20 rounded-full mr-3 group-hover/item:bg-premium-cyan transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-cyan group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Personal Development</span>
                </li>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-cyan/20 rounded-full mr-3 group-hover/item:bg-premium-cyan transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-cyan group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Career Guidance</span>
                </li>
              </ul>
            </div>

            {/* Future Goals */}
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-2xl font-semibold text-white'>
                  Future Goals
                </h3>
                <span className='text-sm bg-premium-indigo/20 text-premium-indigo px-4 py-2 rounded-full font-medium glass'>
                  Vision
                </span>
              </div>
              <ul className='space-y-4 text-gray-300 font-open-sans'>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-indigo/20 rounded-full mr-3 group-hover/item:bg-premium-indigo transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-indigo group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Talent Management</span>
                </li>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-indigo/20 rounded-full mr-3 group-hover/item:bg-premium-indigo transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-indigo group-hover/item:text-white transition-colors' />
                  </div>
                  <span>HR Services</span>
                </li>
                <li className='flex items-center group/item'>
                  <div className='flex items-center justify-center w-6 h-6 bg-premium-indigo/20 rounded-full mr-3 group-hover/item:bg-premium-indigo transition-colors'>
                    <CheckCircle className='h-4 w-4 text-premium-indigo group-hover/item:text-white transition-colors' />
                  </div>
                  <span>Business Consulting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className='py-12 sm:py-16 lg:py-24 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20 animate-slide-up'>
            <div className='inline-flex items-center space-x-2 bg-glass-premium px-6 py-3 rounded-full mb-6'>
              <Globe className='h-5 w-5 text-premium-blue' />
              <span className='text-white font-medium'>Our Solutions</span>
            </div>
            <h2 className='text-5xl font-bold text-white mb-8'>
              What We Build
            </h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto font-open-sans'>
              Comprehensive digital solutions to support your business growth
              and professional development with cutting-edge technology
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <div className='space-y-8'>
              <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4'>
                  <Globe className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  Landing Page
                </h3>
                <p className='text-gray-300 font-open-sans leading-relaxed'>
                  Professional website with easy access and premium blue
                  background design optimized for conversions
                </p>
              </div>
              <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-cyan rounded-xl mb-4'>
                  <Mail className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  Business Email
                </h3>
                <p className='text-gray-300 font-open-sans leading-relaxed'>
                  Professional email setup and management for your business with
                  advanced security features
                </p>
              </div>
              <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-indigo rounded-xl mb-4'>
                  <TrendingUp className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  Analytics & Marketing
                </h3>
                <p className='text-gray-300 font-open-sans leading-relaxed'>
                  Provide analytics and schedule Google ads to save money and
                  maximize ROI
                </p>
              </div>
            </div>

            <div className='space-y-8'>
              <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4'>
                  <Play className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  Video Content
                </h3>
                <p className='text-gray-300 font-open-sans leading-relaxed'>
                  Schedule video content across all platforms with automated
                  publishing and optimization
                </p>
              </div>
              <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-cyan rounded-xl mb-4'>
                  <MessageCircle className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  Social Media Marketing
                </h3>
                <p className='text-gray-300 font-open-sans leading-relaxed'>
                  AI-powered video creation and SEO optimization for maximum
                  social media engagement
                </p>
              </div>
              <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
                <div className='flex items-center justify-center w-12 h-12 bg-gradient-indigo rounded-xl mb-4'>
                  <Shield className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-2xl font-semibold mb-4 text-white'>
                  Maintenance & Support
                </h3>
                <p className='text-gray-300 font-open-sans leading-relaxed'>
                  Ongoing maintenance and future support services with 24/7
                  technical assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-12 sm:py-16 lg:py-24 bg-gradient-dark relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-20 animate-slide-up'>
            <div className='inline-flex items-center space-x-2 bg-glass-premium px-6 py-3 rounded-full mb-6'>
              <Star className='h-5 w-5 text-premium-blue' />
              <span className='text-white font-medium'>Why Choose Us</span>
            </div>
            <h2 className='text-5xl font-bold text-white mb-8'>Our Features</h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto font-open-sans'>
              Comprehensive solutions including mentorship and HR services with
              proven results
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6 glow-premium group-hover:glow-premium-hover transition-all duration-300'>
                <Award className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                Mentorship
              </h3>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                Personalized guidance and support for professional growth with
                one-on-one coaching sessions
              </p>
            </div>
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-cyan rounded-2xl mb-6 glow-cyan group-hover:glow-cyan-hover transition-all duration-300'>
                <Users className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                HR Services
              </h3>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                Comprehensive human resources solutions for businesses of all
                sizes with expert consultation
              </p>
            </div>
            <div className='glass-premium p-8 rounded-2xl card-hover animate-fade-in group'>
              <div className='flex items-center justify-center w-16 h-16 bg-gradient-indigo rounded-2xl mb-6 glow-indigo group-hover:glow-indigo-hover transition-all duration-300'>
                <TrendingUp className='h-8 w-8 text-white' />
              </div>
              <h3 className='text-2xl font-semibold mb-4 text-white'>
                Training Programs
              </h3>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                Customized training interventions for measurable results with
                continuous improvement tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Contact */}
      <section className='py-12 sm:py-16 lg:py-24 relative'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-16'>
            <div className='animate-slide-up'>
              <div className='inline-flex items-center space-x-2 bg-glass-premium px-6 py-3 rounded-full mb-6'>
                <Heart className='h-5 w-5 text-premium-blue' />
                <span className='text-white font-medium'>Flexible Pricing</span>
              </div>
              <h2 className='text-5xl font-bold text-white mb-8'>
                Pricing & Negotiation
              </h2>
              <p className='text-lg text-gray-300 mb-8 font-open-sans leading-relaxed'>
                We believe in personalized solutions. Our pricing is flexible
                and we prefer to have direct conversations to understand your
                specific needs and create custom packages.
              </p>
              <div className='space-y-6'>
                <div className='flex items-center group'>
                  <div className='flex items-center justify-center w-8 h-8 bg-premium-blue/20 rounded-full mr-4 group-hover:bg-premium-blue transition-colors'>
                    <CheckCircle className='h-5 w-5 text-premium-blue group-hover:text-white transition-colors' />
                  </div>
                  <span className='text-gray-300 font-open-sans'>
                    Direct consultation and negotiation
                  </span>
                </div>
                <div className='flex items-center group'>
                  <div className='flex items-center justify-center w-8 h-8 bg-premium-blue/20 rounded-full mr-4 group-hover:bg-premium-blue transition-colors'>
                    <CheckCircle className='h-5 w-5 text-premium-blue group-hover:text-white transition-colors' />
                  </div>
                  <span className='text-gray-300 font-open-sans'>
                    Custom package creation
                  </span>
                </div>
                <div className='flex items-center group'>
                  <div className='flex items-center justify-center w-8 h-8 bg-premium-blue/20 rounded-full mr-4 group-hover:bg-premium-blue transition-colors'>
                    <CheckCircle className='h-5 w-5 text-premium-blue group-hover:text-white transition-colors' />
                  </div>
                  <span className='text-gray-300 font-open-sans'>
                    Flexible payment options
                  </span>
                </div>
              </div>
            </div>

            <div className='animate-slide-up'>
              <div className='inline-flex items-center space-x-2 bg-glass-premium px-6 py-3 rounded-full mb-6'>
                <MessageCircle className='h-5 w-5 text-premium-blue' />
                <span className='text-white font-medium'>Get In Touch</span>
              </div>
              <h2 className='text-5xl font-bold text-white mb-8'>Contact Us</h2>
              <div className='space-y-6'>
                <div className='flex items-center group'>
                  <div className='flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mr-4 glow-premium group-hover:glow-premium-hover transition-all duration-300'>
                    <Phone className='h-6 w-6 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>WhatsApp</p>
                    <p className='text-gray-300 font-open-sans'>
                      +91 8700786057
                    </p>
                  </div>
                </div>
                <div className='flex items-center group'>
                  <div className='flex items-center justify-center w-12 h-12 bg-gradient-cyan rounded-xl mr-4 glow-cyan group-hover:glow-cyan-hover transition-all duration-300'>
                    <Mail className='h-6 w-6 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>Email</p>
                    <p className='text-gray-300 font-open-sans'>
                      info@skillshift.com
                    </p>
                  </div>
                </div>
                <div className='flex items-center group'>
                  <div className='flex items-center justify-center w-12 h-12 bg-gradient-indigo rounded-xl mr-4 glow-indigo group-hover:glow-indigo-hover transition-all duration-300'>
                    <MessageCircle className='h-6 w-6 text-white' />
                  </div>
                  <div>
                    <p className='text-white font-semibold'>Quick Callback</p>
                    <p className='text-gray-300 font-open-sans'>
                      Single button for callback - Easy access
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-black text-white py-20 border-t border-white/10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-12'>
            <div>
              <div className='flex items-center space-x-2 mb-6'>
                <div className='w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center glow-premium'>
                  <Sparkles className='h-6 w-6 text-white' />
                </div>
                <h3 className='text-3xl font-bold text-gradient-premium'>
                  SkillShift
                </h3>
              </div>
              <p className='text-gray-300 font-open-sans leading-relaxed'>
                We are India&apos;s premier training and development company,
                offering customized learning programs for businesses and
                organizations at all levels.
              </p>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-6 text-white'>About</h4>
              <ul className='space-y-3 text-gray-300 font-open-sans'>
                <li>
                  <a
                    href='#'
                    className='hover:text-premium-blue transition-colors'
                  >
                    Our Programs
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-premium-blue transition-colors'
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-6 text-white'>
                Programs
              </h4>
              <ul className='space-y-3 text-gray-300 font-open-sans'>
                <li>
                  <a
                    href='#'
                    className='hover:text-premium-blue transition-colors'
                  >
                    Corporate Training
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-premium-blue transition-colors'
                  >
                    Institutional Training
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-premium-blue transition-colors'
                  >
                    Open Workshops
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-xl font-semibold mb-6 text-white'>
                Get in touch
              </h4>
              <ul className='space-y-3 text-gray-300 font-open-sans'>
                <li>+91 8700786057</li>
                <li>info@skillshift.com</li>
              </ul>
            </div>
          </div>
          <div className='divider-premium'></div>
          <div className='text-center text-gray-300 font-open-sans'>
            <p>Copyright 2024 © SkillShift | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
