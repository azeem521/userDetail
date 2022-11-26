var form=document.getElementById('form');
// var names=document.getElementById('name').value;
var email=document.getElementById('email').value;
var uli=document.getElementById('lists')

form.addEventListener('submit',addDetail);

var count=localStorage.getItem.length;

function addDetail(e){
    e.preventDefault();
    var names=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(names+' '+email));
    uli.appendChild(li);
    var detail={
        'name':names,
        'email':email
    };
    localStorage.setItem('user'+count,JSON.stringify(detail))
    count++
}