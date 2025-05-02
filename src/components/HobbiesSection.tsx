import React from 'react';

interface HobbyProps {
  name: string;
  description: string;
  imageUrl: string;
}

const hobbies: HobbyProps[] = [
  {
    name: "Reading",
    description: "Diving into books and exploring new ideas, perspectives, and worlds.",
    imageUrl: "/Images/booksPhoto1.png"
  },
  {
    name: "Gyming",
    description: "Strength training and staying fit through a disciplined fitness routine.",
    imageUrl: "/Images/gym1.jpg"
  },
  {
    name: "Travelling",
    description: "Exploring different cultures, cuisines, and scenic landscapes.",
    imageUrl: "/Images/romming.png"
  }
];

const HobbyCard = ({ name, description, imageUrl }: HobbyProps) => {
  return (
    <div className="flex flex-col">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={name}
          className="h-48 w-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-20">
      <div className="container-custom">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Hobbies</h2>
          <p className="text-muted-foreground text-lg">
            A few things I enjoy doing outside of work to stay balanced and inspired.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hobbies.map((hobby, idx) => (
            <HobbyCard
              key={idx}
              name={hobby.name}
              description={hobby.description}
              imageUrl={hobby.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
