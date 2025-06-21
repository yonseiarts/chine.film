import { films } from "@/lib/data";

export default function AllFilmsPage() {
  return (
    <main className="pt-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
        {films.map((film) => (
          <div key={film.title}>
            <img src={film.imageUrl} alt={film.title} className="w-full h-auto rounded-lg" />
            <div className="mt-4 text-center">
              <h2 className="text-lg md:text-xl font-semibold">{film.title}</h2>
              <p className="text-sm md:text-md text-muted-foreground">{film.year}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
