"use client";

export default function GlobalError() {
  return (
    <html lang="es">
      <body>
        <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-accent">
            Error
          </p>

          <h1 className="mt-4 font-heading text-4xl leading-tight text-foreground md:text-5xl">
            Algo salió mal
          </h1>

          <p className="mt-4 max-w-md text-text">
            Ocurrió un error inesperado. Intentá nuevamente más tarde.
          </p>
        </main>
      </body>
    </html>
  );
}