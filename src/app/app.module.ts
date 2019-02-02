import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CrisRoutingModule } from './cris-routing.module';
import { HomeComponent } from './paginas/home/home.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { FerramentasComponent } from './paginas/ferramentas/ferramentas.component';
import { ServicosComponent } from './paginas/servicos/servicos.component';
import { Erro404Component } from './paginas/erro404/erro404.component';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { ClienteComponent } from './paginas/cliente/cliente.component';
import { ClientesService } from './services/clientes.service';
import { FerramentaComponent } from './paginas/ferramenta/ferramenta.component';
import { ServicoComponent } from './paginas/servico/servico.component';
import { CostureirasComponent } from './paginas/costureiras/costureiras.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ContatoComponent,
    FerramentasComponent,
    ServicosComponent,
    Erro404Component,
    ClientesComponent,
    ClienteComponent,
    FerramentaComponent,
    ServicoComponent,
    CostureirasComponent
  ],
  imports: [
    BrowserModule,
    CrisRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
