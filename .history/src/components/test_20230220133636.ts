export interface Fn {
  (name:string) : number[]
}

const fn:Fn = function(name:string){
  return [1]
}
