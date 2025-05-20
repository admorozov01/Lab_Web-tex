import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductCard({ product }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <Link href={`/products/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">Просмотр {product.name}</span>
      </Link>
      <div className="overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={300}
          height={300}
          className="h-60 w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-medium">{product.price} ₽</span>
          <Button size="sm" className="relative z-20">
            В корзину
          </Button>
        </div>
      </div>
    </div>
  )
}
