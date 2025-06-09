// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = "smooth";

  // Form validation for search
  const searchForm = document.querySelector(".search-form");
  const searchButton = searchForm?.querySelector(".btn-primary");

  if (searchButton) {
    searchButton.addEventListener("click", function (e) {
      e.preventDefault();

      // Get form inputs
      const inputs = searchForm.querySelectorAll(".form-input");
      let hasValue = false;

      inputs.forEach((input) => {
        if (input.value.trim()) {
          hasValue = true;
        }
      });

      if (!hasValue) {
        alert("Пожалуйста, заполните хотя бы одно поле для поиска");
        return;
      }

      // Simulate search (in real app would send to server)
      alert(
        "Поиск запущен! В реальном приложении здесь будут результаты поиска.",
      );
    });
  }

  // Add to cart functionality
  const cartButtons = document.querySelectorAll(
    ".product-card .btn-primary:not([disabled])",
  );

  cartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const productCard = this.closest(".product-card");
      const productTitle =
        productCard.querySelector(".product-title").textContent;

      // Animate button
      this.style.transform = "scale(0.95)";
      this.textContent = "✅ Добавлено!";

      setTimeout(() => {
        this.style.transform = "scale(1)";
        this.innerHTML = "🛒 В корзину";
      }, 1000);

      // Show notification
      showNotification(`"${productTitle}" добавлено в корзину`);
    });
  });

  // Category card clicks
  const categoryCards = document.querySelectorAll(".category-card");

  categoryCards.forEach((card) => {
    card.addEventListener("click", function () {
      const categoryName = this.querySelector(".category-title").textContent;
      alert(
        `Переход к категории: ${categoryName}\nВ реальном приложении здесь будет каталог товаров.`,
      );
    });
  });

  // Contact buttons
  const contactButtons = document.querySelectorAll(
    ".btn-outline, .btn-whatsapp, .btn-telegram",
  );

  contactButtons.forEach((button) => {
    if (button.textContent.includes("WhatsApp")) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://wa.me/79051234567", "_blank");
      });
    }

    if (button.textContent.includes("Telegram")) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        window.open("https://t.me/autoparts_premium", "_blank");
      });
    }

    if (button.textContent.includes("Заказать звонок")) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        showCallbackForm();
      });
    }

    if (button.textContent.includes("консультацию")) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Наш специалист свяжется с вами в течение 15 минут!");
      });
    }
  });

  // Phone and email clicks
  const phoneButtons = document.querySelectorAll(
    'button[class*="btn"]:not(.btn-primary):not(.btn-whatsapp):not(.btn-telegram)',
  );

  phoneButtons.forEach((button) => {
    if (button.textContent.includes("+7")) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const phone = this.textContent.replace(/[^+\d]/g, "");
        window.location.href = `tel:${phone}`;
      });
    }

    if (button.textContent.includes("@")) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        const email = this.textContent.match(/[\w.-]+@[\w.-]+\.\w+/)[0];
        window.location.href = `mailto:${email}`;
      });
    }
  });

  // Service cards hover effect
  const serviceCards = document.querySelectorAll(".service-card");

  serviceCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });
});

// Notification system
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #10b981;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 500;
    `;

  notification.textContent = message;
  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Callback form
function showCallbackForm() {
  const overlay = document.createElement("div");
  overlay.style.cssText = `
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `;

  const form = document.createElement("div");
  form.style.cssText = `
        background: white;
        padding: 32px;
        border-radius: 12px;
        max-width: 400px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    `;

  form.innerHTML = `
        <h3 style="font-size: 24px; font-weight: 600; margin-bottom: 16px; text-align: center;">Заказать звонок</h3>
        <p style="color: #6b7280; margin-bottom: 24px; text-align: center;">Оставьте ваш номер телефона и мы перезвоним в течение 15 минут</p>
        
        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px;">Ваше имя</label>
            <input type="text" id="callback-name" style="width: 100%; padding: 12px 16px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 16px;" placeholder="Введите ваше имя">
        </div>
        
        <div style="margin-bottom: 24px;">
            <label style="display: block; font-weight: 500; margin-bottom: 8px;">Номер телефона</label>
            <input type="tel" id="callback-phone" style="width: 100%; padding: 12px 16px; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 16px;" placeholder="+7 (___) ___-__-__" required>
        </div>
        
        <div style="display: flex; gap: 12px;">
            <button id="submit-callback" style="flex: 1; background-color: #2563eb; color: white; padding: 12px 24px; border: none; border-radius: 8px; font-weight: 500; cursor: pointer;">Заказать звонок</button>
            <button id="cancel-callback" style="flex: 1; background-color: transparent; color: #6b7280; padding: 12px 24px; border: 2px solid #e5e7eb; border-radius: 8px; font-weight: 500; cursor: pointer;">Отмена</button>
        </div>
    `;

  overlay.appendChild(form);
  document.body.appendChild(overlay);

  // Close on overlay click
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      document.body.removeChild(overlay);
    }
  });

  // Cancel button
  document
    .getElementById("cancel-callback")
    .addEventListener("click", function () {
      document.body.removeChild(overlay);
    });

  // Submit button
  document
    .getElementById("submit-callback")
    .addEventListener("click", function () {
      const name = document.getElementById("callback-name").value.trim();
      const phone = document.getElementById("callback-phone").value.trim();

      if (!phone) {
        alert("Пожалуйста, введите номер телефона");
        return;
      }

      document.body.removeChild(overlay);
      showNotification(
        `Спасибо, ${name || "наш клиент"}! Мы перезвоним вам в течение 15 минут.`,
      );
    });

  // Phone mask
  const phoneInput = document.getElementById("callback-phone");
  phoneInput.addEventListener("input", function (e) {
    let x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2]
      ? x[1]
      : "+" +
        x[1] +
        " (" +
        x[2] +
        ") " +
        x[3] +
        (x[4] ? "-" + x[4] : "") +
        (x[5] ? "-" + x[5] : "");
  });

  // Focus on name input
  document.getElementById("callback-name").focus();
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Apply animation styles and observe elements
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".category-card, .product-card, .service-card, .contact-card",
  );

  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
});
