function percentage() {
    const amount = document.getElementById("input-number").value;
    const percent = document.getElementById("range").value;

    let result = ( amount / 100) * percent;
    let value = result.toFixed(2);

    let output = document.getElementById("output");
    output.innerHTML = value;

    let newValue = document.getElementById("percent");
    newValue.innerHTML= percent + "%";
}

const container = document.querySelector(".main-container");
container.addEventListener("input", percentage);