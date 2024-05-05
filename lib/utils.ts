import qs from "qs";

import { aspectRatioOptions } from "@/constants/index";

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import FileSaver from "file-saver";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export async function downloadImage(_id: string, photo: string) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}

const surpriseMePrompts = [
  'an armchair in the shape of an avocado',
  'a surrealist dream-like oil painting by Salvador Dalí of a cat playing checkers',
  'teddy bears shopping for groceries in Japan, ukiyo-e',
  'an oil painting by Matisse of a humanoid robot playing chess',
  'panda mad scientist mixing sparkling chemicals, digital art',
  "a macro 35mm photograph of two mice in Hawaii, they're each wearing tiny swimsuits and are carrying tiny surf boards, digital art",
  '3D render of a cute tropical fish in an aquarium on a dark blue background, digital art',
  'an astronaut lounging in a tropical resort in space, vaporwave',
  'an oil painting portrait of a capybara wearing medieval royal robes and an ornate crown on a dark background',
  'a stained glass window depicting a hamburger and french fries',
  'a pencil and watercolor drawing of a bright city in the future with flying cars',
  'a sunlit indoor lounge area with a pool with clear water and another pool with translucent pastel pink water, next to a big window, digital art',
  'a fortune-telling shiba inu reading your fate in a giant hamburger, digital art',
  '"a sea otter with a pearl earring" by Johannes Vermeer',
  'an oil pastel drawing of an annoyed cat in a spaceship',
  'a painting of a fox in the style of Starry Night',
  'a bowl of soup that looks like a monster, knitted out of wool',
  'A plush toy robot sitting against a yellow wall',
  'A synthwave style sunset above the reflecting water of the sea, digital art',
  'Two futuristic towers with a skybridge covered in lush foliage, digital art',
  'A 3D render of a rainbow colored hot air balloon flying above a reflective lake',
  'A comic book cover of a superhero wearing headphones',
  'A centered explosion of colorful powder on a black background',
  'A photo of a Samoyed dog with its tongue out hugging a white Siamese cat',
  'A photo of a white fur monster standing in a purple room',
  "A photo of Michelangelo's sculpture of David wearing headphones djing",
  'A Samurai riding a Horse on Mars, lomography.',
  'A modern, sleek Cadillac drives along the Gardiner expressway with downtown Toronto in the background, with a lens flare, 50mm photography',
  'A realistic photograph of a young woman with blue eyes and blonde hair',
  'A man standing in front of a stargate to another dimension',
  'Spongebob Squarepants in the Blair Witch Project',
  'A velociraptor working at a hotdog stand, lomography',
  'A man walking through the bustling streets of Kowloon at night, lit by many bright neon shop signs, 50mm lens',
  'A BBQ that is alive, in the style of a Pixar animated movie',
  'A futuristic cyborg dance club, neon lights',
  'The long-lost Star Wars 1990 Japanese Anime',
  'A hamburger in the shape of a Rubik’s cube, professional food photography',
  'A Synthwave Hedgehog, Blade Runner Cyberpunk',
  'An astronaut encountering an alien life form on a distant planet, photography',
  'A Dinosaur exploring Cape Town, photography',
  'A Man falling in Love with his Computer, digital art',
  'A photograph of a cyborg exploring Tokyo at night, lomography',
  'Dracula walking down the street of New York City in the 1920s, black and white photography',
  'Synthwave aeroplane',
  'A man wanders through the rainy streets of Tokyo, with bright neon signs, 50mm',
  'A Space Shuttle flying above Cape Town, digital art',
];

export function getRandomPrompt(prompt: string) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// PLACEHOLDER LOADER - while image is transforming
const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#7986AC" offset="20%" />
      <stop stop-color="#68769e" offset="50%" />
      <stop stop-color="#7986AC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#7986AC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;
// ==== End

// FORM URL QUERY
export const formUrlQuery = ({
  searchParams,
  key,
  value,
}: FormUrlQueryParams) => {
  const params = { ...qs.parse(searchParams.toString()), [key]: value };

  return `${window.location.pathname}?${qs.stringify(params, {
    skipNulls: true,
  })}`;
};

// REMOVE KEY FROM QUERY
export function removeKeysFromQuery({
  searchParams,
  keysToRemove,
}: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(searchParams);

  keysToRemove.forEach((key) => {
    delete currentUrl[key];
  });

  // Remove null or undefined values
  Object.keys(currentUrl).forEach(
    (key) => currentUrl[key] == null && delete currentUrl[key]
  );

  return `${window.location.pathname}?${qs.stringify(currentUrl)}`;
}

// DEBOUNCE
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout | null;
  return (...args: any[]) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// GE IMAGE SIZE
export type AspectRatioKey = keyof typeof aspectRatioOptions;
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return (
      aspectRatioOptions[image.aspectRatio as AspectRatioKey]?.[dimension] ||
      1000
    );
  }
  return image?.[dimension] || 1000;
};

// DOWNLOAD IMAGE
export const download = (url: string, filename: string) => {
  if (!url) {
    throw new Error("Resource URL not provided! You need to provide one");
  }

  fetch(url)
    .then((response) => response.blob())
    .then((blob) => {
      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobURL;

      if (filename && filename.length)
        a.download = `${filename.replace(" ", "_")}.png`;
      document.body.appendChild(a);
      a.click();
    })
    .catch((error) => console.log({ error }));
};

// DEEP MERGE OBJECTS
export const deepMergeObjects = (obj1: any, obj2: any) => {
  if(obj2 === null || obj2 === undefined) {
    return obj1;
  }

  let output = { ...obj2 };

  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (
        obj1[key] &&
        typeof obj1[key] === "object" &&
        obj2[key] &&
        typeof obj2[key] === "object"
      ) {
        output[key] = deepMergeObjects(obj1[key], obj2[key]);
      } else {
        output[key] = obj1[key];
      }
    }
  }

  return output;
};