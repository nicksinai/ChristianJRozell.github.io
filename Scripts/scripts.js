function menuopen() {
  let menu_contents; //declares a variable
  menu_contents = Array.from(document.getElementsByClassName("hide")); //returns a nodelist that is changed to an array, array contains the sidebar menu items
  menu_contents[0].style.display = "block"; //allows for the items in the array to be styled when function is activated
  menu_contents[1].style.display = "block";
  menu_contents[2].style.display = "block";
  menu_contents;
  // varible
}
function menuclose() {
  let menu_contents; //declares a variable
  menu_contents = Array.from(document.getElementsByClassName("hide")); //returns a nodelist that is changed to an array, array contains the sidebar menu items
  menu_contents[0].style.display = "none"; //allows for the items in the array to be styled when function is activated
  menu_contents[1].style.display = "none";
  menu_contents[2].style.display = "none";
}
