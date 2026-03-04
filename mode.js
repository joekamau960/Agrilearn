const themeToggle = document.createElement("button");
themeToggle.className = "theme-toggle";
themeToggle.innerHTML = "🌓";
themeToggle.onclick = toggleTheme;
document.body.appendChild(themeToggle);
const style = document.createElement("style");
style.innerHTML = `
  .theme-toggle {
    position: fixed;
    top: 12px;
    right: 12px;
    background: #eee;
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 18px;
    z-index: 9999;
  }

  body.dark-mode {
    background-color: #121212 !important;
    color: #f0f0f0 !important;
  }

  body.dark-mode header,
  body.dark-mode footer,
  body.dark-mode main,
  body.dark-mode .auth-card,
  body.dark-mode .side-menu,
  body.dark-mode .info,
  body.dark-mode .box,
  body.dark-mode .container,
  body.dark-mode .weather-data,
  body.dark-mode .card,
  body.dark-mode .section,
  body.dark-mode .module {
    background-color: #1f1f1f !important;
    color: #ffffff !important;
  }

  body.dark-mode h1,
  body.dark-mode h2,
  body.dark-mode h3,
  body.dark-mode h4,
  body.dark-mode h5,
  body.dark-mode h6,
  body.dark-mode p,
  body.dark-mode a,
  body.dark-mode span,
  body.dark-mode label,
  body.dark-mode li,
  body.dark-mode div,
  body.dark-mode strong {
    color: #ffffff !important;
  }

   body.dark-mode select {
    background-color: #2a2a2a !important;
    color: #ffffff !important;
    border: 1px solid #555 !important;
    appearance: none;
  }

  body.dark-mode select option {
    background-color: #2a2a2a !important;
    color: #ffffff !important;
  }

  body.dark-mode input,
  body.dark-mode textarea {
    background-color: #2a2a2a !important;
    color: #fff !important;
    border-color: #444 !important;
  }

  body.dark-mode input::placeholder,
  body.dark-mode textarea::placeholder {
    color: #ccc !important;
  }

  body.dark-mode label {
    color: #fff !important;
  }

  body.dark-mode button {
    background-color: #388e3c !important;
    color: #fff !important;
  }

  body.dark-mode .theme-toggle {
    background-color: #333;
    color: #fff;
  }
  body.dark-mode select,
  body.dark-mode input,
  body.dark-mode textarea {
    background-color: #2a2a2a !important;
    color: #ffffff !important;
    border-color: #555 !important;
  }

  body.dark-mode .ts-control,
  body.dark-mode .ts-dropdown,
  body.dark-mode .selectize-input,
  body.dark-mode .selectize-dropdown,
  body.dark-mode .choices,
  body.dark-mode .choices__inner,
  body.dark-mode .choices__list--dropdown {
    background-color: #2a2a2a !important;
    color: #ffffff !important;
    border-color: #555 !important;
  }

  body.dark-mode .ts-dropdown .option,
  body.dark-mode .choices__item,
  body.dark-mode .selectize-dropdown .item {
    background-color: #2a2a2a !important;
    color: #ffffff !important;
  }

  body.dark-mode select:invalid,
  body.dark-mode select option[disabled] {
    color: #ccc !important;
  }

  body.dark-mode select:focus,
  body.dark-mode input:focus,
  body.dark-mode textarea:focus {
    outline: 2px solid #4caf50;
  }
`;
document.head.appendChild(style);

const isAuthed = localStorage.getItem("isAuthenticated");
const savedTheme = localStorage.getItem("theme");

if (isAuthed && savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  if (isAuthed) {
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  }
}
