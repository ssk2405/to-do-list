const inputbox = document.getElementById("input-box");
        const listContainer = document.getElementById("list-container");

        function add() {
            if (inputbox.value === '') {
                alert("Write something");
            } else {
                let li = document.createElement("li");
                li.innerHTML = inputbox.value;
                listContainer.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            inputbox.value = "";
            saveData();
        }

        listContainer.addEventListener("click", function(e) {
            if (e.target.tagName === "LI") {
                let currentValue = e.target.firstChild.textContent;
                let input = document.createElement("input");
                input.type = "text";
                input.value = currentValue;
                e.target.innerHTML = "";
                e.target.appendChild(input);
                input.focus();

                input.addEventListener("blur", function() {
                    e.target.innerHTML = input.value;
                    let span = document.createElement("span");
                    span.innerHTML = "\u00d7";
                    e.target.appendChild(span);
                    saveData();
                });

                input.addEventListener("keypress", function(event) {
                    if (event.key === "Enter") {
                        input.blur();
                    }
                });
            } else if (e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                saveData();
            }
        }, false);

        function saveData() {
            localStorage.setItem("data", listContainer.innerHTML);
        }

        function showTask() {
            listContainer.innerHTML = localStorage.getItem("data");
        }

        showTask();