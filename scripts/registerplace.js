

var jsonData;

fetch('../myplaces.json')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    jsonData = data; // Assign the parsed JSON data to the variable
    console.log('JSON data loaded:', jsonData);
  })
  .catch(error => console.error('Error loading JSON data:', error));

// var jsonData2 = JSON.parse(readFileSync("../myplaces.json")); 
// console.log("jsonData222222 ::::::::::::::: ", jsonData2)

function registerFormData() {
    // Get form values
    var name = document.getElementById("name").value;
    var type = document.getElementById("type").value;
    var description = document.getElementById("description").value;
    var open_space = document.getElementById("open_space").value;
    var latitude = document.getElementById("latitude").value;
    var longitude = document.getElementById("longitude").value;

    // console.log("jsonData ::::::::::::::: ", jsonData)

    var numberOfObjects = jsonData.length;

    // console.log("numberOfObjects ::::::::::::::: ", numberOfObjects)

    // Create JSON object
    var placeData = {
        "id": numberOfObjects++,
        "name": name,
        "type": type,
        "description": description,
        "open_space": open_space,
        "latitude": latitude,
        "longitude": longitude
    };

    // Push the new place object into the array of places
    // jsonData.push(placeData);

    // Convert the modified JavaScript object back into a JSON string
    // var updatedJsonData = JSON.stringify(jsonData);

    // Write the updated JSON string back to your local JSON file
    // localStorage.setItem('myplaces', JSON.stringify(updatedJsonData));

    // console.log("jsonData UPDATED ::::::::::::::: ", jsonData)

    // fetch('../myplaces.json', {
    //     method: 'POST', // Use POST method to update the file
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: updatedJsonData,
    // })
    // .then(response => {
    //     if (response.ok) {
    //         console.log('Place registered successfully!');
    //     } else {
    //         console.error('Failed to register place.');
    //     }
    // })
    // .catch(error => console.error('Error updating JSON file:', error));
}