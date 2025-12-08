export default {
  name: 'Formulario',

  components: {
    // componentes hijos
  },

  props: {
    // ejemplo: titulo: { type: String, default: '' }
  },

  data() {
    return {
      form: {
        nombre: '',
        edad: null,
        email: '',
      },
      formDirty: {
        nombre: false,
        edad: false,
        email: false,
      },
      registros: [],
    }
  },

  computed: {
    errorNombre() {
      let mensaje = ''
      let nombre = this.form.nombre

      // nombre: requerido y 5..15
      if (!nombre) {
        mensaje = 'El nombre es requerido'
      } else if (nombre.length < 5 || nombre.length > 15) {
        mensaje = 'El nombre debe tener entre 5 y 15 caracteres'
      }

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.nombre,
        ok: mensaje == ''
      }
    },
    errorEdad() {
      let mensaje = ''
      let edad = this.form.edad

      // edad: requerida 18..120
      if (edad === null || edad === undefined || edad === '') {
        mensaje = 'La edad es requerida'
      } else if (Number.isNaN(Number(edad))) {
        mensaje = 'La edad debe ser numérica'
      } else if (edad < 18 || edad > 120) {
        mensaje = 'La edad debe estar entre 18 y 120 años'
      }

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.edad,
        ok: mensaje == ''
      }
    },
    errorEmail() {
      let mensaje = ''
      let email = this.form.email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      // email: requerido y válido
      if (!email) {
        mensaje = 'El email es requerido'
      } else if (!emailRegex.test(email)) {
        mensaje = 'Debe ser un email válido'
      }

      return {
        mensaje: mensaje,
        mostrar: mensaje != '' && this.formDirty.email,
        ok: mensaje == ''
      }
    },
    isValid() {
      return this.errorNombre.ok && this.errorEdad.ok && this.errorEmail.ok
    },
  },

  watch: {
    // observadores
  },

  methods: {
    getInicialData() {
      return {
        nombre: '',
        edad: null,
        email: '',
      }
    },
    onSubmit() {
      this.formDirty = { nombre: true, edad: true, email: true }
      if (!this.isValid) return
      this.registros.push({ ...this.form })
      this.resetForm()
    },
    resetForm() {
      this.form = this.getInicialData()
      this.formDirty = {
        nombre: false,
        edad: false,
        email: false,
      }
    },
  },

  created() {
    // hook de creación
  },
  mounted() {
    // hook de montaje
  },
  unmounted() {
    // hook de desmontaje
  }
}

