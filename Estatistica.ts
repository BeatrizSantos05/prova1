export class Estatistica {
  private _numeros: number[];
  constructor(numeros) {
    this._numeros = numeros;
  }

  media() {
    const soma = this._numeros.reduce((acc, val) => acc + val, 0);
    return soma / this._numeros.length;
  }

  mediana() {
    const ordenados = [...this._numeros].sort((a, b) => a - b);
    const meio = Math.floor(ordenados.length / 2);
    if (ordenados.length % 2 === 0) {
      return (ordenados[meio - 1] + ordenados[meio]) / 2;
    } else {
      return ordenados[meio];
    }
  }

  moda() {
    const frequencias = new Map();
    this._numeros.forEach(num => {
      frequencias.set(num, (frequencias.get(num) || 0) + 1);
    });

    let moda = this._numeros[0];
    let maxFreq = frequencias.get(moda);

    for (let [num, freq] of frequencias) {
      if (freq > maxFreq) {
        moda = num;
        maxFreq = freq;
      }
    }

    return moda;
  }

  variancia() {
    const media = this.media();
    const somaQuadrados = this._numeros.reduce((acc, val) => acc + Math.pow(val - media, 2), 0);
    return somaQuadrados / this._numeros.length;
  }

  desvioPadrao() {
    return Math.sqrt(this.variancia());
  }

  coeficienteDeVariacao() {
    const media = this.media();
    if (media === 0) return 0;
    return (this.desvioPadrao() / media) * 100;
  }
}
