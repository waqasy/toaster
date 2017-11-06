# mu2.toaster

An easy use Toast.

[![mu2.toaster](https://img.shields.io/npm/v/mu2.toaster.svg?style=flat-square)](https://www.npmjs.com/package/mu2.toaster)

### Installation

Prerequisites: [Vue.js](https://github.com/vuejs/vue) (>=2.x).

``` bash
$ npm install mu2.toaster
```

### Usage

``` javascript
import Toast from 'mu2.toaster'
Vue.use(Toast)

// Use in a vue file
this.$toast({
  type: 'loading',
  text: 'Loading',
  duration: 0	
})

// Loading
this.$toast.loading('Loading')
// Or
this.$toast.loading({
  text: 'Loading'
})

// Success
this.$toast.success('Success')
// Or
this.$toast.success({
  text: 'Success',
  duration: 5000
})

// Error
this.$toast.error('Error')
// Or
this.$toast.error({
  text: 'Error',
  duration: 5000
})

// Warning
this.$toast.warning('Warning')
// Or
this.$toast.warning({
  text: 'Warning',
  duration: 5000
})

// Toast
this.$toast.toast('Toast')
// Or
this.$toast.toast({
  text: 'Toast',
  duration: 5000
})

// Dismiss
this.$toast.dismiss()

```
