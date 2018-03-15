/*
git init

git add learn.js  添加到暂存区

git commit -m 'learnning git'  把暂存区的所有内容提交到当前分支，默认 master

git status

git diff

git diff HEAD -- learn.js

git log

git reset --hard HEAD^  HEAD 指向的版本就是当前版本

git reset --hard commit_id

git reflog  查看命令历史

git checkout -- learn.js

git rm learn.js 从版本库中删除该文件

git remote add origin git@server-name:path/repo-name.git  关联一个远程库

eg: git remote add origin git@github.com:funlee/test-repo.git 

git push -u origin master  第一次推送 master 分支的所有内容

此后，每次本地提交后，只要有必要，就可以使用命令git push origin master推送最新修改；

*/

/*

pwd  查看当前目录

ls   查看文件列表

ls -ah 能够查看隐藏文件

cat learn.js  查看该文件内容

rm learn.js   删除该文件

*/