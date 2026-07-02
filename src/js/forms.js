export function initForms() {
  const form = document.querySelector('#contact-form')
  if (!form) return

  const success = form.querySelector('.form-success')

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const fields = form.querySelectorAll('[required]')
    let hasError = false

    fields.forEach((field) => {
      const wrapper = field.closest('.form-field')
      const isEmpty = !field.value || !field.value.trim()
      wrapper.classList.toggle('has-error', isEmpty)
      if (isEmpty) hasError = true
    })

    if (hasError) {
      form.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus()
      return
    }

    form.reset()
    form.querySelectorAll('.form-field.has-error').forEach((el) => el.classList.remove('has-error'))
    success?.classList.add('is-visible')
  })

  form.querySelectorAll('[required]').forEach((field) => {
    field.addEventListener('input', () => {
      field.closest('.form-field').classList.remove('has-error')
    })
  })
}
