const noShow = document.querySelectorAll(".noShow");
//Handle state to see if all items are being displayed
let isMore = false;
const containerBig = document.querySelector("#container");

function seeMore() {
  const btn = document.querySelector(".btn");
  if (!isMore) {
    containerBig.className = "containerBig";

    noShow.forEach((flavor) => {
      flavor.className = "flavorShow ";
    });

    //Container is showing all items
    isMore = true;

    //change button name to "See Less -""
    btn.textContent = "Show Less-";
  } else if (isMore) {
    containerBig.className = "containerSmall";

    //change button name to "See More -""
    btn.textContent = "Show More+";

    //Container is not showing all items
    isMore = false;
  }
}
