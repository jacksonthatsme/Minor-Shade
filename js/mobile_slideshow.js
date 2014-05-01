var model = $("#model");
  var classArr = ['front','up','up-left','left','down-left','down','down-right','right','up-right'];
  var className = model.attr("class");
  
  function findIndex(){
    var className = model.attr("class");    
   
    return $.inArray(className,classArr);
    

  }
  
  function nextClass(){
    var index = findIndex();
    
    if(index >= classArr.length ){
      index = 0;
    }else{
      index = index + 1;
    }
        
    var newClass = classArr[index];
    
    return newClass;
  }
  
  function prevClass(){
    var index = findIndex();
    
    if(index === 0){
      index = 8;
    }else{
      index = index -1 ;
    }
    
    console.log(index);
    
    var newClass = classArr[index];
    
    return newClass;
  }
  
  function swapClass(newClass){
     model.removeClass(className);
     model.addClass(newClass);
  }
  
  $('.slideshow-nav-next').click(function(){
    swapClass(nextClass());
    
  });
  $('.slideshow-nav-prev').click(function(){
    swapClass(prevClass());
  });