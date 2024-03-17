const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://images.tcdn.com.br/img/img_prod/814477/harley_davidson_sportster_xl_883_n_iron_2019_2019_preta_036_52808_5951_6_6cdd3f1fd7b73a4ddab1e131670dd1ef.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

// Прописываем классы
class Transport {
  constructor(type, price, brand, img) {
    this.type = type;
    this.price = price;
    this.brand = brand;
    this.img = img;
  }
  getInfo() {
    return {
      type: this.type,
      price: this.price,
      brand: this.brand,
    };
  }
  getPrice() {
    return this.price;
  }
}

class Car extends Transport {
  constructor(type, price, brand, img, doors) {
    super(type, price, brand, img);
    this.doors = doors;
  }
  getDoorsCount() {
    return this.doors;
  }
  getCarCard() {
    // создаем элементы для карточки товара
    let cardElem = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardTitle = document.createElement("h2");
    let cardPOne = document.createElement("p");
    let cardPTwo = document.createElement("p");

    // определяем вложенность элементов
    cardElem.append(cardImg, cardTitle, cardPOne, cardPTwo);

    // добавляем классы для стилизации
    cardElem.classList.add("card");
    cardImg.classList.add("card_img");
    cardTitle.classList.add("card_tittle");
    cardPOne.classList.add("card_text");
    cardPTwo.classList.add("card_text");

    // добавляем информацию
    cardTitle.textContent = this.brand;
    cardImg.src = this.img;
    cardPOne.textContent = `${this.price} руб.`;
    cardPTwo.textContent = `Количество дверей - ${this.doors}`;

    // добавляем карточку товара на страницу
    findContainer.append(cardElem);
  }
}

class Bike extends Transport {
  constructor(type, price, brand, img, maxSpeed) {
    super(type, price, brand, img);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
  getBikeCard() {
    // создаем элементы для карточки товара
    let cardElem = document.createElement("div");
    let cardImg = document.createElement("img");
    let cardTitle = document.createElement("h2");
    let cardPOne = document.createElement("p");
    let cardPTwo = document.createElement("p");

    // определяем вложенность элементов
    cardElem.append(cardImg, cardTitle, cardPOne, cardPTwo);

    // добавляем классы для стилизации
    cardElem.classList.add("card");
    cardImg.classList.add("card_img");
    cardTitle.classList.add("card_tittle");
    cardPOne.classList.add("card_text");
    cardPTwo.classList.add("card_text");

    // добавляем информацию
    cardTitle.textContent = this.brand;
    cardImg.src = this.img;
    cardPOne.textContent = `${this.price} руб.`;
    cardPTwo.textContent = `Максимальная скорось - ${this.maxSpeed}`;

    // добавляем карточку товара на страницу
    findContainer.append(cardElem);
  }
}
const findContainer = document.querySelector(".cards_container");
const tr = [];

data.forEach((transport) => {
  switch (transport.type) {
    case "car":
      const car = new Car(
        transport.type,
        transport.price,
        transport.brand,
        transport.image,
        transport.doors
      );
      car.getCarCard();
      tr.push(car);
      break;
    case "bike":
      const bike = new Bike(
        transport.type,
        transport.price,
        transport.brand,
        transport.image,
        transport.maxSpeed
      );
      bike.getBikeCard();
      tr.push(bike);
      break;
  }
});
