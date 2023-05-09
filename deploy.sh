#!/bin/sh

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# If you are deploying to a custom domain
# echo 'yourdomain.com' > CNAME

# Initialize a new Git repository
git init

# Configure Git user
git config user.name "elieldev"
git config user.email "elielasf@hotmail.com"

# Add and commit all changes
git add -A
git commit -m 'deploy'

# Push the repository to the gh-pages branch
git push -f git@github.com:eliedev/meu-site.git master:gh-pages
