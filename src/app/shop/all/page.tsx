import { products } from "@/lib/data";

export default function AllProductsPage() {
  return (
    <main className="pt-16">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 p-4">
        {products.map((product) => (
          <div key={product.name}>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg bg-gray-800" />
            <div className="mt-2 md:mt-4 text-center">
              <h3 className="text-md md:text-lg font-semibold">{product.name}</h3>
              <p className="text-sm md:text-md text-muted-foreground">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
