import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})

export class NoComunesComponent {
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
    '=1': 'Um cliente chegou',
    'other': '# Clientes chegaram'
  }
  clientesVez = {
    '=0': 'Fila vazia',
    '=1': 'Cliente #',
  }


  combinarCliente(nome: string) {
    this.clientes.push(nome)
    this.nome = '';
    this.generoSelecionado = '';
  }

  vezAntendimento() {

  }

  deletarCliente() {
    this.clientes.shift();
  }
}

interface Genero {
  label: 'M' | 'F',
  value?: 'masculino' | 'feminino'
}