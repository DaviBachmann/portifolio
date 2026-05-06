import { ButtonLink } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-24">
      <div className="glass-card max-w-xl p-8 text-center">
        <h1 className="font-display text-3xl font-semibold text-secondary">
          Página não encontrada
        </h1>
        <p className="mt-4 font-body text-muted">
          O conteúdo que você tentou acessar não está disponível.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Voltar para o início</ButtonLink>
        </div>
      </div>
    </main>
  );
}
