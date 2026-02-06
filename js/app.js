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
    id: "aleena",
    series: "2-lantai",
    title: "Tipe Aleena",
    specs: { kt: 2, km: 2, lb: 110, lt: 120 },
    price: "Rp 1.5 M-an",
    denahImage: "images/ASSETS/Denah/1.png",
    denahTitle: "Denah Tipe Aleena",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Aleena"
  },
  {
    id: "aluna",
    series: "2-lantai",
    title: "Tipe Aluna",
    specs: { kt: 3, km: 3, lb: 170, lt: 180 },
    price: "Rp 1.8 M-an",
    denahImage: "images/ASSETS/Denah/2.png",
    denahTitle: "Denah Tipe Aluna",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Aluna"
  },
  // --- 3 Lantai Series ---
  {
    id: "alaya",
    series: "3-lantai",
    title: "Tipe Alaya",
    specs: { kt: 4, km: 4, lb: 220, lt: 240 },
    price: "Rp 2.2 M-an",
    denahImage: "images/ASSETS/Denah/3.png",
    denahTitle: "Denah Tipe Alaya",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Alaya"
  },
  {
    id: "ayana",
    series: "3-lantai",
    title: "Tipe Ayana",
    specs: { kt: 5, km: 5, lb: 300, lt: 350 },
    price: "Rp 2.8 M-an",
    denahImage: "images/ASSETS/Denah/4.png",
    denahTitle: "Denah Tipe Ayana",
    whatsappText: "Halo, saya tertarik dengan Asanna Tipe Ayana"
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
  return `
    <div class="bg-[#faf8f5] dark:bg-surface-dark p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] border border-[#eaddcf] dark:border-white/10 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow duration-300">
        <div>
            <h3 class="text-xs lg:text-2xl font-serif font-extrabold text-[#a0724f] dark:text-[#d4af37] mb-3 lg:mb-4 uppercase tracking-widest border-b border-[#eaddcf] pb-2">
                ${house.title}
            </h3>
            <div class="grid grid-cols-2 gap-y-2 gap-x-2 text-[10px] lg:text-sm text-[#5a260b] dark:text-gray-300 mb-4 lg:mb-6 leading-tight font-bold">
                <div class="flex items-center gap-1.5 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[14px] lg:text-[20px] font-bold">bed</span>
                    <span>${house.specs.kt} KT</span>
                </div>
                <div class="flex items-center gap-1.5 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[14px] lg:text-[20px] font-bold">bathtub</span>
                    <span>${house.specs.km} KM</span>
                </div>
                <div class="flex items-center gap-1.5 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[14px] lg:text-[20px] font-bold">width_full</span>
                    <span>LB ${house.specs.lb}</span>
                </div>
                <div class="flex items-center gap-1.5 lg:gap-2">
                    <span class="material-symbols-outlined text-[#a0724f] text-[14px] lg:text-[20px] font-bold">crop_square</span>
                    <span>LT ${house.specs.lt}</span>
                </div>
            </div>
        </div>
        
        <div class="mb-2 lg:mb-4 border-t border-[#eaddcf] pt-2 lg:pt-3">
            <p class="text-[10px] lg:text-xs text-[#5a260b] mb-1 font-bold">Harga Mulai</p>
            <p class="text-xl lg:text-2xl font-extrabold text-[#a0724f] dark:text-[#d4af37]">${house.price}</p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <button onclick="openDenah('${house.id}')"
                class="w-full py-2 lg:py-3 rounded-lg border border-[#5a260b] text-[#5a260b] font-bold text-[10px] uppercase tracking-widest hover:bg-[#5a260b] hover:text-white transition-all">
                Lihat Denah
            </button>
            <a href="#contact"
                class="w-full py-2 lg:py-3 rounded-lg bg-[#5a260b] text-[#f4efe7] font-bold text-[10px] uppercase tracking-widest hover:bg-[#3e1a07] transition-all shadow-md flex items-center justify-center text-center">
                Detail & Pricelist
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
  /*                                FORM LOGIC                                  */
  /* -------------------------------------------------------------------------- */

  const form = document.getElementById("inquireForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;

      btn.innerHTML = "Mengirim...";
      btn.disabled = true;

      setTimeout(() => {
        alert(
          "Terima kasih atas minat Anda pada Asanna Village! Tim kami akan segera menghubungi Anda."
        );
        this.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
      }, 1500);
    });
  }

  // Initialize Rendering
  renderHouseCards();
  startImageSwap();
});
