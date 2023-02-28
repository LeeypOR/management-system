// export interface Fn {
//   (name:string) : number[]
// }

// const fn:Fn = function(name:string){
//   return [1]
// }

export interface People {
  name:string,
  age:number
}

interface Man {
  sex:number
}

const yy = (man:People & Man):void=>{
  console.log(man)
}

yy({
  name:'yy',
  age:18,
  sex:1
})


// const fn = function(name:string,age:number = 30):string{
//   return name + age
// }

// let a = fn('张三')
// console.log(a) 