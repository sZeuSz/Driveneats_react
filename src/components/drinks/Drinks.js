import React from 'react'

export default function Drinks ({drinks, ativar}) {

    return (
      <div class="bebidas">
        {drinks.map((drink, index) => <Drink key={index} drink={drink} ativar={ativar}/>)}
      </div>
    )
}

function Drink ({drink, ativar}) {
  const [selecionada, setSelecionada] = React.useState("");
  const [aparecer, setAparecer] = React.useState("none");
  const [contador, setContador] = React.useState(0);

  function selecionar () {

    if(selecionada === ""){
      setSelecionada("selecionado");
      setAparecer("");
      plus();
      ativar();
    }
  }
  function deselecionar () {
    setSelecionada("");
    setAparecer("none");
    drink.qtd = 0;
  }
  function plus () {
    setContador(contador + 1);
    drink.qtd += 1;
    ativar();
  }
  function minus () {
    if(contador === 1){
      deselecionar();
      setContador(() => contador - 1);
      drink.qtd = 0;
    }
    else if(contador > 0){
      setContador(() => contador - 1);
      drink.qtd -= 1;
    }
    ativar();
  }
  return (
    <div class={`bebida ${selecionada}`} onClick={selecionar}>
      <img src={drink.img} alt="imagem-referente-ao-drink"/>
      <div class="informacoes">
        <p class="nome-produto"> {drink.nome} </p>
        <p class="descricao-produto">{drink.descricao}</p>
        <p class="preco">R$ {drink.preco}</p>
        <div className={`operations ${aparecer}`}> 
          <div className="plus">
              <ion-icon onClick={plus} name="add-outline"></ion-icon>
          </div>   
          <span className="contador">{contador}</span>
          <div className="minus">
              <ion-icon onClick={minus}  name="remove-sharp"></ion-icon>
          </div> 
        </div>
      </div>
    </div>
  )
} 