// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // ---------- IMPORTANT ----------
  // REPLACE THIS URL with your actual GitHub Release APK link for version 1.0.3
  const APK_DOWNLOAD_URL = 'https://github.com/arenaXTeamUp/website/releases/download/1.0.3/arenax.apk';
  // ------------------------------
  
  const toast = document.getElementById('toast-msg');
  
  function showToast(message, isError = false) {
    if (!toast) return;
    toast.textContent = message || '⬇️ Download started — ArenaX APK';
    toast.style.borderLeftColor = isError ? '#ffa500' : '#FFD700';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function startDownload() {
    showToast('📦 Starting download... check your browser');
    setTimeout(() => {
      window.location.href = APK_DOWNLOAD_URL;
    }, 200);
  }

  // main hero button
  const mainBtn = document.getElementById('direct-apk-btn');
  // bottom button
  const bottomBtn = document.getElementById('bottom-apk-btn');

  if (mainBtn) {
    mainBtn.addEventListener('click', (e) => {
      e.preventDefault();
      startDownload();
    });
  }
  if (bottomBtn) {
    bottomBtn.addEventListener('click', () => {
      startDownload();
    });
  }

  // The Indus Store button uses a direct link, no JS needed.
  // But you can optionally add tracking here if needed.

  console.log('🔥 ArenaX APK landing | v1.0.3 | ready for mobile, tablet, PC');
  console.log(`APK URL configured: ${APK_DOWNLOAD_URL}`);
});
