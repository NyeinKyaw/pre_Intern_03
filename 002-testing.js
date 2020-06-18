document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.watch').onclick = counter1;
});

let count = 0, count1 = 0;

function counter(){
    count++;
    //document.querySelector('.col-3').innerHTML = count;
    document.querySelector('p').innerHTML = count;
    document.querySelector('.counting').innerHTML = count;
    document.querySelector('#counting').innerHTML = count;
    
    if(count%10==0 || count%25==0){
        alert('Your counter is at ' + count);
        console.log(count);
    }
}

function counter1(){
    count1++;
    document.querySelector('#watch').innerHTML = count1;
}