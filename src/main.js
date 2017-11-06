import toast from './mu2.toaster'

document.getElementById('t-loading').onclick = () => {
  toast.loading('Loading')
}

document.getElementById('t-text').onclick = () => {
  toast.show('Text')
}

document.getElementById('t-success').onclick = () => {
  toast.success('Success')
}

document.getElementById('t-error').onclick = () => {
  toast.error('Error')
}

document.getElementById('t-warning').onclick = () => {
  toast.warning('Warning')
}

document.getElementById('t-dismiss').onclick = () => {
  toast.dismiss()
}