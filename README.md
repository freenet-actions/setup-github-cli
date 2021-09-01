# setup GitHub CLI
[![LICENSE](https://img.shields.io/github/license/md-actions/setup-github-cli)](https://github.com/md-actions/setup-github-cli/blob/main/LICENSE)

GitHub CLI is the command line tool of GitHub ([see the manual](https://cli.github.com/manual/)).

This action sets up GitHub CLI tool. It downloads GitHub CLI binaries from https://github.com/cli/cli/releases and adds path to PATH

   
# Usage
## Set up default GitHub CLI version (2.0.0)
```yaml
- uses: md-actions/setup-github-cli@v1
```
## Set up specific GitHub CLI version
```yaml
- uses: md-actions/setup-github-cli@v1
  with:
    version: 1.8.1
```
