// Booking form validation

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  if (!form) return;

  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const typeSelect = document.getElementById("appointmentType");
  const dateInput = document.getElementById("preferredDate");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const typeError = document.getElementById("typeError");
  const dateError = document.getElementById("dateError");
  const successMsg = document.getElementById("formSuccess");

  function clearErrors() {
    [nameError, emailError, phoneError, typeError, dateError].forEach(function (el) {
      if (el) el.textContent = "";
    });
    if (successMsg) successMsg.textContent = "";
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function isValidPhone(value) {
    const cleaned = value.replace(/[\s-]/g, "");
    return /^\d{8,}$/.test(cleaned);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();

    let valid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your full name.";
      valid = false;
    }

    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email address.";
      valid = false;
    } else if (!isValidEmail(emailInput.value)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (!phoneInput.value.trim()) {
      phoneError.textContent = "Please enter your phone number.";
      valid = false;
    } else if (!isValidPhone(phoneInput.value)) {
      phoneError.textContent = "Please enter a valid phone number.";
      valid = false;
    }

    if (!typeSelect.value) {
      typeError.textContent = "Please select an appointment type.";
      valid = false;
    }

    if (!dateInput.value) {
      dateError.textContent = "Please choose a preferred date.";
      valid = false;
    }

    if (!valid) {
      return;
    }

    form.reset();
    if (successMsg) {
      successMsg.textContent =
        "Thank you! Your booking request has been received. We will contact you to confirm.";
    }
  });
});
