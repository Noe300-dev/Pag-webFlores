export const floresIniciales = [
  {
    id: 1,
    codigo: "FLOR-001",
    nombre: "Ramo Pasión de 24 Rosas Rojas",
    categoria: "Rosas",
    precio: 29990,
    stock: 12,
    stockCritico: 4,
    ocasion: "Amor y Romance",
    imagen: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&auto=format&fit=crop&q=80",
    descripcion: "Hermoso bouquet de 24 rosas rojas importadas de tallo largo, acompañadas de follaje fresco de eucalipto.",
    cuidados: "Cambiar agua cada 2 días, cortar tallos en diagonal 1 cm."
  },
  {
    id: 2,
    codigo: "FLOR-002",
    nombre: "Caja Sombrerera Tulipanes Holandeses",
    categoria: "Tulipanes",
    precio: 26990,
    stock: 3,
    stockCritico: 3,
    ocasion: "Cumpleaños",
    imagen: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=600&auto=format&fit=crop&q=80",
    descripcion: "Elegante presentación en caja sombrerera de lujo con 15 tulipanes frescos multicolores.",
    cuidados: "Mantener en lugar fresco alejado de la luz solar directa."
  },
  {
    id: 3,
    codigo: "FLOR-003",
    nombre: "Ramo Sol Radiante de Girasoles",
    categoria: "Girasoles",
    precio: 19990,
    stock: 8,
    stockCritico: 3,
    ocasion: "Agradecimiento",
    imagen: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80",
    descripcion: "6 girasoles grandes seleccionados con margaritas silvestres y lazo de rafia natural.",
    cuidados: "Requiere agua abundante y luz indirecta brillante."
  },
{
  id: 4,
  codigo: "FLOR-004",
  nombre: "Orquídea Phalaenopsis Doble Vara Blanca",
  categoria: "Orquídeas",
  precio: 36990,
  stock: 2,
  stockCritico: 2,
  ocasion: "Aniversario",
  imagen: "https://www.floraflor.cl/assets/store/product-gallery/orquidea-blanca-con-centro-amarillo-sa2001/01-1440.webp",
  descripcion: "Planta de orquídea viva en maceta de cerámica esmaltada. Florece por más de 3 meses.",
  cuidados: "Regar una vez por semana con 50ml de agua sin encharcar."
},
  {
    id: 5,
    codigo: "FLOR-005",
    nombre: "Arreglo Silvestre Primaveral Mixto",
    categoria: "Ramos Mixtos",
    precio: 22990,
    stock: 14,
    stockCritico: 5,
    ocasion: "Amistad",
    imagen: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&auto=format&fit=crop&q=80",
    descripcion: "Combinación de gerberas, lisianthus, lirios y toques de lavanda silvestre perfumada.",
    cuidados: "Retirar hojas sumergidas para evitar bacterias."
  },
{
  id: 6,
  codigo: "FLOR-006",
  nombre: "Corona Fúnebre Serenidad de Lirios",
  categoria: "Condolencias",
  precio: 49990,
  stock: 5,
  stockCritico: 2,
  ocasion: "Condolencias",
  imagen: "https://floristeriapasto.com/wp-content/uploads/sites/37/2026/01/corona-funeraria-refugio-paz-lirios-rosas-ky3ei72u-540x540.jpg.webp",
  descripcion: "Arreglo solemne de lirios blancos, rosas y claveles con pedestal y cinta dedicatoria.",
  cuidados: "Base de esponja floral húmeda incluida."
}
];

export const comunasSantiago = [
  { nombre: "Providencia", tarifa: 2990 },
  { nombre: "Las Condes", tarifa: 3490 },
  { nombre: "Santiago Centro", tarifa: 2990 },
  { nombre: "Ñuñoa", tarifa: 2990 },
  { nombre: "Vitacura", tarifa: 3990 },
  { nombre: "La Reina", tarifa: 3990 },
  { nombre: "Maipú", tarifa: 4990 },
  { nombre: "La Florida", tarifa: 4500 }
];

