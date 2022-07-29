import React, {Component} from 'react';


export default class Beterraba extends Component{
  state= {
    cadastro: [
{nome:'Isaque',idade:24,time:'Flamengo',signo:'capricórnio',estado:'RJ',comidaFavorita:'bife com batata frita',hobby:'futebol' }
    ]
  }

        render() {
return(
  <nav>
    {this.state.cadastro.map((item) =>(
<ul>
  <li>Clique aqui para ver o perfil do {item.nome}</li>
  <li>Ele tem {item.idade}anos de idade e torce para o {item.time}</li>
  <li>E o seu signo é {item.signo} mora no estado do {item.estado}</li>
  <li>Sua comida favotira é {item.comidaFavorita}</li>
</ul>
    ))}
  </nav>
)
    }
  }