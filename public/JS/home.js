const greeting= document.querySelector('#greetings');
window.onload=()=>{
    if(!sessionStorage.name){
        location.href='/login';
    }
    else{
        greeting.innerHTML=`hello  ${sessionStorage.name}`;
    }
}

const logOut=document.querySelector('#logout')

logOut.onclick= ()=>{
    sessionStorage.clear();
    location.reload();

}