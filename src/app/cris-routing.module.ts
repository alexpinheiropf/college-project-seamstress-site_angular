import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { CostureirasComponent } from './paginas/costureiras/costureiras.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { FerramentasComponent } from './paginas/ferramentas/ferramentas.component';
import { FerramentaComponent } from './paginas/ferramenta/ferramenta.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { ServicoComponent } from './paginas/servico/servico.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { Erro404Component } from './paginas/erro404/erro404.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'costureiras', component: CostureirasComponent },
{ path: 'clientes', component: ClientesComponent },
{ path: 'cliente', component: ClienteComponent },
{ path: 'ferramentas', component: FerramentasComponent },
{ path: 'ferramenta', component: FerramentaComponent },
{ path: 'servicos', component: ServicosComponent },
{ path: 'servico', component: ServicoComponent },
{ path: 'contato', component: ContatoComponent },
{ path: '**', component: Erro404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
  })
export class CrisRoutingModule { }