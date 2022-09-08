const templatePath = "./to_change.txt"
const finalCode = "./result.txt"
const toCreate = [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
const fs = require("fs")


const script = () => {
    const stream = fs.createWriteStream(finalCode, { flags: "a+" });
    toCreate.forEach((number) => {
        const textToDuplicate = fs.readFileSync(templatePath, "utf-8")
        const replacers = {
            '{{INDEX}}': number
        }
        const regEx = new RegExp(Object.keys(replacers).join('|'), 'gi');
        const result = textToDuplicate.replace(regEx, (matched) => replacers[matched])
        stream.write(result);
    })
}


script()

