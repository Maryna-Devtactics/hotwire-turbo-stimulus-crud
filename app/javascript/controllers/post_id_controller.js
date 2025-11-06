import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="post-id"
export default class extends Controller {
  connect() {
    console.log("PostIdController connected", this.element);
    this.updateSubmitButton();
  }

  validate() {
    this.updateSubmitButton();
  }

  updateSubmitButton() {
    const form = this.element.querySelector('form');
    if (!form) {
      console.log("No form found");
      return;
    }

    const submitButton = form.querySelector('input[type="submit"], button[type="submit"]');
    console.log("Submit button found:", submitButton);
    
    if (!submitButton) {
      console.log("No submit button found in form");
      return;
    }

    const titleInput = form.querySelector('input[name*="[title]"]');
    const bodyInput = form.querySelector('textarea[name*="[body]"]');
    
    console.log("Title input:", titleInput, "Body input:", bodyInput);

    const titleValue = titleInput?.value.trim() || "";
    const bodyValue = bodyInput?.value.trim() || "";

    console.log("Title value length:", titleValue.length, "Body value length:", bodyValue.length);

    if (titleValue.length < 3 || bodyValue.length < 3) {
      submitButton.disabled = true;
      submitButton.classList.add("opacity-50", "cursor-not-allowed");
      console.log("Button disabled");
    } else {
      submitButton.disabled = false;
      submitButton.classList.remove("opacity-50", "cursor-not-allowed");
      console.log("Button enabled");
    }
  }
}
