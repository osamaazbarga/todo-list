class todolistCLass{
    static count=0;
    
    constructor(task){
        this.id=todolistCLass.count++;
        this.task=task;
        this.date=this.getdate();
        this.check=false;
    }

    getdate(){
        const this_day     = new Date();
        return this_day.getFullYear()+'/'+(this_day.getMonth()+1)+'/'+this_day.getDate()+' '+this_day.getHours()+':'+this_day.getMinutes();

    
    }
}

class Task{
    constructor(){
        this.todolist=[];
    }
    
    // addtodo(todo){
    //     this.todolist.push(todo);
    // }
    showtodo(){
        return this.todolist;
    }
    createtodo(){
        const newtodo=new todolistCLass(input.value);
        this.todolist.push(newtodo);
        //console.log(this.todolist[0].task)
        return newtodo;
    }
    deletetodo(id){
        for (let i = 0; i < this.todolist.length; i++) {
            if(this.todolist[i].id==id){
                this.todolist.splice(i, 1)
                return true;
            } 
        }
        return false;
    }

    updatetodo(id,newindex){
        if(id!=null){
            for (let i = 0; i < this.todolist.length; i++) {
                if(this.todolist[i].id==id){
                    this.todolist[i].task=newindex;
                    return this.todolist[i];
                }
            }
    
        }
        return false
    }

    readtodo(id){
        if(id!=null){
            for (let i = 0; i < this.todolist.length; i++) {
                if(this.todolist[i].id==id){
                    //this.todolist[i].task=newindex;
                    return this.todolist[i];
                }
            }
    
        }
        return false
        
    }


}

const add=document.querySelector(".btntodo");
const display=document.querySelector(".display");
const input=document.getElementById("todoInput");
let w1=new Task();
//console.log(input);
function addd(){
    console.log(input.value);
}


add.addEventListener('click',function(){
    

    let newtodo= w1.createtodo();
    
    console.log(newtodo.id)
    if(input.value!=null){
        let mydiv=document.createElement("div");
        mydiv.classList.add("mytodo");
        mydiv.dataset.index=newtodo.id
        let defultdiv=`
        <input type="checkbox" id="myCheck" >
        <div class="date">${newtodo.date}</div>
        <div class="task">${newtodo.task}</div>
        <button class="deletetodo"><i class="far fa-trash-alt"></i></button>
        <button class="updatetodo"><i class="far fa-edit"></i></button>
        `
        
        mydiv.innerHTML=defultdiv;
        display.appendChild(mydiv)
        console.log(w1.showtodo())
        let updatetodo=document.querySelectorAll(".updatetodo");
        let deletetodo=document.querySelectorAll(".deletetodo");
        

        deletetodo.forEach( btn => {btn.addEventListener('click', function(){
                w1.deletetodo(this.parentElement.dataset.index);
                this.parentElement.remove()
                //w1.showtodo()
                console.log(w1.showtodo())
                console.log(this.parentElement)
            });
        })

        updatetodo.forEach( btn => {btn.addEventListener('click', function(){
                //w1.updatetodo(this.parentElement.dataset.index,'osama');
                //this.parentElement.firstElementChild.remove();
                

                mydiv.innerHTML=`
                <input type="text" name="text" id="newtask" value="${newtodo.task}">
                <button class="change"><i class="far fa-edit"></i></button>
                `
                let inputtochange=document.querySelector("#newtask");
                let changetodo=document.querySelectorAll(".change");
                changetodo.forEach( btn => {btn.addEventListener('click', function(){
                    console.log('osama')
                    //console.log(w1.showtodo())
                    newtodo=w1.updatetodo(this.parentElement.dataset.index,inputtochange.value)
                    mydiv.innerHTML=`
                    <input type="checkbox" id="myCheck">
                    <div class="date">${newtodo.date}</div>
                    <div class="task">${newtodo.task}</div>
                    <button class="deletetodo"><i class="far fa-trash-alt"></i></button>
                    <button class="updatetodo"><i class="far fa-edit"></i></button>
                    `
                    //display.appendChild(mydiv)
                    

                });

            })
            });
        })
        //myvfunc();
        // function myvfunc(){
        //     let checkBox = document.getElementById("myCheck");
        //     //console.log(checkBox.checked)

        //     if (checkBox.checked == true){
        //         mydiv.innerHTML=`
        //             <input type="checkbox" id="myCheck">
        //             <div class="task"><del>${newtodo.task}</del></div>
        //             <div class="date">${newtodo.date}</div>
        //             <button class="deletetodo"><i class="far fa-trash-alt"></i></button>
        //             <button class="updatetodo"><i class="far fa-edit"></i></button>
        //             `
        //     }

        //     else {
        //         mydiv.innerHTML=`
        //             <input type="checkbox" id="myCheck">
        //             <div class="task">${newtodo.task}</div>
        //             <div class="date">${newtodo.date}</div>
        //             <button class="deletetodo"><i class="far fa-trash-alt"></i></button>
        //             <button class="updatetodo"><i class="far fa-edit"></i></button>
        //             `
        //     }
            
        
        // }

        let checkBox = document.querySelectorAll("#myCheck");
        checkBox.forEach( btn => {btn.addEventListener('click', function(){

            console.log(btn.checked)
            if (btn.checked == true){
                mydiv.innerHTML=`
                    <input type="checkbox" id="myCheck" >
                    <div class="date">${newtodo.date}</div>
                    <div class="task"><del>${newtodo.task}</del></div>
                    <button class="deletetodo"><i class="far fa-trash-alt"></i></button>
                    <button class="updatetodo"><i class="far fa-edit"></i></button>
                    `
            }
            else {
                mydiv.innerHTML=`
                    <input type="checkbox" id="myCheck">
                    <div class="date">${newtodo.date}</div>
                    <div class="task">${newtodo.task}</div>
                    <button class="deletetodo"><i class="far fa-trash-alt"></i></button>
                    <button class="updatetodo"><i class="far fa-edit"></i></button>
                    `
            }
        })})
        // console.log(checkBox.checked)
        // if (checkBox.checked == true){
        //     console.log('osama')
        //  }else console.log('not')

    }
    
      

})

// function handleLoad() {
//     w1 = JSON.parse(localStorage.getItem('w1'));
//   }
  
//   function updateLocalStorage() {
//     localStorage.setItem('w1', JSON.stringify(w1));
//   }
  
//   window.addEventListener('load', handleLoad);
  


