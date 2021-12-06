import Dialog from './Dialog.vue'
import { createApp,h } from 'vue'
export const openDialog = (options) => {
  const {title,content} = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  const close = () => {
    //@ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    render(){
      return h(Dialog, {
        visible: true, 'onUpdate:visible': (newValue) => {
          if (newValue === false) {
            close()
          }
      }}, {header:title,content})
    }
  })
    app.mount(div)
}