function isanagram(str){
    var st1=str.toLowerCase();
   
    var arr = st1.split('');
      var str2=str.toLowerCase();
    var arr2 = str2.split('');

    var tmp;
    for(var i = 0; i < arr.length; i++){
      for(var j = i + 1; j < arr.length; j++){
    
        if(arr[i] > arr[j]){
          tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }
      }
    }
      for(var i = 0; i < arr2.length; i++){
      for(var j = i + 1; j < arr2.length; j++){
    
        if(arr2[i] > arr2[j]){
          tmp = arr2[i];
          ar2r[i] = arr2[j];
          arr2[j] = tmp;
        }
      }
    }
    return arr.join('');
    return arr2.join('');
  }
  var string1=s_String("celler");
 var string2=s_String("recell");
  var length1=string1.length;
  var length2=string2.length;
  if(length1==length2)
  {
      if(string1==string2)
      {
          console.log("true");
      }
      else 
      {
          console.log("false");
      }
    
  }
