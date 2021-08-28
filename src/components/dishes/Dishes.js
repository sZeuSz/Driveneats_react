import React from 'react'
import './Dishes.css'

const dishes = [
    {
        img: "https://www.queroviajarmais.com/wp-content/webp-express/webp-images/uploads/2019/03/comidas-da-franca-croissant.jpg.webp",
        nome: "Croissant",
        descricao: "pão.",
        preco: "29,90",
    }
]
export default function Dishes () {

    return (
        <div class="pratos">
            <div class="prato" onclick="calc();" id="pta">
                  <img src=""/>
                  <div class="informacoes">
                    <p class="nome-produto">Croissant</p>
                    <p class="descricao-produto">pão.</p>
                    <p class="preco">R$ 29,90</p>
                    <ion-icon class="check" name="checkmark-circle-sharp"></ion-icon>
                </div>
            </div>
        </div>
    )
}