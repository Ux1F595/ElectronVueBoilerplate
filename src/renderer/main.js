import Vue from 'vue'
import App from './App'

new Vue({
    data: {
      message: 'This is a message from app DataModel'
    },
    components: { App }
  }).$mount('#app')

console.log('This is a log in the Renderer Console.')
console.log('You can find me in the debugger console of the Window or in the debug console of the VsCode Electron:Renderer debugger if it is attached');