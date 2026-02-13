/**
 * Asanna Village Landing Page Logic
 * Handles Data-Driven UI Rendering, Modal Interactions, and Form Validation.
 */

/* -------------------------------------------------------------------------- */
/*                                 DATA SOURCE                                */
/* -------------------------------------------------------------------------- */

const houseData = [
  // --- 2 Lantai Series ---
  {
    id: "ayana",
    series: "2-lantai",
    title: "Tipe Ayana",
    specs: { kt: "3+1", km: 3, lb: 88, lt: 84 },
    price: "Rp 1.5 M-an",
    denahImage: "images/ASSETS/Denah/3.png",
    denahTitle: "Denah Tipe Ayana",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Ayana"
  },
  {
    id: "aleya",
    series: "2-lantai",
    title: "Tipe Aleya",
    specs: { kt: 3, km: 2, lb: 65, lt: 60 },
    price: "Rp 1.1 M-an",
    denahImage: "images/ASSETS/Denah/4.png",
    denahTitle: "Denah Tipe Aleya",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Aleya"
  },
  // --- 3 Lantai Series ---
  {
    id: "aleena",
    series: "3-lantai",
    title: "Tipe Aleena",
    specs: { kt: 3, km: 3, lb: 88, lt: 84 },
    price: "Rp 1.5 M-an",
    denahImage: "images/ASSETS/Denah/1.png",
    denahTitle: "Denah Tipe Aleena",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Aleena"
  },
  {
    id: "alunna",
    series: "3-lantai",
    title: "Tipe Alunna",
    specs: { kt: 2, km: 2, lb: 65, lt: 60 },
    price: "Rp 1.1 M-an",
    denahImage: "images/ASSETS/Denah/2.png",
    denahTitle: "Denah Tipe Alunna",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Alunna"
  }
];







/* -------------------------------------------------------------------------- */
/*                             RENDERING LOGIC                                */
/* -------------------------------------------------------------------------- */

function renderHouseCards() {
  const container2Lantai = document.getElementById("container-2-lantai");
  const container3Lantai = document.getElementById("container-3-lantai");

  if (!container2Lantai || !container3Lantai) return;

  houseData.forEach((house) => {
    const cardHTML = createCardHTML(house);
    if (house.series === "2-lantai") {
      container2Lantai.innerHTML += cardHTML;
    } else {
      container3Lantai.innerHTML += cardHTML;
    }
  });
}

function createCardHTML(house) {
  // Ultra-compact mobile styles for 2-column layout
  return `
    <div class="bg-[#faf8f5] dark:bg-surface-dark p-3 lg:p-8 rounded-xl lg:rounded-3xl shadow-[0_5px_15px_-5px_rgba(0,0,0,0.1)] border border-[#eaddcf] dark:border-white/10 flex flex-col justify-between h-full group hover:shadow-xl transition-all duration-300">
        <div>
            <h3 class="text-[10px] lg:text-2xl font-serif font-extrabold text-[#a0724f] dark:text-[#d4af37] mb-2 lg:mb-4 uppercase tracking-widest border-b border-[#eaddcf] pb-1 lg:pb-3">
                ${house.title}
            </h3>
            <div class="grid grid-cols-2 gap-y-1 gap-x-1 lg:gap-y-3 lg:gap-x-4 text-[9px] lg:text-sm text-[#5a260b] dark:text-gray-300 mb-2 lg:mb-6 leading-tight font-medium">
                <div class="flex items-center gap-1 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[12px] lg:text-[20px] font-bold">bed</span>
                    <span>${house.specs.kt} KT</span>
                </div>
                <div class="flex items-center gap-1 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[12px] lg:text-[20px] font-bold">bathtub</span>
                    <span>${house.specs.km} KM</span>
                </div>
                <div class="flex items-center gap-1 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[12px] lg:text-[20px] font-bold">width_full</span>
                    <span>LB ${house.specs.lb}</span>
                </div>
                <div class="flex items-center gap-1 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[12px] lg:text-[20px] font-bold">crop_square</span>
                    <span>LT ${house.specs.lt}</span>
                </div>
            </div>
        </div>
        
        <div class="mb-2 lg:mb-4 border-t border-[#eaddcf] pt-2 lg:pt-3">
            <p class="text-[8px] lg:text-xs text-[#5a260b] mb-0.5 lg:mb-1 font-bold">Harga Mulai</p>
            <p class="text-sm lg:text-2xl font-extrabold text-[#a0724f] dark:text-[#d4af37]">${house.price}</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 mt-auto">
            <button onclick="openDenah('${house.id}')"
                class="w-full py-1.5 lg:py-3.5 rounded-lg lg:rounded-xl border border-[#a0724f]/30 text-[#8c6242] font-bold text-[8px] lg:text-xs uppercase tracking-widest hover:bg-[#faf4ef] hover:border-[#a0724f] transition-all flex items-center justify-center gap-1 group/denah">
                <span class="material-symbols-outlined text-[10px] lg:text-sm group-hover/denah:scale-110 transition-transform">grid_view</span>
                Lihat Denah
            </button>
            <a href="#contact"
                class="w-full py-1.5 lg:py-3.5 rounded-lg lg:rounded-xl bg-gradient-to-br from-[#a0724f] to-[#8c6242] text-white font-bold text-[8px] lg:text-xs uppercase tracking-widest hover:shadow-[0_10px_20px_-5px_rgba(160,114,79,0.4)] hover:-translate-y-0.5 transition-all shadow-md flex items-center justify-center gap-1 group/btn relative overflow-hidden">
                <span class="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></span>
                <span class="material-symbols-outlined text-[10px] lg:text-sm relative z-10 group-hover/btn:rotate-12 transition-transform">description</span>
                <span class="relative z-10">Detail & Pricelist</span>
            </a>
        </div>
    </div>
  `;
}

