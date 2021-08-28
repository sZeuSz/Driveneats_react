import Dishes from "./components/dishes/Dishes"
import Topo from "./components/header/Header"
export default function App () {

    return (
        <div className="transparente">
            <Topo />
            <div className="conteudo">
                <p className="secao">Primeiro, seu prato</p>
                <Dishes />
            </div>
        </div>
    )
}