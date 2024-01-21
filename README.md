<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# Descripción general
Este proyecto está pensado como un e-commerce de un restaurante donde el usuario puede elegir distintos platillos o bebidas de 4 categorias (Entradas, Hamburguesas, Steaks y Bebidas). Estas categorias se encuentran en el botón desplegable "menú" en la esquina superior derecha.

Al elegir una categoria automaticamente se realiza un filtrado de los platillos de la misma, donde el usuario puede seleccionar el platillo que desee comprar y a través de un contador agregar el número de unidades que desee.

Todas las unidades seleccionadas se agregan al carrito, donde el usuario puede ver un resumen de su orden y finalizar su compra.

Al momento que le usuario llena un formulario con sus datos y procede a comprar a través de firebase se genera automaticamente un número de orden.

A continuación se muestra el GIF del funcionamiento general del sitio: 
![gif](/public/gif/video_gif1.gif)

# Nota sobre el componente Navbar
El componente Header.jsx corresponde a la "Navbar". El nombre tuvo que ser modificado ya que el proyecto se realizó con bootstrap react y no permite duplicar el nombre del componente, por lo que tuvo que cambiar a "Header".