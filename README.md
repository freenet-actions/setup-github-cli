# setup GitHub CLI
[![LICENSE](https://img.shields.io/github/license/freenet-actions/setup-github-cli)](https://github.com/freenet-actions/setup-github-cli/blob/main/LICENSE)

GitHub CLI is the command line tool of GitHub ([see the manual](https://cli.github.com/manual/)).

This action sets up GitHub CLI tool. It downloads GitHub CLI binaries from https://github.com/cli/cli/releases and adds path to PATH

   
# Usage
## Set up default GitHub CLI version (2.32.0)
```yaml
- uses: freenet-actions/setup-github-cli@v2
```
## Set up specific GitHub CLI version
```yaml
- uses: freenet-actions/setup-github-cli@v2
  with:
    version: 2.32.0
```
