rm -r docs
ng b --output-path docs --base-href /tutorial_site/
cd docs
mv browser/* .
rm -r browser
sed -i "s|location.replace('.*')|location.replace('/tutorial_site/')|" 404.html