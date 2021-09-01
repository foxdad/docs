# GO基础-基本数据类型
在这里我们要认识Go语言的数据类型


在go语言中的数据类型很多如：整形，浮点型，布尔型、字符串外，还有数组、切片、结构体（struct）、函数(一等公民)、map、通道（channel）等。

### 基本数据类型


#### 整形
整型分为以下两个大类： 按长度分为：int8、int16、int32、int64 对应的无符号整型：uint8、uint16、uint32、uint64
其中，



| 类型 | 描述 |
| :---: | :---: |
| uint8 | 无符号 8位整型 (0 到 255) |
| uint16 | 无符号 16位整型 (0 到 65535) |
| uint32 | 无符号 32位整型 (0 到 4294967295) |
| uint64 | 无符号 64位整型 (0 到 18446744073709551615) |
| int8 | 有符号 8位整型 (-128 到 127) |
| int16 | 有符号 16位整型 (-32768 到 32767) |
| int32 | 有符号 32位整型 (-2147483648 到 2147483647) |
| int64 | 有符号 64位整型 (-9223372036854775808 到 9223372036854775807) |



#### 特殊整型



| 类型 | 描述 |
| :---: | :---: |
| uint | 32位操作系统上就是`uint32`，64位操作系统上就是`uint64` |
| int | 32位操作系统上就是`int32`，64位操作系统上就是`int64` |
| uintptr | 无符号整型，用于存放一个指针 |
| rune | 等同于 int32 |



注意事项：在使用在使用`int`和 `uint`类型时，不能假定它是32位或64位的整型，而是考虑`int`和`uint`可能在不同平台上的差异。


#### 数字字面量


Go1.13版本之后引入了数字字面量语法，这样便于开发者以二进制、八进制或十六进制浮点数的格式定义数字
```go
//这个例子学过python的小伙伴应该不会很陌生(毕竟不同语言用法不一样，前缀还是一样的)
package main
 
import "fmt"
 
func main(){
    // 默认10进制
	var test1 int = 20

	fmt.Printf("%d \n", test1)  // 20
	fmt.Printf("%b \n", test1)  // 10100  占位符%b表示二进制

	// 八进制  以0开头
	var test2 int = 020
	fmt.Printf("%o \n", test2)  // 20  %o

	// 十六进制  以0x开头
	var test3 int = 0xaaa
	fmt.Printf("%x \n", test3)  // aaa  %x
	fmt.Printf("%X \n", test3)  // AAA  %X
}
```


#### 浮点型


Go语言支持两种浮点型数：`float32 `和 `float64`


`float32` 的浮点数的最大范围约为 `3.4``e``38`，(计算器很大值的时候后面的数字就变成 e了)可以使用常量定义：`math.MaxFloat32`。 `float64` 的浮点数的最大范围约为 `1.8``e``308`，可以使用一个常量定义：`math.MaxFloat64`。


```
package main
import "fmt"

func main() {
 	var test1 float64 = 665.5888
	var test2 float32 = 777.7777

	fmt.Println(test1)
	fmt.Println(test2)
}
//输出
/// 665.5888
/// 777.7777
```
#### 复数（有）
complex64和complex128 默认值都是 (0+0i)
```
var c1 complex64
c1 = 1 + 2i
var c2 complex128
c2 = 2 + 3i
fmt.Println(c1)
fmt.Println(c2)
// (1+2i)
// (2+3i)
```
复数有实部和虚部，complex64的实部和虚部为32位(实部和虚部都是 float32)，complex128的实部和虚部为64位(（实部和虚部都是 float64）)。
#### 布尔值
Go语言中以`bool`类型进行声明布尔型数据，布尔型数据只有`true（真）`和`false（假）`两个值。
**注意：**

1. 布尔类型变量的默认值为`false`。
1. Go 语言中不允许将整型强制转换为布尔型.
1. 布尔型无法参与数值运算，也无法与其他类型进行转换。
### 字符串
Go语言中的字符串以原生数据类型出现，使用字符串就像使用其他原生数据类型（int、bool、float32、float64 等）一样。 Go 语言里的字符串的内部实现使用`UTF-8`编码。 字符串的值为`双引号(")`中的内容，可以在Go语言的源码中直接添加非ASCII码字符，例如：
```go
name := "小狐"
addr := "上海"
```
#### 字符串转义符
Go 语言的字符串常见转义符包含回车、换行、单双引号、制表符等，如下表所示。

| 转义符 | 含义 |
| :---: | :---: |
| `\r` | 回车符（返回行首） |
| `\n` | 换行符（直接跳到下一行的同列位置） |
| `\t` | 制表符 |
| `\'` | 单引号 |
| `\"` | 双引号 |
| `\\` | 反斜杠 |



