Typescript NestJS React Demo
======================

Is it the correct way to use react with nestjs?

1. create a client directory for an independent react frontend project, and use some bundlers to build a single js for nestjs
2. In server directory which is for nestjs, start nestjs rendering the index.html in public directory with the bundle file

Is there any easier way to develop react in nestjs, e.g. ignore the bundling step and also support react hot-loading?

---

在NestJS中使用react。

我是把server/client独立成两个项目，然后在client中用parcel把代码编译成一个index.js文件放在server指定的public目录下，再启动server输出public/index.html

感觉有点笨重，不知道有没有更好的做法。

```
pnpm 
```

Then open http://localhost:3000