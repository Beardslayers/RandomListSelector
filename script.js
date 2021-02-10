document.addEventListener('DOMContentLoaded', () => {
    console.log(document.getElementById('List').style.height);
    document.getElementById("Select").addEventListener("click", function () {
        if (document.getElementById("List").value === "") {
            document.getElementById("Output").innerText = "You can't get a subset of a blank list";
        } else {
            var list = document.getElementById("List").value.split("\n");
            for (var i = 0; i < list.length; i++) {
                if (list[i] === "" || list[i] === " ") {
                    list.splice(i, 1);
                    i--;
                }
            }
            size = document.getElementById("Size").value;
            var newList = [];
            for (var i = 0; i < size; i++) {
                newList.push(list[Math.floor(Math.random() * list.length)]);
            }
            newList = newList.reduce((r, a) => r.concat(a, "   "), [])
            newList.splice(newList.length - 1, 1);
            console.log(newList);
            var iterator = 0;
            for (i = 0; i < newList.length; i++) {
                if (newList[i] == "   ") {
                    if (iterator === 3) {
                        newList[i] = "\n";
                    }
                    iterator = (iterator + 1) % 4;
                }
            }
            newList = newList.join("");
            console.log(newList);
            document.getElementById("Output").innerText = newList;
        }
    })
});