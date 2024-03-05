import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  constructor(private el: ElementRef) { }

  private repeatedFunctionTimeout: any;
  incremento: number = 0;

  ngOnInit(): void {
    this.startRepeatedFunction();
  }


  private startRepeatedFunction(): void {
    // Define la función que deseas repetir

    

    const repeatedFunction = () => {

      if(this.incremento > 3){
        this.incremento = 0;
      }

      console.log('Esta función se repetirá cada segundo ' + this.incremento);
      
      const nextButton = this.el.nativeElement.querySelector(`.slide-control.next.control-${this.incremento++}`) as HTMLLabelElement;
      if (nextButton) {
        // alert(this.incremento)
        nextButton.click();
      }
      // Agrega aquí la lógica de tu función
      this.repeatedFunctionTimeout = setTimeout(repeatedFunction, 3000); // Ajusta según tus necesidades
    };

    // Inicia la primera ejecución
    this.repeatedFunctionTimeout = setTimeout(repeatedFunction, 0);
  }

}
