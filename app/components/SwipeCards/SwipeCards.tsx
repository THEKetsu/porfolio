'use client'
import {motion,useMotionValue,useTransform} from "framer-motion";
import React from "react";

interface CardType {
    id: number;
    title: string;
    image: string;
    description: string;
    technologies: string[];
}

const Card = ({id,image,cards,setCards} : {
    id: number,
    image: string,
    cards: CardType[],
    setCards: React.Dispatch<React.SetStateAction<CardType[]>>}
    ) => {

    const x = useMotionValue(0);
    const opacity = useTransform(x,[-100, 0, 100], [0.5, 1, 0.5]);  
    const rotate = useTransform(x,[-100, 0, 100], [-10, 0, 10]);

    const handleDragEnd = () => {
        const offset = x.get(); // Get the current x value
        if (Math.abs(offset) > 50) {
            setCards((pv) => pv.filter((v) => v.id !== id));
            console.log("Swipe Right");
    }
    }

    // useMotionValueEvent(x, "change", (latest) => console.log(latest));
    return (    
            <motion.img 
                src={image} 
                alt={id.toString()}
                className="rounded-lg shadow-lg w-64 h-64
                hover:cursor-grab active:cursor-grabbing"
                style={{
                        gridRow: 1,
                        gridColumn: 1,
                        objectFit: "cover",
                        x,
                        opacity,
                        rotate,
                    }}
                
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
            />
    );
}
const SwipeCard = () => {
    const cardData : CardType[] = [
        {
            id: 1,
            title: "Card 1",
            image: "https://cdn.pixabay.com/photo/2025/03/17/14/43/bird-9476034_1280.png",
            description: "Description for Card 1",
            technologies: ["React", "Next.js", "Tailwind CSS"],
        },
        {
            id: 2,
            title: "Card 2",
            image: "https://cdn.pixabay.com/photo/2024/01/28/22/27/sculpture-8538468_1280.jpg",
            description: "Description for Card 2",
            technologies: ["React", "Next.js", "Tailwind CSS"],
        },
        // Add more cards here
      ];

    const [cards, setCards] = React.useState(cardData);
    return (
        <div className="grid place-items-center ">
            {cardData.map((card) => {return <Card 
            key={card.id} 
            cards={cards}
            setCards={setCards}
            {...card} />})}
        </div>

    );
}

export default SwipeCard;