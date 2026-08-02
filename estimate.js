const service = document.getElementById("service");
const options = document.getElementById("serviceOptions");

service.addEventListener("change", showOptions);

function showOptions() {

    options.innerHTML = "";

    const value = service.value;

    switch (value) {

        case "minor":
            options.innerHTML = `
                <button onclick="showPrice('€200 - €500')">
                    Calculate Estimate
                </button>
            `;
        break;
case "newroof":

options.innerHTML=`

<div class="form-group">

<label>Roof Type</label>

<select id="newRoofType">

<option value="tile">Tile Roof</option>

<option value="slate">Slate Roof</option>

</select>

</div>

<div class="form-group">

<label>Roof Size</label>

<select id="roofSize">

<option value="3">3 Metres</option>
<option value="4">4 Metres</option>
<option value="5">5 Metres</option>
<option value="6">6 Metres</option>
<option value="7">7 Metres</option>
<option value="8">8 Metres</option>
<option value="9">9 Metres</option>
<option value="10">10+ Metres</option>

</select>

</div>

<div class="form-group">

<label>Property Height</label>

<select id="newHeight">

<option value="0">1 Storey</option>
<option value="75">2 Storey (+€75)</option>
<option value="150">3 Storey (+€150)</option>

</select>

</div>

<button onclick="newRoofPrice()">

Calculate Estimate

</button>

`;

break;

        case "repair":
            options.innerHTML = `
                <div class="form-group">

                    <label>Roof Type</label>

                    <select id="roofType">

                        <option value="tile">Tile Roof</option>
                        <option value="slate">Slate Roof</option>

                    </select>

                </div>

                <div class="form-group">

                    <label>Repair Size</label>

                    <select id="repairSize">

                        <option value="1">1 Metre</option>
                        <option value="2">2 Metres</option>
                        <option value="3">3+ Metres</option>

                    </select>

                </div>

                <div class="form-group">

                    <label>Property Height</label>

                    <select id="height">

                        <option value="0">1 Storey</option>
                        <option value="75">2 Storey (+€75)</option>
                        <option value="150">3 Storey (+€150)</option>

                    </select>

                </div>

                <button onclick="roofRepairPrice()">

                    Calculate Estimate

                </button>
            `;
        break;
case "chimney":

options.innerHTML=`

<div class="form-group">

<label>Choose Service</label>

<select id="chimneyService">

<option value="repair">Chimney Repair (€250 - €500)</option>
<option value="repoint">Chimney Repointing (€600 - €900)</option>
<option value="rebuild">Chimney Rebuild (From €1000)</option>

</select>

</div>

<button onclick="chimneyPrice()">

Calculate Estimate

</button>

`;

break;
case "gutter":

options.innerHTML=`

<div class="form-group">

<label>Choose Service</label>

<select id="gutterService">

<option value="clean">Gutter Cleaning</option>

<option value="repair">Gutter Repair</option>

<option value="replace">Gutter Replacement</option>

<option value="downrepair">Downpipe Repair</option>

<option value="downreplace">Downpipe Replacement</option>

</select>

</div>

<button onclick="gutterPrice()">

Calculate Estimate

</button>

`;

break;
case "fascia":

options.innerHTML=`

<div class="form-group">

<label>Choose Service</label>

<select id="fasciaService">

<option value="repair">Fascia Repair</option>

<option value="replace">Fascia Replacement</option>

<option value="soffitrepair">Soffit Repair</option>

<option value="soffitreplace">Soffit Replacement</option>

</select>

</div>

<button onclick="fasciaPrice()">

Calculate Estimate

</button>

`;

break;
    }

}

