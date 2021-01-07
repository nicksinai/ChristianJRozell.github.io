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
//connect to api, get json
let data = (async () => {
  const where = encodeURIComponent(
    JSON.stringify({
      Make: {
        $exists: true,
      },
      Model: {
        $exists: true,
      },
      Year: {
        $exists: true,
      },
    })
  );
  const response = await fetch(
    `https://parseapi.back4app.com/classes/Carmodels_Car_Model_List?order=Model,Make,Year&excludeKeys=Category&where=${where}`,
    {
      headers: {
        "X-Parse-Application-Id": "ijyFjZ6qxEtHXo2V07pUI8uMfkelsmpxtWhbcQud", // This is your app's application id
        "X-Parse-REST-API-Key": "Ct7pA9aVNs2d7zVziMaCtcPhC3jdLndn9kXbgMml", // This is your app's REST API key
      },
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
  //console.log(data); // Here you have the data that you need
  //console.log(JSON.stringify(data, null, 2));
})();
data.then((data) => {
  //targeting "cars_dropdown"
  let dropdown = document.getElementById("cars_dropdown");
  dropdown.length = 0;
  //declares the default option
  let defaultOption = document.createElement("option");
  defaultOption.text = "Choose Make/Manufactuer";
  //adds the default option
  dropdown.add(defaultOption);
  dropdown.selectedIndex = 0;

  let option;
  let push_make_name;
  let make_name = [];
  let current_make;
  let skip;
  //create a dropdown option for each object in the array
  for (let i = 0; i < data.results.length; i++) {
    current_make = data.results[i].Make;
    //if make_name includes a value from current make return true
    skip = make_name.includes(current_make);
    //if skip is true continue
    if (skip) {
      continue;
    }
    //If statement to jump over anything with the Make of "BMW"
    //It has to run before BMW is iterated
    option = document.createElement("option");
    option.text = data.results[i].Make;
    dropdown.add(option);
    //adds current make to the mak_name array
    push_make_name = make_name.push(current_make);
    console.log(make_name);
  }
});
