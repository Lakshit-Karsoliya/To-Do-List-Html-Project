console.log('Script2.O Loaded');
window.onload=() =>{
var textArea=document.getElementById('Task');
var count='';
var d="";
var taskHolder="";
textArea.addEventListener('change',function(event){
   taskHolder=event.target.value;
});
var addbtn=document.getElementById('addTask');
    addbtn.addEventListener('click',function (){
  if(taskHolder==="" || taskHolder==null ||taskHolder===undefined ){
    window.alert('please enter tasks in List');
  }
  else{
      
      var h=document.querySelector('#ListContainer');
      var newhElement=document.createElement('h1');
      var textNode=document.createTextNode(taskHolder);
      newhElement.appendChild(textNode);
      newhElement.id="list-"+(count+1);
      h.appendChild(newhElement);
      count=parseInt(count+1);
      textArea.placeholder.value="";
      d=d+"\n"+taskHolder+"\n";
      console.log(taskHolder);
      //console.log(d);
    };
  });
var db=document.getElementById('download_link');
db.addEventListener('click',function(){
var text=d;
console.log(text);
var data = new Blob([text],{type:"text/plain"});
var url=window.URL.createObjectURL(data);
db.href=url;
  });
  
var rm=document.getElementById('clr_all');
rm.addEventListener('click',function(){
  window.location.reload(true);
});
  
}
