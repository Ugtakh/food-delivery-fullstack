"use client";
import HeroSection from "@/components/HeroSection";
import CardsSection from "@/components/CardsSection";
import AdventagesSection from "@/components/AdventagesSection";

const mockSaled = [
  {
    title: "Өглөөний хоол",
    img: "/assets/food-1.jpg",
    price: 16800,
    sale: 20,
  },
  {
    title: "Өглөөний хоол",
    img: "/assets/food-2.jpg",
    price: 16800,
    sale: 0,
  },
  {
    title: "Өглөөний хоол",
    img: "/assets/food-3.jpg",
    price: 16800,
    sale: 10,
  },
  {
    title: "Өглөөний хоол",
    img: "/assets/food-4.jpg",
    price: 16800,
    sale: 15,
  },
];

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AdventagesSection />
      <CardsSection
        data={{ sectionTitle: "Хямдралтай", foodData: mockSaled }}
      />
      <CardsSection
        data={{ sectionTitle: "Үндсэн хоол", foodData: mockSaled }}
      />
      <CardsSection
        data={{ sectionTitle: "Салад ба зууш", foodData: mockSaled }}
      />
      <CardsSection data={{ sectionTitle: "Амттан", foodData: mockSaled }} />
    </main>
  );
}
