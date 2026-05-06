"use client";

import Image from "next/image";
import { Download, X } from "lucide-react";
import { useEffect } from "react";
import { ButtonLink } from "@/components/Button";

type ImageModalProps = {
  open: boolean;
  title: string;
  image: string;
  alt: string;
  downloadUrl?: string;
  onClose: () => void;
};

export function ImageModal({
  open,
  title,
  image,
  alt,
  downloadUrl,
  onClose
}: ImageModalProps) {
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      role="dialog"
    >
      <div className="glass-card max-h-[92vh] w-full max-w-5xl overflow-auto p-4 md:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="font-display text-xl font-semibold text-secondary md:text-2xl">
            {title}
          </h2>
          <button
            aria-label="Fechar modal"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-secondary/20 text-secondary transition hover:bg-secondary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={onClose}
            type="button"
          >
            <X aria-hidden="true" size={20} />
          </button>
        </div>
        <div className="relative min-h-[260px] overflow-hidden rounded-lg bg-black/20 md:min-h-[560px]">
          <Image
            alt={alt}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 92vw, 900px"
            src={image}
          />
        </div>
        {downloadUrl ? (
          <div className="mt-5 flex justify-center">
            <ButtonLink download href={downloadUrl}>
              <Download aria-hidden="true" size={18} />
              Download PDF
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </div>
  );
}
