class Message {
   constructor(name, commands){
      this.name = name;
      if (typeof name !== 'string') {
         throw Error('Name must be a string');
      }
      this.commands = commands;
      if (!Array.isArray(commands)) {
         throw Error('Commands must be an array of Command objects');
     }
   
 
}
}
module.exports = Message;