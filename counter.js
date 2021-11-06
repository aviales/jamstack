// The mix of high order functions, plus dictionaries with functions (objects), plus IIFE
// allow us to create encapsulated modules (module pattern)

(function(firstValue){

    var currentValue = firstValue
    var addBtn = document.querySelector("#add")
    var removeBtn = document.querySelector('#remove')
    var counterSpan = document.querySelector('#counter')
    
    var logger = function () { 
      console.log("El valor actual es: ", currentValue);
     }
  
    var increment = function(step){
      currentValue += step
      logger()
    }
    var decrement = function(step){
      currentValue -= step
      logger()
    }
  
  
    addBtn.addEventListener('click',function(e){
      e.preventDefault();
      increment(1)
      counterSpan.innerText = currentValue
    })
  
    removeBtn.addEventListener('click',function(e){
      e.preventDefault();
      decrement(1)
      counterSpan.innerText = currentValue
    })
  })(0)