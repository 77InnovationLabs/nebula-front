"use client";

import { useState } from 'react';
import { User, Shield } from 'lucide-react';
import courses from '../profile/components/Courses';

import PageHeader from './components/PageHeader';
import Filters from './components/Filters';
import CoursesGrid from './components/CoursesGrid';

export default function Catalog() {const [topicFilter, setTopicFilter] = useState('All Topics');
  const [levelFilter, setLevelFilter] = useState('All Levels');

  const getThumbnailContent = (type, icon, gradient) => {
    const Icon = icon;
    
    switch(type) {
      case 'blockchain-network':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-8 right-6 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-6 left-8 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-4 left-4 w-16 h-0.5 bg-white transform rotate-45 origin-left"></div>
              <div className="absolute top-8 right-6 w-12 h-0.5 bg-white transform -rotate-45 origin-right"></div>
            </div>
            <Icon className="w-16 h-16 text-white z-10" />
          </div>
        );
      case 'code-editor':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex flex-col justify-center p-4 relative`}>
            <div className="bg-black/20 rounded p-2 text-xs font-mono text-white space-y-1">
              <div className="text-green-300">pragma solidity ^0.8.0;</div>
              <div className="text-blue-300">contract HelloWorld </div>
              <div className="text-yellow-300 ml-4">string public message;</div>
              <div className="text-purple-300 ml-4">constructor() </div>
              <div className="text-white ml-8">message = "Hello";</div>
              <div className="text-purple-300 ml-4"></div>
              <div className="text-blue-300"></div>
            </div>
          </div>
        );
      case 'dapp-interface':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex flex-col justify-center p-4`}>
            <div className="bg-white/20 rounded-lg p-3 space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white/60 rounded-full"></div>
                <div className="w-20 h-2 bg-white/60 rounded"></div>
              </div>
              <div className="w-full h-2 bg-white/40 rounded"></div>
              <div className="w-3/4 h-2 bg-white/40 rounded"></div>
              <div className="flex space-x-2">
                <div className="w-12 h-6 bg-white/60 rounded"></div>
                <div className="w-12 h-6 bg-white/60 rounded"></div>
              </div>
            </div>
          </div>
        );
      case 'blockchain-sphere':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 grid-rows-6 gap-1 h-full w-full p-2">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-sm"></div>
                ))}
              </div>
            </div>
            <div className="w-20 h-20 border-4 border-white rounded-full flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
        );
      case 'security-shield':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center relative`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-2 left-2 w-1 h-8 bg-white"></div>
              <div className="absolute top-2 right-2 w-1 h-8 bg-white"></div>
              <div className="absolute bottom-2 left-2 w-1 h-8 bg-white"></div>
              <div className="absolute bottom-2 right-2 w-1 h-8 bg-white"></div>
            </div>
            <div className="w-20 h-24 border-4 border-white rounded-t-full flex items-center justify-center">
              <Icon className="w-10 h-10 text-white" />
            </div>
          </div>
        );
      case 'business-globe':
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center relative`}>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2"></div>
              <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white transform -translate-x-1/2"></div>
              <div className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-white transform rotate-45"></div>
              <div className="absolute top-3/4 left-1/4 w-1/2 h-0.5 bg-white transform -rotate-45"></div>
            </div>
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold">
              BLOCKCHAIN
            </div>
          </div>
        );
      default:
        return (
          <div className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center`}>
            <Icon className="w-16 h-16 text-white" />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">BlockCertify</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Home</a>
                <a href="#" className="text-gray-900 font-medium">Courses</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Certifications</a>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">About Us</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <PageHeader />
        <Filters 
          topicFilter={topicFilter}
          levelFilter={levelFilter}
          onTopicChange={setTopicFilter}
          onLevelChange={setLevelFilter}
        />
        <CoursesGrid 
          courses={courses}
          getThumbnailContent={getThumbnailContent}
        />
      </div>
    </div>
  );
}