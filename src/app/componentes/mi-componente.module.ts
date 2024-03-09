import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasComponent } from './tablas/tablas.component';
import { IonicModule } from '@ionic/angular';
import { TablePipePipe } from '../pipes/table-pipe.pipe';



@NgModule({
  declarations: [TablasComponent,TablePipePipe],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[TablasComponent,TablePipePipe]
})
export class MiComponenteModule { }
