export function multiplesOf3and5(number) {
  let i=0;
  let res=0;
  for(i=0;i<number;i++){
    if( i%3==0 || i%5==0)
     res = res+i;
  }
  return res;
}

