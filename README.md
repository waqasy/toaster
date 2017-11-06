# mu2.toaster

An easy use Toast.

[![mu2.toaster](https://img.shields.io/npm/v/mu2.toaster.svg?style=flat-square)](https://www.npmjs.com/package/mu2.toaster)

### Installation

``` bash
$ npm install mu2.toaster
```

### Usage

``` javascript
import toast from './mu2.toaster'

// Integrated usage
toast({
  type: 'loading',
  text: 'Loading',
  duration: 0	
})

// Loading
toast.loading('Loading')
// Or
toast.loading({
  text: 'Loading'
})

// Success
toast.success('Success')
// Or
toast.success({
  text: 'Success',
  duration: 5000
})

// Error
toast.error('Error')
// Or
toast.error({
  text: 'Error',
  duration: 5000
})

// Warning
toast.warning('Warning')
// Or
toast.warning({
  text: 'Warning',
  duration: 5000
})

// Toast
toast.toast('Toast')
// Or
toast.toast({
  text: 'Toast',
  duration: 5000
})

// Dismiss
toast.dismiss()

```
