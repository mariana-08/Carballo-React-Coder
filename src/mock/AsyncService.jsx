export const products = [    
    {
      name: 'Paso Viejo',
      price: 1000,
      description: 'De color rojo púrpura, con matices rubí y aromas reminiscentes a pequeños frutos rojos como frambuesas, grosellas y ciruelas',
      stock: 5,
      category: 'caroyense',
      img: '../PasoViejo-Cabernet.jpg',
    },
    {
      name: 'Noble Malbec',
      price: 2300,
      description: 'En nariz fruta roja madura y hierbas como tomillo y orégano que hace prevalecer un perfil aromático muy fresco. ',
      stock: 35,
      category: 'noble',
      img: '../Malbec.jpg',
    },
    {
      name: 'Noble Merlot',
      price: 2675,
      description: 'Color rojo intenso con destellos violáceos. Sus aromas recuerdan a pimiento dulce, coco, tabaco y frutas rojas. ',
      stock: 10,
      category: 'noble',
      img: '../Merlot.jpg',
    },
    {
        name: 'Viarago',
        price: 850,
        description: 'Se destaca por ser un varietal 100% Malbec, que ha tenido una crianza en barricas de roble por 12 meses.',
        stock: 10,
        category: 'viarago',
        img: '../Viarago-MalbecRoble.jpg',
      },
      {
        name: 'Viarago Blend',
        price: 1150,
        description: 'Es un vino que se caracteriza por su mezcla exclusiva de variedades, ofreciendo un sabor profundo y sofisticado.',
        stock: 10,
        category: 'viarago',
        img: '../Viaragoblend.jpg',
      },
      {
        name: 'Isabella',
        price: 1150,
        description: 'Es un vino exótico y refrescante, elaborado con la variedad de uva americana Isabella.',
        stock: 10,
        category: 'terra',
        img: '../Isabella.jpg',
      },
      {
        name: 'Navira Malbec',
        price: 1900,
        description:'De color rojo rubí profundo, en aroma se perciben notas de mermeladas de frutos rojos, especias y frutos silvestres.',
        stock: 10,
        category: 'terra',
        img: '../Navira-Malbec.jpg',
      },
  ]
  
  // promesa para simular una llamada a una API  al princio lo tenia con 2500ms pero lo baje a 10ms para no esperar tanto
  export const getProducts = () => {
      return new Promise((resolve, reject) => {
          let error = false
          setTimeout(() =>{
              if (error) {
                  reject('No se encontraron productos')
              } else {
                  resolve(products)
              }
          }, 2000)
      })
  }
  //promesa para llamar un solo producto
  export const getOneProducts = (id) => {
    return new Promise ((resolve) => {
      let productFound = products.find((product) => product.id === id)
      setTimeout(() => {
        resolve(productFound)
      }, 2000)
    })
  }

