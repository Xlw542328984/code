function filter_list(l) {
    // Return a new array with the strings filtered out
    var nums = [];
    for(let i = 0;i < l.length;i++){
      if(typeof l[i] == 'number'){
          nums.push(l[i]);
      }
    }
    return nums;
  }
  var l = [1,2,'a','b'];
  console.log(filter_list(l));