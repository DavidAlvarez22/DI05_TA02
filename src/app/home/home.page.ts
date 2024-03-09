import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
   @ViewChild('container') container!: ElementRef;

   datosTablaTab1 = [
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 },
    { nombre: 'Juan', apellido: 'garcia', pais: "españa", edad: 30 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'María', apellido: 'perez', pais: "portugal", edad: 25 },
    { nombre: 'Pedro', apellido: 'ruiz', pais: "españa", edad: 40 }
  ];

  datosLista = [
    "Esta será la línea 1 de la lista, vamos a poner un texto muy largo para ver qué es lo que hace en estos casos y como podemos corregirlo",
    "Esta será la línea 2 de la lista, será más corta que la anterior, pero entrará bastante justo en el ancho A4.",
    "Esta será la línea 3 de la lista, este entra bien",
    "Esta será la línea 4 de la lista, este entra bien",
    "Esta será la línea 5 de la lista, este entra bien",
    "Esta será la línea 6 de la lista, este entra bien",
    "Esta será la línea 7 de la lista, este entra bien",
    "Esta será la línea 8 de la lista, este entra bien",
    "Esta será la línea 9 de la lista, este entra bien",
    "Esta será la línea 10 de la lista, este entra bien",
    "Esta será la línea 11 de la lista, este entra bien",
    "Esta será la línea 12 de la lista, este entra bien",
    "Esta será la línea 13 de la lista, este entra bien",
    "Esta será la línea 14 de la lista, este entra bien",
    "Esta será la línea 15 de la lista, este entra bien",
    "Esta será la línea 16 de la lista, este entra bien",
    "Esta será la línea 17 de la lista, este entra bien",
    "Esta será la línea 18 de la lista, este entra bien",
    "Esta será la línea 19 de la lista, este entra bien",
    "Esta será la línea 20 de la lista, este entra bien",
  ]
  constructor() {}
  
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


    /*// Agregar el contenido HTML al PDF
    const content = this.container.nativeElement.querySelector('.dashboard-content') as HTMLElement;

    content.style.maxWidth = anchoMax+"px";
    //const content = document.getElementById('container') as HTMLElement;
    doc.html(content, {
      callback: (pdf) => {
        // Guardar el PDF o mostrarlo en el navegador
        pdf.save('Dashboard.pdf');
        content.style.maxWidth = "100%";
      }
    });*/

     /* querySelectorAll: Cogemos todos los selectores que tengan class="seccion" y creamos un NodeListOf de HTMLElement.
     * NodeListOf, es un array que contendrá nodos de DOM, en este caso, es un array de HTMLElement.
     */
     const sections = this.container.nativeElement.querySelectorAll('.seccion') as NodeListOf<HTMLElement>;
     // El total de secciones que tenemos en nuestro html
     const totalSections = sections.length;
     //Gestionará la sección que estamos analizando
     let currentSectionIndex = 0;
     //Controlará que se hayan creado todas las imagenes antes de crear el PDF. En caso contrario imprimiría un pdf por cada sección.
     let contSections = 0;
     //Definimos de que height queremos que empiece a dibujar nuestro PDF.
     //let currentPageHeight = 0;

      //Gestionará el height de la página actual
      let headerHeight = 55; //Altura que tendrá el header
      let footerHeight = 20; //Altura que tendrá el footer
      let currentPageHeight = headerHeight; //Inicializamos con la altura de headerHeight

    while (currentSectionIndex < totalSections) {
      const section = sections[currentSectionIndex];
      html2canvas(section).then(canvas => {
        const imageData = canvas.toDataURL('image/jpg');
        const width = doc.internal.pageSize.getWidth();
        /*Se calcula el height dependiendo del width del canvas y su relación con el width. 
         *Esto se hace para que la imagen mantenga dimensiones proporcionales según el width de la página.
         */
        const height = canvas.height * (width / canvas.width);
       
        if (currentPageHeight + height >= doc.internal.pageSize.getHeight()) {
          doc.addPage();
          currentPageHeight = 0;
          //currentPageHeight = headerHeight + footerHeight;
          //this.addPageConfig(doc);
        }
        //this.addPageConfig(doc);
        doc.addImage(imageData, 'JPG', 0, currentPageHeight, width, height);
        currentPageHeight += height;
        contSections++;
        if (contSections === totalSections) {
          //Al final asignamos el header y footer a todas las páginas
          this.encabezado(doc);
          this.footer(doc);
        
          doc.save('dashboard.pdf');
        }
      });
      //Sumamos 1, para que el bucle realice todas las peticiones, una por cada sección
      currentSectionIndex++;
    } 
  }
  addPageConfig(doc:jsPDF) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // Añadimos la págin
      doc.setPage(i);
      // Calculamos el centro de la página
      const pageWidth = doc.internal.pageSize.width;
      //const pageHeight = doc.internal.pageSize.height;
      //const centerX = pageWidth / 2;
      //const centerY = pageHeight / 2;
      
      // Añadimos un rectángulo gris como fondo del encabezado
      doc.setFillColor(200, 200, 200); // Color gris
      doc.rect(0, 0, pageWidth, 55, 'F'); // Tamaño y posición del rectángulo


      // Añadimos el logotipo, sus valores y posición
      const imagen = "/assets/icon/favicon.png";
      const imgWidth = 45; // Ancho de la imagen
      const imgHeight = 45; // Alto de la imagen

      // Calculamos las coordenadas para centrar la imagen
      const imgX = (pageWidth - imgWidth) / 2;
      //const imgX = centerX - (imgWidth / 2);
      //const imgY = centerY - (imgHeight / 2);
      //const imgX = 5; // Posición X de la imagen
      const imgY = 5; // Posición Y de la imagen

      doc.addImage(imagen, "JPG", imgX, imgY, imgWidth, imgHeight);
      // Le asignamos un tamaño a las letras
      doc.setFontSize(10);
      doc.line(0, 55, doc.internal.pageSize.width, 55);
      // Añadimos información de la empresa
      const nombreEmpresa = "Nombre de la Empresa";
      const telefono = "Teléfono: 123-456-789";
      const direccion = "Dirección: Calle Principal, 123";
      const texto = nombreEmpresa+'\n'+telefono+'\n'+direccion;
      doc.text(texto,20, 10, {baseline:'bottom'});
      // Añadimos la paginación
      doc.text("Página "+i, doc.internal.pageSize.width - 100, doc.internal.pageSize.height - 10, {baseline:'bottom'});
    }
  }

  encabezado(doc:jsPDF) {
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // Añadimos la págin
      doc.setPage(i);
      // Calculamos el centro de la página
      const pageWidth = doc.internal.pageSize.width;
            
      // Añadimos un rectángulo gris como fondo del encabezado
      doc.setFillColor(200, 200, 200); // Color gris
      doc.rect(0, 0, pageWidth, 55, 'F'); // Tamaño y posición del rectángulo


      // Añadimos el logotipo, sus valores y posición
      const imagen = "/assets/icon/favicon.png";
      const imgWidth = 45; // Ancho de la imagen
      const imgHeight = 45; // Alto de la imagen

      // Calculamos las coordenadas para centrar la imagen
      const imgX = (pageWidth - imgWidth) / 2;
      const imgY = 5; // Posición Y de la imagen

      doc.addImage(imagen, "JPG", imgX, imgY, imgWidth, imgHeight);
      // Le asignamos un tamaño a las letras
      doc.setFontSize(10);
      doc.line(0, 55, doc.internal.pageSize.width, 55);
      // Añadimos información de la empresa
      const nombreEmpresa = "Nombre de la Empresa";
      const telefono = "Teléfono: 123-456-789";
      const direccion = "Dirección: Calle Principal, 123";
      const texto = nombreEmpresa+'\n'+telefono+'\n'+direccion;
      doc.text(texto,20, 10, {baseline:'bottom'});
      
    }
  }
  footer(doc:jsPDF){
    for (let i = 1; i <= doc.getNumberOfPages(); i++) {
      // Añadimos la págin
      doc.setPage(i);

      const pageWidth = doc.internal.pageSize.width;
      const pageHeight = doc.internal.pageSize.height;
      const rectHeight = 20; // Altura del rectángulo
      const rectY = pageHeight - rectHeight; // Coordenada Y del rectángulo
      doc.setFillColor(200, 200, 200); // Color gris
      doc.rect(0, rectY, pageWidth, rectHeight, 'F'); // Tamaño y posición del rectángulo

      const totalPages = doc.getNumberOfPages();
      const footerText = `Página ${i} de ${totalPages}`;
    doc.text(footerText, doc.internal.pageSize.width /2, doc.internal.pageSize.height - 10, {baseline:'bottom'});
  }
}
}
