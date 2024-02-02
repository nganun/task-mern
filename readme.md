# Readme

## Install MongoDB in local

```powershell
scoop install main/mongodb
scoop install extras/mongosh    # Shell
scoop install extras/mongodb-compass    # GUI
mongod --help   # help
mongod --install    # Iinstall Windows service
net start mongodb   # Start mongodb service
net stop mongodb    # Stop mongodb service
mongosh             # Open the Shell that can show the DB connection
```

## Async Await

https://juejin.cn/post/6844903984889593863


![link](https://cloud.tencent.com/developer/article/1665737)

总结来说，同步和异步的区别：请求发出后，是否需要等待结果，才能继续执行其他操作。

同步：在JavaScript中，同步操作意味着代码的执行顺序是从上到下，每一行代码都必须等上一行代码执行完毕后，才能进行下一行代码的执行。 
异步：异步操作则允许我们在等待某些操作完成的同时进行其他操作。 

异步操作不会阻塞后面代码的执行，当异步操作完成时，通常会通过回调函数的方式通知我们

现在再来看看async/await 的特点：

当 await 后面跟的是 Promise 对象时，才会异步执行，其它类型的数据会同步执行
返回的仍然是个 Promise 对象，上面代码中的 return 'done'; 会直接被下面 then 函数接收到