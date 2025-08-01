import {Component, OnInit, OnDestroy, DoCheck} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-immagine-property-binding',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './immagine-property-binding.component.html',
  styleUrls: ['./immagine-property-binding.component.css'],
})
export class ImmaginePropertyBindingComponent implements OnInit, DoCheck, OnDestroy {
  // Definizione delle immagini
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIizj-yKMa30aivqh1AFZ3YLdMf-VSphh8mg&s';
  image2 = 'https://img.freepik.com/vettori-gratuito/la-luna-piena-del-paesaggio-dell-oceano-notturno-e-le-stelle-brillano_107791-7397.jpg?semt=ais_hybrid&w=740';
  image = this.image1; // Impostazione iniziale dell'immagine

  private intervalId!: any; // ID dell'intervallo per poterlo distruggere successivamente

  constructor() {
    console.log("costruttore");
  }

  ngDoCheck(): void {
        console.log("DoCheck")
    }

  ngOnInit(): void {
    console.log("OnInit");
    console.log("Valore iniziale di image: ", this.image); // Debug

    // Iniziare a cambiare immagine a intervalli regolari
    this.intervalId = setInterval(() => {
      this.image = this.image === this.image1 ? this.image2 : this.image1;
      console.log("Valore di image: ", this.image);
    }, 6000); // Cambia immagine ogni 2 secondi
  }

  ngOnDestroy(): void {
    // Clear dell'intervallo quando il componente viene distrutto
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

