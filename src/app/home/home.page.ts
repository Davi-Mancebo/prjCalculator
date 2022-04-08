import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor = 0;
  sorteando = false;
  sorteado = false;
  cor = true;
  nome1 = '';
  nome2 = '';
  msg = '';


  url = 'http://lucasreno.kinghost.net/love-calculator/';
  constructor(private http: HttpClient) { }

  async rolar() {
    this.cor = false;

    let soma = 0;
    // eslint-disable-next-line eqeqeq
    while (soma != 30) {
      this.sorteado = false;
      this.sorteando = true;
      this.valor = Math.floor(Math.random() * 100 + 1);
      soma += 1;
      await this.delay(50);
      this.valor = 0;
      console.log(this.valor);

    }

    this.http.get<any>(`${this.url}${this.nome1}/${this.nome2}`).subscribe(
      (serveResp) => {
        this.valor = serveResp;
        console.log("Resposta do servidor: " + serveResp);
        if (this.valor < 20) {
          this.msg = 'Nem tente não vale apena amigão/amigona';
        } else if (this.valor > 20 && this.valor < 40) {
          this.msg = 'aiai, vai ser dificil mas tenta ae';
        } else if (this.valor > 40 && this.valor < 60) {
          this.msg = 'não desista soldado(a) ele/ela gosta ou está gostando de você';
        } else if (this.valor > 60 && this.valor < 80) {
          this.msg = 'olha, eu acho que você está proximo de um possivel amor verdadeiro';
        } else {
          this.msg = 'iiiiiiih meteu essa? ela ou ele te ama, não perde tempo vocês nasceram um pro outro!!!';
        }

        this.sorteando = false;
        this.sorteado = true;
      }
    );




  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


