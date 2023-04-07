import Image from "next/image";

export function Cards() {
  return (
    <section className="mx-auto mt-10 mb-10 max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-around gap-6 lg:flex-row">
        <div className="flex max-w-xs flex-col gap-2 rounded-md border p-4 shadow-md">
          <div className="flex flex-col items-center gap-1">
            <Image src="/circles.svg" width={25} height={40} alt="circles" />
            <h2 className="text-xl font-bold text-blue-900">Curiosidade</h2>
          </div>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
        </div>
        <div className="flex max-w-xs flex-col gap-2 rounded-md border p-4 shadow-md">
          <div className="flex flex-col items-center gap-1">
            <Image src="/circles.svg" width={25} height={40} alt="circles" />
            <h2 className="text-xl font-bold text-blue-900">Curiosidade</h2>
          </div>
          <p>
            Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
        </div>
        <div className="flex w-full max-w-xs flex-col gap-2 rounded-md border p-4 shadow-md">
          <div className="flex flex-col items-center gap-1">
            <Image src="/tree.svg" width={25} height={40} alt="circles" />
            <h2 className="text-xl font-bold text-blue-900">
              Vencedores anteriores
            </h2>
          </div>
          <ul className="flex h-fit flex-col gap-2 py-2 pl-8">
            <li>1 - Zenith</li>
            <li>2 - Zenith</li>
            <li>3 - Zenith</li>
            <li>4 - Zenith</li>
            <li>5 - Zenith</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
