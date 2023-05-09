#!/bin/sh

# Build the project
npm run build

# Navigate into the build output directory
cd build

# If you are deploying to a custom domain
# echo 'yourdomain.com' > CNAME

# Initialize a new Git repository
git init

# Configure Git user
git config user.name "elielsf"
git config user.email "elielasf@hotmail.com"

# Add and commit all changes
git add -A
git commit -m 'deploy'

# Push the repository to the gh-pages branch
git push -f git@github.com:elielsf/meu-site.git master:gh-pages
