function run() {
    document.getElementById("paragraph").innerHTML = "Hello World!";
    document.getElementById("paragraph").style.backgroundColor = "green";
    document.getElementById("paragraph").style.color = "white";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumber();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    document.getElementById("random").innerHTML = ran;

    let x =  document.getElementById("random")
    
    x.innerHTML = ran;
    x.style.backgroundColor = "blue";
    x.style.color = "white";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "orange";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumber() {
    let a = userNumber();
    let b = randomNum();

    if(a!=b) {
        document.getElementById("compare").innerHTML = "Numbers are not the same. Computer got " + b + ", and user got " + a;
    } else if (a==b) {
        document.getElementById("compare").innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;        
    }
} 