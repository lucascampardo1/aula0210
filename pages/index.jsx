import { useState } from "react"
export default function Home() {
    function Contador() {
        const [contador, setContador] = useState(1)

        function adicionar() {
            setContador(contador + 1)
        }

        return (
            <div>
                <button onClick={adicionar}>Adicionar</button>
                <span>{contador}</span>
            </div>
        )
    }
    return (
        <div>
            <h1>
                Home
            </h1>
            <Contador />
        </div>
    )
}