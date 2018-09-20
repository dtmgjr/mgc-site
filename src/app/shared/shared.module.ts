import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputComponent } from './input/input.component';
import { FaleConoscoService } from "../fale-conosco/fale-conosco.service";

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@NgModule({
    declarations: [ InputComponent ],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ FaleConoscoService, Ng4LoadingSpinnerService ]
        };
    }
}
