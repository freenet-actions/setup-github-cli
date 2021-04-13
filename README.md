# setup-ant
[![LICENSE](https://img.shields.io/github/license/md-actions/setup-github-cli)](https://github.com/md-actions/setup-github-cli/blob/main/LICENSE)

This action sets up github cli tool. It downloads github cli binaries from https://github.com/cli/cli/releases/download and adds path to PATH

   
# Usage
## Set up default github cli version (1.7.0)
```yaml
- uses: md-actions/setup-github-cli@v1.0.0
```
## Set up specific github cli version
```yaml
- uses: md-actions/setup-github-cli@v1.0.0
  with:
    version: 1.8.1
```
