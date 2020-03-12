cd /Users/zhangpeng/Desktop/workspace/Articles
git checkout develop
gitbook init
gitbook install
gitbook build
git add .
git commit -m 'update gitbook'
git push origin develop
git checkout gh-pages
rm -rf *
git checkout develop -- _book
mv _book/* ./
rm -rf _book
rm -rf publish.sh
git add .
git commit -m 'publish gh-pages'
git push origin gh-pages
git checkout develop