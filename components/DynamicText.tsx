"use client";

import React, { useState, useEffect } from 'react';

interface DynamicTextProps {
    texts: string[]; // Array of texts to cycle through
    typingSpeed?: number; // Milliseconds per character
    pauseTime?: number; // Milliseconds between texts
}

const DynamicText: React.FC<DynamicTextProps> = ({ texts, typingSpeed = 100, pauseTime = 2000 }) => {
    const [currentText, setCurrentText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const fullText = texts[textIndex];
            const nextText = isDeleting
                ? fullText.slice(0, currentText.length - 1)
                : fullText.slice(0, currentText.length + 1);

            setCurrentText(nextText);

            if (!isDeleting && nextText === fullText) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && nextText === '') {
                setIsDeleting(false);
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
            }
        };

        const typingInterval = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed); // Faster deleting

        return () => clearTimeout(typingInterval);
    }, [currentText, isDeleting, textIndex, texts, typingSpeed, pauseTime]);

    return (
        <span className="text-accent">{currentText}</span>
    );
};

export default DynamicText;