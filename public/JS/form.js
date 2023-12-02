// const form= [...document.querySelector('form').children];

// form.foreach((item,i)=>{
//     setTimeout(()=>{
//         item.style.opacity=1;

//     },i*100);

// })

window.onload=()=>{
    if(sessionStorage.name){
        location.hred='/';
    }
}


const name= document.querySelector('#name')||null;
const email= document.querySelector('#email');
const password= document.querySelector('#password');
const submit= document.querySelector('.signupBtn');
const submit2= document.querySelector('#signinBtn');

if(!name){
    submit2.addEventListener('click',()=>{
        

        fetch('/login-user',{
            method:'post',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res=>res.json())
        .then(data=>{
            validateData(data);
        })

    })

}else {
    submit.addEventListener('click',()=>{
        fetch('/register-user',{
            method: 'post',
            headers: new Headers({'Content-Type':'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        })
        .then(res=>res.json())
        .then(data=>{
           validateData(data);
        })
    })
}
const validateData= (data)=>{
    if(!data.name){
        alertbox(data);
    }
    else{
        sessionStorage.name= data.name;
        sessionStorage.email= data.email;
        location.href= '/';

    }
}

const alertbox=(data)=>{
    const alertContainer= document.querySelector('.alert-box');
    const alertMsg=document.querySelector('.alert');

    alertMsg.innerHTML= data;
    alertContainer.style.top='5%';
    setTimeout(()=>{
        alertContainer.style.top=null;

    },5000)
}

