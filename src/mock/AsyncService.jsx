const products = [
    {
      id:'01',
      name: 'Caroya',
      price: 750,
      description: 'Ofrece un atractivo color rojo rubí con tintes negros y un aroma intenso y frutado, destacando notas de frutos rojos como frambuesa y cereza.',
      stock: 15,
      category: 'Caroyense',
      img: '../Caroya-Malbec.jpg',
    },
    {
      id:'02',
      name: 'Paso Viejo',
      price: 1000,
      description: 'De color rojo púrpura, con matices rubí y aromas reminiscentes a pequeños frutos rojos como frambuesas, grosellas y ciruelas',
      stock: 5,
      category: 'Caroyense',
      img: '../PasoViejo-Cabernet.jpg',
    },
    {
      id:'03',
      name: 'Noble Malbec',
      price: 2300,
      description: 'En nariz fruta roja madura y hierbas como tomillo y orégano que hace prevalecer un perfil aromático muy fresco. En boca con mucho sabor, taninos muy redondos, fresco y con una persistencia media.',
      stock: 35,
      category: 'Noble',
      img: '../Malbec.jpg',
    },
    {
      id:'04',
      name: 'Noble Merlot',
      price: 2675,
      description: 'Color rojo intenso con destellos violáceos. Sus aromas recuerdan a pimiento dulce, coco, tabaco y frutas rojas. En boca es suave, aterciopelado, de sabores especiados y taninos dulces.',
      stock: 10,
      category: 'Noble',
      img: '../Merlot.jpg',
    },
    {
        id:'05',
        name: 'Viarago',
        price: 850,
        description: 'Se destaca por ser un varietal 100% Malbec, que ha tenido una crianza en barricas de roble por 12 meses.',
        stock: 10,
        category: 'Viarago',
        img: '../Viarago-MalbecRoble.jpg',
      },
      {
        id:'06',
        name: 'Viarago Blend',
        price: 1150,
        description: 'Es un vino premium que se caracteriza por su mezcla exclusiva de variedades, ofreciendo un sabor profundo y sofisticado, ideal para ocasiones especiales.',
        stock: 10,
        category: 'Viarago',
        img: '../Viaragoblend.jpg',
      },
      {
        id:'07',
        name: 'Isabella',
        price: 1150,
        description: 'Es un vino exótico y refrescante, elaborado con la variedad de uva americana Isabella.',
        stock: 10,
        category: 'Terra',
        img: '../Isabella.jpg',
      },
      {
        id:'08',
        name: 'Navira Malbec',
        price: 1900,
        description:'De color rojo rubí profundo, en aroma se perciben notas de mermeladas de frutos rojos, especias y frutos silvestres. En boca es joven, vivaz y frutado, de persistencia media.',
        stock: 10,
        category: 'Terra',
        img: '../Navira-Malbec.jpg',
      },
  ]
  
  // promesa para simular una llamada a una API  
  export const getProducts = () => {
      return new Promise((resolve, reject) => {
          let error = false
          setTimeout(() =>{
              if (error) {
                  reject('No se encontraron productos')
              } else {
                  resolve(products)
              }
          },2500)
      })
  }
  //promesa para llamar un solo producto
  export const getOneProducts = (id) => {
    return new Promise ((resolve) => {
      let productFound = products.find((product) => product.id === id)
      setTimeout(() => {
        resolve(productFound)
      }, 1500)
    })
  }

