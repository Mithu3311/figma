'use client'
import { useState } from "react";
import { Star } from "lucide-react";

interface RatingProps {
  maxRating?: number; // Maximum number of stars
  initialRating?: number; // Default selected stars
  onRate?: (rating: number) => void; // Callback when user selects a rating
}

const Rating: React.FC<RatingProps> = ({
  maxRating = 5,
  initialRating = 0,
  onRate,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleRate = (value: number) => {
    setRating(value);
    if (onRate) {
      onRate(value);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          size={24}
          className={`cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-400"
          }`}
          onClick={() => handleRate(index + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
