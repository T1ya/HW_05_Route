import { useState } from 'react'

export default function GenderPredictor() {
    interface requestFormat{
        name:string,
        gender:string,
        country:string,
        probability:number,
        remaining_credits:number}; 

    const [name, setName] = useState<string>("");
    const [result, setResult] = useState<requestFormat|null>(null);
    const [errorMsg, setErrorMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const API_KEY = import.meta.env.VITE_API_KEY

    function validate(name: string) {
        const tName = name.trim();
        if( tName.length === 0) {
            setErrorMessage("Ошибка - пустой ввод")
            return;
        }
        if (tName.length < 2) {
            setErrorMessage("Ошибка - имя слишком короткое")
            return;
        }
        if (!/^\p{L}+$/u.test(tName)) {
            setErrorMessage("Ошибка — имя должно содержать только буквы");
            return;
        }
        fetchData(tName);
    }

    function translateGender(gender: string | undefined) {
        return gender == "male"? "мужской 🧔": 
            gender === "female"? "женский 👩‍":
            "неизвестно";
    }

    async function fetchData(name: string) {
        setLoading(true);
        setErrorMessage("");
        try{
            const res = await fetch(`https://api.genderapi.io/api?name=${name}&key=${API_KEY}`);
            const obj = await res.json();
            console.log(obj);
            if (obj.name === "null" || !obj.name) {
                setErrorMessage("Имя не найдено");
                return;
            }
            setResult(obj);
            setErrorMessage("");
        }
        catch (e: unknown) {
            if (e instanceof Error) {
                setErrorMessage(e.message);
            }
        }
        finally {
            setLoading(false)
        }   
    }

  return (
    <section>
        <h2>Определяем пол по имени</h2>
        <input
            type='text'
            placeholder='Enter your name'
            value={name}
            onChange={(e)=>setName(e.target.value)}
        />
        <button
            type='button'
            onClick={()=>{validate(name)}} 
            disabled={loading}>
                {loading? '⌛Загрузка...' : 'Узнать пол'}
        </button>
        {errorMsg ? <p style={{color:"red"}}>{errorMsg}</p> : null}
        {result && !errorMsg && (<div>
            <p>Имя: {result?.name}</p>
            <p>Пол: {translateGender(result?.gender)}</p>
            <p>Страна: {result?.country}</p>
            <p>Вероятность: {result?.probability}</p>
            <p>Попыток осталось: {result?.remaining_credits}</p>
        </div>)}
    </section>
    
  )
}
