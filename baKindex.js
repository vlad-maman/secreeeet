document.addEventListener("DOMContentLoaded", () => {

  // ▶️ відкриття відео
  document.querySelectorAll(".play-movie-icon").forEach(btn => {
    btn.addEventListener("click", () => {
      const film = btn.closest(".single-film");

      setTimeout(() => {
        film.classList.add("single-film-in");
      }, 700);

      document.querySelectorAll(".single-film")
        .forEach(el => el.classList.add("single-film-animate"));

      film.classList.add("single-film-active");
    });
  });

  // ❌ закриття + пауза відео
  document.querySelectorAll(".video-tag-close").forEach(closeBtn => {
    closeBtn.addEventListener("click", () => {
      const film = closeBtn.closest(".single-film");
      const video = film.querySelector("video");

      if (video) video.pause();

      setTimeout(() => {
        film.classList.remove("single-film-active");
      }, 1500);

      setTimeout(() => {
        document.querySelectorAll(".single-film")
          .forEach(el => el.classList.remove("single-film-animate"));
      }, 800);

      film.classList.remove("single-film-in");
    });
  });

});
