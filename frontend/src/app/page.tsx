'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageSquare, Calendar, Trophy, BookOpen, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ABES Community
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/auth" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Sign In
            </Link>
            <Button asChild>
              <Link href="/auth">Get Started</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Connect. Share. Grow.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the ABES Engineering College community platform where students, faculty, and alumni connect, 
            share knowledge, and build lasting relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link href="/auth">Join Community</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose ABES Community?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Connect with Peers</CardTitle>
                <CardDescription>
                  Build meaningful connections with fellow students, faculty, and alumni from your college.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Share Knowledge</CardTitle>
                <CardDescription>
                  Ask questions, share insights, and collaborate on academic projects and research.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Calendar className="h-12 w-12 text-pink-600 mb-4" />
                <CardTitle>Campus Events</CardTitle>
                <CardDescription>
                  Stay updated with college events, workshops, seminars, and important announcements.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Trophy className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Achievements</CardTitle>
                <CardDescription>
                  Showcase your accomplishments, projects, and milestones with the community.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Study Groups</CardTitle>
                <CardDescription>
                  Form study groups, share resources, and prepare for exams together.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Opportunities</CardTitle>
                <CardDescription>
                  Discover internships, job opportunities, and career guidance from seniors and alumni.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built for ABES Engineering College
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform is specifically designed to enhance the college experience for ABES students. 
                From academic discussions to career guidance, we provide a comprehensive space for 
                learning and growth.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-blue-600 rounded-full mr-3"></div>
                  Verified student and faculty profiles
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-purple-600 rounded-full mr-3"></div>
                  Department-wise discussion forums
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-pink-600 rounded-full mr-3"></div>
                  Real-time notifications and updates
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                  Secure and private communication
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Join 1000+ Students</h3>
                <p className="text-gray-600 mb-6">
                  Be part of a growing community of learners, innovators, and future leaders.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                  <Link href="/auth">Get Started Today</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600"></div>
            <span className="text-xl font-bold">ABES Community</span>
          </div>
          <p className="text-gray-400 mb-4">
            Connecting the ABES Engineering College community for better collaboration and growth.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 ABES Community. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
