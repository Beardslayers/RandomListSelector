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
            console.log(list);
            list.sort(() => Math.random() - 0.5);
            console.log(list);
            list = list.join("\n");
            console.log(list);
            document.getElementById("Output").innerText = list;
        }
    })
});