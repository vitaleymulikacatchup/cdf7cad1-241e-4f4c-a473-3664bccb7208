"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Briefcase, Calendar, Crown, Gift, Heart, MessageCircle, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Grand Paradise Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Indulge in world-class hospitality with breathtaking views, exceptional service, and unforgettable memories at Grand Paradise Hotel."
          tag="5-Star Luxury"
          tagIcon={Crown}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
          imagePosition="right"
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "product"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Grand Paradise Hotel"
          description={[
            "For over three decades, we have been the pinnacle of luxury hospitality, offering discerning guests an unparalleled experience in comfort and elegance.",
            "Our commitment to excellence is reflected in every detail, from our meticulously appointed suites to our world-renowned concierge service, ensuring every moment of your stay exceeds expectations."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Premium Amenities"
          description="Discover our world-class facilities designed to enhance every aspect of your stay"
          tag="Facilities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and soul at our award-winning spa featuring therapeutic treatments and state-of-the-art wellness facilities.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa wellness center",
              button: {
                text: "Book Treatment",
                href: "contact"
              }
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine crafted by world-renowned chefs at our signature restaurants and elegant lounges.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant",
              button: {
                text: "View Menu",
                href: "dining"
              }
            },
            {
              title: "Infinity Pool & Terrace",
              description: "Unwind in our stunning infinity pool overlooking breathtaking panoramic views of the city skyline.",
              imageSrc: "https://images.pexels.com/photos/2736187/pexels-photo-2736187.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury hotel infinity pool",
              button: {
                text: "Pool Hours",
                href: "amenities"
              }
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxury Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and sophistication"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe King Room",
              price: "From $399/night",
              imageSrc: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury deluxe king room"
            },
            {
              id: "suite",
              name: "Executive Suite",
              price: "From $799/night",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury executive suite"
            },
            {
              id: "penthouse",
              name: "Presidential Penthouse",
              price: "From $1,599/night",
              imageSrc: "https://images.pexels.com/photos/12652920/pexels-photo-12652920.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury presidential penthouse suite"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Exclusive Packages"
          description="Discover our curated experiences designed to create unforgettable memories"
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "romantic",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$899",
              subtitle: "Perfect for couples seeking romance",
              buttons: [
                {
                  text: "Book Package",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "packages"
                }
              ],
              features: [
                "2 nights in Executive Suite",
                "Candlelit dinner for two",
                "Couples spa treatment",
                "Champagne welcome",
                "Late checkout"
              ]
            },
            {
              id: "business",
              badge: "Executive Choice",
              badgeIcon: Briefcase,
              price: "$649",
              subtitle: "Ideal for business travelers",
              buttons: [
                {
                  text: "Reserve Now",
                  href: "contact"
                },
                {
                  text: "Business Center",
                  href: "business"
                }
              ],
              features: [
                "2 nights in Deluxe Room",
                "Executive lounge access",
                "Business center privileges",
                "Complimentary WiFi",
                "Airport transfer"
              ]
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional hospitality reflected in guest satisfaction"
          tag="Awards & Recognition"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "2",
              value: "50K+",
              description: "Happy Guests Annually"
            },
            {
              id: "3",
              value: "25+",
              description: "Years of Excellence"
            },
            {
              id: "4",
              value: "15+",
              description: "International Awards"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Discover why discerning travelers choose Grand Paradise Hotel for their luxury stays"
          tag="Guest Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO, Tech Innovations",
              company: "Fortune 500 Executive",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Peterson",
              role: "Managing Director",
              company: "Investment Banking",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5945326/pexels-photo-5945326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Peterson portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Creative Director",
              company: "Design Agency",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "Michael Thompson",
              role: "Senior Partner",
              company: "Law Firm",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3772618/pexels-photo-3772618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Thompson portrait"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Calendar}
          title="Reserve Your Luxury Experience"
          description="Contact our dedicated reservations team to book your stay or inquire about our exclusive packages and amenities."
          imageSrc="https://images.pexels.com/photos/12217610/pexels-photo-12217610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Grand Paradise Hotel elegant facade"
          mediaPosition="right"
          inputPlaceholder="Enter your email address"
          buttonText="Request Reservation"
          termsText="By submitting, you agree to our privacy policy and terms of service."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Paradise"
          columns={[
            {
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "Packages",
                  href: "pricing"
                },
                {
                  label: "Dining",
                  href: "dining"
                }
              ]
            },
            {
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Guest Reviews",
                  href: "testimonial"
                },
                {
                  label: "Awards",
                  href: "metric"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Concierge",
                  href: "concierge"
                },
                {
                  label: "Business Center",
                  href: "business"
                },
                {
                  label: "Events",
                  href: "events"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}