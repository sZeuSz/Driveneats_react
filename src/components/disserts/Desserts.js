import React from "react";

export default function Desserts ({desserts, ativar}) {

    return (
        <div class="sobremesas">
            {desserts.map((dessert, index) => <Dessert key={index} dessert={dessert} ativar={ativar}/>)}
        </div>
    )
}

function Dessert ({dessert, ativar}) {
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
    dessert.qtd = 0;
  }
  function plus () {
      console.log("aqui")
      setContador(contador + 1);
      dessert.qtd += 1;
      ativar();
  }
  function minus () {
    if(dessert.qtd === 1){
      deselecionar();
      setContador(() => contador - 1);
      dessert.qtd = 0;
    }
    else if(dessert.qtd > 0){
      setContador(() => contador - 1);
      dessert.qtd -= 1;
    }
    ativar();
  }
    return (
        <div class={`sobremesa ${selecionada}`} onClick={selecionar}>
                <img src={dessert.img} alt="imagem-da-sobremesa"/>
                <div class="informacoes">
                    <p class="nome-produto">{dessert.nome}</p>
                    <p class="descricao-produto">{dessert.descricao}</p>
                    <p class="preco">R$ {dessert.preco}</p>
                    <div className={`operations ${aparecer}`}> 
                    <div className="plus">
                        <ion-icon onClick={plus} name="add-outline"></ion-icon>
                    </div>   
                    <span className="contador">{dessert.qtd}</span>
                    <div className="minus">
                        <ion-icon onClick={minus}  name="remove-sharp"></ion-icon>
                    </div> 
                    </div>
                </div>
        </div>
    )
}