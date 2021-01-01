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

  //create a dropdown option for each object in the array
  for (let i = 0; i < data.length; i++) {
    option = document.createElement("option");
    console.log("hello");
    option.text = data[i].Make;
    option.value = data[i].Year;
    dropdown.add(option);
  }
});
//fix for loop
//google async await
