export function getInput() {
  const phoneInput = document.querySelector('.phone-form__input');
  const submitButton = document.querySelector('.phone-form__button');
  const phoneError = document.querySelector('.phone-error');

  submitButton.disabled = true;

  phoneInput.addEventListener('input', function() {
    const value = this.value.replace(/\D+/g, '');
    let formattedValue = '';
    
    if (value.length > 0) {
      formattedValue = '+7 (';
      if (value.length > 1) formattedValue += value.substring(1, 4);
      if (value.length >= 4) formattedValue += ') ' + value.substring(4, 7);
      if (value.length >= 7) formattedValue += '-' + value.substring(7, 9);
      if (value.length >= 9) formattedValue += '-' + value.substring(9, 11);
    }
    
    this.value = formattedValue;
    
    const isValid = value.length === 11 && value[0] === '7';
    
    submitButton.disabled = !isValid;
    phoneError.style.display = isValid ? 'none' : 'block';
  });

  document.querySelector('.phone-form__container').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cleanPhone = phoneInput.value.replace(/\D+/g, '');
    if (cleanPhone.length !== 11 || cleanPhone[0] !== '7') {
      phoneError.style.display = 'block';
      submitButton.disabled = true;
      return;
    }
  });

  submitButton.addEventListener('click', function() {
    console.log('submit');
  })
}