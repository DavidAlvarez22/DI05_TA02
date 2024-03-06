import { environment } from 'src/environments/environment';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  @ViewChild('contaniner') contaniner !:ElementRef;
  
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  generarPDF() {
    //Ancho en px de A4
    const anchoMax = 794;
    //Alto en px de A4
    const altoMax = 1123;
    const doc = new jsPDF({
      orientation: 'portrait', //Orientación normal
      unit: 'px', //En este caso como unidades utilizamos px, pero podríamos poner cm,mm,em,pt,...
      //mm -> [210, 297] para A4
      format: [anchoMax,altoMax]
    });
    // Agregar el contenido HTML al PDF
    const content = this.contaniner.nativeElement.querySelector('.dasboard-content') as HTMLElement
    
    content.style.maxWidth = anchoMax+"px";
    //const content = document.getElementById('container') as HTMLElement;
    doc.html(content, {
      callback: (pdf) => {
        // Guardar el PDF o mostrarlo en el navegador
        pdf.save('Dashboard.pdf');
        content.style.maxWidth = "100%";
      }
    });
  }

}
