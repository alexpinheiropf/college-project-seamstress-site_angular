import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ClientesService } from '../../services/clientes.service'
import { ClientesComponent } from '../clientes/clientes.component';




@Component({
  selector: 'cris-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  formulario: FormGroup
  public router: Router


  constructor(
    router: Router,
    private formBuilder: FormBuilder,
    private clienteService: ClientesService,
    private route: ActivatedRoute

  ) {
    this.router = router;

  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)])
    })


    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })

  }

  get(id: number) {
    this.clienteService.get()
      .subscribe(retorno => {
        console.log(retorno)
        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }


  salvar(formulario: FormGroup) {
    let cliente = { 'nome': formulario.value.nome}
    if (formulario.value.id == 0) {

      this.clienteService.save(cliente)
        .subscribe(retorno => {
          this.router.navigate(['/clientes'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })
    } else {
      this.clienteService.update(formulario.value.id, cliente)
        .subscribe(retorno => {
          this.router.navigate(['/clientes'])
        }, err => {
          console.log("Erro ao Salvar Dados")
        })
    }

  }
}