export const usuariosIniciales = [
  {
    id: 1,
    nombre: "Profesor Evaluador",
    correo: "profesor@duocuc.cl",
    telefono: "+56911223344",
    rol: "Administrador",
    password: "password123"
  },
  {
    id: 2,
    nombre: "Estudiante Duoc",
    correo: "estudiante@duocuc.cl",
    telefono: "+56999887766",
    rol: "Cliente",
    password: "password123"
  }
];

export const blogInicial = [
  {
    id: 1,
    titulo: "5 Trucos de Florista para que tus Rosas duren más de 12 días",
    autor: "Sofía Morales (Master Florist)",
    fecha: "2026-10-01",
    resumen: "El secreto no está solamente en comprar flores frescas, sino también en cómo cortar los tallos, la temperatura del agua, la ubicación y el mito del azúcar. Descubre los 5 trucos profesionales para mantener tus rosas radiantes.",
    imagen: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&auto=format&fit=crop&q=80",
    secciones: [
      {
        tipo: "intro",
        texto: "Las rosas son uno de los regalos más clásicos y especiales que podemos recibir. Sus colores, aromas y formas pueden transformar completamente un espacio, pero con el paso de los días comienzan a perder su frescura y sus pétalos pueden marchitarse rápidamente.\n\n¿Es posible hacer que unas rosas duren más de 12 días? Sí, siempre que reciban los cuidados adecuados desde el primer momento. El secreto no está solamente en comprar flores frescas, sino también en saber cómo cortar sus tallos, qué agua utilizar, dónde colocarlas y qué errores evitar."
      },
      {
        tipo: "truco",
        numero: "1",
        titulo: "El ángulo del corte sí importa",
        texto: "Uno de los primeros pasos para cuidar tus rosas es cortar correctamente sus tallos. Aunque puede parecer un detalle pequeño, la forma en que realizamos el corte puede influir en la cantidad de agua que la flor consigue absorber.\n\nLo recomendable es utilizar un cuchillo o tijera bien limpia y realizar un corte diagonal, aproximadamente en un ángulo de 45 grados. Esto aumenta la superficie disponible para absorber agua y evita que el tallo quede completamente apoyado en el fondo del florero.\n\nTambién es recomendable realizar el corte antes de colocar las rosas en agua. Si las flores han estado fuera del agua durante un tiempo, puedes volver a cortar aproximadamente uno o dos centímetros del tallo.\n\n💡 Consejo de florista: Evita aplastar o dañar el tallo durante el corte. Una herramienta limpia y afilada hará que el proceso sea mucho más fácil."
      },
      {
        tipo: "truco",
        numero: "2",
        titulo: "El agua también tiene temperatura",
        texto: "Otro factor importante es la temperatura del agua. Para las rosas cortadas, generalmente es mejor utilizar agua fresca o a temperatura ambiente.\n\nNo es necesario utilizar agua extremadamente fría ni caliente. Lo importante es mantenerla limpia y cambiarla con frecuencia. A medida que pasan los días, el agua puede acumular microorganismos que afectan la salud de los tallos y aceleran el deterioro de las flores.\n\nPor eso, una buena rutina consiste en revisar el agua todos los días y cambiarla cuando esté turbia o tenga residuos. También puedes limpiar el florero antes de volver a llenarlo.\n\nRecuerda que un florero limpio puede marcar una gran diferencia. No sirve de mucho cortar correctamente los tallos si las flores se colocan posteriormente en un recipiente sucio."
      },
      {
        tipo: "truco",
        numero: "3",
        titulo: "Retira las hojas que quedan bajo el agua",
        texto: "Cuando colocamos un ramo en un florero, muchas veces dejamos todas las hojas del tallo sin preocuparnos por su posición. Sin embargo, existe una regla sencilla: ninguna hoja debería quedar sumergida en el agua.\n\nLas hojas que permanecen bajo el agua pueden descomponerse y favorecer la aparición de microorganismos. Esto puede afectar la calidad del agua y hacer que las rosas duren menos.\n\nAntes de colocar las flores en el florero, retira cuidadosamente las hojas que quedarían bajo el nivel del agua. No es necesario quitar todas las hojas del tallo; solamente aquellas que estarán sumergidas.\n\nAdemás, retirar algunas hojas permite que la atención visual se concentre en las flores y ayuda a que el ramo se vea más limpio y ordenado."
      },
      {
        tipo: "truco",
        numero: "4",
        titulo: "El lugar donde colocas las rosas importa",
        texto: "Puedes tener las rosas perfectamente cortadas y un florero limpio, pero si las colocas en el lugar equivocado, podrían marchitarse antes de tiempo.\n\nLas rosas cortadas deben mantenerse alejadas de fuentes directas de calor, como estufas, radiadores o electrodomésticos que generen temperatura elevada. También es recomendable evitar lugares donde reciban directamente el sol durante muchas horas.\n\nUna habitación fresca y con buena iluminación indirecta suele ser una mejor opción.\n\nOtro detalle que muchas personas desconocen es que algunas frutas producen etileno durante su maduración. Este gas puede acelerar el envejecimiento de ciertas flores. Por eso, es preferible mantener el ramo alejado de fruteros con frutas maduras."
      },
      {
        tipo: "truco",
        numero: "5",
        titulo: "El mito del azúcar: ¿realmente funciona?",
        texto: "Probablemente hayas escuchado alguna vez que agregar azúcar al agua puede hacer que las flores duren más. La respuesta no es tan sencilla.\n\nEl azúcar puede proporcionar una fuente de energía para las flores, pero agregar azúcar directamente al agua sin ningún otro tratamiento también puede favorecer el crecimiento de microorganismos. Por eso, no es recomendable confiar únicamente en este truco casero.\n\nLos conservantes florales preparados específicamente para flores cortadas suelen ser una opción más adecuada, ya que están diseñados para ayudar a mantener el agua y proporcionar determinados nutrientes.\n\nSi no tienes conservante floral, no significa que tus rosas vayan a durar poco. Un florero limpio, agua fresca, tallos correctamente cortados y una buena ubicación pueden ser mucho más importantes para mantenerlas en buenas condiciones."
      },
      {
        tipo: "ritual",
        titulo: "Un pequeño ritual para alargar la vida de tus rosas",
        texto: "Cuidar un ramo de rosas no requiere demasiado tiempo. Puedes convertirlo en una pequeña rutina:\n• Cada uno o dos días, revisa el estado de las flores y elimina pétalos deteriorados.\n• Comprueba el nivel y la limpieza del agua; si es necesario, vuelve a cortar ligeramente los tallos.\n• Gira el ramo para que todas las flores reciban iluminación similar y comprueba que ninguna hoja quede sumergida."
      },
      {
        tipo: "conclusion",
        titulo: "La clave está en los pequeños detalles",
        texto: "No existe un truco mágico que garantice que todas las rosas duren exactamente 12 días, ya que su duración depende de factores como la variedad, la frescura con la que fueron cortadas, las condiciones ambientales y la calidad de los cuidados.\n\nSin embargo, prestar atención a pequeños detalles puede marcar una gran diferencia: Corta los tallos en diagonal, mantén el agua limpia, elimina las hojas sumergidas, busca un lugar fresco y evita depender de remedios caseros como el azúcar."
      }
    ]
  },
  {
    id: 2,
    titulo: "El Significado de regalar Girasoles y Flores Amarillas",
    autor: "Equipo FloresYa",
    fecha: "2026-09-25",
    resumen: "Los girasoles y las flores amarillas representan mucho más que un color llamativo: transmiten alegría, amistad, energía, nuevos comienzos y calidez. Descubre qué mensaje entregas al regalar flores con el color del sol.",
    imagen: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=600&auto=format&fit=crop&q=80",
    secciones: [
      {
        tipo: "intro",
        texto: "Los girasoles y las flores amarillas tienen algo especial: es casi imposible verlas sin pensar en alegría, energía y buenos momentos. Su color brillante transmite una sensación de calidez que puede transformar cualquier espacio y también convertir un simple ramo en un mensaje lleno de significado.\n\nRegalar flores amarillas no se trata solamente de escoger un color bonito. Muchas veces, detrás de este detalle existe un mensaje de cariño, amistad, agradecimiento, admiración o buenos deseos.\n\nPero ¿qué significa realmente regalar girasoles o flores amarillas? ¿Por qué se relacionan con la felicidad y el optimismo? En este artículo descubriremos los principales significados que puedes transmitir cuando eliges estas flores para alguien especial."
      },
      {
        tipo: "seccion",
        titulo: "El amarillo: un color lleno de energía",
        texto: "El amarillo suele relacionarse con la luz, la energía y la alegría. Es un color llamativo que transmite una sensación cálida y positiva, por lo que las flores amarillas suelen asociarse con emociones agradables.\n\nCuando regalamos un ramo de este color, podemos estar transmitiendo un mensaje de optimismo y buenos deseos. Es una forma de decirle a otra persona que queremos verla feliz y que esperamos que tenga momentos llenos de alegría.\n\nAdemás, las flores amarillas pueden ser una excelente opción cuando queremos celebrar una ocasión especial, felicitar a alguien por un logro o simplemente tener un detalle inesperado.\n\nNo siempre necesitamos una fecha importante para regalar flores. A veces, un ramo puede ser precisamente una manera de convertir un día normal en uno diferente."
      },
      {
        tipo: "seccion",
        titulo: "¿Qué significa regalar girasoles?",
        texto: "El girasol es probablemente una de las flores amarillas más reconocibles. Su apariencia destaca por sus grandes pétalos amarillos y su centro oscuro, creando una combinación que transmite fuerza y vitalidad.\n\nTradicionalmente, los girasoles se relacionan con conceptos como felicidad, admiración, vitalidad y optimismo.\n\nRegalar un girasol puede ser una manera de decir: \"Quiero que tengas un día lleno de luz\" o \"Admiro tu energía y tu forma de ser\".\n\nTambién pueden representar admiración. Por eso, son una buena alternativa para regalar a una persona que consideramos importante, ya sea un amigo, un familiar o alguien a quien queremos agradecer.\n\nSu presencia transmite una sensación alegre y cercana, haciendo que el ramo tenga un significado especial incluso sin necesidad de acompañarlo con un mensaje largo."
      },
      {
        tipo: "seccion",
        titulo: "Girasoles para celebrar nuevos comienzos",
        texto: "Las flores amarillas también pueden representar nuevos comienzos y etapas positivas.\n\nCuando alguien comienza un nuevo trabajo, entra a una nueva etapa de estudios, se muda, cumple una meta o enfrenta un cambio importante, un ramo de girasoles puede convertirse en un bonito símbolo de apoyo.\n\nEl mensaje puede ser sencillo: seguir adelante, mirar hacia el futuro y recibir esta nueva etapa con optimismo.\n\nPor eso, no es extraño encontrar girasoles en celebraciones relacionadas con logros personales. Su apariencia alegre combina perfectamente con momentos en los que queremos celebrar el crecimiento y los nuevos desafíos."
      },
      {
        tipo: "seccion",
        titulo: "¿Y qué significan las flores amarillas?",
        texto: "Aunque el girasol es una de las opciones más populares, no es la única flor amarilla que puede transmitir un mensaje especial.\n\nLos tulipanes amarillos, por ejemplo, suelen asociarse con alegría y pensamientos positivos. Las rosas amarillas tradicionalmente se relacionan con amistad, cariño y felicidad.\n\nTambién podemos encontrar margaritas, lirios, gerberas y otras especies en tonos amarillos. Cada flor puede tener sus propias asociaciones, pero el color ayuda a crear una sensación general de energía, alegría y calidez.\n\nEsto permite crear ramos personalizados según la ocasión y la persona que los recibirá."
      },
      {
        tipo: "seccion",
        titulo: "¿A quién regalar flores amarillas?",
        texto: "Una de las grandes ventajas de las flores amarillas es que pueden adaptarse a diferentes relaciones y ocasiones.\n\nPuedes regalarlas a un amigo para demostrarle cuánto valoras su amistad, a un familiar para agradecerle su apoyo o a una persona que acaba de conseguir algo importante.\n\nTambién pueden ser un bonito detalle para alguien que simplemente necesita un poco de alegría en su día.\n\nNo existe una única ocasión correcta para regalar flores amarillas. Precisamente su significado positivo permite utilizarlas en cumpleaños, celebraciones, agradecimientos, felicitaciones o incluso como un detalle espontáneo."
      },
      {
        tipo: "seccion",
        titulo: "Flores amarillas y amistad",
        texto: "Entre todos sus significados, uno de los más conocidos es el de la amistad.\n\nLas rosas amarillas, por ejemplo, se han asociado tradicionalmente con vínculos de amistad y afecto. Regalar un ramo puede ser una forma sencilla de expresar: \"Me alegra tenerte en mi vida\".\n\nA diferencia de otros colores de rosas que pueden tener asociaciones románticas más marcadas, las flores amarillas pueden transmitir cariño de una manera más alegre y amistosa.\n\nPor eso, son una excelente opción para sorprender a un amigo o amiga sin necesidad de que exista una ocasión especial."
      },
      {
        tipo: "seccion",
        titulo: "Un ramo que transmite luz",
        texto: "Una de las características más bonitas de los girasoles y las flores amarillas es que pueden cambiar inmediatamente la sensación de un espacio.\n\nUn ramo amarillo puede aportar color a una habitación, complementar una decoración y crear un ambiente más alegre. Pero su verdadero valor está en el mensaje que representa.\n\nCuando regalamos flores, no entregamos solamente un objeto bonito. Entregamos un pequeño momento de felicidad, una muestra de cariño y un recuerdo que puede permanecer incluso después de que las flores se marchiten.\n\nLos girasoles, especialmente, tienen esa capacidad de llamar la atención y transmitir una sensación de energía y vitalidad."
      },
      {
        tipo: "seccion",
        titulo: "El significado depende también de la intención",
        texto: "Aunque existen significados tradicionales asociados a las flores y sus colores, lo más importante siempre será la intención detrás del regalo.\n\nUn ramo de girasoles puede significar admiración, amistad, agradecimiento o simplemente el deseo de hacer feliz a alguien.\n\nPor eso, no tengas miedo de elegir flores amarillas cuando quieras expresar algo bonito. Puedes acompañarlas con una pequeña tarjeta y unas palabras personales para hacer que el regalo sea todavía más especial."
      },
      {
        tipo: "conclusion",
        titulo: "Regalar luz también es regalar emociones",
        texto: "Los girasoles y las flores amarillas representan mucho más que un color llamativo. Son una forma de transmitir luz, vitalidad, alegría y optimismo.\n\nYa sea para celebrar un logro, agradecer una amistad, acompañar un nuevo comienzo o simplemente sorprender a alguien, un ramo amarillo puede convertirse en un mensaje lleno de emociones.\n\nA veces no necesitamos encontrar las palabras perfectas para decirle a alguien que nos importa. Un ramo de flores puede hacerlo por nosotros.\n\nY cuando esas flores tienen el color del sol, el mensaje puede ser todavía más especial: un pequeño detalle capaz de llevar un poco de luz al día de otra persona."
      }
    ]
  }
];

