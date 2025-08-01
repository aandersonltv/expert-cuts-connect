import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import haircutImage from "@/assets/haircut-1.jpg";
import fadeImage from "@/assets/fade-cut.jpg";
import beardImage from "@/assets/beard-trim.jpg";

const ImageGallery = () => {
  const images = [
    {
      src: haircutImage,
      alt: "Professional haircut in progress",
      caption: "Precision cutting technique"
    },
    {
      src: fadeImage,
      alt: "Fresh fade haircut result",
      caption: "Clean fade perfection"
    },
    {
      src: beardImage,
      alt: "Professional beard trimming",
      caption: "Expert beard grooming"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-16 bg-section-dark text-text-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-gold-accent">Masterwork</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See the quality and precision that goes into every cut. 
            Each client leaves with a style that's uniquely theirs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative group mb-8">
            <div className="aspect-video overflow-hidden rounded-lg shadow-2xl">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            
            {/* Navigation Arrows */}
            <Button
              variant="gold"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="gold"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Image Caption */}
            <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">{images[currentIndex].caption}</p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center space-x-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? "border-gold-accent scale-110" 
                    : "border-transparent hover:border-gold-accent/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Gallery Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-gold-accent" 
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;