import { films, inTheatersFilm, parasiteCollection, awardWinners, comingSoon, watchNow } from "@/lib/data";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-screen">
        <video
          src="https://stream.mux.com/ZMww1KERfIlNdfExbOjrkUzsJQ1LHYk5/low.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full text-white">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-4xl md:text-6xl font-bold">{inTheatersFilm.title}</h1>
            <p className="text-lg md:text-2xl">In Theaters {inTheatersFilm.year}</p>
          </motion.div>
        </div>
      </div>

      <div className="bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
          {films.map((film) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mt-4 text-center">
                <h2 className="text-lg md:text-xl font-semibold">{film.title}</h2>
                <p className="text-sm md:text-md text-muted-foreground">{film.year}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Parasite Collection</h2>
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {parasiteCollection.map((item, index) => (
                <CarouselItem key={item.name} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div>
                          <img src={item.imageUrl} alt={item.name} className="w-full h-auto rounded-lg bg-gray-800" />
                          <div className="mt-2 md:mt-4 text-center">
                            <h3 className="text-md md:text-lg font-semibold">{item.name}</h3>
                            <p className="text-sm md:text-md text-muted-foreground">{item.price}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="p-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Award Winners</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
            {awardWinners.map((film) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={film.imageUrl} alt={film.title} className="w-full h-auto rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold">{film.title}</h3>
                  <div className="flex justify-center space-x-2 mt-2">
                    {film.awards.map((award) => (
                      <img key={award} src={award} alt="award" className="h-8" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Coming Soon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
            {comingSoon.map((film) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={film.imageUrl} alt={film.title} className="w-full h-auto rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold">{film.title}</h3>
                  <p className="text-sm md:text-md text-muted-foreground">{film.releaseDate}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Watch Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
            {watchNow.map((film) => (
              <motion.div
                key={film.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img src={film.imageUrl} alt={film.title} className="w-full h-auto rounded-lg" />
                <div className="mt-4 text-center">
                  <h3 className="text-lg md:text-xl font-semibold">{film.title}</h3>
                  <p className="text-md text-green-400">Now Available</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
