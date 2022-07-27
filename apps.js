import React, {Component} from 'react';


export default class Dados extends Component{
    state= {
        dados: [
            {nome:"Isaque",telefone:"21 98743-4890",cidade:"RJ",cpf:"143.345.678-76",idade:"45",Hobby:"Futebol"},
            {nome:"Kamila",telefone:"21 98897-6541",cidade: "RJ", cpf: "145.678.987-76", idade:"23",Hobby:"Maquiagem"},
            {nome:"Júlio",telefone:"21 98909-8545",cidade: "RJ", cpf: "154.678.490-87", idade:"27",Hobby:"Vôlei"}
        ]
    }
}
render(){
    return(
        <nav>
            {this.state.Dados.map((item) => (
                <ul>
                    <li>Clique aqui para ver o perfil do {item.nome}</li>
                </ul>
            ))}
        </nav>
    )
            }