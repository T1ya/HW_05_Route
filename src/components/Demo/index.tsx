import { useEffect, useState } from "react";

export default function Demo() {
    const [counter, setCounter] = useState<number>(0);
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    console.log("Use effect 1 с пустым массивом зависимостей");
    // С пустым массивом - при первом рендере компонента
  }, []);

  useEffect(() => {
    console.log("Use effect 2 без массива зависимостей");
    // Без параметров - при любом изменении - любой ререндер
  });

   useEffect(() => {
    console.log("Use effect 3 с указанием зависимостей");
    // Без параметров - при любом изменении - любой ререндер
  }, [age]);

  // функция очистки в юзефекте - сработает при размонтировании компонента
  useEffect(()=>{
    //какое-то действие
    const interval = setInterval(()=>{
        console.log("click");
    }, 3000)
    // функция очистки, указанная в return, вызовется в момент закрытия компонента
    return()=>{
        console.log("Use effect 4 - очистка")
        clearInterval(interval);
    }
  }, [])

  return (
    <div>
      <h2>Use Effect</h2>
      <p>Counter: {counter}</p>
      <p>Age: {age}</p>
      <button type="button" onClick={() => setCounter((prev) => prev + 1)}>
        +1
      </button>

      <button type="button" onClick={() => setAge((prev) => prev + 1)}>
        Age +1
      </button>

      <ul>
        <li>Для фетчинга данных</li>
        <li>Для таймеров</li>
        <li>Для стастических данных - маркетинг или аналитика</li>
      </ul>
    </div>
  );
}