/* -------------------------------------------------------------------------- */
/*                                MODAL LOGIC                                 */
/* -------------------------------------------------------------------------- */

function openDenah(id) {
  const house = houseData.find(h => h.id === id);
  if (!house) return;

  const modal = document.getElementById("denahModal");
  const content = document.getElementById("denahContent");
  const img = document.getElementById("denahImage");
  const title = document.getElementById("denahTitle");

  if (!modal || !content || !img || !title) return;

  // Set content
  img.src = house.denahImage;
  title.textContent = house.denahTitle;

  // Show modal
  modal.classList.remove("hidden");
  // Small delay to trigger transition
  setTimeout(() => {
    modal.classList.remove("opacity-0");
    content.classList.remove("scale-95");
    content.classList.add("scale-100");
  }, 10);
}

function closeDenah() {
  const modal = document.getElementById("denahModal");
  const content = document.getElementById("denahContent");

  if (!modal || !content) return;

  modal.classList.add("opacity-0");
  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

// Image Swap Animation for Clubhouse
function startImageSwap() {
  const imgMain = document.getElementById('img-main');
  const imgSec = document.getElementById('img-sec');

  if (!imgMain || !imgSec) {
    console.warn("Clubhouse images not found for animation.");
    return;
  }

  let isMainFront = true;

  setInterval(() => {
    if (isMainFront) {
      // Main goes Back
      imgMain.style.zIndex = '10';
      imgMain.style.transform = 'scale(0.9)';
      imgMain.style.filter = 'brightness(0.75)';

      // Sec comes Front
      imgSec.style.zIndex = '20';
      imgSec.style.transform = 'scale(1)';
      imgSec.style.filter = 'brightness(1)';
    } else {
      // Main comes Front
      imgMain.style.zIndex = '20';
      imgMain.style.transform = 'scale(1)';
      imgMain.style.filter = 'brightness(1)';

      // Sec goes Back
      imgSec.style.zIndex = '10';
      imgSec.style.transform = 'scale(0.9)';
      imgSec.style.filter = 'brightness(0.75)';
    }
    isMainFront = !isMainFront;
  }, 3000); // Swap every 3 seconds
}

// Close on clicking outside
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("denahModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeDenah();
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                            CUSTOM DROPDOWN LOGIC                           */
  /* -------------------------------------------------------------------------- */

  const dropdownTrigger = document.getElementById("dropdownTrigger");
  const dropdownList = document.getElementById("dropdownList");
  const houseTypeInput = document.getElementById("houseType");
  const selectedOptionText = document.getElementById("selectedOptionText");
  const dropdownIcon = document.getElementById("dropdownIcon");
  const dropdownOptions = document.querySelectorAll(".dropdown-option");

  if (dropdownTrigger && dropdownList) {
    // Toggle Dropdown
    dropdownTrigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const isHidden = dropdownList.classList.contains("hidden");

      if (isHidden) {
        dropdownList.classList.remove("hidden");
        // Small delay for transition
        requestAnimationFrame(() => {
          dropdownList.classList.remove("opacity-0", "scale-95");
          dropdownIcon.classList.add("rotate-180");
        });
      } else {
        closeDropdown();
      }
    });

    // Close Dropdown Helper
    function closeDropdown() {
      dropdownList.classList.add("opacity-0", "scale-95");
      dropdownIcon.classList.remove("rotate-180");
      setTimeout(() => {
        dropdownList.classList.add("hidden");
      }, 200);
    }

    // Option Selection
    dropdownOptions.forEach(option => {
      option.addEventListener("click", () => {
        const value = option.getAttribute("data-value");
        const text = option.getAttribute("data-text");

        // Update Value & UI
        houseTypeInput.value = value;
        selectedOptionText.textContent = text;
        selectedOptionText.classList.remove("text-gray-400");
        selectedOptionText.classList.add("text-gray-900", "dark:text-white", "font-medium");

        // Active State
        dropdownOptions.forEach(opt => opt.classList.remove("bg-[#faf4ef]", "dark:bg-gray-800"));
        option.classList.add("bg-[#faf4ef]", "dark:bg-gray-800");

        closeDropdown();
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdownTrigger.contains(e.target) && !dropdownList.contains(e.target)) {
        closeDropdown();
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                FORM LOGIC                                  */
  /* -------------------------------------------------------------------------- */

  const form = document.getElementById("inquireForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const whatsapp = document.getElementById("whatsapp").value.trim();
      const houseType = document.getElementById("houseType").value;
      const btn = this.querySelector('button[type="submit"]');

      if (!name || !whatsapp || !houseType) {
        alert("Mohon lengkapi semua data (Nama, Nomor WhatsApp, dan Tipe Rumah).");
        return;
      }

      // --- KONFIGURASI NOMOR TUJUAN ---
      // Ganti nomor ini dengan nomor WhatsApp tim sales Asanna Village (format: 628...)
      const destinationNumber = "6281200000000";

      const message = `Halo, saya ${name}. Saya ingin melihat detail rumah Tipe ${houseType} dari Asanna Village.`;
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${destinationNumber}?text=${encodedMessage}`;

      const originalText = btn.innerHTML;
      btn.innerHTML = "Membuka WhatsApp...";
      btn.disabled = true;

      // Open WhatsApp in new tab
      window.open(waUrl, '_blank');

      // Reset button state after a short delay
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        // Optional: this.reset(); if you want to clear the form
      }, 2000);
    });
  }

  // Initialize Rendering
  renderHouseCards();
  startImageSwap();

  // Initialize AOS
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
    easing: 'ease-out-cubic'
  });

  // Hero Text Reveal Trigger
  const heroTitle = document.querySelector('.hero-title-animate');
  if (heroTitle) {
    // Simple Split Text logic (can be replaced by library if needed, but this is lightweight)
    // This assumes the text is already wrapped or we wrap it here. 
    // For this implementation, we will manually structure the HTML to be reveal-ready.
    // This JS just adds a class or ensures it plays.

    // If we want to animate word by word or line by line
    const spans = heroTitle.querySelectorAll('.char');
    spans.forEach((span, index) => {
      span.style.animationDelay = `${index * 0.1}s`;
    });
  }
});

// Premium Loader Logic
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    // Minimum display time to show off the logo & progress bar
    setTimeout(() => {
      loader.classList.add('hidden-loader');
    }, 2200); // 2.2s to match the 2s progress bar animation + buffer
  }

  // Active Scroll Spy Logic
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a, header .hidden a'); // Matches desktop & potentially mobile if structure used nav a

  // More precise selector for our specific header structure
  // Our header uses specific classes for links
  const headerLinks = document.querySelectorAll('header a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Offset for fixed header (approx 100px)
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    headerLinks.forEach(link => {
      // link.classList.remove('text-primary', 'font-bold'); // OLD
      // link.classList.add('text-gray-500', 'dark:text-gray-300'); // OLD
      link.classList.remove('active-nav'); // NEW Smooth Underline Logic

      // We don't need to manually reset text colors heavily if CSS handles it via .active-nav

      if (link.getAttribute('href').includes(current) && current !== '') {
        // link.classList.add('text-primary', 'font-bold'); // OLD
        // link.classList.remove('text-gray-500', 'dark:text-gray-300'); // OLD
        link.classList.add('active-nav'); // NEW
      }
    });
  });

  // Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileMenuBtn && mobileMenu && menuIcon) {
    mobileMenuBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('translate-x-full');
      if (isOpen) {
        closeMobileMenu();
      } else {
        mobileMenu.classList.remove('translate-x-full');
        menuIcon.textContent = 'close';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    });
  }
});

// Helper to open/close mobile menu globally available
function closeMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  if (mobileMenu && menuIcon) {
    mobileMenu.classList.add('translate-x-full');
    menuIcon.textContent = 'menu';
    document.body.style.overflow = 'auto'; // Restore scrolling
  }
}
