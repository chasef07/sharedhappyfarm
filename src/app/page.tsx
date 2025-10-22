'use client'

import Image from "next/image"
import dynamic from "next/dynamic"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Menu, X, MapPin, Phone, Mail, Leaf, ChefHat, Users } from "lucide-react"
import { FaTiktok, FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa"

const Waves = dynamic(() => import("lucide-react").then((mod) => ({ default: mod.Waves })), {
  ssr: false,
})

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const slides = [
    {
      src: "/images/family_dinner.jpeg",
      alt: "Guests enjoying a communal family dinner with fresh farm produce at wooden table on Shared Happy Farm"
    },
    {
      src: "/images/group_waterfall.jpeg",
      alt: "Adventure group of visitors posing at pristine waterfall during guided trek from Shared Happy Farm"
    },
    {
      src: "/images/gardenview.jpeg",
      alt: "Lush organic vegetable garden with rows of crops overlooking mountain landscape at Shared Happy Farm"
    },
    {
      src: "/images/aerial_view.jpeg",
      alt: "Aerial drone view showing farm buildings, gardens, and bungalows nestled in Bolaven Plateau forests"
    },
    {
      src: "/images/lettuce_plants.jpeg",
      alt: "Close-up of healthy organic lettuce plants growing in sustainable farm plots using volcanic soil"
    },
    {
      src: "/images/shfwaterfalltrek.jpeg",
      alt: "Visitors on guided waterfall trekking adventure through pristine jungle paths near the farm"
    },
    {
      src: "/images/fresh_salad.jpeg",
      alt: "Colorful fresh farm-to-table salad bowl featuring vegetables harvested directly from the organic garden"
    }
  ]

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [slides.length])

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-montserrat">
      {/* Header */}
      <header className="fixed w-full top-0 bg-background/95 backdrop-blur-md z-50 border-b border-border">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/images/shf_logo.jpeg"
              alt="Shared Happy Farm Logo"
              width={110}
              height={110}
              className="object-contain"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('accommodations')}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              Stay
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('experience')}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              Experience
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('menu')}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              Eat
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('location')}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              Find Us
            </Button>
            <Button asChild className="hover:scale-105 transition-transform duration-200">
              <a
                href="https://wa.me/8562092823908"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2 h-4 w-4" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-primary/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-full w-80 max-w-[80vw] bg-background border-l border-border shadow-lg z-50 md:hidden rounded-l-lg">
              <div className="flex flex-col p-6 space-y-4">
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('about')}
                  className="justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  About
                </Button>
                <Separator />
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('accommodations')}
                  className="justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  Stay
                </Button>
                <Separator />
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('experience')}
                  className="justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  Experience
                </Button>
                <Separator />
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('menu')}
                  className="justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  Eat
                </Button>
                <Separator />
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('location')}
                  className="justify-start hover:bg-primary/10 hover:text-primary transition-all duration-200"
                >
                  Find Us
                </Button>
                <Separator />
                <Button asChild className="w-full mt-4 hover:scale-105 transition-transform">
                  <a
                    href="https://wa.me/8562092823908"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="mr-2 h-4 w-4" />
                    Book Now
                  </a>
                </Button>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
              Shared Happy Farm
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-shadow-md">
              Experience Nature, Live Simply, Stay Happy!
            </p>
            <Button size="lg" asChild className="hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
              <a
                href="https://wa.me/8562092823908"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-2 h-5 w-5" />
                Book Your Stay
              </a>
            </Button>
          </div>
        </div>

        {/* Slideshow Dots */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 p-0 rounded-full transition-all duration-300 hover:scale-125 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Welcome to Our Farm
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed">
                Nestled on the scenic Bolaven Plateau, our farm thrives in cool mountain air and nutrient-rich volcanic soil—perfect for growing coffee, avocados, passionfruit, and a variety of other fruits and vegetables. We set out on this journey with a simple goal: to cultivate a more sustainable, fulfilling life while sharing the beauty of farm life in Laos with visitors.
              </p>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/aerial_view.jpeg"
                alt="Aerial view of Shared Happy Farm showing the organic gardens, bungalows, and surrounding forest on the Bolaven Plateau"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Button asChild variant="outline" className="w-full bg-white/90 hover:bg-white">
                  <a 
                    href="https://www.instagram.com/shared_happy_farm/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="mr-2 h-4 w-4" />
                    Follow on Instagram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Stay
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/family-bungalow.JPG"
                  alt="Rustic wooden family bungalow with private bathroom surrounded by tropical gardens and mountain views"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Family Bungalow
                  <Badge variant="secondary">Up to 4 guests</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground mb-4">
                  Cozy bungalow with farm views and attached bathroom for up to 4 guests
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">370,000 kip</p>
                  <Badge variant="outline">Private Bath</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/bungalow.jpeg"
                  alt="Traditional eco-friendly bungalow accommodation with shared facilities nestled among organic farm plots"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-secondary/90">Eco-Friendly</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Standard Bungalow
                  <Badge variant="secondary">Up to 2 guests</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground mb-4">
                  Bungalow with shared bathroom for up to 2 guests
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">270,000 kip</p>
                  <Badge variant="outline">Shared Bath</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/dormitory.jpg"
                  alt="Budget-friendly dormitory with bunk beds for backpackers and volunteers in rustic farm setting"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-600/90">Budget</Badge>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Dormitory
                  <Badge variant="secondary">Shared</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-muted-foreground mb-4">
                  Shared dormitory style accommodation
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-primary">120,000 kip</p>
                  <Badge variant="outline">Backpackers</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="text-center p-8 bg-accent hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Organic Farming</h3>
                    <p>Learn about sustainable farming practices</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p>Join our farmers in daily activities like planting, harvesting, and composting. Learn about permaculture principles and organic pest management techniques.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="text-center p-8 bg-accent hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      <ChefHat className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Farm to Table</h3>
                    <p>Cook with fresh ingredients from our garden</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p>Participate in cooking classes using vegetables harvested the same day. Learn traditional Lao recipes and cooking techniques.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="text-center p-8 bg-accent hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                      <Waves className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Secret Waterfall Trek</h3>
                    <p>Explore a beautiful, untouched waterfall not found on any map</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p>Discover hidden waterfalls through jungle paths. This exclusive trek takes you to pristine swimming spots known only to locals.</p>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <Card className="text-center p-8 bg-accent hover:bg-primary/10 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary">Volunteering</h3>
                    <p>Dive into organic farming and Lao culture, committing to at least two weeks of hands-on learning and community immersion</p>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <p>Long-term volunteer program offering deep cultural immersion. Work alongside local farmers while learning the language and traditions.</p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Farm to Table Menu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-accent pb-2">Food</h3>
              <div className="space-y-6">
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Farm Fresh Salad</h4>
                  <p className="text-xl font-semibold text-primary mt-2">50,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Vegetable Curry Soup w/ Rice</h4>
                  <p className="text-xl font-semibold text-primary mt-2">70,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Vegetable Omelette</h4>
                  <p className="text-xl font-semibold text-primary mt-2">60,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Pumpkin Soup + Country Bread</h4>
                  <p className="text-xl font-semibold text-primary mt-2">50,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Passion Fruit Jam + Country Bread</h4>
                  <p className="text-xl font-semibold text-primary mt-2">35,000 kip</p>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary border-b-2 border-accent pb-2">Drinks</h3>
              <div className="space-y-6">
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Passion Fruit Juice</h4>
                  <p className="text-xl font-semibold text-primary mt-2">30,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Banana Smoothie</h4>
                  <p className="text-xl font-semibold text-primary mt-2">30,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Lemon Juice</h4>
                  <p className="text-xl font-semibold text-primary mt-2">20,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Beetroot-Honey Juice</h4>
                  <p className="text-xl font-semibold text-primary mt-2">35,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">Black Coffee</h4>
                  <p className="text-xl font-semibold text-primary mt-2">30,000 kip</p>
                </div>
                <div className="p-4 bg-accent rounded">
                  <h4 className="font-bold">BeerLao</h4>
                  <p className="text-xl font-semibold text-primary mt-2">30,000 kip</p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/breakfast.JPG"
                alt="Traditional farm breakfast featuring fresh bread, passion fruit jam, and seasonal vegetables from the garden"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/passionjuice.JPG"
                alt="Fresh passion fruit juice served in glass made from farm-grown passion fruits on Bolaven Plateau"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Find Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">How to Get Here</h3>
              <p className="mb-6">Located on the beautiful Bolaven Plateau, our farm is easily accessible from Pakse.</p>
              <div>
                <h4 className="text-xl font-bold mb-4">From Pakse:</h4>
                <ul className="space-y-2 mb-6 ml-6">
                  <li className="list-disc">Head east on Route 16 towards Paksong</li>
                  <li className="list-disc">Continue for approximately 65 kilometers</li>
                  <li className="list-disc">Look for the Shared Happy Farm signs and follow the dirt path</li>
                </ul>
                <Button asChild className="hover:scale-105 transition-transform duration-200">
                  <a 
                    href="https://maps.google.com/?q=15.287082175916206, 106.32394992505432"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
            <div className="min-h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.8910376121844!2d106.32131691475857!3d15.286958289449303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3115251a298ac62b%3A0xde0273113e7e690!2sShared%20Happy%20Farm!5e0!3m2!1sen!2s!4v1676527532934!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps location of Shared Happy Farm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center md:justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  +856-20-9282-3908
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  info@sharedhappyfarm.com
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  Bolaven Plateau, Laos
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="mb-4">© 2025 Shared Happy Farm. All rights reserved.</p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="outline" 
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-200 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a 
                    href="https://wa.me/8562092823908" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline" 
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-200 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a 
                    href="https://www.instagram.com/shared_happy_farm/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline" 
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-200 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a 
                    href="https://www.tiktok.com/@sharedhappyfarm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaTiktok className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline" 
                  size="icon"
                  asChild
                  className="hover:scale-110 transition-all duration-200 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <a 
                    href="https://www.facebook.com/p/ສວນປັນສຸກ-Shared-happy-Farm-100063266675817/?_rdc=1&_rdr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4">Quick Book</h3>
              <Button
                variant="outline"
                asChild
                className="hover:scale-105 transition-all duration-200 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a
                  href="https://wa.me/8562092823908"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="mr-2 h-4 w-4" />
                  Book via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
