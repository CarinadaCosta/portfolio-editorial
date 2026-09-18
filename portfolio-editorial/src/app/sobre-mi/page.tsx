export default function SobreMiPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <span className="text-sm uppercase tracking-wider text-accent">
            Sobre mí
          </span>

          <h1 className="mt-2 font-heading text-3xl leading-none text-foreground md:text-4xl">
            Carina da Costa
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-text">
            <p>
              La escritura siempre formó parte de mí y en el transcurso de la vida
              fui recorriendo diferentes etapas. Nací en Tacuarembó, vivo en Montevideo,
              y estudié Comunicación en la Universidad de la República y en la Universidad ORT.
            </p>

            <p>
              En el camino descubrí y exploré varias áreas: edición de textos,
              diseño gráfico, locución, docencia, relaciones públicas, comunicación
              corporativa y lo que más me atrapó, siempre, fue la escritura.
              Me gusta observar, investigar, entrevistar y contar historias.
            </p>

            <p>
              Mi placer por la fotografía llegó un poco después. Luego de una introducción en
              la Universidad, la verdadera satisfacción por captar imágenes fue cuando tuve mi propia cámara.
            </p>

            <p>
              La conexión entre estas dos formas de expresar los instantes y las vivencias me parece 
              perfecta. Esta idea es la que motivó a crear este proyecto; un sitio web, un espacio 
              donde mostrar lugares, narrar historias y hechos que se suceden en cualquier parte de 
              Uruguay o el mundo.
            </p>
          </div>
        </div>

        <div>
          <div className="relative aspect-[5/6] overflow-hidden">
            <img
              src="/bio/sobre-mi.jpg"
              alt="Retrato"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}