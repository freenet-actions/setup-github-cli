# Setup GitHub CLI

[![LICENSE](https://img.shields.io/github/license/freenet-actions/setup-github-cli)](https://github.com/freenet-actions/setup-github-cli/blob/main/LICENSE)

GitHub CLI is the command line tool of GitHub ([see the manual](https://cli.github.com/manual/)).

This action sets up GitHub CLI tool. It downloads GitHub CLI binaries from https://github.com/cli/cli/releases and adds path to PATH

# Usage

## Set up GitHub CLI with default version (2.63.2)
```yaml
- uses: freenet-actions/setup-github-cli@v3
```
## Set up GitHub CLI with specific version
```yaml
- uses: freenet-actions/setup-github-cli@v3
  with:
    version: 2.63.2
```