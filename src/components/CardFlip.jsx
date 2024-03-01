import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CardFlip = ({ title, content, title2, content2, backgroundImage, icon }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    function handleFlip () {
        if (!isAnimating) {
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }

    return (
        <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer z-20" onClick={handleFlip}>
            <motion.div
                className="flip-card-inner w-full h-full"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 360 }}
                transition={{ duration: 0.6, animationDirection: "normal" }}
                onAnimationComplete={() => setIsAnimating(false)}
            >
                <div className="flip-card-front w-full h-full bg-cover border-[1px] text-white rounded-lg p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3">
                        {icon && <icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />}
                        <h1 className="text-xl lg:text-2xl text-center">{title}</h1>
                        <p className="lg:text-base text-center">{content}</p>
                    </div>
                </div>

                <div className="flip-card-back w-full h-full bg-cover border-[1px] text-white rounded-lg p-4" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-3">
                        {icon && <icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />}
                        <h1 className="text-xl lg:text-2xl text-center">{title2}</h1>
                        <p className="lg:text-base text-center">{content2}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CardFlip;