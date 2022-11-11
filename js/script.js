const container=document.getElementById("container");
const arrImg=["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const arr=[];

for(let i=0; i<5; i++){
    container.innerHTML+=`<img src="img/${arrImg[i]}">`;
}

for(let i=0; i<5; i++){
    arr.push(document.querySelector(`img[src*="${arrImg[i]}"]`));
}

let n=0
arr[n].classList.add("active");
document.getElementById("prev").classList.add("hide");

document.getElementById("next").addEventListener("click",
    function(){
        if(n==0){
            document.getElementById("prev").classList.remove("hide");
        }
        arr[n].classList.remove("active");
        n++;
        arr[n].classList.add("active");
        if(n==4){
            document.getElementById("next").classList.add("hide");
        }
    }
);

document.getElementById("prev").addEventListener("click",
    function(){
        if(n==4){
            document.getElementById("next").classList.remove("hide");
        }
        arr[n].classList.remove("active");
        n--;
        arr[n].classList.add("active");
        if(n==0){
            document.getElementById("prev").classList.add("hide");
        }
    }
);