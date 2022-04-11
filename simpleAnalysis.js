var esprima = require("esprima");
var options = {tokens:true, tolerant:true, loc: true, range: true}

function staticAnalysis(filePath){
    var buf = fs.readFileSync(filePath, "utf8");
    var ast = esprima.parseModule(buf, options);

    //console.log(ast);
    var file = new FileBuilder();
    file.fileName = filePath;

    traverseWithParents(ast, function (node){
        if (node.type)
    })
}


function traverseWithParents(object, visitor)
{
    var key, child;

    visitor.call(null, object);

    for (key in object) {
        if (object.hasOwnProperty(key)) {
            child = object[key];
            if (typeof child === 'object' && child !== null && key != 'parent') 
            {
            	child.parent = object;
					traverseWithParents(child, visitor);
            }
        }
    }
}