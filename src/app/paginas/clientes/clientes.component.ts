import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../services/clientes.service'

@Component({
  selector: 'cris-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  listaClientes : any[] = []

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.clienteService.get().subscribe(retorno => {
      this.listaClientes = retorno
      })
  }
}