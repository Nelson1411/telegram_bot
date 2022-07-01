const TeleBot = require("telebot");
require("dotenv").config();
const bot = new TeleBot({
  token: process.env.TOKEN,
  usePlugins: ["commandButton"],
});
module.exports = bot;

const {
  searchProduct,
  getProducts,
  postUser,
  addToCart,
  getCart,
  showMainMenu,
  textDelivery,
  buttonsPayment,
  infoCash,
  infoCrypto,
  infoTransfer,
} = require("./messages");

// variable auxiliar para esperar input de usuario
let waitUserInputSearch = false;
let waitUserInputCart = false;

// mensaje de bienvenida
bot.on("/start", postUser);

// mostrar el menu principal
bot.on(["/mainMenu"], showMainMenu);

// mostrar los 20 productos
bot.on("/showProducts", getProducts);

// esperar input de usuario para buscar el producto
bot.on("/searchProduct", (msg) => {
  let id = msg.from.id;
  bot.sendMessage(
    id,
    "introduzca el numero del producto que desea buscar. Ej: 1"
  );
  waitUserInputSearch = true;
});

// buscar producto por id
bot.on("text", (msg) => {
  if (waitUserInputSearch) {
    searchProduct(msg);
    waitUserInputSearch = false;
  }
});

// esperar input de usuario para añadir el producto al carrito
bot.on("/addToCart", (msg) => {
  let id = msg.from.id;
  bot.sendMessage(
    id,
    "introduzca los numeros de los items que desea agregar al carrito, separados por comas. Ej: 1,2,3"
  );
  waitUserInputCart = true;
});

// añade los productos al carrito por su id
bot.on("text", (msg) => {
  if (waitUserInputCart) {
    addToCart(msg);
    waitUserInputCart = false;
  }
});

// mostrar el carrito del usuario
bot.on("/goToCart", getCart);

// calback que recibe los comandos de los botones
bot.on("callbackQuery", (msg) => {
  bot.answerCallbackQuery(msg.id);
});
//INFO DELIVERY
bot.on("/delivery", textDelivery);
//MENU PAYMENT -Info
bot.on("/payment", buttonsPayment);
//import cash
bot.on("/cash", infoCash);
//import crypto
bot.on("/crypto", infoCrypto);
//import transfer
bot.on("/transfer", infoTransfer);
bot.connect();