function roofRepairPrice(){

    let roof=document.getElementById("roofType").value;

    let size=document.getElementById("repairSize").value;

    let height=parseInt(document.getElementById("height").value);

    let price=roof==="tile" ? 600 : 800;

    if(size==="2") price+=500;

    if(size==="3") price+=900;

    price+=height;

    showPrice("From €"+price);

}
function newRoofPrice(){

    let roof = document.getElementById("newRoofType").value;

    let size = parseInt(document.getElementById("roofSize").value);

    let height = parseInt(document.getElementById("newHeight").value);

    let price = roof === "tile" ? 650 : 950;

    if(size === 2){
        price *= 2;
    }

    if(size >= 3){
        price *= size;

        if(roof === "tile"){
            price -= 100;
        }else{
            price -= 150;
        }
    }

    price += height;

    showPrice("From €" + price);

}
function chimneyPrice(){

let service=document.getElementById("chimneyService").value;

if(service==="repair"){

showPrice("€250 - €500");

}

else if(service==="repoint"){

showPrice("€600 - €900");

}

else{

showPrice("From €1000");

}

}
function gutterPrice(){

let service=document.getElementById("gutterService").value;

switch(service){

case "clean":
showPrice("From €80");
break;

case "repair":
showPrice("€100 - €250");
break;

case "replace":
showPrice("From €250");
break;

case "downrepair":
showPrice("From €150");
break;

case "downreplace":
showPrice("From €200");
break;

}

}
function showPrice(price) {

    document.getElementById("result").style.display = "block";
    document.getElementById("customerForm").style.display = "block";

    document.getElementById("price").innerHTML = price;
    document.getElementById("estimatedPrice").value = price;

// Roof Type
if (document.getElementById("roofType")) {
    document.getElementById("roofTypeHidden").value =
        document.getElementById("roofType").options[
            document.getElementById("roofType").selectedIndex
        ].text;
}

// Roof Size
if (document.getElementById("repairSize")) {
    document.getElementById("roofSizeHidden").value =
        document.getElementById("repairSize").options[
            document.getElementById("repairSize").selectedIndex
        ].text;
}

// Property Height
if (document.getElementById("height")) {
    document.getElementById("propertyHeightHidden").value =
        document.getElementById("height").options[
            document.getElementById("height").selectedIndex
        ].text;
}
// New Roof Type
if (document.getElementById("newRoofType")) {
    document.getElementById("roofTypeHidden").value =
        document.getElementById("newRoofType").options[
            document.getElementById("newRoofType").selectedIndex
        ].text;
}

// New Roof Size
if (document.getElementById("roofSize")) {
    document.getElementById("roofSizeHidden").value =
        document.getElementById("roofSize").options[
            document.getElementById("roofSize").selectedIndex
        ].text;
}

// New Property Height
if (document.getElementById("newHeight")) {
    document.getElementById("propertyHeightHidden").value =
        document.getElementById("newHeight").options[
            document.getElementById("newHeight").selectedIndex
        ].text;
}
// Chimney
if (document.getElementById("chimneyService")) {
    document.getElementById("roofTypeHidden").value =
        document.getElementById("chimneyService").options[
            document.getElementById("chimneyService").selectedIndex
        ].text;

    document.getElementById("roofSizeHidden").value = "";
    document.getElementById("propertyHeightHidden").value = "";
}
// Gutter
if (document.getElementById("gutterService")) {
    document.getElementById("roofTypeHidden").value =
        document.getElementById("gutterService").options[
            document.getElementById("gutterService").selectedIndex
        ].text;

    document.getElementById("roofSizeHidden").value = "";
    document.getElementById("propertyHeightHidden").value = "";
}
// Fascia & Soffit
if (document.getElementById("fasciaService")) {
    document.getElementById("roofTypeHidden").value =
        document.getElementById("fasciaService").options[
            document.getElementById("fasciaService").selectedIndex
        ].text;

    document.getElementById("roofSizeHidden").value = "";
    document.getElementById("propertyHeightHidden").value = "";
}
    // Roof Type
if (document.getElementById("roofType")) {
    document.getElementById("roofTypeHidden").value =
        document.getElementById("roofType").options[
            document.getElementById("roofType").selectedIndex
        ].text;
}

// Repair Size
if (document.getElementById("repairSize")) {
    document.getElementById("roofSizeHidden").value =
        document.getElementById("repairSize").options[
            document.getElementById("repairSize").selectedIndex
        ].text;
}

// Property Height
if (document.getElementById("height")) {
    document.getElementById("propertyHeightHidden").value =
        document.getElementById("height").options[
            document.getElementById("height").selectedIndex
        ].text;
}
    document.getElementById("estimatedPrice").value = price;

    const service = document.getElementById("service");

    document.getElementById("selectedService").value =
        service.options[service.selectedIndex].text;
}

const services = {
    minor: "Minor Roof Repair",
    repair: "Roof Repair",
    newroof: "New Roof Installation",
    chimney: "Chimney Services",
    gutter: "Gutter Services",
    fascia: "Fascia & Soffit Services"
};

document.getElementById("selectedService").value =
    services[service.value] || service.value;
    console.log("Price:", document.getElementById("estimatedPrice").value);
    console.log("Service:", document.getElementById("selectedService").value);


function fasciaPrice(){

let service=document.getElementById("fasciaService").value;

switch(service){

case "repair":
showPrice("€250 - €500");
break;

case "replace":
showPrice("From €500");
break;

case "soffitrepair":
showPrice("€250 - €500");
break;

case "soffitreplace":
showPrice("From €500");
break;

}

}
document.getElementById("quoteBtn").addEventListener("click",function(){

let name=document.getElementById("customerName").value;

let phone=document.getElementById("customerPhone").value;

let email=document.getElementById("customerEmail").value;

let address=document.getElementById("customerAddress").value;

if(name===""||phone===""||email===""){

alert("Please complete your details.");

return;

}

alert("Thank you! We will contact you shortly.");

});
document.getElementById("customerForm").addEventListener("submit", function () {

    document.getElementById("estimatedPrice").value =
        document.getElementById("price").innerText;

    const service = document.getElementById("service");

    document.getElementById("selectedService").value =
        service.options[service.selectedIndex].text;
});