import React from "react";
import "./Pedido.css"

import { 
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function Pedido ({dishes, drinks, desserts, total, esconderEsconderPedido, esconder}) {
    return (
    <div className={esconderEsconderPedido}>
    <p className="secao-revisar">Revise seu pedido</p>
    <div className="confirmacao-pedido">
      <div className="itens">
        {dishes.filter((dishe) => dishe.qtd !== 0).map((dishe, index) => <RenderizarPedido pedido={dishe} total={total} key={index}/>)}
        {drinks.filter((drink) => drink.qtd !== 0).map((drink, index) => <RenderizarPedido pedido={drink} total={total} key={index}/>)}
        {desserts.filter((dessert) => dessert.qtd !== 0).map((dessert, index) => <RenderizarPedido pedido={dessert} total={total} key={index}/>)}
        <div className="preco-total nome-preco-tres aviso">
          <p>TOTAL</p>
          <p>R$ {total()}</p>
        </div>
      </div>
    </div>
    <div className="confirmar aviso" onClick={()=>Encaminhar(dishes, drinks, desserts, total)}>
        <p>Tudo certo, pode pedir!</p>
      </div>
      <Router>
          <Link to="/">
            <div className="cancelar confirmar">
              <p onClick={esconder}>Cancelar</p>
            </div>
          </Link>
      </Router>
    </div>
    )
}

function RenderizarPedido ({pedido}) {
    return (
        <div className="nome-preco-um preco">
          <p className="flango">{pedido.nome} {(pedido.qtd > 1) ? `(${pedido.qtd}x)` : ``}</p>
          <p>{pedido.preco}</p>
        </div>
    )
}

function Encaminhar(dishes, drinks, desserts, total){
  let nome = prompt("Insira o seu lindo nome:");
  let endereco = prompt("Insira seu endereço:");

  let nameDishes = dishes.filter((dishe) => dishe.qtd !== 0).map((dishe) => ` - ${dishe.nome} - ${dishe.qtd}\n`);
  let nameDrinks = drinks.filter((drink) => drink.qtd !== 0).map((drink) => ` - ${drink.nome} - ${drink.qtd}\n`);
  let nameDesserts = desserts.filter((dessert) => dessert.qtd !== 0).map((dessert) => ` - ${dessert.nome} - ${dessert.qtd}\n`);        

  let mensagem_padrão = `Olá, gostaria de fazer o pedido:\n-` +` Prato(s): ${nameDishes}` + `\n- Bebida(s): ${nameDrinks}` + `\n- Sobremesa(s): ${nameDesserts}` + `\nTotal: R$ ` + total() + `\n\nNome: ` + nome + `\nEndereço: ` + endereco;
  
  window.location.href = "https://wa.me/5592994484328?text=" + encodeURIComponent(mensagem_padrão);
}
