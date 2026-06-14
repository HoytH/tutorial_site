rm -r docs
ng b --output-path docs --base-href /
cd docs
mv browser/* .
rm -r browser
sed -i "s|location.replace('.*')|location.replace('/')|" 404.html