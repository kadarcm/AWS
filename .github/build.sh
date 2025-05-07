echo "whats up"
echo pwd
aws --version
cd react_site
npm install
npm run build
echo "build complete"
echo "copying build home_site"
cd ..
mkdir -p home_site/react_site
cp -r react_site/build/* home_site/react_site
echo "deploying to s3"
aws s3 sync ./home_site/react_site s3://kadarcm.com --delete