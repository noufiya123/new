document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Store data in localStorage for preview use
      localStorage.setItem("resumeData", JSON.stringify(data));
      window.location.href = "preview.html";
    });
  }
});

