'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import colors from 'tailwindcss/colors';
import { DefaultColors } from 'tailwindcss/types/generated/colors';

const greetingsArray = [
  'Hi', // English
  'Hola', // Spanish
  'Bonjour', // French
  'Ciao', // Italian
  'Guten Tag', // German
  'こんにちは', // Japanese (Konnichiwa)
  '안녕하세요', // Korean (Annyeonghaseyo)
  '你好', // Chinese (Nǐ hǎo)
  'नमस्ते', // Hindi (Namaste)
  'Salam', // Arabic (Salam)
  'Olá', // Portuguese
  'Привет', // Russian (Privet)
  'Cześć', // Polish
  'Hola', // Catalan
  'Hej', // Swedish
  'Merhaba', // Turkish
  'Hallo', // Dutch
  'Dia dhuit', // Irish
  'Szia', // Hungarian
  'Hei', // Finnish
  'Ahoj', // Czech
  'Zdravo', // Slovenian
  'שלום', // Hebrew (Shalom)
  'Χαίρετε', // Greek (Chaírete)
  'Dobrý den', // Czech
  'Hallo', // Danish
  'Kamusta', // Filipino
  'Xin chào', // Vietnamese
  'Sawubona', // Zulu
  'Sveiki', // Latvian
  'Saluton', // Esperanto
  'Labas', // Lithuanian
  'Здравейте', // Bulgarian (Zdraveyte)
  'Բարեւ', // Armenian (Barev)
  'გამარჯობა', // Georgian (Gamardjoba)
  'Përshëndetje', // Albanian
  'Sain baina uu', // Mongolian
  'مرحبا', // Arabic (Marhaban)
  'Sawatdee', // Thai
  'ជំរាបសួរ', // Khmer (Chomreabsuor)
  'හෙලෝ', // Sinhala (Hello)
  'வணக்கம்', // Tamil (Vanakkam)
  'Hallå', // Swedish
  'Hei', // Norwegian
  'Halo', // Indonesian
  'Selam', // Amharic
  'Καλημέρα', // Greek (Kalimera)
  'Aloha', // Hawaiian
  'Прывітанне', // Belarusian (Pryvitannie)
  'Buna', // Romanian
  'Moïen', // Luxembourgish
  'Hujambo', // Swahili
  'Zdravo', // Bosnian
  'Բարեւ', // Armenian (Barev)
  'Chào bạn', // Vietnamese
  'Hallå', // Swedish
  'Hei', // Norwegian
  'Halo', // Indonesian
  'Selam', // Amharic
  'Καλημέρα', // Greek (Kalimera)
  'Aloha', // Hawaiian
  'Прывітанне', // Belarusian (Pryvitannie)
  'Buna', // Romanian
  'Moïen', // Luxembourgish
  'Hujambo', // Swahili
  'Zdravo', // Bosnian
  'Habari', // Swahili
  'Zdravo', // Croatian
  'Здравей', // Bulgarian (Zdravey)
  'Dia duit', // Irish
  'Moi', // Finnish
  'Szia', // Hungarian
  'Բարեւ', // Armenian (Barev)
  'Konnichiwa', // Japanese
  'Kamusta', // Filipino
  'Marhaba', // Arabic (Marhaban)
  'Zdravo', // Bosnian
  'Saluton', // Esperanto
  'Nǐ hǎo', // Chinese (Nǐ hǎo)
  'Բարեւ', // Armenian (Barev)
  'Jambo', // Swahili
  'Dobrý den', // Czech
  'Annyeonghaseyo', // Korean
  'Hallå', // Swedish
  'Hallo', // Dutch
  'Olá', // Portuguese
  'Sveiki', // Latvian
  'Salam', // Persian
];

const fontSizeSet = [
  'text-sm',
  'text-base',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
];

const colorSet = [
  'text-red-500',
  'text-orange-500',
  'text-rose-500',
  'text-amber-500',
  'text-yellow-500',
  'text-lime-500',
  'text-green-500',
  'text-emerald-500',
  'text-teal-500',
  'text-sky-500',
  'text-blue-500',
  'text-indigo-500',
  'text-violet-500',
  'text-purple-500',
  'text-fuchsia-500',
  'text-pink-500',
];

const dropTextFrame = [
  {
    top: '0%',
    scale: '1',
  },
  {
    top: '100%',
    offset: 0.7,
  },
  {
    top: '100%',
    scale: '0',
  },
];

const wiggleFrame = [
  {
    transform: 'rotate(-45deg)',
  },
  {
    transform: 'rotate(45deg)',
  },
  {
    transform: 'rotate(-45deg)',
  },
];

export default function AnimationSection() {
  const greetingCanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!greetingCanvas.current) return;

    const addRandomGreeting = () => {
      const addGreeting = () => {
        if (!greetingCanvas.current) return;
        const elmt = document.createElement('div');
        const randFontSize =
          fontSizeSet[Math.floor(Math.random() * fontSizeSet.length)];
        const randColor = colorSet[Math.floor(Math.random() * colorSet.length)];
        const randGreeting =
          greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
        const randLeft =
          Math.floor(
            Math.random() * greetingCanvas.current.getBoundingClientRect().width
          ) + 'px';

        elmt.innerText = randGreeting;
        elmt.className = `absolute whitespace-nowrap ${randColor} ${randFontSize}`;
        const splitColorName = randColor.split('-');
        const colorRgb =
          colors[splitColorName[1] as keyof DefaultColors][
            splitColorName[2] as keyof DefaultColors[keyof DefaultColors]
          ];
        elmt.style.filter = `drop-shadow(4px 4px 4px ${colorRgb})`;
        elmt.style.left = randLeft;
        elmt.style.top = '0%';

        const dropDuration = (2 + Math.floor(Math.random() * 5)) * 1000;
        elmt.animate(dropTextFrame, {
          duration: dropDuration,
          iterations: 1,
        });
        elmt.animate(wiggleFrame, {
          duration: 1000,
          iterations: Infinity,
        });

        greetingCanvas.current.appendChild(elmt);

        setTimeout(() => {
          elmt.remove();
        }, dropDuration);
      };

      addGreeting();
    };

    const tmId = setInterval(addRandomGreeting, 250);

    return () => {
      if (tmId) clearInterval(tmId);
    };
  }, []);

  return (
    <div className="relative h-screen flex justify-center items-center bg-gray-100 gap-8 animate-animation-section overflow-hidden">
      <Image
        src="/people.png"
        alt="people"
        width={1024}
        height={1024}
        className="max-w-2xl max-h-2xl rounded-full w-3/6 md:w-2/6 absolute z-[1]"
      />
      <Image
        src="/world.png"
        alt="world"
        width={1024}
        height={1024}
        className="max-w-2xl max-h-2xl rounded-full w-3/6 md:w-2/6 animate-pulse absolute z-[1]"
      />
      <div className="w-full h-full" ref={greetingCanvas}></div>
    </div>
  );
}
