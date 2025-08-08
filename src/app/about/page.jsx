"use client"
import React from 'react';
import { Target, Shield, Users, Zap, Heart, Sparkles, ArrowLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutUs() {
  const values = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy First",
      description: "Your data never leaves your browser. No storage, no tracking, complete privacy guaranteed."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "We believe job searching should be fast and efficient, not time-consuming and frustrating."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Free Forever",
      description: "Career advancement shouldn't cost money. Our tools are free for everyone, always."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI-Powered Precision",
      description: "Advanced AI technology that understands context and creates meaningful, tailored resumes."
    }
  ];

  const features = [
    "No registration or signup required",
    "Complete privacy - no data storage",
    "AI-powered resume tailoring",
    "Professional PDF output",
    "ATS-friendly formatting",
    "Free forever - no hidden costs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResumeAI
            </span>
          </Link>
          <div className="flex items-center space-x-6">
            <span className="text-gray-800 font-medium">About Us</span>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">
              Contact Us
            </Link>
            <Link 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
              href="/generateresume"
            >
              Get Started Free
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About ResumeAI
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize job searching by making resume tailoring instant, private, and completely free. 
            No more spending hours customizing resumes for each application.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Job searching is broken. Candidates spend countless hours manually tailoring resumes for each application, 
                often with poor results. Meanwhile, great talent gets overlooked because their resume doesn't perfectly match 
                keyword requirements.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ResumeAI changes this. We use advanced AI to instantly analyze job descriptions and intelligently tailor 
                your resume to highlight the most relevant skills and experiences. All while maintaining complete privacy 
                and requiring zero cost or registration.
              </p>
              <Link 
                href="/generateresume"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Try ResumeAI Now
              </Link>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What Makes Us Different</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Everything we build is guided by these core principles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-white">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-sm opacity-90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Built with Privacy in Mind
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our technology processes everything locally in your browser, ensuring your personal information never leaves your device.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto text-blue-600">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Data Storage</h3>
                <p className="text-gray-600">Your resume and job descriptions are processed in real-time and never stored anywhere.</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto text-blue-600">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
                <p className="text-gray-600">Advanced AI algorithms deliver results in seconds, not minutes or hours.</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto text-blue-600">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Smart Matching</h3>
                <p className="text-gray-600">AI understands context and relevance, not just keyword matching.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Job Search?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of job seekers who have accelerated their career with ResumeAI
          </p>
          <Link 
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
            href="/generateresume"
          >
            Start Tailoring for Free
          </Link>
          <p className="text-sm opacity-75 mt-4">
            No signup required • Complete privacy • Free forever
          </p>
        </div>
      </section>

      {/* Back to Home */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">ResumeAI</span>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-left">
              © 2025 ResumeAI. Built with privacy in mind.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}