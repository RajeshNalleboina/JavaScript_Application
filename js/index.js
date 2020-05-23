//    get body tag here

var body=document.getElementById("root"); //parent


// create elements
var h1=document.createElement("h1"); //child
h1.textContent="Resume";
// h1 is child of body tag
body.appendChild(h1);

// create section with main calss
var main=document.createElement("section"); //child
main.classList.add("main");
body.appendChild(main);

// creating leftside article
{/* <article class="leftSide">  // its a child of main */}
var leftSide=document.createElement("article");
leftSide.classList.add("leftSide");
main.appendChild(leftSide);

{/* <section class="image"> // child of leftSide article */}
var image=document.createElement("section");
image.classList.add("image");
leftSide.appendChild(image);

{/* <img src="images/profile.jpg" alt="rajesh profile"> */}
var img=document.createElement("img");
img.src="images/profile.jpg";
img.alt="rajesh profile";
image.appendChild(img);

// add hr to the child of leftside
leftSide.appendChild(document.createElement("hr"));

{/* <section class="details"> -->
                <h2>Rajesh</h2> // child of details
                <h4>8998734533</h4> // child of details
                <h4>rajesh@gmail.com</h4> // child of details
            </section>
</section> */}

var details=document.createElement("section");
details.classList.add("details");
leftSide.appendChild(details);

// careting h2 tag
var name1=document.createElement("h2");
name1.textContent="Rajesh";
details.appendChild(name1);
// mobile number
var mobile=document.createElement("h4");
mobile.textContent="8998734533";
details.appendChild(mobile);
// email
var email=document.createElement("h4");
email.textContent="rajesh@gmail.com";
details.appendChild(email);

// <section class="address">
// <p>S/o Ravindra Babu</p>
// <p>village</p>
// <p>Prathipadu</p>
// <p>Guntur-522015</p>
// </section>
var address=document.createElement("section");
address.classList.add("address");
leftSide.appendChild(address);

// father name
var fname=document.createElement("p");
fname.textContent="S/o Ravindra Babu";
address.appendChild(fname);

// village
var village=document.createElement("p");
village.textContent="Vangipuram";
address.appendChild(village);
// mandal
var mandal=document.createElement("p");
mandal.textContent="Prathipadu";
address.appendChild(mandal);
// dist
var dist=document.createElement("p");
dist.textContent="Guntur- 522015";
address.appendChild(dist);






