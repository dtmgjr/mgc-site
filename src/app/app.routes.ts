import { Routes, provideRoutes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';
import { HomeConteudoComponent } from './home-conteudo/home-conteudo.component';
import { HeaderComponent } from './header/header.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ServicosComponent } from './servicos/servicos.component';
import { Erro404Component } from './erro404/erro404.component';
import { EmpreendimentoComponent } from './empreendimento/empreendimento.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { VendaTerrenoComponent } from './venda-terreno/venda-terreno.component';
import { SacComponent } from './sac/sac.component';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },

    { path: 'empreendimento/:id', component: EmpreendimentoComponent },

    { path: 'quem-somos', component: QuemSomosComponent },

    { path: 'promocoes', component: PromocoesComponent },

    { path: 'portifolio', component: PortifolioComponent },

    { path: 'servicos', component: ServicosComponent },

    { path: 'seja-um-fornecedor', component: FornecedorComponent },
    { path: 'venda-seu-terreno', component: VendaTerrenoComponent },
    { path: 'trabalhe-conosco', component: TrabalheConoscoComponent },
    { path: 'sac', component: SacComponent },
    { path: 'fale-conosco', component: FaleConoscoComponent },

    { path: '**', component: Erro404Component }
];

export const myRoutes = [
    provideRoutes(ROUTES)
];
