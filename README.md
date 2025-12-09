# ConversORT - Conversor de Moneda

Aplicación web frontend desarrollada con Vue.js que permite convertir valores en pesos argentinos a dólares estadounidenses, con la capacidad de obtener cotizaciones automáticas desde una API externa.

## 📋 Descripción

ConversORT es una aplicación de conversión de moneda que implementa un sistema reactivo de conversión de pesos argentinos (ARS) a dólares estadounidenses (USD). La aplicación permite tanto la entrada manual de la cotización del dólar como la actualización automática cada 2 segundos desde la API de Bluelytics.

## ✨ Características Principales

### Punto 1: Conversión Reactiva
- **Input de monto en pesos**: Campo numérico para ingresar el valor a convertir
- **Input de cotización manual**: Campo numérico para ingresar la cotización del dólar manualmente
- **Resultado automático**: El cálculo se realiza de forma reactiva, actualizándose instantáneamente cuando cambia el monto o la cotización
- **Validaciones en tiempo real**: Validación de campos con mensajes de error descriptivos

### Punto 2: Actualización Automática de Cotización
- **Integración con API**: Obtiene el dólar oficial vendedor desde [Bluelytics API](https://api.bluelytics.com.ar/v2/latest)
- **Actualización periódica**: Consulta la API cada 2 segundos automáticamente
- **Async/Await**: Implementación moderna con async/await para manejo de promesas
- **Actualización reactiva**: Al recibir un nuevo valor, actualiza automáticamente la cotización y recalcula la conversión

### Punto 3: Control de Actualización Automática
- **Checkbox de habilitación**: Permite activar/desactivar la actualización automática
- **Deshabilitación de input manual**: Cuando la actualización automática está activa, el campo de cotización manual se deshabilita
- **Indicador de fecha/hora**: Muestra la fecha y hora de la última actualización obtenida
- **Estado inicial**: La actualización automática está deshabilitada por defecto

## 🛠️ Tecnologías Utilizadas

- **Vue.js 3.5.22**: Framework JavaScript progresivo
- **Vue Router 4.6.3**: Enrutador oficial para Vue.js
- **Axios 1.13.2**: Cliente HTTP para realizar peticiones a la API
- **Bootstrap 5.3.8**: Framework CSS para el diseño responsive
- **Vite 7.1.11**: Herramienta de construcción y desarrollo

## 📦 Requisitos Previos

- **Node.js**: Versión ^20.19.0 o >=22.12.0
- **npm** o **yarn**: Gestor de paquetes

## 🚀 Instalación

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd ExamenFinalPNT2
```

2. Instalar las dependencias:
```bash
npm install
```

## 💻 Uso

### Modo Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

O con apertura automática del navegador:

```bash
npm start
```

La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

### Modo Producción

Para construir la aplicación para producción:

```bash
npm run build
```

Para previsualizar la build de producción:

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
ExamenFinalPNT2/
├── src/
│   ├── components/
│   │   ├── ConversorMoneda/          # Componente principal del conversor
│   │   │   ├── index.vue
│   │   │   ├── assets/
│   │   │   │   └── Logo.png
│   │   │   └── src/
│   │   │       ├── ConversorMoneda.js    # Lógica del componente
│   │   │       ├── ConversorMoneda.html  # Template HTML
│   │   │       └── ConversorMoneda.css   # Estilos del componente
│   │   ├── Inicio.vue
│   │   ├── Navbar.vue
│   │   ├── Consigna.vue
│   │   └── Respuestas.vue
│   ├── servicios/
│   │   └── cotizacion.js              # Servicio para obtener cotizaciones
│   ├── assets/
│   │   ├── base.css
│   │   └── main.css
│   ├── App.vue                        # Componente raíz
│   ├── main.js                        # Punto de entrada
│   ├── router.js                      # Configuración de rutas
│   └── bootstrap.js                   # Inicialización de Bootstrap
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🔧 Componentes Principales

### ConversorMoneda

Componente principal que implementa toda la lógica de conversión de moneda.

**Características:**
- Validación reactiva de campos
- Conversión automática mediante computed properties
- Gestión de actualización automática con intervalos
- Manejo de estado con Options API

**Métodos principales:**
- `actualizarCotizacion()`: Obtiene la cotización desde la API
- `iniciarActualizacionAutomatica()`: Inicia el intervalo de actualización cada 2 segundos
- `detenerActualizacionAutomatica()`: Detiene el intervalo de actualización
- `toggleActualizacionAutomatica()`: Alterna el estado de actualización automática

**Computed properties:**
- `errorMontoEnPesos`: Validación del campo de monto
- `errorCotizacionDolar`: Validación del campo de cotización
- `valorConvertido`: Resultado de la conversión
- `valorConvertidoFormateado`: Resultado formateado como moneda
- `fechaHoraUltimaActualizacion`: Fecha y hora formateada de la última actualización

### servicioCotizacion

Servicio que encapsula la comunicación con la API de Bluelytics.

**Métodos:**
- `getCotizacionDolarOficialVendedor()`: Obtiene el dólar oficial vendedor desde la API

## 🌐 API Utilizada

La aplicación utiliza la API pública de **Bluelytics**:

- **URL**: `https://api.bluelytics.com.ar/v2/latest`
- **Endpoint utilizado**: `data.oficial.value_sell` (Dólar oficial vendedor)
- **Documentación**: [Bluelytics API](https://bluelytics.com.ar/)

## 🎨 Validaciones Implementadas

### Campo Monto en Pesos
- Campo requerido
- Debe ser numérico
- Debe ser mayor o igual a 0

### Campo Cotización Dólar
- Campo requerido
- Debe ser numérico
- Debe ser mayor a 0

Los mensajes de error se muestran solo después de que el usuario haya interactuado con el campo (`formDirty`).

## 🔄 Flujo de Funcionamiento

1. **Modo Manual:**
   - El usuario ingresa el monto en pesos
   - El usuario ingresa la cotización del dólar manualmente
   - La conversión se calcula automáticamente de forma reactiva

2. **Modo Automático:**
   - El usuario marca el checkbox "Actualización automática"
   - El campo de cotización manual se deshabilita
   - La aplicación consulta la API inmediatamente
   - Luego consulta la API cada 2 segundos
   - Cada actualización recalcula automáticamente la conversión
   - Se muestra la fecha y hora de la última actualización

## 🧹 Limpieza de Recursos

El componente implementa limpieza adecuada de recursos en el hook `unmounted()`, deteniendo el intervalo de actualización automática cuando el componente se desmonta, evitando memory leaks.

## 📝 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo y abre el navegador
- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run lint`: Ejecuta el linter y corrige errores automáticamente
- `npm run format`: Formatea el código con Prettier

## 👤 Autor

**Gino Tubaro**

## 📄 Licencia

Este proyecto es parte de un examen académico.

---

## 🎯 Cumplimiento de Requisitos

✅ **Punto 1**: Conversión reactiva implementada con computed properties  
✅ **Punto 2**: Actualización automática cada 2 segundos con async/await  
✅ **Punto 3**: Checkbox para habilitar/deshabilitar, deshabilitación de input manual, y visualización de fecha/hora
