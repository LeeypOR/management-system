// export interface Fn {
//   (name:string) : number[]
// }

// const fn:Fn = function(name:string){
//   return [1]
// }

export interface X {
  name:string,
  age?:number
}

const fn = function(name:string,age:number = 30):string{
  return name + age
}

let a = fn('张三')
console.log(a)