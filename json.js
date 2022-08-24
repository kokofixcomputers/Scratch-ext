class json {
 
  getInfo() {
    return {
      id: '123456734567374567',
      name: 'JSON',
      blocks: [    
{
          opcode: 'extract',
          blockType: Scratch.BlockType.REPORTER,
          text: 'extract [key] from [json]',
          arguments: {
            key: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'data'
            },
json: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"data": "value"}'
            }}
        },
      
      {
          opcode: 'list',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [index] of [list]',
          arguments: {
            list: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["never", "gonna", "give", "you", "up"]'
            },
index: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0'
            }}
        },
      
      {
          opcode: 'listlength',
          blockType: Scratch.BlockType.REPORTER,
          text: 'length of list:[list]',
          arguments: {
            list: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '["never", "gonna", "give", "you", "up"]'
            }}
        }]
};}

extract(args) {
    var key = args.key;
    var json = args.json;
    var string = JSON.parse(json)[key];
    var string2 = JSON.stringify(string);
    if (string2[0] == '"' && string2[string2.length -1] == '"') {
    return JSON.parse(string2);
    } else {
      return string2;
    }
  };

list(args) {
    var index = parseInt(args.index);
    var list = JSON.parse(args.list);
    return list[index];
  };

listlength(args) {
    var list = JSON.parse(args.list);
    return list.length;
  };
  
}

Scratch.extensions.register(new json());