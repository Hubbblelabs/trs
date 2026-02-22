export interface TestimonialProps {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export const testimonialsData: TestimonialProps[] = [
  {
    id: "test-1",
    name: "Rohan Desai",
    role: "Tech Entrepreneur, Bangalore",
    content: "Working with TRS Realty was an absolute pleasure. They understood my exact needs for a tranquil home amidst the busy city life. The entire process of purchasing my villa in Indiranagar was transparent and seamless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-2",
    name: "Aarti Sharma",
    role: "Investment Banker, Mumbai",
    content: "I've been investing in real estate for over a decade, and the level of professionalism at TRS Realty is unmatched. They helped me find a high-yield commercial property and managed the negotiations brilliantly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: "test-3",
    name: "Vikram Singhania",
    role: "NRI Investor, Dubai",
    content: "As an NRI, buying property in India seemed daunting. TRS Realty took care of everything—from remote viewings to legal documentation. They found me the perfect luxury apartment in Gurugram.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
  }
];
