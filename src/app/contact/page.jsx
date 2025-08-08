"use client"
import React from 'react';
import { Mail, MessageCircle, Clock, MapPin, Sparkles, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ContactUs() {
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
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">
              About Us
            </Link>
            <span className="text-gray-800 font-medium">Contact Us</span>
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Get in Touch</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Have questions about ResumeAI? Need help with your resume tailoring? We're here to help you succeed in your job search.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Email Us</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have a question or feedback? Send us an email and we'll get back to you as soon as possible.
              </p>
              <a 
                href="mailto:newujjwalpatel@gmail.com"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                <span>newujjwalpatel@gmail.com</span>
              </a>
            </div>

            {/* Response Time */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="bg-gradient-to-r from-green-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-green-600">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Quick Response</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
              <div className="text-gray-800 font-medium">
                Response Time: 24 hours or less
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Is ResumeAI really free?</h4>
                <p className="text-gray-600">Yes! Our resume tailoring service is completely free with no hidden costs or premium tiers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">Do you store my resume data?</h4>
                <p className="text-gray-600">No, we don't store any of your data. Everything is processed locally in your browser for complete privacy.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">What file formats do you support?</h4>
                <p className="text-gray-600">Currently we support PDF resume uploads and generate professional PDF outputs.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">How does the AI tailoring work?</h4>
                <p className="text-gray-600">Our AI analyzes your resume and the job description to intelligently match and highlight relevant skills and experiences.</p>
              </div>
            </div>
          </div>
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