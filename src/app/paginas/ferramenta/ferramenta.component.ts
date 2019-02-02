import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FerramentasService} from '../../services/ferramentas.service'
import { FerramentasComponent } from '../ferramentas/ferramentas.component';



@Component({
  selector: 'cris-ferramenta',
  templateUrl: './ferramenta.component.html',
  styleUrls: ['./ferramenta.component.css']
})
export class FerramentaComponent implements OnInit {

  
  formulario: FormGroup
  public router: Router

  constructor(router: 
    Router, 
    private formBuilder: FormBuilder, 
    private ferramentaService: FerramentasService,
    private route: ActivatedRoute
  ) {
    this.router = router;
    
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: this.formBuilder.control('0', ),
      nome: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      tipo: this.formBuilder.control('', [Validators.required,Validators.minLength(5)])
    })
    this.route.params.subscribe(paramsId => {
      if (paramsId['id']) {
        this.get(paramsId['id'])
      }
    })

  }

  get(id: number) {
    this.ferramentaService.get(id)
      .subscribe(retorno => {
        
        this.formulario.controls['id'].setValue(retorno.id);
        this.formulario.controls['nome'].setValue(retorno.nome);
        this.formulario.controls['tipo'].setValue(retorno.diametro);
      }, err => {
        console.log("Erro ao Pegar Dados")
      })
  }
  salvar(formulario: FormGroup) {
    let ferramenta = {'nome':formulario.value.nome,'tipo':formulario.value.diametro}
    if (formulario.value.id == 0) {
    this.ferramentaService.save(ferramenta)
    .subscribe(retorno => {
    this.router.navigate(['/ferramentas'])
    }, err => {
    console.log("Erro ao Salvar Dados")
    })
  } else {
    this.ferramentaService.update(formulario.value.id, ferramenta)
      .subscribe(retorno => {
        this.router.navigate(['/ferramentas'])
      }, err => {
        console.log("Erro ao Salvar Dados")
      })
  }

    }
}

