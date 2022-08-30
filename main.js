let btn = document.getElementById("btn");
let sec = document.getElementById("container");
let input = document.getElementById("input");

// function sumbit task
btn.addEventListener("click", submit);

if (localStorage.length > 0) {
  sec.innerHTML = localStorage.getItem("task");
}
function submit(eo) {
  // eo.preventDefault();
  let tasks = ` <div class="task">
    <span class="icon-star icon"> </span>
    <p  class="task-text">${input.value}</p>

    <div>
      <span class="icon-trash icon"> </span>

      <span class="icon-angry2 icon"> </span>
    </div>

   </div>
`;

  if (input.value != "") {
    sec.innerHTML += tasks;
    input.value = "";
    input.focus();
  }

  localStorage.setItem("task", sec.innerHTML);
}

// function delete
let spanHeart = document.querySelector(".icon-angry2 icon");
let btncon = document.getElementById("btncon");
let angry = document.querySelector(".icon-angry2");

container.addEventListener("click", function (eo) {
  if (eo.target.className == "icon-trash icon") {
    let del = eo.target.parentElement.parentElement.remove();
    localStorage.removeItem(del);
    submit();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");

    let heart = `<span class="icon-heart"></span>`;
    eo.target.parentElement.innerHTML += heart;
  } else if (eo.target.className == "icon-heart") {
    eo.target.classList.add("dn");

    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("finish");
    let angryyy = `<span class="icon-angry2 icon"> </span>`;
    eo.target.parentElement.innerHTML += angryyy;
  } else if (eo.target.className == "icon-star icon") {
    eo.target.classList.add("orange");

    let taskgoal = eo.target.parentElement;

    sec.prepend(taskgoal);
  } else if (eo.target.className == "icon-star icon orange") {
    eo.target.classList.remove("orange");
  }
});
