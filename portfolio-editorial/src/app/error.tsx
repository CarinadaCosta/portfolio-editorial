"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm uppercase tracking-widest text-accent">
        Error
      </p>

      <h1 className="mt-4 font-heading text-4xl leading-tight text-foreground md:text-5xl">
        Algo salió mal
      </h1>

      <p className="mt-4 max-w-md text-text">
        Ocurrió un error inesperado. Intentá nuevamente.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-8 border border-border px-5 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-70"
      >
        Intentar nuevamente
      </button>
    </main>
  );
}