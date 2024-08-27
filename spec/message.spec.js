const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
it("throws error if a name is NOT passed into the constructor as the first parameter"), function(){
    const output = new Message('test name');
    expect(output).toBe("string");

}
it('constructor sets name', () => {
    const message = new Message('Test message', []);
    expect(message.name).toBe('Test message');
});

// it('contains a commands array passed into the constructor as the 2nd argument', () => {
//     const command1 = new Command('MODE_CHANGE', 'LOW_POWER');
//     const command2 = new Command('STATUS_CHECK');
//     const commands = [command1, command2];
//     const message = new Message('Test message with two commands', commands);

//     expect(message.commands).toEqual(commands);
// });
})