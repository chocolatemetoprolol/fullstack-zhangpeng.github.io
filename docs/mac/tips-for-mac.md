# Mac 日常使用

## Git

### Git 的配置级别

1. 仓库级别 local 【优先级最高】
2. 用户级别 global【优先级次之】
3. 系统级别 system【优先级最低】

首先会查找 `/etc/gitconfig` 文件（系统级），该文件含有对系统上所有用户及他们所拥有的仓库都生效的配置值。

接下来Git会查找每个用户的 `~/.gitconfig` 文件（用户级），该文件含有当前用户所拥有的仓库都生效的配置值。

最后 `Git` 会查找由用户定义的各个仓库中的配置文件 `.git/config`（仓库级），该文件中的值只对当前所属仓库有效。

### 显示与编辑 `Git` 配置

- 显示 `Git` 配置

    ```shell
    //显示当前仓库的配置
    git config -l --local
    //显示当前用户的配置
    git config -l --global
    //显示系统的配置
    git config -l --system
    ```

- 编辑 Git 配置

    ```shell
    //编辑当前仓库的配置
    git config -e --local
    //编辑当前用户的配置
    git config -e --global
    //编辑系统的配置，不建议进行编辑！！！
    git config -e --system
    ```

### 设置用户信息

根据您的需求，选择修改的配置文件，如 `local`、`global`

```shell
git config --global user.name "您的名字"
git config --global user.email "您的邮箱"
```

1. 创建 ~/.gitignore_global 文件
2. 创建 ~/.gitconfig 文件

---

> Title: Mac 日常使用
>
> Date: 2020.10.05
>
> Author: zhangpeng
>
> Github: <https://github.com/fullstack-zhangpeng>
