const header = document.getElementById("header")

window.onresize = () => {
    console.log("hello  resizer")
    
    let a = innerWidth
    console.log("log check width: ", a)
    
    let toatle = screen.width
    
    
    console.log(toatle / 10, a, toatle / 2);


    if (a <= toatle / 2 && a >= toatle / 10) {
        console.log("yellow");
        header.classList.add("test");
        header.style.setProperty("--element-height", a);
    }
    else if (a <= toatle / 2 && a >= toatle / 10) {
      console.log("black");
      header.classList.remove("test");
      header.style.setProperty("--element-height", a);
    }

}
