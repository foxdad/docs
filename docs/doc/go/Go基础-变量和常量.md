# Go基础-变量和常量
学习编程语言中变量跟常量我们肯定是脱离不开的这也是入门的基础


### 标识符与关键字


#### 标识符


在编程语言中标识符对我们开发中变量的命名，常量名，函数名，这里为什么不说方法名呢？因为go的方法跟函数长的很像(这个我们后面说),在GO语言中标识符由字母、数字和`_`(下划线）组成，并且只能以字母和`_`开头。 举几个例子：`xiaohu`, `_123`, `_abc`, `a123`。

#### 关键字


关键字就是编程语言中预先定义好具有特殊含义的标识符，在Go语言中关键字和保留字都不建议作为变量名


go语言的**关键字**
```go
    break        default      func         interface    select
    case         defer        go           map          struct
    chan         else         goto         package      switch
    const        fallthrough  if           range        type
    continue     for          import       return       var
```
**保留字**
```go
Constants:    true  false  iota  nil(go里面的null)  

Types:    int  int8  int16  int32  int64  
                  uint  uint8  uint16  uint32  uint64  uintptr
                  float32  float64  complex128  complex64
                  bool  byte  rune  string  error

Functions:   make  len  cap  new  append  copy  close  delete
                 complex  real  imag
                 panic  recover
```


### 变量


**变量是什么**


程序运行过程中的数据都是保存在内存中，我们想要在代码中操作某个数据时就需要去内存上找到这个变量，但是如果我们直接在代码中通过内存地址去操作变量的话，代码的可读性会非常差而且还容易出错，所以我们就利用变量将这个数据的内存地址保存起来，以后直接通过这个变量就能找到内存上对应的数据了。




**变量类型**
**
go语言的常见的变量 ：整形，浮点型，布尔型，字符串可不是变量哦，知道java的小伙伴应该知道,他在每次你感觉你修改了其实是把改指针指向了修改的字符串的地址，go也同理




**声明变量**
**go语言中的变量需要声明才能使用，go语言中申明了变量必须使用(局部变量定义一定要使用不然会报错)**
**作用域：同一作用域不能重复**声明
**
**标准声明变量**
```go
//标准声明格式
var 变量名 变量类型

//go语言中的变量声明是以var开头 变量类型放在变量的后面，行尾无需分号，跟python样暂时不能链式编程
var name string
var age int
var addr string
var flag bool
```
**批量声明变量**


我们看到上面的变量声明一次就需要var go语言提供了批量声明的方式


```go
var (
    a string
    b int
    c bool
    d float32
    e float64
)
var zhangsan,lisi string
```
**变量的初始化**


上面的变量我们只对其声明没有进行初始化，输出的定义的变量我们还是可以看到值，这就是Go语言在声明变量的时候，会自动对变量对应的内存区域进行初始化操作。每个变量会被初始化成其类型的默认值，例如： 整型和浮点型变量的默认值为`0`。 字符串变量的默认值为`空字符串`。 布尔型变量默认为`false`。 切片、函数、指针变量的默认为`nil`
```go
package main
import "fmt"

func main() {
	var age1,age2 int

	fmt.Println(age1,age2)
	
}
//输出: 0 0
```
我们声明变量的时候对其进行指定初始值
```go
//变量初始化的标准格式如下：
var 变量名 类型 = 初始值

如：
var name string = "xiaohu"
var age int = 20

//批量进行初始化
var name, age = "xiaohu", 20
```
### go语言的类型推导
```go
//我们可以把变量左边的类型省略，编译器会根据等号右边的值来推导变量的类型完成初始化。
var name = "Q1mi"
var age = 18
// 看到这里是否想起了js
```
### 短变量声明
函数内部中我们可以使用更简略的 `:=` 方式声明并初始化变量 (函数内部使用的简略写法)
```go

package main

import (
	"fmt"
)

var addr = "上海" // 全局变量addr

func main() {
	name := "小狐"
	age := 200   //这个就是go的局部变量
	fmt.Println(name, age)
}
```


在上面中我们的函数内的变量如果不使用就会报错，我们在声明多个变量的时候想忽略某个值的时候我们就可以使用go的 匿名变量。go里面的匿名变量使用的是一个下划线  `_`
```go
package main

import (
	"fmt"
)

var addr = "上海"

func main() {
	name, _ := "小狐","小白"
	_,age1 := 100,200   
	fmt.Println(name, age1)
}
//输出并不会报错
```
匿名变量不占用命名空间，不会分配内存，所以匿名变量之间不存在重复声明


### 常量


#### 常量是什么    
常量是不会改变的值，定义程序运行期间不会改变的值，go语言中常量的关键字是 const
```go
const age1 = 30
const age2 = 20

//定义了这俩个变量在程序运行的时候就不能修改值了

//批量声明

const (
    a = 100
    b
    c
    d
)
//b,c,d我们都没有声明值，但是他的值也等于100 
```
#### iota常量计算器


iota只能在常量表达式的时候使用，


`iota`在const关键字出现时将被重置为0。const中每新增一行常量声明将使`iota`计数一次(iota可理解为const语句块中的行索引)。 使用iota能简化定义，在定义枚举时很有用
```go
const (
		a = iota //0
		b        //1
    _        //匿名变量
		c        //3
)
```
我们看到上面的说明是语句块中的行索引(重点) 如下面例子，我们在声明的时候插队
```go
const (
		a1 = iota //0
		a2 = 10  //10
		a3 = iota //2
		a4        //3
)
//上面一段是const语句块，下面这个const是一个新的 const语句块了
const a5 = iota //0
```
看下面一个例子，多个iota定义在一行  ：
```go
// 语句块中的行索引(重点)
const (
    a, b = iota + 1, iota + 2 //1,2
    c, d                      //2,3
    e, f                      //3,4
)
```


变量跟常量就学完了


































































