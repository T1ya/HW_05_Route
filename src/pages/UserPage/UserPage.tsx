import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../../types";
import { Link } from "react-router-dom";
import style from "./UserPage.module.css"

export default function UserPage() {
    const [user, setUser] = useState<User|undefined>(undefined);
    const { id } = useParams();
    useEffect(()=>{fetchUser(id)},[id]);

    async function fetchUser(id:string|undefined) {
        const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
        const obj = await res.json();
        setUser(obj);
    }

    return (
    <div className="page">
        <section className={style.userCard}>
            <div className={style.fieldRow}>
                <span className={style.fieldTitle}>Name:</span>
                <span className={style.fieldValue}>{user?.name}</span>
            </div>
            <img className = {style.userAvatar} src={user?.avatar} alt={user?.name}/>
            <div className={style.fieldRow}>
                <span className={style.fieldTitle}>Email:</span>
                <span className={style.fieldValue}>{user?.email}</span>
            </div>       
            <div className={style.fieldRow}>
                <span className={style.fieldTitle}>Role:</span>
                <span className={style.fieldValue}>{user?.role}</span>
            </div>
            <Link className="toLink" to = "/users">← Back</Link>
        </section>
    </div>
  )
}
