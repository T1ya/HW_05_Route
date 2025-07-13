import { useEffect, useState } from "react"
import type { Product } from "../../types";
import { Link } from "react-router-dom";
import style from "./ProductList.module.css"

export const ProductsList = () => {
    
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(()=>{fetchProducts()})

    async function fetchProducts() {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const productsRes = await res.json();
        setProducts(productsRes);
    }

    return (
    <div className="page">
        <h2 className="categoryTitle">Products list</h2>
        <ul className={style.productList}>
            {products.map(p => (
                <li key={p.id} className={style.productCard}>
                <h3>{p.title}</h3>
                 <img src={p.images[0]} alt={p.title} className={style.productImage} />
                <div>Price: {p.price} €</div>
                <Link className="toLink" to={`/products/${p.id}`}>View</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
