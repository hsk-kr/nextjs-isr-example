'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

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

const fontSizes = [
  'text-sm',
  'text-base',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
];

const colors = [
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

export default function AnimationSection() {
  const greetingCanvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!greetingCanvas.current) return;

    let tmId: NodeJS.Timeout;

    const addRandomGreeting = () => {
      const addGreeting = () => {
        if (!greetingCanvas.current) return;
        const elmt = document.createElement('div');
        const randFontSize =
          fontSizes[Math.floor(Math.random() * fontSizes.length)];
        const randColor = colors[Math.floor(Math.random() * colors.length)];
        const randGreeting =
          greetingsArray[Math.floor(Math.random() * greetingsArray.length)];
        const randLeft =
          Math.floor(
            Math.random() * greetingCanvas.current.getBoundingClientRect().width
          ) + 'px';

        elmt.innerText = randGreeting;
        elmt.className = `absolute whitespace-nowrap ${randColor} ${randFontSize}`;
        elmt.style.left = randLeft;
        elmt.style.top = '0%';

        greetingCanvas.current.appendChild(elmt);
      };

      const cnt = Math.floor(Math.random() * 3 + 1);
      for (let i = 0; i <= cnt; i++) {
        addGreeting();
      }
      startTimer();
    };

    const startTimer = () => {
      tmId = setTimeout(
        addRandomGreeting,
        Math.floor(Math.random() * 1000) + 500
      );
    };

    startTimer();

    return () => {
      if (tmId) clearInterval(tmId);
    };
  }, []);

  useEffect(() => {
    const dropGreetings = () => {
      if (!greetingCanvas.current) return;

      greetingCanvas.current.querySelectorAll('div').forEach((greeting) => {
        if (!greetingCanvas.current) return;

        const nTop = Number(greeting.style.top.replace(/%/, '') || '0');
        greeting.style.top = `${nTop + 1}%`;

        const overTheLine =
          greeting.clientHeight + greetingCanvas.current.clientHeight * 0.1 >=
          greetingCanvas.current.clientHeight -
            greeting.offsetTop +
            greeting.clientHeight;

        if (overTheLine) {
          greeting.remove();
        }
      });
    };

    const tmId = setInterval(dropGreetings, 100);

    return () => {
      tmId;
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
