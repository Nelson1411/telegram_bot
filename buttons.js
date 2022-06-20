const buttons = {
  showProducts: {
    label: "🛍️ Productos",
    command: "/showProducts",
  },
  payment: {
    label: "💳 Métodos de pago",
    command: "/payment",
  },
  delivery: {
    label: "🚚 Delivery",
    command: "/delivery",
  },
  crypto: {
    label: "₿ Crypto",
    command: "/crypto",
  },
  cash: {
    label: " 💵 Efectivo",
    command: "/cash",
  },
  transfer: {
    label: "🏦 Transferencia",
    command: "/transfer",
  },
  backToMain: {
    label: "⬅️ Regresar",
    command: "/mainMenu",
  },
  backToProducts: {
    label: "⬅️ Regresar a productos",
    command: "/showProducts",
  },
  searchProduct: {
    label: "🔍 Buscar producto",
    command: "/searchProduct",
  },
  addToCart: {
    label: "🛒 Añadir al carrito",
    command: "/addToCart",
  },
};

module.exports = buttons;
