import { useEffect, useState } from "react";
import type { User } from "../../types";
import { Link } from "react-router-dom";
import styles from "./UserList.module.css"

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(()=>{fetchUsers()});

    async function fetchUsers() {
        const res = await fetch("https://api.escuelajs.co/api/v1/users");
        const obj = await res.json();
        const sorted = obj.sort((a:User, b:User )=>{
            return a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase());
        });
        setUsers(sorted);
    }
  
    return (
    <div className="page">
        <h2 className="categoryTitle">Users:</h2>
        <ul className={styles.userList}>
        {users.map((u) => (
          <li key={u.id} className={styles.userCard}>
            <img src={u.avatar} alt={u.name} className={styles.userAvatar} />
            <div className={styles.userName}>{u.name}</div>
            <div className={styles.userEmail}>{u.email}</div>
            <Link className="toLink" to={`/users/${u.id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
