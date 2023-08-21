import Pixel7a from "./images/Pixel7a.jpeg"
import pixel7 from "./images/pixel7.jpg";
import pixel7pro from "./images/pixel7pro.jpg";
import S23Ultra from "./images/S23Ultra.png";
import flip5 from "./images/flip5.webp";
import fold5 from "./images/fold5.webp";
import iphone14 from "./images/iphone14.jpg";
import iphone14pro from "./images/iphone14pro.jpg";
import iphone14promax from "./images/iphone14promax.jpg";
import edge30fusion from "./images/edge30fusion.png";
import edge40fusion from "./images/edge40fusion.jpg";
import razr40ultra from "./images/razr40ultra.png";



export const product = [
    {
        id: "1",
        name: "Google Pixel 7A",
        price: 450,
        category: "Pixel",
        img: Pixel7a,
        stock: 10,
        description: "El Google Pixel 7a estrena un nuevo módulo de cámaras fotográficas en la parte trasera que incluye un sensor principal de 64 megapíxeles de resolución (el más grande que ha incorporado hasta la fecha el fabricante a sus terminales) y otro ultra gran angular de 13 megapíxeles con un campo de visión de 120º."
      },
    {
        id: "2",
        name: "Google Pixel 7",
        price: 700, 
        category: "Pixel",
        img:  pixel7,
        stock: 10,
        description: "A simple vista y especialmente por la parte delantera, no apreciaremos fácilmente que el Pixel 7 es un 7 y no un Pixel 6. Sin embargo, sí que encontramos un cambio estético en la trasera al ver la doble cámara bien diferenciada en un módulo de cámara de aluminio con un tono más claro que el negro utilizado en la generación anterior.",

    },
    {
        id: "3",
        name: "Google Pixel 7Pro",
        price: 900, 
        category: "Pixel",
        img: pixel7pro,
        stock: 10,
        description: "El Pixel 7 Pro es una de las grandes esperanzas para la gama alta en 2022. Sobre el papel tiene de todo, pero a un precio más bajo que su competencia más directa. Un gama super alta por menos de 1.000 euros, con una de las mejores cámaras del mercado y una apuesta en software difícil de mejorar en Android",

    },
    {
        id: "4",
        name: "Samsung Galaxy S23 Ultra",
        price: 1300, 
        category: "Samsung",
        img: S23Ultra,
        stock: 10,
        description: "Por el diseño del Samsung Galaxy S23 Ultra intentaremos pasar con cierta ligereza, ya que es prácticamente idéntico a lo que vimos la generación pasada. Samsung rompió con los módulos de cámara con el S22 Ultra para abrazar un diseño más minimalista en el que las cámaras sobresalen del cuerpo.",

    },
    {
        id: "5",
        name: "Samsung Z Flip 5",
        price: 1200, 
        category: "Samsung",
        img: flip5,
        stock: 10,
        description: "Me encanta ver anime en un panel así, pero realmente cualquier contenido se ve genial (teniendo en cuenta que las pieles tienen un puntito anaranjado algo más subido de la cuenta debido a la saturación y, como digo, si ves el contenido en un ángulo recto o casi de 90 grados, no tendrás problema con la arruga.",

    },
    {
        id: "6",
        name: "Samsung Z Fold 5",
        price: 1400, 
        category: "Samsung",
        img: fold5,
        stock: 10,
        description: "Samsung lleva marcando el ritmo de los móviles plegables desde el primer Samsung Galaxy Fold, es la principal marca de este segmento de productos, la que más ha innovado en paneles AMOLED flexibles y, por extensión, el primer fabricante que se nos viene a la cabeza cuando pensamos en ese factor forma: teléfonos que duplican su tamaño original a fuerza de desdoblarse. Por eso no resulta extraño que los Samsung Galaxy Z Fold5 y Samsung Galaxy Z Flip5 estén llamados a protagonizar 2023: tienen el podio plegable garantizado. Y no sólo ese podio.",

    },
    {
        id: "7",
        name: "Iphone 14",
        price: 1000, 
        category: "Iphone",
        img: iphone14,
        stock: 10,
        description: "El iPhone 14 viene con el sistema de dos cámaras más impresionante en un iPhone, para que tomes fotos espectaculares con mucha o poca luz. Y te da más tranquilidad gracias a una funcionalidad de seguridad que salva vidas.",

    },
    {
        id: "8",
        name: "Iphone 14 Pro",
        price: 1200, 
        category: "Iphone",
        img: iphone14pro,
        stock: 10,
        description: "El iPhone 14 Pro te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP. Además, trae la Dynamic Island y una pantalla siempre activa, para que puedas interactuar con tu iPhone de una forma completamente nueva. ",

    },
    {
        id: "9",
        name: "Iphone 14 ProMax",
        price: 1500, 
        category: "Iphone",
        img: iphone14promax,
        stock: 10,
        description: "Teléfono inteligente Apple iPhone 14 Pro Max. Anunciado en septiembre de 2022. Cuenta con pantalla de 6.7″, chipset Apple A16 Bionic, batería de 4323 mAh, almacenamiento de 1024 GB, 6 GB de RAM, vidrio Ceramic Shield.",

    },
    {
        id: "10",
        name: "Motorola Edge 30 Fusion",
        price: 800, 
        category: "Motorola",
        img: edge30fusion,
        stock: 10,
        description: "Con su potente procesador y memoria RAM de 12 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.",

    },
    {
        id: "11",
        name: "Motorola Edge 40 Fusion",
        price: 1100, 
        category: "Motorola",
        img: edge40fusion,
        stock: 10,
        description: "El Motorola Edge 40 ha reducido ligeramente sus dimensiones para convertirse en un móvil aún más compacto que el Edge 30. Y aunque aquel pesaba 12 gramos menos que este, lo cierto es que el apelativo de “peso pluma” se sigue manteniendo, dado que apenas se nota ese cambio y los 167 gramos que pesa el Edge 40 le hacen ser una de las raras excepciones en la industria.",

    },
    {
        id: "12",
        name: "Motorola Razr 40 Ultra",
        price: 1400, 
        category: "Motorola",
        img: razr40ultra,
        stock: 10,
        description: "La marca presentó una nueva forma de interactuar con los celulares Motorola. El Razr 40 Ultra sorprende con su diseño plegable ultramoderno. Cuando está cerrado, es un dispositivo compacto perfecto para llevar en el bolsillo. Al abrirlo, revela una espectacular pantalla de 6,9 pulgadas",

    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (product)
        }, 100)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productId))
        }, 100);
    });
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(product.filter((prod) => prod.category === categoryId));
      }, 100);
    });
  };
  






