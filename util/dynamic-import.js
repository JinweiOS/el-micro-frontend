// 模块加载器
import path from 'path'
import fs from 'fs/promises'
const golbalModule = []
const processDir = process.cwd();

async function main() {
    console.log()
    const currentDir = await fs.readdir(path.join(processDir, './util'))
    // c://util/m1.mjs
    console.log(currentDir)
    const result = currentDir.filter((pathName) => pathName.split('.')[1] === 'mjs');
    console.log(result)
    result.forEach(async (modulePath) => {
        const absoluteFile = path.join(processDir, `util/${modulePath}`)
        const innerModule = await import(`file://${absoluteFile}`)
        // console.log(innerModule)
        golbalModule.push(innerModule)
        console.log(golbalModule)
    })
}
main()