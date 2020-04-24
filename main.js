const container = document.querySelector("#wishList");

document.querySelector("#save").addEventListener("click", () => {
    item = document.getElementById("itemVal").value
    store = document.getElementById("storeVal").value
    
    prompt = `I can purchase ${item} at ${store}`
    container.innerHTML = prompt    
    document.querySelector("#itemVal").value = "";
    document.querySelector("#storeVal").value = "";
    document.querySelector("#itemVal").focus();
})