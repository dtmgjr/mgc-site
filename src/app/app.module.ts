import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ROUTES } from './app.routes';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { SlideComponent } from './gallery/slide/slide.component';

import { SlidesService } from './gallery/slides.service';

import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { TextMaskModule } from 'angular2-text-mask';
import { HomeConteudoComponent } from './home-conteudo/home-conteudo.component';
import { FiltroComponent } from './home-conteudo/filtro/filtro.component';
import { RodapeComponent } from './rodape/rodape.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ServicosComponent } from './servicos/servicos.component';
import { Erro404Component } from './erro404/erro404.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { EmpreendimentoComponent } from './empreendimento/empreendimento.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { VendaTerrenoComponent } from './venda-terreno/venda-terreno.component';
import { SacComponent } from './sac/sac.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { ImagesFotosComponent } from './empreendimento/images-fotos/images-fotos.component';
import { PlantasComponent } from './empreendimento/plantas/plantas.component';
import { MapaComponent } from './empreendimento/mapa/mapa.component';
import { EstagioComponent } from './empreendimento/estagio/estagio.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ModalComponent } from './empreendimento/modal/modal.component';
import { GalleryEmpreendimentoComponent } from './empreendimento/gallery-empreendimento/gallery-empreendimento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GalleryComponent,
    OndeEstamosComponent,
    FaleConoscoComponent,
    SlideComponent,
    HomeConteudoComponent,
    FiltroComponent,
    RodapeComponent,
    QuemSomosComponent,
    PromocoesComponent,
    PortifolioComponent,
    ServicosComponent,
    Erro404Component,
    JumbotronComponent,
    EmpreendimentoComponent,
    FornecedorComponent,
    VendaTerrenoComponent,
    SacComponent,
    TrabalheConoscoComponent,
    ImagesFotosComponent,
    PlantasComponent,
    MapaComponent,
    EstagioComponent,
    ModalComponent,
    GalleryEmpreendimentoComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TextMaskModule,
    NgbModule.forRoot(),
    SharedModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true }),
    OwlModule
  ],

  providers: [SlidesService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule { }
