const icons = document.querySelectorAll(".action-block i");

icons.forEach((icon) => {
	icon.addEventListener("click", function (event) {
		if (!this.classList.contains("fa-share-from-square")) {
			if (this.classList.contains("fa-solid")) {
				this.classList.add("fa-regular");
				this.classList.remove("fa-solid");
			} else {
				this.classList.add("fa-solid");
				this.classList.remove("fa-regular");
			}
		}
	});
});
