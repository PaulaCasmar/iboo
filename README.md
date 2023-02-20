# iboo
<h1>Descripción del proyecto:</h>
<p>Proyecto de prueba técnica donde se solicita la creación de una API con productos simplificados. </p>

<p>La API debe incluir operaciones CRUD para un artículo, como
/catalog/product/{uuid} y Collections, como /catalog/products</p>
<p> La API debe incluir un mecanismo para buscar un producto por uuid o texto libre en
descripción y nombre</p>
<p> Un producto se puede crear o actualizar mediante POST, PUT o PATCH estándar.
métodos.</p>

<p>Esta API se ha desarrollado con Stack MERN, creada con NodeJs y express, como BBDD se ha utilizado MongoDB y como biblioteca de medios Cloudinary.</p>
<p>En el repositorio de GITHUB se ha subido todo el contenido sin el documento .env por lo que es necesario tenerlo en cuenta ya que no se visualizarán todos los datos, será necesario añadir el .env con las credenciales (se me pueden solicitar si os interesa).</p>

<h3>Funcionalidades Backend</h3>
<p>Se han utilizado las siguientes funcionalidades:</p>
<p>Require || Schema || Post || Get || Delete || Put || Find() || Findbyid() || Module.exports || Config || removeTmp || Try/catch</p>
<p>Verify || Next() || Model || New() || Save() || Listen || Use || Connect</p>
<h3>Dependencias</h3>
<p>- mongoose: dependecia que nos ayuda a vincular la información con la BBDD de MongoDB.</p>
<p>- nodemon: devDependencies. Es una dependencia que ayuda a desarrollar aplicaciones basadas en Node.js al mostrar automáticamente en la terminal cuando detecta cambios en los archivos del directorio.</p>
<p>cloudinary: dependencia que nos ayuda a integrar nuestra aplicación con Cloudinary.</p>
<p>dotenv: dependencia que nos ayuda a mantener ciertos datos privados en el archivo .env mediante process.env.</p>
<p>- express-fileupload: dependencia que nos ayuda a subir archivos.</p>
<h3>Diagrama de relaciones</h3>
<p>Para este ejercicio se han creado dos modelos:</p>
<h4>Category</h4>
<p>Con dos keys requeridas de title, type string, e image.</p>
<h4>Product</h4>
<p>Con seis keys, title, description, price, image, stock, category.</p>
<h4>CategoryRouter</h4>
<p>.post("/category") - ruta que permite añadir categorias a los productos.</p>
<p>.get("/category/:id") - ruta que permite visualizar una categoria en concreto a través del ID indicado y los productos que contiene.</p>
<p>.get("/categories") - ruta que permite visualizar todas las categorias creadas.</p>

<h4>ProductRouter</h4>
<p>.post("/product") - ruta que permite añadir un nuevo producto indicando: title, description, price, stock, image y categoryID.</p>
<p>.get("/product/:id") - ruta que permite visualizar un único producto mediante ID.</p>
<p>.put("/product/:id") - ruta que permite modificar un producto.</p>
<p>.get("/products") - ruta que permite visualizar el catálogo de productos..</p>
<p>.delete("/product/:id") - ruta que permite eliminar un producto mediante ID.</p>
<h4>ImageRouter</h4>
<p>.post("/upload") - ruta que permite añadir imagenes.</p>
<p>.post("/destroy") - ruta que permite eliminar imagenes.</p>
<h3>Frontend</h3>
<p>El frontend de esta aplicación web consta de 10 componentes:</p>
<p>AddCategory || Category || CategoryId || Footer || Navbar </p>
<p>Home || AddProduct || Products || MondProduct || Product  </p>
<h4>Funcionalidades</h4>
<p>- Import: nos permite importar cualquier dependencia, función, icono o imagen en un componente.</p>
<p>- useState: es una variable con una función que nos guardará los datos.</p>
<p>- useNavigate: al ser una SAP podemos utilizar el useNavigate creando una variable navigate e indicando en setTimeout donde queremos que se redirija una vez realizada una acción.</p>
<p>- LocalStorage: utilizado con setItem para guardar información en el localstorage de nuestro navegador, con getItem para obtener la información guardada anteriormente y con deleteItem podemo eliminar esta información(logout o eliminar usuario).</p>
<p>- useEffect:es una función que en el momento que carga mi componente me trae los datos de la API y los guarda en una variable para poder manejarlos previamente. En resumen, no muestra el componente hasta el momento que tenga los datos.</p>
<p>- useParams: es un metodo de React-router-dom que nos ayuda a recibir por parametros la información del objeto.</p>
<p>- e.preventDefault()/event.target: función que impide que se actualice la página hasta que lo indiquemos con una acción.</p>
<p>- set: es una función que nos va a guardar la información indicada en useState.</p>
<p>- .map: función utilizada cuando queremos devolver la información de una array guardada en set.</p>
<p>- setTimeout: nos permite indicar, junto con navigate, donde se redirige la página una vez realizada la acción.</p>
<p>- handleUpload: función utilizada antes de añadir un producto o categoria para colgar sus fotos en cloudinary</p>
<p>- handleSubmit: se utiliza para especificar el método que debe de ejecutarse cuando se envía un formulario.</p>
<h4>Tecnologías </h4>
<p>- Bootstrap: para realizar parte del diseño de la web.</p>
<p>- JavaScript: utilizado para crear toda la parte de Back-End de la ecomerce: modelos, rutas...</p>
<p>- Postman: utilizado para realizar la BBDD</p>
<p>- MongoDB: creación y mantenimiento de la BBDD</p>
<p>- Cloudinary: gestión de imágenes y vídeos basados ​​en la nube. Permite a los usuarios cargar, almacenar, administrar, manipular y entregar imágenes y videos para sitios web y aplicaciones.</p>
<p>- Git y GitHub: repositorio en remoto y control y actualización de versiones.</p>
<h4>Versiones</h4>
<p>Iboo: carga de la primera versión del proyecto</p>
<p>V0.1: carga del proyecto actualizada con README y cambios</p>

<h4>TO-DO</h4>
<p>- Mejorar diseño</p>
<p>- Añadir más funcionalidades a las categorías</p>

