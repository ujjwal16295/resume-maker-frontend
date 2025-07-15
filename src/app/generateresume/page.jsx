"use client"
import React, { useState } from 'react';
import { Upload, FileText, Briefcase, Zap, X, CheckCircle, AlertCircle } from 'lucide-react';

export default function ResumeUploadPage() {
  const [userResumeFile, setUserResumeFile] = useState(null);
  const [jobRequirements, setJobRequirements] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStep, setProcessingStep] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://resume-maker-backend-d0sb.onrender.com';

  const handleFileUpload = (file) => {
    if (file && (file.type === 'application/pdf')) {
      setUserResumeFile(file);
      setError('');
    } else {
      setError('Please upload only PDF files');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const removeFile = () => {
    setUserResumeFile(null);
    setError('');
  };

  const handleOptimizeAndDownload = async () => {
    if (!userResumeFile || !jobRequirements.trim()) {
      setError('Please upload resume and provide job requirements');
      return;
    }

    setIsProcessing(true);
    setError('');
    setProcessingStep('Uploading your resume...');
    
    try {
      const formData = new FormData();
      formData.append('resume', userResumeFile);
      formData.append('jobRequirements', jobRequirements);
      
      setProcessingStep('Analyzing your resume with AI...');
      
      const response = await fetch(`${API_BASE_URL}/api/optimize-resume`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to process resume');
      }
      
      setProcessingStep('Generating optimized resume...');
      
      // Get the content type from response headers
      const contentType = response.headers.get('content-type');
      console.log('Response content type:', contentType);
      
      // Create download link for the PDF file
      const blob = await response.blob();
      console.log('Blob size:', blob.size, 'Blob type:', blob.type);
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'optimized-resume.pdf'; // Changed to .pdf
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setProcessingStep('Complete!');
      setIsComplete(true);
      
    } catch (error) {
      console.error('Error processing resume:', error);
      setError(`Error: ${error.message}`);
      setProcessingStep('Error occurred');
    } finally {
      setIsProcessing(false);
    }
  };

  const FileUploadBox = ({ title, description, file, required = false, icon: Icon }) => (
    <div className="space-y-3">
      <div className="flex items-center space-x-2">
        <Icon className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {required && <span className="text-red-500 text-sm">*</span>}
      </div>
      
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
          dragOver
            ? 'border-blue-500 bg-blue-50'
            : file
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {file ? (
          <div className="flex items-center justify-center space-x-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <span className="text-green-700 font-medium">{file.name}</span>
            <span className="text-sm text-gray-500">
              ({file.type.includes('pdf') ? 'PDF' : 'DOCX'})
            </span>
            <button
              onClick={removeFile}
              className="text-red-500 hover:text-red-700 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="mx-auto w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
              <Upload className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <p className="text-gray-600 mb-2">{description}</p>
              <label className="cursor-pointer">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Choose File
                </span>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => handleFileUpload(e.target.files[0])}
                  className="hidden"
                />
              </label>
              <p className="text-sm text-gray-500 mt-2">or drag and drop your PDF file here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const isFormValid = userResumeFile && jobRequirements.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Tailor Your Resume with AI
          </h1>
          <p className="text-lg text-gray-600">
            Upload your resume (PDF) and job requirements to get AI-optimized resume in PDF format
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isComplete ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'
            }`}>
              1
            </div>
            <div className={`text-sm font-medium ${
              isComplete ? 'text-green-600' : 'text-blue-600'
            }`}>Upload & Input</div>
            <div className={`w-16 h-1 rounded ${
              isComplete ? 'bg-green-600' : 'bg-gray-200'
            }`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              isComplete ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
            }`}>
              2
            </div>
            <div className={`text-sm font-medium ${
              isComplete ? 'text-green-600' : 'text-gray-400'
            }`}>AI Optimize & Download</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Error Display */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Error:</span>
              </div>
              <p className="text-red-600 mt-1">{error}</p>
            </div>
          )}

          {/* User Resume Upload - Required */}
          <FileUploadBox
            title="Your Resume"
            description="Upload your current resume in PDF format"
            file={userResumeFile}
            required={true}
            icon={FileText}
          />

          {/* Job Requirements Text Area */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Job Requirements</h3>
              <span className="text-red-500 text-sm">*</span>
            </div>
            
            <div className="relative">
              <textarea
                value={jobRequirements}
                onChange={(e) => setJobRequirements(e.target.value)}
                placeholder="Paste the complete job description here including requirements, responsibilities, qualifications, and any specific skills mentioned..."
                className="text-black w-full h-64 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                required
              />
              <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                {jobRequirements.length} characters
              </div>
            </div>
            
            <div className="flex items-start space-x-2 bg-blue-50 p-3 rounded-lg">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-700">
                <p className="font-medium">Tip for best results:</p>
                <p>Include the complete job posting with requirements, responsibilities, preferred qualifications, and company information for more accurate analysis.</p>
              </div>
            </div>
          </div>

          {/* Single Action Button */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col items-center space-y-4">
              <button
                onClick={handleOptimizeAndDownload}
                disabled={!isFormValid || isProcessing}
                className={`flex items-center space-x-3 px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                  isFormValid && !isProcessing
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Zap className={`w-6 h-6 ${isProcessing ? 'animate-spin' : ''}`} />
                <span>
                  {isProcessing ? 'Processing...' : 'Optimize & Download Resume (PDF)'}
                </span>
              </button>
              
              {isProcessing && (
                <div className="text-center">
                  <p className="text-blue-600 font-medium">{processingStep}</p>
                  <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                  </div>
                </div>
              )}
              
              {isComplete && (
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-green-600 mb-2">
                    <CheckCircle className="w-6 h-6" />
                    <span className="text-lg font-semibold">Resume Optimized & Downloaded!</span>
                  </div>
                  <p className="text-sm text-gray-600">Your optimized resume has been downloaded as a PDF file.</p>
                </div>
              )}
              
              {!isFormValid && !isProcessing && (
                <div className="text-sm text-gray-500 text-center space-y-1">
                  <p>Please ensure the following requirements are met:</p>
                  <ul className="text-left max-w-md mx-auto space-y-1">
                    {!userResumeFile && <li>• Upload your resume (PDF)</li>}
                    {!jobRequirements.trim() && <li>• Provide job requirements</li>}
                  </ul>
                </div>
              )}
              
              <div className="text-center text-sm text-gray-500">
                <p>🔒 Your files are processed securely and never stored permanently</p>
                <p>⚡ AI optimization and download typically takes 30-60 seconds</p>
                <p>📄 Download will be in PDF format</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features reminder */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Privacy First</h3>
            <p className="text-sm text-gray-600">All processing happens securely. No data is stored permanently.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">AI-Powered</h3>
            <p className="text-sm text-gray-600">Advanced AI creates a modern, professional resume design.</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 text-center">
            <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">PDF Format</h3>
            <p className="text-sm text-gray-600">Get your optimized resume as a professional PDF document.</p>
          </div>
        </div>
      </div>
    </div>
  );
}