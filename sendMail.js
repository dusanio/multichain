const formEl = document.getElementById("contactForm");

formEl.onsubmit = (event) => {
  const formData = new FormData(event.target);

  const firstName = formData.get("first-name");
  const lastName = formData.get("last-name");
  const email = formData.get("email");
  const websiteUrl = formData.get("website-url");
  const insertValue = formData.get("select-budget");
  const yourMessage = formData.get("your-message");

  const strategy = formData.get("strategy");
  const marketing = formData.get("marketing");
  const branding = formData.get("branding");

  const enabledServices = [];

  if (strategy === "on") {
    enabledServices.push("Strategy");
  }

  if (marketing === "on") {
    enabledServices.push("Marketing");
  }

  if (branding === "on") {
    enabledServices.push("Branding");
  }

  const subject = `Multichain - ${encodeURIComponent(
    firstName
  )} ${encodeURIComponent(lastName)}`;

  const message = [
    `First Name: ${encodeURIComponent(firstName)}`,
    `Last Name: ${encodeURIComponent(lastName)}`,
    `Email: ${encodeURIComponent(email)}`,
    `Website URL: ${encodeURIComponent(websiteUrl)}`,
    `Budget: $${encodeURIComponent(insertValue)}`,
    `Message: ${encodeURIComponent(yourMessage)}`,
    `Services: ${encodeURIComponent(enabledServices.join(", "))}`,
  ];

  const body = message.join(encodeURI("\r\n"));

  location.href = `mailto:example@example.com?subject=${subject}&body=${body}`;

  event.preventDefault();
  return false;
};
