export class Snack {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }



  get ListTemplate() {
    return `
          <div class="card col-4">
        <div class="card-body">
          <img class="img-fluid" src="${this.imgUrl}" alt="">
          <h4 class="text-uppercase text-center no-select">
            ${this.name}
          </h4>
          <button class="btn btn-outline-dark square-top" onclick="buySnacks()">
            BUY ${this.name}
          </button>
          <p>$${this.price}</p>
        </div>
      </div>`
  }
}

