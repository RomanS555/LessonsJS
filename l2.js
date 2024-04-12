let a = "Я изучаю JavaScipt"
console.log("\""+a+"\" - исходный текст")
console.log("\""+a.replace("ю","л")+"\" - текст с изменённым символом ю")
console.log("\""+a.replace("JavaScript","Frontend")+"\" - текст, где заменено слово JavaScript на Frontend")//ничего не поменяется, т.к в исходном тексте написано JavaScipt, а не JavaScript
console.log("\""+a.replace("JavaScipt","Frontend")+"\" - текст, где заменено слово JavaScipt на Frontend")
