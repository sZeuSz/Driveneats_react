import Dishes from "./components/dishes/Dishes"
import Header from "./components/header/Header"
import Drinks from "./components/drinks/Drinks";
import Desserts from "./components/disserts/Desserts";
import React from "react";
import Pedido from "./components/pedido/Pedido";

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const dishes = [
    {
        img: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2019/03/comidas-da-franca-croissant.jpg.webp",
        nome: "Croissant",
        descricao: "pão.",
        preco: "29,90",
        qtd: 0,
    },
    {
        img: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2019/03/comidas-da-franca-Ratatouille.jpg.webp",
        nome: "Ratatouille",
        descricao: "do filme, pô",
        preco: "5,80",
        qtd: 0,
    },
    {
        img: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2019/03/comidas-da-franca-magret-de-canard-1.jpg.webp",
        nome: "Magret",
        descricao: "Carne doce",
        preco: "79,90",
        qtd: 0,
    },
    {
        img: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2019/03/comidas-da-franca-Souffl%C3%A9-au-fromage.jpg.webp",
        nome: "Queijin no pote",
        descricao: "mucho queijito",
        preco: "17,90",
        qtd: 0,
    }
]
const drinks = [
    {
        img: "https://conteudo.bblend.com.br/wp-content/uploads/2020/08/bebidasitalianas3-1536x1024.webp",
        nome: "Negroni",
        descricao: "coquetéis da IBA",
        preco: "22,90",
        qtd: 0,
    },
    {
        img: "https://www.aprendizdeviajante.com/wp-content/uploads/2016/07/prosecco-1.jpg",
        nome: "Prosecco",
        descricao: "Espumante",
        preco: "12,50",
        qtd: 0,
    },
    {
        img: "https://conteudo.bblend.com.br/wp-content/uploads/2020/08/bebidasitalianas2-1536x1024.webp",
        nome: "Limoncello",
        descricao: "Licor de limão",
        preco: "17,90",
        qtd: 0,
    },
    {
        img:"https://www.melhoresdestinos.com.br/wp-content/uploads/2020/04/viagem-bebidas-mundo-tequila-mexico-820x547.jpg",
        nome: "Tequila",
        descricao: "the Rock",
        preco: "30,10",
        qtd: 0,
    }
]

const desserts = [
    {
        img: "https://www.topmelhores.com.br/imagens/post/193/750xNxpavlova.jpg.pagespeed.ic.325befcd73.jpg", 
        nome: "Pakhlava",
        descricao: "Derrete na boca",
        preco: "25,50",
        qtd: 0,
    },
    {
        img: "https://www.topmelhores.com.br/imagens/post/193/750xNxdadar-gulung.jpg.pagespeed.ic.5dac4cf7d5.jpg",
        nome: "Dadar Gulung",
        descricao: "panqueca",
        preco: "5,50",
        qtd: 0,
    },
    {
        img: "https://www.topmelhores.com.br/imagens/post/193/750xNxbolo-sacher.jpeg.pagespeed.ic.faea69fa04.jpeg",
        nome: "Bolo Sacher",
        descricao: "A melhor",
        preco: "10,50",
        qtd: 0,
    },
    {
        img: "https://www.topmelhores.com.br/imagens/post/193/750xNxbar-nanaimo-no-canad.jpg.pagespeed.ic.b4abac9cd4.jpg",
        nome: "Bar Nanaimo",
        descricao: "Três camadas",
        preco: "15,00",
        qtd: 0,
    }
]
export default function App () {
    const [ativado, setAtivado] = React.useState("desativado");
    const [mensagem, setMensagem] = React.useState("Selecione os 3 itens para fechar o pedido")
    const [escondido, setEscondido] = React.useState("");
    const [esconderEsconderPedido, setEsconderPedido] = React.useState("su-miu");

    function ativar () {
        const a = (!dishes.filter((dishe) => dishe.qtd !== 0).length === false);
        const b = (!drinks.filter((drink) => drink.qtd !== 0).length === false);
        const c = (!desserts.filter((dessert) => dessert.qtd !== 0).length === false);

        if(a && b && c){
            setAtivado("ativar");
            setMensagem("Fechar pedido");
        }
        else{
            setAtivado("desativado");
            setMensagem("Selecione os 3 itens para fechar o pedido");
        }
    }
    function esconder () {
        if(esconderEsconderPedido === "su-miu"){
            setEscondido("su-miu");
            setEsconderPedido("");
        }
        else{
            setEscondido("");
            setEsconderPedido("su-miu");
        }
    }
    return (
        <div>
            <Header />
            <div className={`conteudo ${escondido}`}>
                <p className="secao">Primeiro, seu prato</p>
                <Dishes  dishes={dishes} ativar={ativar}/>
                <p className="secao">Agora, sua bebida</p>
                <Drinks drinks={drinks} ativar={ativar}/>
                <p className="secao">Por fim, sua sobremessa</p>
                <Desserts desserts={desserts} ativar={ativar}/>
            </div>
            <Router>
                    <div className={`barra-fim-fixa ${escondido}`}>
                        <Link to="/revisar">
                            <div className={`texto ${ativado}`} onClick={()=>FazerPedido({esconder})}>
                                <p className="descricao">{mensagem}</p>
                            </div>
                        </Link>
                    </div>
                    <Switch>
                        <Route path="/revisar">
                            <Pedido esconder={esconder} dishes={dishes} drinks={drinks} desserts={desserts} total={total} esconderEsconderPedido={esconderEsconderPedido}/> 
                        </Route>
                    </Switch>
            </Router>
        </div>
    )
}

function FazerPedido ({esconder}) {
    esconder();
}

function total () {
    const dishesValue = dishes.reduce((total, dishe) => (total + (dishe.preco.replaceAll(',','.') * dishe.qtd)), 0);
    const drinksValue = drinks.reduce((total, drink) => (total + (drink.preco.replaceAll(',','.') * drink.qtd)), 0);
    const dessertsValue = desserts.reduce((total, dessert) => (total + (dessert.preco.replaceAll(',','.') * dessert.qtd)), 0);

    return (dishesValue + drinksValue + dessertsValue).toFixed(2).replaceAll('.',',');
}
