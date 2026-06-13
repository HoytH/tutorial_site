rm -r docs
ng b --output-path docs --base-href /
cd docs
mv browser/* .
rm -r browser