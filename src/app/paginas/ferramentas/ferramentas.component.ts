import { Component, OnInit } from '@angular/core';
import {FerramentasService} from '../../services/ferramentas.service'
@Component({
  selector: 'cris-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: ['./ferramentas.component.css']
})
export class FerramentasComponent implements OnInit {
 listaFerramentas : any[] = []
 constructor(private ferramentaService: FerramentasService ) { }
 ngOnInit() {

    this.getList()
}
excluir(id: number) {
    this.ferramentaService.delete(id).subscribe(
        retorno => {
            this.getList()
        }
    )
}
getList() {
    this.ferramentaService.getList().subscribe(
        retorno => {
            this.listaFerramentas = retorno
        }
    )
}

}
