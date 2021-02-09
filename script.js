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
            console.log(list);
            newList = newList.join("\n");
            document.getElementById("Output").innerText = newList;
        }
    })
});