
class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = generatorWatts;
   }

   receiveMessage(message) {
      let actions = {
         'MOVE': function (command) {
            return this.move(command);
         },
         'STATUS_CHECK': function () {
            return this.statusCheck();
         },
         'MODE_CHANGE': function (command) {
            return this.changeMode(command);
         }
      };


      let results = [];
      for (let i = 0; i < message.commands.length; i++) {
         let command = message.commands[i];
         let action = actions[command.commandType];
         let result = action && action.call(this, command) || { completed: false };
         results.push(result);
      }

      return {
         message: message.name,
         results: results
      };
   }

   move(command) {
      if (this.mode === 'LOW_POWER') {
         return { completed: false };
      }
      if (this.position = command.value) {
         return { completed: true };
      }
   }

   statusCheck() {
      return {
         completed: true,
         roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position

         }
      };
   }

   changeMode(command) {
      this.mode = command.value;
      return { completed: true }
   }
}



module.exports = Rover;
