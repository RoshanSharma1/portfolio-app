"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, TrendingUp, Zap, Users } from "lucide-react";
import { blogPosts, categories, getBlogPostsByCategory, getFeaturedPosts } from "@/data/blog-posts";
import { Footer } from "@/components/footer";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredPosts = getBlogPostsByCategory(selectedCategory);
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Latest Insights & Tutorials
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text">
              Technical Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep dives into AI agents, automation, and modern development practices. 
              Learn how to build production-ready systems with cutting-edge tools and battle-tested techniques.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                <Zap className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{blogPosts.length}+</h3>
              <p className="text-muted-foreground">In-depth Articles</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10K+</h3>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-100 rounded-lg mb-4">
                <TrendingUp className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">95%</h3>
              <p className="text-muted-foreground">Practical Content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden bg-gradient-to-br from-white to-gray-50">
                  <div className="relative overflow-hidden">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/90 text-gray-800 hover:bg-white">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      <Link href={`/blog/${post.slug}`} className="flex items-center justify-center gap-2">
                        Read Full Article
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-12 p-1 bg-white rounded-xl shadow-sm">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-lg transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg" 
                    : "hover:bg-gray-100"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-500 border-0 shadow-md bg-white overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/95 text-gray-800 shadow-sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button asChild variant="ghost" className="w-full group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all duration-300">
                    <Link href={`/blog/${post.slug}`} className="flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No posts found</h3>
              <p className="text-muted-foreground">No articles found in this category. Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
