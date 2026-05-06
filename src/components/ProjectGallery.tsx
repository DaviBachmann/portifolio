"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageModal } from "@/components/ImageModal";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            className="group relative min-h-56 overflow-hidden rounded-lg bg-black/20 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            key={image}
            onClick={() => setSelectedImage(image)}
            type="button"
          >
            <Image
              alt={`Screenshot ${index + 1} do projeto ${title}`}
              className="object-cover transition duration-500 group-hover:scale-105"
              fill
              sizes="(max-width: 768px) 92vw, 420px"
              src={image}
            />
          </button>
        ))}
      </div>

      <ImageModal
        alt={`Screenshot ampliado do projeto ${title}`}
        image={selectedImage ?? images[0]}
        onClose={() => setSelectedImage(null)}
        open={selectedImage !== null}
        title={title}
      />
    </>
  );
}