![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616489438967-2c413681-1767-41b2-aea3-09f4024b665a.png#align=left&display=inline&height=226&margin=%5Bobject%20Object%5D&name=image.png&originHeight=226&originWidth=647&size=10600&status=done&style=none&width=647)


举个例子，我们要打印一个Windows平台下的一个文件路径：
```go
package main
import (
    "fmt"
)
func main() {
	// 转化反斜杠了
  fmt.Println("str =  \\ str2  ")
}
```
#### 多行字符串
Go语言中要定义一个多行字符串时，就必须使用`反引号`字符：
```go
line := `第一行
第二行
第三行
`
fmt.Println(line)
```
反引号间换行将被作为字符串中的换行，但是所有的转义字符均无效，文本将会原样输出。
#### 字符串的常用操作
| 方法 | 介绍 |
| :---: | :---: |
| len(str) | 求长度 |
| +或fmt.Sprintf | 拼接字符串 |
| strings.Split | 分割 |
| strings.contains | 判断是否包含 |
| strings.HasPrefix,strings.HasSuffix | 前缀/后缀判断 |
| strings.Index(),strings.LastIndex() | 子串出现的位置 |
|  strings.EqualFold(s, t string) bool |  判断两个utf-8编码字符串，大小写不敏感 |
| strings.Contains(s,substr string) bool | 判断字符串s是否包含子串substr |
| strings.ContainsAny(s, chars string) bool | 判断字符串s是否包含字符串chars中的任一字符 |
| strings.Count(s, sep string) int | 返回字符串s中有几个不重复的sep子串 |
| Index(s, sep string) int | 子串sep在字符串s中第一次出现的位置，不存在则返回-1 |
| IndexByte(s string, c byte) int | 字符c在s中第一次出现的位置，不存在则返回-1 |
| IndexAny(s, chars string) int | 字符串chars中的任一utf-8码值在s中第一次出现的位置，如果不存在或者chars为空字符串则返回-1 |
| IndexFunc(s string, f func(rune) bool) int | s中第一个满足函数f的位置i（该处的utf-8码值r满足f(r)==true），不存在则返回-1 |
| Title(s string) string | 返回s中每个单词的首字母都改为标题格式的字符串拷贝 |
| ToLower(s string) string | 返回将所有字母都转为对应的小写版本的拷贝 |
| ToUpper(s string) string | 返回将所有字母都转为对应的大写版本的拷贝 |
| Repeat(s string, count int) string | 返回count个s串联的字符串 |
| Replace(s, old, new string, n int) string | 返回将s中前n个不重叠old子串都替换为new的新字符串，如果n<0会替换所有old子串 |
| Map(mapping func(rune) rune, s string) string | 将s的每一个unicode码值r都替换为mapping(r)，返回这些新码值组成的字符串拷贝。如果mapping返回一个负值，将会丢弃该码值而不会被替换 |
| Trim(s string, cutset string) string | 返回将s前后端所有cutset包含的utf-8码值都去掉的字符串 |
| TrimSpace(s string) string | 返回将s前后端所有空白（unicode.IsSpace指定）都去掉的字符串 |
| TrimFunc(s string, f func(rune) bool) string |  返回将s前后端所有满足f的unicode码值都去掉的字符串 |
| strings.Join(a[]string, sep string) | join操作 |

### 
组成每个字符串的元素叫做“字符”，可以通过遍历或者单个获取字符串元素获得字符。 字符用单引号（’）包裹起来，如：
```go
 a := '中'
 b := 'x'
```
Go 语言的字符有以下两种：

1. `uint8`类型，或者叫 byte 型，代表了`ASCII码`的一个字符。
1. `rune`类型，代表一个 `UTF-8字符`。

当需要处理中文、日文或者其他复合字符时，则需要用到`rune`类型。`rune`类型实际是一个`int32`。
Go 使用了特殊的 rune 类型来处理 Unicode，让基于 Unicode 的文本处理更为方便，也可以使用 byte 型进行默认字符串处理，性能和扩展性都有照顾。
```go
// 遍历字符串
func traversalString() {
    //不能单独使用 如： var a rune = '1' //会报错 rune==int32  byte也不能这样声明
    // fmt.Printf 的占位符这些在后面的fmt包讲解
   
	s := "xiaohu小狐"
	for i := 0; i < len(s); i++ { //byte
		fmt.Printf("%v(%c) ", s[i], s[i])
	}
	fmt.Println()
	for _, r := range s { //rune
        
		fmt.Printf("%v(%c) ", r, r)
	}
	fmt.Println()
}

//这一段细心看
```
输出：
```
120(x) 105(i) 97(a) 111(o) 104(h) 117(u) 229(å) 176(°) 143( ) 231(ç) 139( ) 144( ) 
120(x) 105(i) 97(a) 111(o) 104(h) 117(u) 23567(小) 29392(狐) 
```
因为UTF8编码下一个中文汉字由3~4个字节组成，所以我们不能简单的按照字节去遍历一个包含中文的字符串，否则就会出现上面输出中第一行的结果。
字符串底层是一个byte数组，所以可以和`[]byte`类型相互转换。字符串是不能修改的 字符串是由byte字节组成，所以字符串的长度是byte字节的长度。 rune类型用来表示utf8字符，一个rune字符由一个或多个byte组成。
### 修改字符串
要修改字符串，需要先将其转换成`[]rune`或`[]byte`，完成后再转换为`string`。无论哪种转换，都会重新分配内存，并复制字节数组。
```
func changeString() {
	s1 := "big"
	// 强制类型转换
	byteS1 := []byte(s1)
	byteS1[0] = 'p'
	fmt.Println(string(byteS1))
	s2 := "白萝卜"
	runeS2 := []rune(s2)
	runeS2[0] = '红'
	fmt.Println(string(runeS2))
}
```
### 类型转换
Go语言中只有强制类型转换，没有隐式类型转换。该语法只能在两个类型之间支持相互转换的时候使用。
强制类型转换的基本语法如下：
```
T(表达式)
```
其中，T表示要转换的类型。表达式包括变量、复杂算子和函数返回值等.
比如计算直角三角形的斜边长时使用math包的Sqrt()函数，该函数接收的是float64类型的参数，而变量a和b都是int类型的，这个时候就需要将a和b强制类型转换为float64类型。
```
func sqrtDemo() {
	var a, b = 3, 4
	var c int
	// math.Sqrt()接收的参数是float64类型，需要强制转换
	c = int(math.Sqrt(float64(a*a + b*b)))
	fmt.Println(c)
}
```




























































































































































