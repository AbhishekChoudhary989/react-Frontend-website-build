import React from 'react';
import Slider from './Slider';

const stories = [
  {
    id: 1,
    quote: "Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specialised high-quality pigmented imaging process, so he decided to create his own product line",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800",
    author: "Rupesh Kanna",
    company: "Medical Imaging Solutions"
  },
  {
    id: 2,
    quote: "Starting our medical equipment business on 1MDM was the best decision we made. The platform's global reach helped us expand into new markets we never thought possible.",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    author: "Sarah Chen",
    company: "MedTech Innovations"
  },
  {
    id: 3,
    quote: "The support and tools provided by 1MDM helped us transform from a local supplier to a global medical equipment provider in just 18 months.",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
    author: "James Wilson",
    company: "Global Medical Supplies"
  },
  {
    id: 4,
    quote: "1MDM's platform made it easy for us to showcase our innovative medical devices to a worldwide audience. Our sales have grown exponentially since joining.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    author: "Maria Rodriguez",
    company: "Advanced Medical Systems"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-12">
          Success stories from 1mdm.com sellers
        </h2>
        <Slider slides={stories} />
      </div>
    </section>
  );
}