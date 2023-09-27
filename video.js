document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("fullscreen-video");
  const websiteContent = document.getElementById("website-content");

  video.addEventListener("ended", function () {
    video.style.display = "none";

    websiteContent.style.display = "block";
    websiteContent.style.opacity = "1";
  });
});
