Description: Project 1 is Tower of Hanoi, a mathmatical puzzle consisting of a number of disks of different sizes, which can slide onto any tower. The objective is to move the entire tower to another rod obeying the game rules:

  1. Only one disk can be moved at a time.
  2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
  3. No disk may be placed on top of a smaller disk.

  They can move each disk at one time, not playing a disk onto a smaller disk. They can reset the game using the button.
  Bronze: HTML page with disks and towers structure
  Silver: Css to add game features, "reset, instructions, game winner"
  Gold: disk movements, game over, time based scoring, track scores across games

  This project was designed using HTML, CSS and Javascript.
  I had a few problems with my project. Some like the game over, game rules button, and winner alert left unresolved. I ended up removing the game rules button and some other extra buttons I initially tried to make a part of the game.

Initially I had a problem keeping my towers stationary and horizontal. They would shift and rearrange on top of each other. As I moved the physical structure of the towers and disks into Javascript, then there was less shifting movement.   While working on the active section establishing a click and connecting to the last clicked disk, the disks were disappearing.

I removed the second if else statement in my js file because I didn't make the bonus minimum move table to record the amount of clicks. That piece of code would have not allowed consecutive clicks on the same tower to register as a move within the count.

offsetWidth is a setting to determine the spacing around the div including padding, border but not margin. This setting isn't affected by the scrollbar which is important because it ends up affecting the rules of a bigger disk setting on top of a smaller disk.

The or statement including this setting gave me some difficulty, so I had to rearrange the the order of the logic. I never figured out why it didn't like the original setting, but the game wouldn't work without that specific line up. 
