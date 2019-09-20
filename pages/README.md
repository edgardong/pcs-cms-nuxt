[TOC]

# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).


话不多说，直接上操作。本次操作基于mac,再也不需要去网页上创建仓库了

### github

1. 登录 [github](https://github.com/settings/tokens/new) ，创建私人密钥，则可以访问github的openapi接口

##### 注意：点击完成后要把密钥保存下来，页面刷新后就不会在显示，需要重新创建 #####


![](https://user-gold-cdn.xitu.io/2019/7/8/16bd11c3efc38f04?w=1536&h=1270&f=png&s=309913)

2. 打开`etc/bashrc`文件，在最后添加以下代码

````bash
github-create() 
{  if [ $1 ]
      then
	    repo_name=$1
	else
	    repo_name=`basename $(pwd)`
	    echo "set Repo name to ${repo_name}"
	fi 
	curl -u 'username:api_token' https://api.github.com/user/repos -d '{"name":"'$repo_name'"}'
}
````

把上面代码中的**username**(github用户名)及**api_token**(刚才申请的密钥)替换为自己的


3. 重新打开`Terminal`输入 `github-create 仓库名`,然后就可以在 [github](https://github.com) 上看看你的仓库是否建立好了呢？

### gitee

如果你会了上面的操作，那么接下来就很easy了，基本操作一致。

1.  登录[gitee](https://gitee.com/profile/personal_access_tokens/new),创建私人密钥。作为国内的leader，码云爸爸已经给我们默认了全部可以访问的权限了，如下，同样保存下来自己的密钥

![](https://user-gold-cdn.xitu.io/2019/7/8/16bd12657f2a68d2?w=1626&h=880&f=png&s=182703)

2. 在刚才的`bashrc`文件后面继续添加

````bash
gitee-create() 
{	if [ $1 ]
	then
	    repo_name=$1
	else
	    repo_name=`basename $(pwd)`
	    echo "set Repo name to ${repo_name}"
	fi 
	curl -X POST --header 'Content-Type: application/json;charset=UTF-8' 'https://gitee.com/api/v5/user/repos' -d '{"access_token":"api_token","name":"'$repo_name'","has_issues":"true","has_wiki":"true"}'
}
````
同样替换代码中的`api_token`为刚才创建的密钥

3. 重新打开`Terminal`输入 `gitee-create 仓库名`,然后就可以在 [gitee](https://gitee.com) 上看看你的仓库是否建立好了呢？


### 结语
1. 有了这个工具，以后在创建git仓库就不需要在登录到网页上了吧，就是这么神奇。
2. 推荐一个组件库，自己写的 [wecui](https://github.com/edgardong/wecui.git) ,  [文档](https://www.edgarhao.cn/wecui/)  不要吝啬你的星星哦～
