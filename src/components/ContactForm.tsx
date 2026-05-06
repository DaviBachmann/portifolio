"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("submitting");

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) throw new Error("Formspree request failed");

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <AnimatedSection id="contato">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading title="Contato" />
        <form className="glass-card space-y-6 p-6 md:p-8" onSubmit={handleSubmit}>
          <input
            name="_subject"
            type="hidden"
            value="Nova mensagem pelo portfólio de Davi Bachmann"
          />

          <div>
            <label className="mb-2 block font-body text-sm font-semibold text-secondary" htmlFor="nome">
              Nome
            </label>
            <input
              className="form-field"
              id="nome"
              name="name"
              placeholder="Seu Nome da Silva"
              required
              type="text"
            />
          </div>

          <div>
            <label className="mb-2 block font-body text-sm font-semibold text-secondary" htmlFor="email">
              E-mail
            </label>
            <input
              className="form-field"
              id="email"
              name="email"
              placeholder="seu@email.com"
              required
              type="email"
            />
          </div>

          <div>
            <label className="mb-2 block font-body text-sm font-semibold text-secondary" htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              className="form-field min-h-36 resize-y"
              id="mensagem"
              name="message"
              placeholder="Sua mensagem."
              required
            />
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-display text-sm font-semibold text-background shadow-soft transition hover:-translate-y-0.5 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-70"
              disabled={submitState === "submitting"}
              type="submit"
            >
              <Send aria-hidden="true" size={18} />
              {submitState === "submitting" ? "Enviando..." : "Enviar mensagem"}
            </button>
            <p aria-live="polite" className="min-h-6 font-body text-sm text-secondary/85">
              {submitState === "success"
                ? "Mensagem enviada com sucesso."
                : submitState === "error"
                  ? "Não foi possível enviar agora. Tente novamente em instantes."
                  : ""}
            </p>
          </div>
        </form>
      </div>
    </AnimatedSection>
  );
}
