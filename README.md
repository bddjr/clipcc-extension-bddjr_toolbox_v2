# bddjr toolbox v2

![./assets/icon.png](./assets/icon.png)  

> 图片原作者 [Edit-Mr](https://github.com/Edit-Mr)  

重写 nhjrToolBox  
字符串与类型 JSON 数组 正则表达式 便利积木 临时变量 Set  

***
## 文档
（待制作）

***
# 截图

![./README-pic/屏幕截图%202023-06-27%20132309.png](./README-pic/屏幕截图%202023-06-27%20132309.png)

[点此查看更多截图](./README-pic/README.md)

***
## 拉取并打包
（待验证）  

演示环境：Windows 的 powershell  

请在对应目录打开 powershell ，再执行如下操作。  

1、使用 git 从 github 仓库拉取内容，然后删除多余的 .git 文件夹。  
> 如果你需要提交 Pull Request ，请 fork 为自己的仓库，再从自己的仓库拉取。
```
git clone https://github.com/bddjr/clipcc-extension-bddjr_toolbox_v2
cd clipcc-extension-bddjr_toolbox_v2
```

2、（非必要）删除 .git 文件夹
> 如果你需要提交 Pull Request ，请不要执行这个
```
rm .git
```

3、使用 nodejs 的 npm 全局安装 yarn  
```
npm -g install yarn
```

4、使用 yarn 安装前置插件
```
yarn install
yarn install clipcc-extension
```

5、使用 yarn 打包
```
yarn build
```
