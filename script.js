const container = document.querySelector("#container");

function makeRows(rows, cols) {
	for (i = 0; i < rows * cols; i++) {
		container.style.setProperty("--grid-rows", rows);
		container.style.setProperty("--grid-cols", cols);
		let cell = document.createElement("div");
		container.appendChild(cell).className = "grid-item";
	}
}

makeRows(16, 16);
const boxes = Array.from(document.querySelectorAll(".grid-item"));

boxes.forEach((box) => {
	box.addEventListener(
		"mouseover",
		(setColor = () => {
			const randomColor = Math.floor(Math.random() * 16777215).toString(16);
			box.style.backgroundColor = "#" + randomColor;
		})
	);
});
