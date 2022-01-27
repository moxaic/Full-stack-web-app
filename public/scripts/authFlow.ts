((window: Window, document: Document, undefined) => {
  const otpForm = document.getElementById("otp-form") as HTMLFormElement;
  if (otpForm) {
    const getOtpInputs = (id: string) =>
      document.querySelectorAll(`#${id} input`) as NodeListOf<HTMLInputElement>;

    const getInputElem = (e: Event | KeyboardEvent) =>
      e.target as HTMLInputElement;

    const isDeleteKey = (e: KeyboardEvent) =>
      e.key === "Backspace" || e.key === "Delete";

    const isNumberKey = (e: KeyboardEvent) =>
      e.key.match(new RegExp("^[0-9]$"))?.length === 1;

    const focusPrev = () => {
      if (current > 0) {
        inputs[--current].focus();
      }
    };

    const focusNext = () => {
      if (current + 1 < maxLength) {
        inputs[++current].focus();
      }
    };

    const onKeyDownHandler = (e: KeyboardEvent) => {
      const input = getInputElem(e);
      if (
        e.key === "-" ||
        e.key === "." ||
        (input.name === "5" && input.value.length === 1 && !isDeleteKey(e))
      ) {
        e.preventDefault();
      }
      if (input.value.length === 1 && isNumberKey(e)) {
        focusNext();
      }
    };

    const onKeyUpHandler = (e: KeyboardEvent) => {
      if (isDeleteKey(e)) {
        if (prevVal === "") {
          focusPrev();
        } else {
          prevVal = "";
        }
      }
      if (e.key === "ArrowLeft") {
        focusPrev();
      } else if (e.key === "ArrowRight") {
        focusNext();
      }
    };

    const onFocusHandler = (e: Event) => {
      const input = getInputElem(e);
      current = parseInt(input.name);
      prevVal = input.value;
    };

    const onInputHandler = (e: InputEvent) => {
      const input = getInputElem(e);
      if (input.value.length === 1 && !(e.data === null || e.data === null)) {
        focusNext();
      } else if (input.value.length > 1 || e.data === "-" || e.data === ".") {
        input.value = prevVal;
      }
    };

    let current = 0;
    let prevVal = "";
    const maxLength = 6;
    const inputs = getOtpInputs(otpForm.id);
    otpForm.onkeydown = onKeyDownHandler;
    otpForm.onkeyup = onKeyUpHandler;
    inputs.forEach((input) => {
      input.onfocus = onFocusHandler;
      input.oninput = onInputHandler as (e: Event) => void;
    });
  }
})(window, document);
