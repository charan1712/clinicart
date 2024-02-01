var imageArr = ["./Asset/images/doctor1.jpg","./Asset/images/doctor2.jpg"];
console.log(imageArr)
var num=0;
function inc(){
    count = num++;
    if(count%2==0)
    {
        document.querySelector("#docimage").style.backgroundImage=`url(${imageArr[num]})`;
        document.getElementById("heading").style.display="none"
        document.getElementById("heading2").style.display="flex" 
    }
    else if(count%2==1)
    {
        num=0;
        document.querySelector("#docimage").style.backgroundImage=`url(${imageArr[num]})`;
        document.getElementById("heading").style.display="flex"
        document.getElementById("heading2").style.display="none"
    }
}

var num1=0;
function dec(){
    count = num1++;
    if(count%2==0)
    {
        document.querySelector("#docimage").style.backgroundImage=`url(${imageArr[num1]})`;
        document.getElementById("heading").style.display="none"
        document.getElementById("heading2").style.display="flex"
    }
    else if(count%2==1)
    {
        num1=0;
        document.querySelector("#docimage").style.backgroundImage=`url(${imageArr[num1]})`;
        document.getElementById("heading").style.display="flex"
        document.getElementById("heading2").style.display="none"
    }
}


window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length;i++)
    {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
       // var revealpoint = 150;
        if(revealtop < windowheight)
        {
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
// reveals();


