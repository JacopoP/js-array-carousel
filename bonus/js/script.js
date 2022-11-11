const container=document.getElementById("container");
const selector=document.getElementById("selector");
const arrImg=["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];
const arr=[];
const arrS=[];

for(let i=0; i<5; i++){
    container.innerHTML+=`<img src="img/${arrImg[i]}">`;
    selector.innerHTML+=`<img src="img/${arrImg[i]}">`;
}

for(let i=0; i<5; i++){
    arr.push(document.querySelector(`#container img[src*="${arrImg[i]}"]`));
    arrS.push(document.querySelector(`#selector img[src*="${arrImg[i]}"]`));
}

let n=0
arr[n].classList.add("active");
arrS[n].classList.add("active");

document.getElementById("next").addEventListener("click",
    function(){
        arr[n].classList.remove("active");
        arrS[n].classList.remove("active");
        if(n<4){
            n++;
        }
        else if(n==4){
            n=0;
        }
        arr[n].classList.add("active");
        arrS[n].classList.add("active");
    }
);

document.getElementById("prev").addEventListener("click",
    function(){
        arr[n].classList.remove("active");
        arrS[n].classList.remove("active");
        if(n>0){
            n--;
        }
        else if(n==0){
            n=4;
        }
        arr[n].classList.add("active");
        arrS[n].classList.add("active");
    }
);

for(let i =0; i<5; i++){
    arrS[i].addEventListener("click",
        function(){
            for(let k=0; k<5; k++){
                arr[n].classList.remove("active");
                arrS[k].classList.remove("active");
            }
            n=i;
            arr[n].classList.add("active");
            arrS[n].classList.add("active");
        }
    );
}