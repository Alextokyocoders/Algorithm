function convertNumber(num){
  let lookup =['Không','Một','Hai','Ba','Bốn','Năm','Sáu','Bảy','Tám','Chín'];

  array = Array.from(num.toString());
  X = array.map(item => lookup[item]).reverse();

  for(let i = 0; i < X.length; i++){

    let alt = ['','Nghìn','Triệu'];

    if(i%3 == 0){
      if(X[i] == 'Không') X[i] = alt[i/3]
      else X[i]+= ' ' + alt[i/3];
    }

    if(i%3 == 1){
      if(X[i] == 'Không') {
        if(alt.includes(X[i-1])) X[i] = '';
        else X[i] = 'Linh';
      }
      else if(X[i] == 'Một') X[i] = 'Mười';
      else X[i]+= ' Mươi';
    }

    if(i%3 == 2) X[i]+= ' Trăm';
  }

  X = X.filter(item => item!=='');
  return X.reverse().join(' ').replace(/Không Trăm Nghìn/,'').replace(/Không Trăm$/,'');
}

console.log(convertNumber(110200100));




