import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Product } from "../../types";
import style from "./ProductPage.module.css";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => { fetchProduct(id) }, [id]);

  async function fetchProduct(id: string | undefined) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
    const productsRes = await res.json();
    setProduct(productsRes);
  }

  return (
    <div className="page">
      <section className={style.productCard}>
        <h2>{product?.title}</h2>
        <div className={style.fieldRow}>
          <span className={style.fieldTitle}>Price:</span>
          <span className={style.fieldValue}>{product?.price} €</span>
        </div>
        <img src={product?.images[0]} alt={product?.title} className={style.productImage} />
        <div className={style.fieldRow}>
          <span className={style.fieldTitle}>Category:</span>
          <span className={style.fieldValue}>{product?.category.name}</span>
        </div>
        <div className={style.fieldRow}>
          <p className={style.fieldValue}>{product?.description}</p>
        </div>
        <Link className="toLink" to="/products">← Back</Link>
      </section>
    </div>
  );
}
