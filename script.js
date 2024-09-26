function dis(val)
    {
         document.getElementById("calculation").value+=val
    }
       
         //function that evaluates the digit and return result
function solve()
    {
         let x = document.getElementById("calculation").value
         let y = eval(x)
         document.getElementById("calculation").value = y
    }
           
         //function that clear the display
function clr()
    {
         document.getElementById("calculation").value = ""
    }

function backspace() {
     var value = document.getElementById("calculation").value;
     document.getElementById("calculation").value = value.substr(0, value.length - 1);
   
}         