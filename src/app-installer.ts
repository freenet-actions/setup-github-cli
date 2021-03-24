import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'

import * as os from 'os'
import * as path from 'path'

const toolName = 'github-cli'

export async function install(version: string): Promise<void> {
  let toolPath: string
  toolPath = tc.find(toolName, version)

  if (!toolPath) {
    toolPath = await downloadGithubCli(version)
  }

  toolPath = path.join(toolPath, 'bin')
  core.addPath(toolPath)
}

function getPlattform(): string {
  const platformMap: {[platform: string]: string} = {
    linux: 'linux',
    darwin: 'macosx',
    win32: 'windows'
  }
  const plattform = platformMap[os.platform()]
  if (!plattform) {
    const errormsg = `Unsupported platform.platform:${os.platform()},arch:${os.arch()}`
    throw new Error(errormsg)
  }
  return plattform
}

function getArch(): string {
  let archName: string | null = null
  switch (os.arch()) {
    case 'x64':
      archName = `amd64`
      break
  }
  if (!archName) {
    const errormsg = `Unsupported arch:${os.arch()}`
    throw new Error(errormsg)
  }
  return archName
}

function getDownloadUrl(version: string): string {
  return `https://github.com/cli/cli/releases/download/v${version}/gh_${version}_${getPlattform()}_${getArch()}.${getExecutableExtension()}`
}

async function downloadGithubCli(version: string): Promise<string> {
  const downloadUrl = getDownloadUrl(version)

  try {
    const downloadPath = await tc.downloadTool(downloadUrl)

    let extractedPath: string

    if (path.extname(downloadUrl) === '.zip') {
      extractedPath = await tc.extractZip(downloadPath)
    } else {
      extractedPath = await tc.extractTar(downloadPath)
    }

    return await tc.cacheDir(extractedPath, toolName, version)
  } catch (err) {
    throw err
  }
}

function getExecutableExtension(): string {
  if (os.type().match(/^Win/)) {
    return 'zip'
  }
  return 'tar.gz'
}
