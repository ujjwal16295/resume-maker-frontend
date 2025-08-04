"use client"
import React, { useEffect } from 'react';
import { FileText, Zap, Shield, Download, Brain, Clock, CheckCircle, ArrowRight, Star, Users, Sparkles } from 'lucide-react';
import Link from 'next/link';
import GoogleAds from './GoogleAds'; // Adjust the import path based on your file structure

export default function Homepage() {
  // Load Google AdSense script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4150861973710697';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Intelligence",
      description: "Leverages AI to intelligently match your skills and experience with job requirements"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Generate tailored resumes in seconds, not hours. No waiting, no delays."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Private & Secure",
      description: "No accounts, no storage, no tracking. Complete privacy guaranteed."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Professional PDF Output",
      description: "Download as high-quality PDF format, ready for any application system or recruiter."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "No Registration Required",
      description: "Start using immediately. No signup forms, no email verification, no password creation."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Smart Content Matching",
      description: "Automatically highlights relevant skills and experiences that match the job description perfectly."
    }
  ];

  const benefits = [
    "Save 3+ hours per job application",
    "Increase your chances of getting interview callbacks",
    "ATS-friendly formatting guaranteed",
    "Professional PDF resume every time",
    "Zero learning curve - just upload and go"
  ];

  const stats = [
    { number: "1,000+", label: "Resumes Tailored" },
    { number: "3 Min", label: "Average Time" },
    { number: "0$", label: "Cost Forever" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between md:justify-between justify-center items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResumeAI
            </span>
          </div>
          <Link 
            className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
            href="/generateresume"
          >
            Get Started Free
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Powered by AI</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Resume
            </span>
            <br />
            <span className="text-gray-800">In Seconds</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload your resume, paste any job description, and watch AI create a perfectly tailored resume in professional PDF format. 
            No signup required, completely private, instant results.
          </p>

          <div className="flex justify-center items-center mb-12">
            <Link className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2" href="/generateresume">
              <span>Start Tailoring Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our AI Resume Tailor?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built with privacy and efficiency in mind, our tool gives you professional results without the hassle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Google Ads - Above "Transform Your Job Search Today" */}
      <section className="container mx-auto px-6 py-8">
        <GoogleAds className="max-w-4xl mx-auto" />
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Transform Your Job Search Today
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of job seekers who&apos;ve accelerated their career with AI-powered resume tailoring
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0" />
                  <span className="text-lg text-white">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Upload Your Resume</h4>
                    <p className="text-sm opacity-90">PDF format, processed locally in your browser</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Paste Job Description</h4>
                    <p className="text-sm opacity-90">Copy any job posting you&apos;re interested in</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Download Tailored PDF</h4>
                    <p className="text-sm opacity-90">AI generates customized resume in professional PDF format</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads - Above "Ready to Land Your Dream Job?" */}
      <section className="container mx-auto px-6 py-8">
        <GoogleAds className="max-w-4xl mx-auto" />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Stop sending generic resumes. Start getting interviews with AI-tailored applications that stand out.
          </p>
          <Link 
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 sm:px-12 py-4 rounded-xl text-lg sm:text-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block w-full sm:w-auto max-w-xs sm:max-w-none" 
            href="/generateresume"
          >
            Start Tailoring for Free
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            No credit card required • No signup needed • Complete privacy guaranteed
          </p>
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