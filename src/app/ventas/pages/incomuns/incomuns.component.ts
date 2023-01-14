import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './incomuns.component.html',
  styleUrls: ['./incomuns.component.css']
})

export class IncomunsComponent {
  genero!: Genero[];
  generoSelecionado: string = ''

  constructor() {
    this.genero = [
      {
        label: 'M',
        value: 'masculino'
      },
      {
        label: 'F',
        value: 'feminino'
      },
    ]
  }


  //i18nSelect
  nome: string = '';
  invitationMap = {
    'masculino': 'vê-lo',
    'feminino': 'vê-la',
  }

  //i18nPlural
  clientes: string[] = [];
  clientesMap = {
    '=0': 'não temos nenhum cliente esperando',
    '=1': 'temos um cliente esperando',
    'other': 'temos # clientes esperando'
  }
  clientesFila = {
    '=0': 'não temos nenhum cliente',
    '=1': 'Um cliente',
    'other': '# clientes'
  }
  clientesVez = {
    '=0': 'Fila vazia',
    '=1': 'Cliente #',
  }


  adicionarCliente(nome: string) {
    this.clientes.push(nome)
    this.nome = '';
    this.generoSelecionado = '';
  }

  deletarCliente() {
    this.clientes.shift();
  }


  //KeyValue Pipe
  pessoa = {
    nome: 'Fernando',
    idade: 35,
    localizacao: 'Muqui, Brazil'
  }

  //JSON Pipe
  herois = [
    {
      nome: 'superman',
      voa: true,
    },
    {
      nome: 'Robin',
      voa: false,
    },
    {
      nome: 'Aquaman',
      voa: false,
    },
  ]

  //Async Pipe
  meuObservable = interval(1000); //0,1,2,3

  valorPromessa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fim da Promessa');
    }, 3500)
  })
}

interface Genero {
  label: 'M' | 'F',
  value?: 'masculino' | 'feminino'
}