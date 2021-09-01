# Go环境安装配置
从零开始搭建Go语言的开发环境
![go.jpg](https://cdn.nlark.com/yuque/0/2021/jpeg/611698/1616400495178-c8803ac2-3f2d-485f-8d84-5aab8dbf3207.jpeg#align=left&display=inline&height=300&margin=%5Bobject%20Object%5D&name=go.jpg&originHeight=300&originWidth=531&size=10546&status=done&style=none&width=531)
### 下载go
go毕竟是国外的所以推荐镜像站下载：[https://golang.google.cn/dl/](https://golang.google.cn/dl/)


版本选择:选择适合自己电脑 的版本
![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616400607528-a4946233-b777-4546-bad5-36fb3f6165f2.png#align=left&display=inline&height=754&margin=%5Bobject%20Object%5D&name=image.png&originHeight=754&originWidth=1774&size=122521&status=done&style=none&width=1774)






### 安装：
#### Windows安装




![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616400745233-2a0b098c-85c5-45d0-bbdf-3c6ac1a826ba.png#align=left&display=inline&height=177&margin=%5Bobject%20Object%5D&name=image.png&originHeight=177&originWidth=310&size=4354&status=done&style=none&width=310)


选择自己对应的版本双击安装


![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616400823123-8809d483-f4b3-445d-bc05-dfe747380af0.png#align=left&display=inline&height=389&margin=%5Bobject%20Object%5D&name=image.png&originHeight=389&originWidth=499&size=26602&status=done&style=none&width=499)
![1.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616401334152-2e7e9620-db02-4b67-a4be-e06e2b5b4ccf.png#align=left&display=inline&height=389&margin=%5Bobject%20Object%5D&name=1.png&originHeight=389&originWidth=499&size=15778&status=done&style=none&width=499)


![2.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616401340198-d4218aac-9157-4183-8323-74b6a0f26b29.png#align=left&display=inline&height=389&margin=%5Bobject%20Object%5D&name=2.png&originHeight=389&originWidth=499&size=15027&status=done&style=none&width=499)
![3.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616401346122-5fe45b43-47da-4fc1-95b2-81f61f7fe600.png#align=left&display=inline&height=389&margin=%5Bobject%20Object%5D&name=3.png&originHeight=389&originWidth=499&size=17742&status=done&style=none&width=499)


### 配置GOPATH


GOPATH环境变量，来表明你写的go项目的存放路径 (开发目录)
`GOPATH`路径最好只设置一个，所有的项目代码都放到`GOPATH`的`src`目录下。
go在1.11版本之后，可以选择开启go mod模式之后就可以不用配置GOPATH，**
**我们这里安装的是1.16版本，就可以不用配置GOPATH，但是还是了解一下GOPATH配置，因为1.16的go mod也不是默认开启的**
**
![环境配置.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616402122020-54a00705-daaf-42f9-be5e-e4b52d0e6a8d.png#align=left&display=inline&height=737&margin=%5Bobject%20Object%5D&name=%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE.png&originHeight=737&originWidth=503&size=54851&status=done&style=none&width=503)


![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616402153791-423a8f66-3147-4549-9e6e-5230a91873fe.png#align=left&display=inline&height=641&margin=%5Bobject%20Object%5D&name=image.png&originHeight=641&originWidth=1139&size=65004&status=done&style=none&width=1139)
**
**![image (4).png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616404278484-528bbc48-0a23-4ccc-8159-b4eb8727753c.png#align=left&display=inline&height=605&margin=%5Bobject%20Object%5D&name=image%20%284%29.png&originHeight=605&originWidth=493&size=29295&status=done&style=none&width=493)**
**![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616402256148-5607574b-156b-4f97-a63b-9ca323836da4.png#align=left&display=inline&height=666&margin=%5Bobject%20Object%5D&name=image.png&originHeight=666&originWidth=632&size=41607&status=done&style=none&width=632)**




![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616402349455-6d81bbf1-7c8b-4033-83e3-f633d78da505.png#align=left&display=inline&height=666&margin=%5Bobject%20Object%5D&name=image.png&originHeight=666&originWidth=632&size=50523&status=done&style=none&width=632)
要自己手动新建这三个目录
![image.png](https://cdn.nlark.com/yuque/0/2021/png/611698/1616402525713-a975390a-7738-42b7-a753-e10bd1b915a4.png#align=left&display=inline&height=510&margin=%5Bobject%20Object%5D&name=image.png&originHeight=510&originWidth=1139&size=53827&status=done&style=none&width=1139)




Go的项目结构


在进行Go语言开发的时候，我们的代码总是会保存在`$GOPATH/src`目录下。项目经过go build,go install或go get等指令后，会将下载的第三方包源代码文件放在`$GOPATH/src`目录下， 产生的二进制可执行文件放在 `$GOPATH/bin`目录下，生成的中间缓存文件会被保存在 `$GOPATH/pkg` 下。
如果我们使用版本管理工具（svn 和 git）来管理我们的项目代码时，我们只需要添加`$GOPATH/src`目录的源代码即可。`bin` 和 `pkg` 目录的内容无需版本控制。




### 
### 第一个go程序


Go采用的是UTF-8编码的文本文件存放源代码，跟其他语言一样文本编辑器都能开发Go语言，我使用的是GOland,但是这个软件是付费的，开源的编辑器 vscode想对与免费的写go开发也比较好。（vscode默认英文的可以安装汉化插件）

在我们刚刚创建的GOPATH的src目录下创建一个项目 hello  新建一个 main.go
```go
package main  // 声明 main 包，表示该程序是可执行程序

import "fmt"  // 导入内置 fmt 包

func main(){  // main函数，是程序执行的入口
	fmt.Println("Hello World!")  // 右键一个执行的按钮会在终端输出 Hello World!
}
```
第一go程序就体验好了


不依赖编译器自己编译go项目


#### go build
在刚才的hello目录创建 执行 go build 我windows环境就会生成一个 hello.exe文件，就可以在终端执行 hello.exe 也会在终端输出 
```go

Hello World!
```


#### go install 


go install表示安装的意思，它先编译源代码得到可执行文件，然后将可执行文件移动到GOPATH的bin目录下。因为我们的环境变量中配置了GOPATH下的bin目录，所以我们就可以在任意地方直接执行可执行文件了。
















































































































