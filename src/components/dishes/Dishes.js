import React from 'react'
 
export default function Dishes ({dishes, ativar}) {
    return (    
        <div class="pratos">
            {dishes.map((dishe, index) => <Dishe key={index} dishe={dishe} ativar={ativar}/>)}
        </div>
    )
}
function Dishe ({dishe, ativar}) {
    const [selecionado, setSelecionado] = React.useState("");
    const [aparecer, setAparecer] = React.useState("none");
    const [contador, setContador] = React.useState(0);
    {console.log(dishe.qtd)}

    function selecionar() {
        if (selecionado === "") {
          setSelecionado("selecionado");
          setAparecer("");
          plus();
          ativar();
        }
    }
    function deselecionar () {
        setSelecionado("");
        setAparecer("none");
        
    }
    function plus(){
        setContador(contador + 1);
        dishe.qtd += 1;
        ativar();
    }
    function minus(){
        if(contador === 1){
            deselecionar();
            setContador(() => contador - 1);
            dishe.qtd = 0;            
        }
        else if(contador > 0){
            setContador(() => contador - 1);
            dishe.qtd -= 1;
        }
        ativar();
    }
    return (
        <div className={`prato ${selecionado}`} onClick={selecionar}>
            <img src={dishe.img} alt="img-croissant"/>
            <div className="informacoes">
                <p className="nome-produto">{dishe.nome}</p>
                <p className="descricao-produto">{dishe.descricao}</p>
                <p className="preco">R$ {dishe.preco}</p>
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