const wordHandler = (option)=>{
    return option.fname + " file handle with word Handler..";
}

const pdfHandler = (option)=>{
    return option.fname + " file handle with pdf Handler..";
}

const pngHandler = (option)=>{
    return option.fname + " file handle with png Handler..";
}

const jpgHandler = (option)=>{
    return option.fname + " file handle with jpg Handler..";
}


var fileName = "test.word";
var ans;

if(fileName.endsWith(".word")){
    ans = wordHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".pdf")){
    ans = pdfHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith(".png")){
    ans = pngHandler({fname:fileName,size:"1000kb"})
}
else if(fileName.endsWith("jpg")){
    ans = jpgHandler({fname:fileName,size:"1000kb"})
}

console.log(ans);
